import * as S from "./styles";

interface PropsType {
  array: string[];
  selected: number;
  setSelected: (index: number) => void;
  isActive: boolean;
}

const DropDown = ({ array, selected, isActive, setSelected }: PropsType): JSX.Element => {
  return (
    <S.InnerItemList display={isActive ? "block" : "none"}>
      {array.map((value, index) => {
        return (
          <S.InnerItem onClick={() => setSelected(index)}>
            {selected === index ? <S.Dot /> : <S.DotNone />}
            {value}
          </S.InnerItem>
        );
      })}
    </S.InnerItemList>
  );
};

export default DropDown;
