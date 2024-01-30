import { useState } from "react";

const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const monthlyRate = [8, 12, 16, 24, 36];

const Top = () => {
  const [views, setViews] = useState(pageViews[2]);
  const [rate, setRate] = useState(monthlyRate[2]);

  return (
    <div className="widget-top">
      <span className="views">{views} Page Views</span>
      <br />
      <input
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
      <span>{rate}</span>

      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Top;
