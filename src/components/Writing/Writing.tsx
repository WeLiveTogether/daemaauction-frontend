/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { optionArr } from "../Header/Nav";
import { color } from "../../styles/color";
import { postWriting, postImg } from "../../utils/api/Writing";
import { useHistory } from "react-router";
const mainCategory = [
  { value: 0, name: "의류" },
  { value: 0, name: "전자제품" },
  { value: 0, name: "음식" },
  { value: 0, name: "도서" },
  { value: 0, name: "생활용품" },
  { value: 0, name: "완구/취미" },
];
let fileFormData = new FormData();
const Writing = () => {
  const [fileList, setFileList] = useState<FileList | null>();

  const [imgConsole, setImgConsole] = useState("+ 사진추가");
  const addFileFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nowFile = e.target.files;
    if (!nowFile) return;
    if (nowFile.length > 5) {
      alert("사진은 5개까지만 넣을 수 있습니다.");
      return;
    }
    setFileList(nowFile);
    for (let i = 0; i < nowFile.length; i++) {
      fileFormData.append("file", nowFile[i]);
    }
    setImgConsole("사진수정하기");
  };
  const renderImg = (): JSX.Element[] => {
    if (!fileList) return [];
    const list: JSX.Element[] = [];
    for (let i = 0; i < fileList.length; i += 1) {
      list.push(
        <S.Img key={i} src={URL.createObjectURL(fileList[i])} alt="" />
      );
    }
    return list;
  };
  const [aim, setAim] = useState(0);
  const getCategory = (value: number) => {
    for (let i = 0; i < 6; i += 1) {
      mainCategory[i].value = 0;
      if (i === value) {
        mainCategory[i].value = 1;
        setAim(i);
        setSubaim(0);
      }
    }
  };
  let subCategory: number[] = [];
  useEffect(() => {
    subCategory = [];
    for (let i = 0; i < optionArr[aim].length; i++) {
      subCategory.push(0);
    }
  }, [aim]);
  const [subaim, setSubaim] = useState(0);
  const onClicksubCategory = (value: number) => {
    if (!subCategory) {
      return;
    }
    setSubaim(value);
  };
  //input
  const [input, setInput] = useState({
    nowbuy: 0,
    startauction: 0,
    title: "",
    description: "",
  });
  const { nowbuy, startauction, title, description } = input;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextInput = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(nextInput);
  };
  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextInput = {
      ...input,
      description: e.target.value,
    };
    setInput(nextInput);
  };
  const history = useHistory();
  //submit
  const onClickSubmit = async () => {
    if (nowbuy === 0 || title === "" || description === "") {
      alert("모든 사항을 입력해주세요");
    } else if (!fileFormData) {
      alert("사진이 없습니다.");
    } else {
      const getWritingResponse = await postWriting({
        auctionPrice: startauction,
        category: mainCategory[aim].name,
        content: description,
        immePrice: nowbuy,
        productSaleStatus: "ON_SALE",
        subCategory: optionArr[aim][subaim],
        title: title,
      });
      fileFormData.set("productId", getWritingResponse.data.productId);
      const getImg = postImg(fileFormData);
      console.log(getImg);
      alert("업로드가 완료되었습니다.");
      history.push("/");
    }
  };
  return (
    <S.Container>
      <S.Title>경매 글 작성</S.Title>
      <S.ImgWrapper>
        {renderImg()}
        <S.AddImg htmlFor="getFile">{imgConsole}</S.AddImg>
        <input
          type="file"
          id="getFile"
          style={{ display: "none" }}
          onChange={addFileFunc}
          accept=".jpg, jpeg, .png"
          multiple
        />
      </S.ImgWrapper>
      <S.ItemInfo>
        <S.ItemPrice>
          <div>
            즉시 구매가 :
            <S.PriceInput name="nowbuy" value={nowbuy} onChange={onChange} /> 💸
          </div>
          <div>
            경매 시작가 :
            <S.PriceInput
              name="startauction"
              value={startauction}
              onChange={onChange}
            />{" "}
            💸
          </div>
        </S.ItemPrice>
        <S.CategoryWrapper>
          <span>카테고리</span>
          <S.CategoryItem>
            {mainCategory.map((category, i) => (
              <span
                key={i}
                onClick={() => getCategory(i)}
                style={{
                  color: i === aim ? color.green : color.gray,
                }}
              >
                {category.name}
              </span>
            ))}
          </S.CategoryItem>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <span>소분류</span>
          <S.CategoryItem>
            {optionArr[aim].map((category, i) => (
              <span
                key={i}
                onClick={() => onClicksubCategory(i)}
                style={{
                  color: i === subaim ? color.green : color.gray,
                }}
              >
                {category}
              </span>
            ))}
          </S.CategoryItem>
        </S.CategoryWrapper>
        <S.TitleInput
          placeholder="제목을 입력해주세요"
          name="title"
          value={title}
          onChange={onChange}
        />
        <S.TitleTextarea
          placeholder="내용을 입력해주세요"
          name="description"
          value={description}
          onChange={onChangeTextarea}
        />
      </S.ItemInfo>
      <S.SubmitBtn onClick={onClickSubmit}>경매 글 제시</S.SubmitBtn>
    </S.Container>
  );
};

export default Writing;
