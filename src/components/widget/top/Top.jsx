import IOSSwitch from "./slider/Slider";
import { useState } from "react";

const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const monthlyRate = [8, 12, 16, 24, 36];

const Top = () => {
  const [views, setViews] = useState(pageViews[2]);
  const [rate, setRate] = useState(monthlyRate[2]);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => setIsChecked(e.target.checked);

  const props = {
    input: {
      id: "slider",
      type: "range",
      step: 1,
      min: 0,
      max: 4,
      defaultValue: 2,
      onChange: (e) => {
        setRate(monthlyRate[e.target.value]);
        setViews(pageViews[e.target.value]);
      },
    },
    switch: {
      checked: isChecked,
      onChange: handleChange,
    },
  };

  return (
    <div className="widget-top">
      <div className="views-rate-container">
        <p>{views} PAGEVIEWS</p>
        <p>
          <span className="rate">${isChecked ? rate - rate * 0.25 : rate}.00&nbsp;</span>
          <span>/ month</span>
        </p>
      </div>
      <input {...props.input} />
      <div className="billing-container">
        <span className="billing-text">Monthly Billing</span>
        <IOSSwitch {...props.switch} />
        <span className="billing-text">Yearly Billing</span>
        <span className="billing-text discount">25% discount</span>
      </div>
    </div>
  );
};

export default Top;
