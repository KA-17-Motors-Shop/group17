import { useCallback, useEffect, useState } from "react";
import { IAuctionRes, type } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Auction/listAll";
import { TitleContainer, CardContainer } from "./styles";
import { typeVehicle } from "../../../interfaces/auction";
import SaleCard from "../../Card/SaleCard";

const CarsList: React.FC = () => {
  const [announce, setAnnounce] = useState<IAuctionRes[]>([]);
  const { getListFilter } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const list = await getListFilter({
      typeVehicle: typeVehicle.car,
      type: type.sale,
    });
    setAnnounce(list);
  }, [getListFilter]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <>
      <TitleContainer>Carros</TitleContainer>
      <CardContainer>
        {announce.map((item) => (
          <SaleCard announce={item} key={item.id} />
        ))}
      </CardContainer>
    </>
  );
};

export default CarsList;
