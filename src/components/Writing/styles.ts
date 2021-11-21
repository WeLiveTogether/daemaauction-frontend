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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 30px;
`;
export const Img = styled.img`
    width: 340px;
    height: 226px;
    border-radius: 5px;
    margin-right: 10px;
    margin-right: 30px;
    object-fit: cover;
    object-position: center;
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
    height: 300px;
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