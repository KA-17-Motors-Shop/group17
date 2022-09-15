import { useCallback, useEffect, useState } from "react";
import { IAuctionRes, typeVehicle, type } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Auction/listAll";
import SaleCard from "../../Card/SaleCard";
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
        {announce.map((item) => (
          <SaleCard announce={item} key={item.id} />
        ))}
      </CardContainer>
    </>
  );
};

export default MotorcyclesList;
