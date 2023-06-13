import React, { useState } from "react";
import Data from "./dataFold/data.js";
import Loading from "./assets/loading-40-paperplane.json";

import Lottie from "lottie-react";

const App = () => {
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Converted value......");
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputType1Value, setinputType1Value] = useState("");
  const [inputType2Value, setinputType2Value] = useState("");
  const [outputValue, setoutputValue] = useState("");

  const converToMilliMeters = (inputtoconvert, inputType1toconvert) => {
    switch (inputType1toconvert) {
      case "kilomts":
        return inputtoconvert * 1e6;
      case "mts":
        return inputtoconvert * 1000;
      case "cmts":
        return inputtoconvert * 10;
      case "millimts":
        return inputtoconvert;
      case "mile":
        return inputtoconvert * 1.609e6;
      case "yard":
        return inputtoconvert * 914.4;
      case "foot":
        return inputtoconvert * 304.8;
      case "inch":
        return inputtoconvert * 25.4;
    }
  };
  const converFromMilliMeters = (convertedToOutput, inputType2toconvert) => {
    switch (inputType2toconvert) {
      case "kilomts":
        return convertedToOutput / 1e6;
      case "mts":
        return convertedToOutput / 1000;
      case "cmts":
        return convertedToOutput / 10;
      case "millimts":
        return convertedToOutput;
      case "mile":
        return convertedToOutput / 1.609e6;
      case "yard":
        return convertedToOutput / 914.4;
      case "foot":
        return convertedToOutput / 304.8;
      case "inch":
        return convertedToOutput / 25.4;
    }
  };

  const converBtn = (inputt, inputTypee1, inputTypee2) => {
    if (
      inputt !== "" &&
      inputTypee1 !== inputTypee2 &&
      inputTypee1 !== "Select units" &&
      inputTypee2 !== "Select units"
    ) {
      setIsLoading(true);
      const inputTOMillimeters = converToMilliMeters(inputt, inputTypee1);
      const millimetersToOutput = converFromMilliMeters(
        inputTOMillimeters,
        inputTypee2
      );
      setOutput(millimetersToOutput);
      setTimeout(() => {
        setInputValue(input);
        setinputType1Value(inputTypee1);
        setinputType2Value(inputTypee2);
        setoutputValue(millimetersToOutput);
        setIsLoading(false);
        setOpenModal(true);
        setTimeout(() => {
          setInput("");
          setOutput("Converted value......");
          setOpenModal(false);
        }, 5000);
      }, 2000);
    } else alert("Please select the details correctly");
  };

  return (
    <div
      className={
        "flex justify-center items-center w-screen min-h-screen bg-image text-white  md:p-12 p-3"
      }
    >
      {isLoading ? (
        <div className={" w-full z-30 h-full flex justify-center items-center"}>
          <div className={"w-full h-full md:w-1/2 md:h-1/2"}>
            <Lottie
              className={"object-cover w-full h-full"}
              animationData={Loading}
            />
          </div>
        </div>
      ) : (
        <div
          className={
            "text-white p-4 w-full h-full relative flex flex-col justify-center items-center gap-6"
          }
        >
          {openModal ? (
            <div
              className={
                "fixed w-full  rounded-none h-full md:w-[80vw] md:h-[80vh] backdrop-blur-2xl border-none outline-none md:rounded-2xl bg-black/20 z-50 flex justify-center items-center flex-col gap-6"
              }
            >
              <h1 className={"text-gradient text-4xl font-bold"}>
                Your Conversion
              </h1>
              <div className={"flex flex-col md:flex-row gap-2 md:gap-4"}>
                <div className={"flex justify-center items-center gap-2"}>
                  <span className={"text-secondary font-semibold text-3xl"}>
                    {inputValue}
                  </span>
                  <span
                    className={
                      "capitalize font-semibold text-gradient text-3xl"
                    }
                  >
                    {inputType1Value}
                  </span>
                </div>
                <div
                  className={
                    "text-5xl font-bold flex justify-center items-center text-gradient"
                  }
                >
                  {" "}
                  =
                </div>
                <div className={"flex justify-center items-center gap-2"}>
                  <span className={"text-secondary font-semibold text-3xl"}>
                    {outputValue}
                  </span>
                  <span
                    className={
                      "capitalize font-semibold text-gradient text-3xl"
                    }
                  >
                    {inputType2Value}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={" pt-24 md:pt-0 "}>
            <h6 className={"text-primary font-semibold text-sm md:text-md"}>
              Measurement Converter &gt;{" "}
              <span className={"font-normal text-secondary text-sm"}>
                Metric & Imperial Converter
              </span>
            </h6>
            <h1
              className={
                "  text-gradient text-4xl  lg:text-7xl  font-extrabold"
              }
            >
              Length Converter
            </h1>
          </div>
          <div
            className={
              "rounded-[30px] backdrop-blur-sm bg-black/20 p-12 w-full gap-4 flex flex-col items-center md:w-2/3"
            }
          >
            <div
              className={
                "flex flex-col md:flex-row justify-between items-center gap-4 w-full"
              }
            >
              <div className={"w-full md:w-1/3  flex flex-col gap-2"}>
                <h1 className={"text-secondary ml-6 text-lg"}>From</h1>
                <div
                  className={"pr-4 rounded-2xl bg-black/20 backdrop-blur-sm "}
                >
                  <select
                    className={
                      "w-full bg-transparent rounded-2xl p-6 border-none outline-none text-xl "
                    }
                    onChange={(ev) => setType1(ev.target.value)}
                  >
                    {Data.map((data) => {
                      return (
                        <option key={data.id} value={data.value}>
                          {data.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className={"w-full md:w-1/3  flex flex-col gap-2"}>
                <h1 className={"text-secondary ml-6 text-lg"}>To</h1>
                <div
                  className={"pr-4 rounded-2xl bg-black/20 backdrop-blur-sm "}
                >
                  <select
                    className={
                      "w-full bg-transparent rounded-2xl p-6 border-none outline-none  text-xl"
                    }
                    onChange={(ev) => setType2(ev.target.value)}
                  >
                    {Data.map((data) => {
                      return (
                        <option key={data.id} value={data.value}>
                          {data.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className={"w-full md:w-1/3  flex flex-col gap-2"}>
                <h1 className={"text-secondary ml-6 text-lg"}>Value</h1>
                <div className={"rounded-2xl bg-black/20 backdrop-blur-sm "}>
                  <input
                    type={"number"}
                    className={
                      "p-6 w-full bg-transparent rounded-2xl border-none outline-none text-secondary "
                    }
                    value={input}
                    onChange={(ev) => {
                      setInput(ev.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <h1 className={"text-secondary text-center font-semibold"}>
              You can enter a decimal number between -32,768 and 32,767
            </h1>
            <button
              className={
                "px-6 py-2 rounded-lg bg-gradient-to-br from-[#9795f0] to-[#fbc8d4] text-gray-900 font-semibold hover:opacity-75 transition-all"
              }
              onClick={(ev) => {
                ev.preventDefault();
                converBtn(input, type1, type2);
              }}
            >
              Convert
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
