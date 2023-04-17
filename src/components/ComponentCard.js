import React, { useState, useRef } from "react";
import ReactCreditCard from "react-credit-cards";
import celebration from "../images/celebration.png";

import "react-credit-cards/es/styles-compiled.css";
const ComponentCard = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [changeCard, setChangeCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const dateInput = useRef("");

  const handleInputChange = (e) => {
    setChangeCard({ ...changeCard, [e.target.name]: e.target.value });
  };

  const handleFocusChange = (e) => {
    setChangeCard((prevState) => ({
      ...prevState,
      focus: e.target.name,
    }));
  };
  const handleInputChangeDate = (e) => {
    dateInput.current = dateInput.current + e.target.value;
    setChangeCard({ ...changeCard, expiry: dateInput.current });
  };

  const handleAnimateButtonClick = () => {
    setIsAnimating(!isAnimating);
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 1700);
  };

  const cardClasses = "mt-12" + (isAnimating ? " animate-bounce h-96" : "");

  return (
    <>
      {isVisible && (
        <div className={cardClasses}>
          <ReactCreditCard
            cvc={changeCard.cvc}
            expiry={changeCard.expiry}
            focused={changeCard.focus}
            name={changeCard.name}
            number={changeCard.number}
            placeholders={{
              cvc: "CVC",
              expiry: "MM/AA",
              name: "Nombre completo",
              number: "####  ####  ####   ####",
            }}
          />
        </div>
      )}
      {!isVisible && (
        <div className="flex justify-center mt-40">
          <div className="flex flex-col items-center">
            <p className="mb-2 text-3xl font-bold text-purple-900 drop-shadow-xl">
              ¡Yupiiii!
            </p>
            <div className="flex justify-center h-28">
              <img
                src={celebration}
                alt="Not render"
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center w-full">
        <div className="absolute w-full bg-white md:w-3/5 top-36 -z-50 drop-shadow-2xl lg:w-1/3">
          <div className="h-40"></div>
          <div className="flex justify-center w-full">
            <form className="w-2/3">
              <label className="font-sans">Number Card</label>
              <input
                autoComplete="off"
                type="text"
                name="number"
                placeholder="Card Number"
                maxLength="16"
                className="w-full h-8 px-1 mb-5 border-2 border-gray-200 rounded-lg "
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
              <label className="font-sans">Card Name</label>
              <input
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Add name"
                className="w-full h-8 px-1 mb-5 border-2 border-gray-200 rounded-lg "
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
              <div className="flex w-full">
                <div className="flex justify-between w-full">
                  <label className="font-sans">Expiration Date</label>
                  <label className="mr-4 font-sans">CVV</label>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex justify-start w-2/3">
                  <select
                    className="h-8 px-1 mb-5 mr-2 border-2 border-gray-200 rounded-lg "
                    id="month"
                    placeholder="Month"
                    onChange={handleInputChangeDate}
                  >
                    <option className="form-option">Month</option>
                    <option className="form-option">01</option>
                    <option className="form-option">02</option>
                    <option className="form-option">03</option>
                    <option className="form-option">04</option>
                    <option className="form-option">05</option>
                    <option className="form-option">06</option>
                    <option className="form-option">07</option>
                    <option className="form-option">08</option>
                    <option className="form-option">09</option>
                    <option className="form-option">10</option>
                    <option className="form-option">11</option>
                    <option className="form-option">12</option>
                  </select>
                  <select
                    className="h-8 px-1 mb-5 border-2 border-gray-200 rounded-lg "
                    id="year"
                    placeholder="year"
                    onChange={handleInputChangeDate}
                  >
                    <option className="form-option">Year</option>
                    <option className="form-option">23</option>
                    <option className="form-option">24</option>
                    <option className="form-option">25</option>
                    <option className="form-option">26</option>
                    <option className="form-option">27</option>
                    <option className="form-option">28</option>
                    <option className="form-option">29</option>
                    <option className="form-option">30</option>
                    <option className="form-option">31</option>
                    <option className="form-option">32</option>
                    <option className="form-option">33</option>
                    <option className="form-option">34</option>
                  </select>
                </div>
                <div className="flex justify-end w-1/5">
                  <input
                    type="text"
                    name="cvc"
                    maxLength="3"
                    placeholder="cvc"
                    className="w-full h-8 px-1 mb-5 border-2 border-gray-200 rounded-lg "
                    onFocus={handleFocusChange}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-center w-full mb-8">
            <div className="w-4/5">
              <button
                className="w-full py-2 font-bold bg-purple-900 rounded-md text-slate-200"
                onClick={handleAnimateButtonClick}
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentCard;
