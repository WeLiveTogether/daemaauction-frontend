import styled from "@emotion/styled";
import { color } from "../../styles/color";

export const Container = styled.div`
  margin-top: 57px;
  grid-column: 1/13;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
export const ImgWrapper = styled.div`
    width: 1110px;
    height: 514px;
    border-radius: 5px;
    background-color: ${color.white};
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    word-break:break-all;
    word-wrap:break-word;
    justify-content: space-between;
`;
export const Img = styled.div`
    width: 340px;
    height: 226px;
    border: 1px solid black;
    border-radius: 5px;
`;
export const AddImg = styled.label`
    background: ${color.green};
    display: flex;
    justify-content: center;
    align-items:center;
    color: ${color.white};
    font-size: 16px;
    width: 340px;
    height: 226px;
    border-radius: 5px;
    :hover{
        cursor: pointer;
    }
`;
export const ItemInfo = styled.div`
    width: 1110px;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 74px;
`;
export const ItemPrice = styled.div`
    width: 520px;
    height: 32px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const PriceInput = styled.input`
    width: 120px;
    height: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
`;
export const TimeWrapper = styled(ItemPrice)`
`
export const TimeInput = styled(PriceInput)`
    width: 52px;
`
export const CategoryWrapper = styled.div`
    width: 410px;
    height: 20px;
    display: flex;
    justify-content: space-between;
`;
export const CategoryItem = styled.div`
    width: 340px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    &{
        color: ${color.gray}
    }
    & :hover{
        cursor: pointer;
    }
`
export const TitleInput = styled(PriceInput)`
    width: 1110px;
    color: ${color.black};
    font-size: 16px;
    ::placeholder{
        color: ${color.gray}
    }
    box-sizing: border-box;
    padding-left: 10px;
`
export const TitleTextarea = styled.textarea`
        width: 1110px;
    color: ${color.black};
    font-size: 16px;
    height: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
    resize: none;
    height:108px;
    ::placeholder{
        color: ${color.gray}
    }
        box-sizing: border-box;
    padding: 5px 0 0 10px;
`
export const SubmitBtn = styled.button`
    width: 105px;
    height: 44px;
    background-color: ${color.green};
    color: ${color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    border-radius: 5px;
    font-size: 16px;
    margin : 58px 0 210px 45%;
    :hover{
        cursor:pointer;
    }
`;