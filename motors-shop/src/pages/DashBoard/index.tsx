import { useState } from "react";
import SelectType from "../../components/Forms/SignUpForm/SelectType";

const Dashboard: React.FC = () => {
  const [value, setValue] = useState("client");
  return (
    <div>
      <SelectType value={value} setValue={setValue} />
    </div>
  );
};

export default Dashboard;
