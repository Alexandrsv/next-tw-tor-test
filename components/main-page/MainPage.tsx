import React from "react";
import Circles from "./Circles";

const MainPage = () => {
  return (
    <div className="relative shadow hover:shadow-2xl min-h-screen w-screen grid place-content-center relative bg-black overflow-hidden">
      <div
        className={
          "grid border border-red-800 h-[500px] w-[320px] duck-bg select-text p-6 z-30"
        }
      >
        <div className={"grid font-bold text-red-600 leading-[1.3rem]"}>
          Ты слишком много выпил и потерял сознание. Ты просыпаешься в темной
          камере, Голос рядом с тобой задает тебе вопрос, который меняет твою
          жизнь
        </div>
        <div
          className={
            "grid self-end text-right font-bold text-red-600 leading-[1.3rem] pt-20 pb-2"
          }
        >
          <div
            className={
              "grid self-end ml-12 border border-red-600 p-2 bg-gradient-to-r from-transparent to-black"
            }
          >
            Эй, приятель! Хочешь поговорить о утках?
          </div>{" "}
        </div>

        <ol
          className={
            "self-end font-bold text-red-600 leading-[1.3rem] list-decimal ml-7"
          }
        >
          <li>Поговорить о утках</li>
          <li>Лежать спокойно</li>
          <li>Позвать на помощь</li>
          <li>Ударить по стене</li>
        </ol>
      </div>
      <Circles />
      {/*<div*/}
      {/*  className={`bg-red-400 border border-blue-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 z-10`}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  className={` border border-blue-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-${12}`}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  className={` border border-blue-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 z-${12}`}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  className={` border border-blue-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-${12}`}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  className={`bg-blue-400 border border-blue-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 z-${0}`}*/}
      {/*/>*/}
    </div>
  );
};

export default MainPage;
