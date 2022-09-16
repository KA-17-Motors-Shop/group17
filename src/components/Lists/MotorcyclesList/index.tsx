import { useCallback, useEffect, useState } from "react";
import { IAuctionRes, typeVehicle, type } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Auction/listAll";
import SaleCard from "../../Card/SaleCard";
import LoadingOrEmpty from "../../Loader/LoadingOrEmpty";
import { TitleContainer, CardContainer } from "./styles";

const MotorcyclesList: React.FC = () => {
  const [announce, setAnnounce] = useState<IAuctionRes[]>([]);
  const { getListFilter } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const list = await getListFilter({
      typeVehicle: typeVehicle.motocycle,
      type: type.sale,
    });
    setAnnounce(list);
  }, [getListFilter]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);

  console.log(announce);

  return (
    <>
      <TitleContainer>Motos</TitleContainer>
      <CardContainer>
        {announce.length ? (
          announce.map((item) => <SaleCard announce={item} key={item.id} />)
        ) : (
          <LoadingOrEmpty message="Nenhuma moto anúnciada" />
        )}
      </CardContainer>
    </>
  );
};

export default MotorcyclesList;
