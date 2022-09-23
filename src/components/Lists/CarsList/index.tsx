import { useCallback, useEffect, useState } from "react";
import { IAnnounceRes, type } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Announces/listAll";
import { TitleContainer, CardContainer } from "./styles";
import { typeVehicle } from "../../../interfaces/auction";
import SaleCard from "../../Card/SaleCard";
import EmptyMessage from "../../EmptyMessage";
import LoaderLocalComponent from "../../Loader/LoaderLocalComponent";

const CarsList: React.FC = () => {
  const [announce, setAnnounce] = useState<IAnnounceRes[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getListFilter } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const list = await getListFilter({
      typeVehicle: typeVehicle.car,
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
      <TitleContainer>Carros</TitleContainer>
      <CardContainer>
        {loadding ? (
          <LoaderLocalComponent />
        ) : announce.length ? (
          announce.map((item) => <SaleCard announce={item} key={item.id} />)
        ) : (
          <EmptyMessage message="Nenhum carro anúnciado" />
        )}
      </CardContainer>
    </>
  );
};

export default CarsList;
