import React from "react";
import { FaArrowRight } from "react-icons/fa";

const RightBtn1 = ({
  movie,
  theater,
  date,
  timeData,
  title,
  moveToNext,
  currentStep,
  step,
}) => {
  return (
    <div
      className={
        "rightBtn" +
        (movie !== "" &&
        theater !== "" &&
        date !== "" &&
        timeData.screenId !== ""
          ? " red"
          : " gray") +
        (currentStep !== step ? " hide" : "")
      }
      onClick={() =>
        movie !== "" &&
        theater !== "" &&
        date !== "" &&
        timeData.screenId !== ""
          ? moveToNext()
          : alert("영화,극장,날짜,시간선택을 완료해주세요")
      }
    >
      <FaArrowRight className="rightArrow" />
      <div className="rightBtn-title">{title}</div>
    </div>
  );
};

export default RightBtn1;
