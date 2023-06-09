import style from "./Cocktail_recommend.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dispatch, SetStateAction } from 'react';
import { Detail_recommend_card } from "../UI/Card_ui";
import { recommend_props } from "../../pages/detail/[id]";

interface propsType {
  props : recommend_props,
  reload : boolean,
  setReload : Dispatch<SetStateAction<boolean>>
}


const Cocktail_recommend : React.FunctionComponent<propsType> = ({props, reload, setReload}) => {
  const ingredientList = props.ingredient_recommend;
  const colorList = props.color_recommend;
  console.log("props : ")
  console.log(props)

  const settings = {
    accessibility: false,
    adaptiveHeight: true,
    // arrows : true,
    // dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className={style.detail_separator}>
      <div className={style.detail_cocktail_recommend}>
        {/* 비슷한 재료로 만들어진 칵테일 카드 리스트 렌더  */}
        <div className={style.detail_cocktail_recommend_by_ingredient}>
          <div className={style.detail_cocktail_recommend_ingredient_title}>
            비슷한 재료로 만들어진 칵테일
          </div>
          {/* map cards */}
          <div className={style.carousel}>
            <Slider {...settings}>
              {ingredientList?.map((key) => (
                <Detail_recommend_card cocktail = {key} reload = {reload} setReload={setReload} />
              ))}
            </Slider>
          </div>
        </div>

        {/* 비슷한 색 칵테일 카드 리스트 렌더  */}
        <div className={style.detail_cocktail_recommend_by_color}>
          <div className={style.detail_cocktail_recommend_color_title}>
            비슷한 색의 칵테일
          </div>
          {/* map cards */}
          <div className={style.carousel}>
            <Slider {...settings}>
              {colorList?.map((key) => (
                <Detail_recommend_card cocktail = {key} reload = {reload} setReload={setReload} />
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cocktail_recommend;
