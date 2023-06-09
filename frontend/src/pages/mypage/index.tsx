import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import style from "./index.module.scss";
import User_info from "../../components/MyPage/User_info";
import Analysis_thumbnail from "../../components/MyPage/Analysis_thumbnail";
import User_cocktail_list from "../../components/MyPage/User_cocktail_list";
import { userType } from "../../type/userTypes";
import { cocktail_summary } from "../../type/cocktailTypes";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { get_user_info } from "../api/auth/user_api";
import { store } from "../../../store/store";
import ResetCategory from "../../components/UI/ResetCategory";

const mypage = () => {
  ResetCategory();
  let [userInfo, setUserInfo] = useState<userType>(null);
  // 북마크 버튼을 사용하여 리스트에서 제거하기 위한 상태 변수
  const [bookmarkModify, setBookmarkModify] = useState<boolean>(false);
  const [analysisThumbnail_props, setAnalysisThumbnail_props] =
    useState<cocktail_summary[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enoughData, setEnoughData] = useState(true);
  useEffect(() => {
    get_user_info().then((response) => {
      setUserInfo(response.value);
    });
  }, []);
  useEffect(() => {
    const atk = store.getState().user.accessToken;
    console.log(atk);
    axios
      .get(`https://j8b208.p.ssafy.io/api/mypage/cocktail_summary`, {
        headers: {
          Authorization: atk,
        },
      })
      .then((response) => {
        const parsedArr = response.data.data.map((el: any) => {
          el.data = [el.data];
          return el;
        });
        setAnalysisThumbnail_props(parsedArr);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
        setEnoughData(false)
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className={style.mypage}>
          <div className={style.mypage_left}>
            <User_info userInfo={userInfo} bookmarkModify={bookmarkModify} />
            {enoughData ? <Analysis_thumbnail {...analysisThumbnail_props}/>  : " "}
          </div>
          <div className={style.mypage_right}>
            <User_cocktail_list
              bookmarkModify={bookmarkModify}
              setBookmarkModify={setBookmarkModify}
            />
          </div>
        </div>
      </>
    );
  }
};

export default mypage;
