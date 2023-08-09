import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeRule } from "../store/slices/RuleSclice";

const format = (value: string) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");

  return `B${phoneNumber.slice(0, 1)}/S${phoneNumber.slice(1, 8)}`;
};

function InputRule() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("B3/S23");

  const hundleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = format(event.target.value);
    setInputValue(formattedPhoneNumber);
  };

  useEffect(() => {
    dispatch(changeRule(inputValue));
  }, [inputValue]);

  return (
    <div className="text-lg h-14 mb-10">
      <div className="text-emerald-500 text-[34px] text-left font-bold mb-3">
        Rule
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => hundleInput(e)}
        className="w-[300px] rounded-xl border-emerald-500 px-5 py-2 text-center shadow-sm focus:outline-none bg-[#3C3C3C] text-white text-3xl"
      />
    </div>
  );
}

export default InputRule;
