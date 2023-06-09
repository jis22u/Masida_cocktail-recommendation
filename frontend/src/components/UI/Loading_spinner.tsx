import style from "./Loading_spinner.module.scss";
import { useState, useEffect } from "react";

const writing = [
  {
    content: "과도한 음주는 몸에 좋지 않습니다.",
  },
  {
    content: "MASIDA는 사랑입니다.",
  },
  {
    content:
      "술을 가장 최초로 술을 빚은 생명체는 사람이 아닌 원숭이로 알려져있는것을 아십니까?",
  },
  {
    content: "세계에서 가장 비싼 술은 20억이 넘는걸 알고 계셨나요?",
  },
  {
    content:
      "고대에는 맥주에다 벌꿀이나 과즙을 타서 마셨고 로마시대 때에는 포도주에다 물을 타서 마셨답니다.",
  },
  {
    content: "맥주는 보리, 호밀, 밀 등의 곡물을 사용하여 만들어집니다.",
  },
  {
    content:
      "칵테일의 이름인 '마티니'는 뉴욕의 마티니 & 로시 호텔에서 탄생한 것으로 알려져 있습니다.",
  },
  {
    content:
      "블랙 럼은 캐리비안 지방에서 유래된 럼으로, 캐리비안 해의 대표적인 음료 중 하나인 모히또에 사용되기도 합니다.",
  },
  {
    content:
      "샹파인은 프랑스 샹파인 지방에서 생산되는 탄산성 포도주로, 일반적으로 축하나 기념일에 마시는 음료로 알려져 있습니다.",
  },
  {
    content:
      "바카디는 쿠바에서 탄생한 럼을 사용하는 칵테일 중 하나입니다. 럼, 라임 주스, 설탕 시럽, 라임 조각 등이 사용됩니다.",
  },
  {
    content:
      "오클랜드 칵테일은 런던에서 탄생한 칵테일 중 하나로, 진, 레몬 주스, 오렌지 비터, 꿀 시럽으로 만들어집니다.",
  },
  {
    content:
      "막걸리는 한국의 전통적인 술 중 하나로, 쌀, 물, 술취나무 나무껍질, 멥쌀 등으로 만들어집니다.",
  },
  {
    content: "레드 와인은 포도 껍질이 포함되어 발효됩니다.",
  },
  {
    content:
      "모히또는 쿠바에서 유래된 상쾌한 민트와 라임이 들어간 칵테일입니다.",
  },
  {
    content:
      "술의 도수는 알코올의 양에 따라 결정됩니다. 알코올의 비율이 높을수록 도수가 높아집니다.",
  },

  {
    content:
      "마티니 칵테일은 진과 베르무트로 만들어지며, 레몬 피클이나 올리브로 장식합니다.",
  },
  {
    content:
      "먹는 술로 유명한 소주는 국내에서만 생산되며, 쌀, 보리, 감자 등을 발효시켜 만들어집니다.",
  },
  {
    content:
      "모히또에 들어가는 민트는 잎을 떼지 않고 손으로 깨서 사용하는 것이 좋습니다.",
  },
  {
    content:
      "머플러는 캐나다에서 유래된 칵테일로, 위스키, 레몬 주스, 메이플 시럽, 계피 등으로 만들어집니다.",
  },
  {
    content:
      "보드카는 러시아나 폴란드에서 탄생한 무색무취의 술로, 대표적인 술 칵테일 중 하나인 마티니에 사용됩니다.",
  },
  {
    content:
      "술 잔을 손으로 붙잡고 들지 말고, 그립이나 핸들을 잡아서 드세요. 이렇게 하면 술의 온도가 빠르게 오르는 것을 방지할 수 있습니다.",
  },
  {
    content:
      "과일 주스와 얼음, 데낄라를 섞어 만든 마가리따 칵테일은 멕시코의 대표적인 칵테일 중 하나입니다.",
  },
  {
    content:
      "와인은 적어도 1년 이상 숙성시켜야 좋은 맛이 나며, 적절한 온도와 습도에서 보관하는 것이 좋습니다.",
  },
  {
    content:
      "오랜 역사를 가진 칵테일 중 하나인 올드 패션드는 버번 위스키, 설탕 시럽, 비터스, 오렌지 껍질 등으로 만들어집니다.",
  },
  {
    content:
      "스크류드라이버 칵테일은 오렌지 주스와 보드카를 섞어 만들며, 오렌지 슬라이스나 체리로 장식합니다.",
  },
];

