import Category from "../../components/Category/Category";
import Background from "../../components/Background/MainBackground/MainBackground";
import { useLocation } from "react-router";

const CategoryContainer = (): JSX.Element => {
  const query = new URLSearchParams(useLocation().search);
  return (
    <>
      <Background>
        <Category
          bigCategoryParam={query.get("category")}
          subCategoryParam={query.get("subcategory")}
        />
      </Background>
    </>
  );
};

export default CategoryContainer;
