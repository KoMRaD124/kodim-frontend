import React from "react";
import Button from "../../common/Button/Button";
import style from "./StartProject.module.scss";
import houseBG from "./houseBG.svg"
import { useNavigate } from "react-router-dom";
export const StartProject = () => {
    const navigate=useNavigate()
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.header}>
          Цифровизация бизнеса ещё не была такой лёгкой
        </div>

        <div className={style.button}>
          <Button onClick={() => navigate("/calculator")}>Начать свой проект</Button>
        </div>
      </div>
      <div className={style.right}><img src={houseBG} alt="" /></div>
    </div>
  );
};