const Loading_spinner = () => {
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    let num = Math.floor(Math.random() * 25);
    setContent(writing[num]?.content);
  }, []);
  return (
    <>
      <div className={style.loader_wrap}>
        <div className={style.bottle_wrap}>
          <div className={style.cap}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className={style.bottle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="26.81px"
              height="106.124px"
              viewBox="0 0.5 26.81 106.124"
              enableBackground="new 0 0.5 26.81 106.124"
              xmlSpace="preserve"
            >
              <defs>
                <pattern
                  id="water_fill"
                  width=".25"
                  height="1.1"
                  patternContentUnits="objectBoundingBox"
                >
                  <path
                    fill="#FBCE13"
                    d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                  />
                </pattern>
                <path
                  id="bottle"
                  d="M17.905,38.109V9.734c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232
	s1.375,5.5,1.375,5.5v28.375c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39
	c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47S17.905,38.109,17.905,38.109z"
                />
                <mask id="bottle_mask">
                  <use
                    x="0"
                    y="0"
                    xlinkHref="#bottle"
                    opacity="1"
                    fill="#ffffff"
                  />
                </mask>
              </defs>
              <rect
                className={style.bottle_fill}
                mask="url(#bottle_mask)"
                fill="url(#water_fill)"
                x="-400"
                y="0"
                width="1600"
                height="120"
              />
              <path
                id="btl-out"
                fill="none"
                stroke="#FCE480"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M17.905,38.109V9.734
	c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232s1.375,5.5,1.375,5.5v28.375
	c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47
	S17.905,38.109,17.905,38.109z"
              />
            </svg>
          </div>
          <div className={style.bottle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="32.339px"
              height="105.586px"
              viewBox="0 0 32.339 105.586"
              enableBackground="new 0 0 32.339 105.586"
              xmlSpace="preserve"
            >
              <defs>
                <pattern
                  id="water_fill"
                  width=".25"
                  height="1.1"
                  patternContentUnits="objectBoundingBox"
                >
                  <path
                    fill="#FBCE13"
                    d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                  />
                </pattern>
                <path
                  id="bottle_2"
                  d="M30.836,48.086c-0.083-3.417-3.167-7.583-3.167-7.583s-3-15.5-4-19.667s-1.417-13.25-0.167-14.583
	s0-3.083-1.667-4.083s-5.667-0.583-5.667-0.583s-4-0.417-5.667,0.583S7.584,4.92,8.834,6.253S9.667,16.67,8.667,20.836
	s-4,19.667-4,19.667S1.584,44.67,1.5,48.086c-0.083,3.417,1.833,34.833,1.667,37.917C3,89.086,2.25,96.586,2.834,99.67
	c0.583,3.083,5.5,4.417,5.5,4.417h7.833H24c0,0,4.917-1.333,5.5-4.417c0.583-3.083-0.167-10.583-0.333-13.667
	C29.003,82.919,30.919,51.503,30.836,48.086z"
                />
                <mask id="bottle_mask_2">
                  <use
                    x="0"
                    y="0"
                    xlinkHref="#bottle_2"
                    opacity="1"
                    fill="#ffffff"
                  />
                </mask>
              </defs>
              <rect
                className={style.bottle_fill}
                mask="url(#bottle_mask_2)"
                fill="url(#water_fill)"
                x="-400"
                y="0"
                width="1600"
                height="120"
              />
              <path
                id="btl-out"
                fill="none"
                stroke="#FCE480"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M30.836,48.086
	c-0.083-3.417-3.167-7.583-3.167-7.583s-3-15.5-4-19.667s-1.417-13.25-0.167-14.583c1.25-1.333,0-3.083-1.667-4.083
	c-1.667-1-5.667-0.583-5.667-0.583s-4-0.417-5.667,0.583c-1.667,1-2.917,2.75-1.667,4.083c1.25,1.333,0.833,10.417-0.167,14.583
	s-4,19.667-4,19.667s-3.083,4.167-3.167,7.583c-0.083,3.417,1.833,34.833,1.667,37.917c-0.167,3.083-0.917,10.583-0.333,13.667
	c0.583,3.083,5.5,4.417,5.5,4.417h7.833h7.833c0,0,4.917-1.333,5.5-4.417c0.583-3.083-0.167-10.583-0.333-13.667
	C29.003,82.919,30.919,51.503,30.836,48.086z"
              />
            </svg>
          </div>
          <div className={style.bottle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="31.314px"
              height="102.629px"
              viewBox="0 0 31.314 102.629"
              enableBackground="new 0 0 31.314 102.629"
              xmlSpace="preserve"
            >
              <defs>
                <pattern
                  id="water_fill"
                  width=".25"
                  height="1.1"
                  patternContentUnits="objectBoundingBox"
                >
                  <path
                    fill="#FBCE13"
                    d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                  />
                </pattern>
                <path
                  id="bottle_3"
                  d="M29.157,53.497c-2-10.757-6.688-36.18-7.375-40.493s0.688-1.688,0.25-6.75s-6.375-4.75-6.375-4.75
	S9.72,1.191,9.282,6.254s0.938,2.438,0.25,6.75S4.157,42.74,2.157,53.497s1.25,22.757,0.75,29.507s-1.917,12.333,1.333,15.5
	c3.25,3.167,8.583,2.583,8.583,2.583h2.833h2.833c0,0,5.333,0.583,8.583-2.583c3.25-3.167,1.833-8.75,1.333-15.5
	S31.157,64.254,29.157,53.497z"
                />
                <mask id="bottle_mask_3">
                  <use
                    x="0"
                    y="0"
                    xlinkHref="#bottle_3"
                    opacity="1"
                    fill="#ffffff"
                  />
                </mask>
              </defs>
              <rect
                className={style.bottle_fill}
                mask="url(#bottle_mask_3)"
                fill="url(#water_fill)"
                x="-400"
                y="0"
                width="1600"
                height="120"
              />
              <path
                id="btl-out"
                fill="none"
                stroke="#FCE480"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M29.157,53.497c-2-10.757-6.688-36.18-7.375-40.493
	s0.688-1.688,0.25-6.75s-6.375-4.75-6.375-4.75S9.72,1.191,9.282,6.254s0.938,2.438,0.25,6.75S4.157,42.74,2.157,53.497
	s1.25,22.757,0.75,29.507s-1.917,12.333,1.333,15.5c3.25,3.167,8.583,2.583,8.583,2.583h2.833h2.833c0,0,5.333,0.583,8.583-2.583
	c3.25-3.167,1.833-8.75,1.333-15.5S31.157,64.254,29.157,53.497z"
              />
            </svg>
          </div>
          <div className={style.bottle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="27.071px"
              height="100.378px"
              viewBox="0 0 27.071 100.378"
              enableBackground="new 0 0 27.071 100.378"
              xmlSpace="preserve"
            >
              <defs>
                <pattern
                  id="water_fill"
                  width=".25"
                  height="1.1"
                  patternContentUnits="objectBoundingBox"
                >
                  <path
                    fill="#FBCE13"
                    d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                  />
                </pattern>
                <path
                  id="bottle_4"
                  d="M25.474,44.253c-0.564-8.625-3.189-12-5.189-20s-2.5-16-2.5-16s0.438-3.125-0.313-4.625
	c-0.706-1.413-2.247-2.15-3.937-2.128c-1.691-0.022-3.231,0.715-3.938,2.128c-0.75,1.5-0.313,4.625-0.313,4.625s-0.5,8-2.5,16
	s-4.625,11.375-5.189,20c-0.564,8.625,1.564,35.25,0.626,40.625s-1.375,14,2.813,14c3.029,0,6.375,0,8,0c0,0,0.378,0,1,0
	c1.625,0,4.971,0,8,0c4.188,0,3.75-8.625,2.813-14S26.038,52.878,25.474,44.253z"
                />
                <mask id="bottle_mask_4">
                  <use
                    x="0"
                    y="0"
                    xlinkHref="#bottle_4"
                    opacity="1"
                    fill="#ffffff"
                  />
                </mask>
              </defs>
              <rect
                className={style.bottle_fill}
                mask="url(#bottle_mask_4)"
                fill="url(#water_fill)"
                x="-400"
                y="0"
                width="1600"
                height="120"
              />
              <path
                id="btl-out"
                fill="none"
                stroke="#FCE480"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M25.474,44.253c-0.564-8.625-3.189-12-5.189-20
	s-2.5-16-2.5-16s0.438-3.125-0.313-4.625c-0.706-1.413-2.247-2.15-3.937-2.128c-1.691-0.022-3.231,0.715-3.938,2.128
	c-0.75,1.5-0.313,4.625-0.313,4.625s-0.5,8-2.5,16s-4.625,11.375-5.189,20c-0.564,8.625,1.564,35.25,0.626,40.625
	s-1.375,14,2.813,14c3.029,0,6.375,0,8,0c0,0,0.378,0,1,0c1.625,0,4.971,0,8,0c4.188,0,3.75-8.625,2.813-14
	S26.038,52.878,25.474,44.253z"
              />
            </svg>
          </div>
        </div>
        <div className={style.bar}></div>
        <div className={style.text}>{content}</div>
      </div>
    </>
  );
};

export default Loading_spinner;
