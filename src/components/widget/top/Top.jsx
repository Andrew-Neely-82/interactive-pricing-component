import IOSSwitch from "./slider/Slider";
import { useState } from "react";

const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const monthlyRate = [8, 12, 16, 24, 36];

const Top = () => {
  const [views, setViews] = useState(pageViews[2]);
  const [rate, setRate] = useState(monthlyRate[2]);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => setIsChecked(e.target.checked);

  return (
    <div className="widget-top">
      <span className="views">{views} Page Views</span>
      <br />
      <input
        id="slider"
        type="range"
        step={1}
        min={0}
        max={4}
        defaultValue={2}
        onChange={(e) => {
          setRate(monthlyRate[e.target.value]);
          setViews(pageViews[e.target.value]);
        }}
      />
      <br />
      <span className="rate">${isChecked ? rate - rate * 0.25 : rate}</span>
      <span> /month</span>
      <div className="billing-container">
        <span>Monthly Billing</span>
        <IOSSwitch checked={isChecked} onChange={handleChange} />
        <span>Yearly Billing&nbsp;</span>
        <span className="discount">25% discount</span>
      </div>
    </div>
  );
};

export default Top;
