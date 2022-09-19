import { useCallback, useEffect, useState } from "react";
import { IAuctionRes, typeVehicle, type } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Auction/listAll";
import SaleCard from "../../Card/SaleCard";
import EmptyMessage from "../../EmptyMessage";
import LoaderLocalComponent from "../../Loader/LoaderLocalComponent";
import { TitleContainer, CardContainer } from "./styles";

const MotorcyclesList: React.FC = () => {
  const [announce, setAnnounce] = useState<IAuctionRes[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getListFilter } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const list = await getListFilter({
      typeVehicle: typeVehicle.motocycle,
      type: type.sale,
    });
    setAnnounce(list);
    setLoadding(false);
  }, [getListFilter]);

  useEffect(() => {
    setLoadding(true);

    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <>
      <TitleContainer>Motos</TitleContainer>
      <CardContainer>
        {loadding ? (
          <LoaderLocalComponent />
        ) : announce.length ? (
          announce.map((item) => <SaleCard announce={item} key={item.id} />)
        ) : (
          <EmptyMessage message="Nenhuma moto anúnciada" />
        )}
      </CardContainer>
    </>
  );
};

export default MotorcyclesList;
