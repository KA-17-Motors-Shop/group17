import { ToggleItem, ToggleRoot } from "./styles";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectType: React.FC<IProps> = ({ value, setValue }) => {
  return (
    <ToggleRoot
      type="single"
      defaultValue={"client"}
      onValueChange={(value: string) => {
        if (value) {
          setValue(value);
        }
      }}
    >
      <ToggleItem value="client">Comprador</ToggleItem>
      <ToggleItem value="seller">Anunciante</ToggleItem>
    </ToggleRoot>
  );
};
export default SelectType;
