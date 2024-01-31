import blob from "../../assets/svg/bg-pattern.svg";

const Heading = () => {
  return (
    <div className="heading-container">
      <img className="blob" src={blob} alt="background" />

      <div className="heading-text">
        <h1>Simple, traffic-based pricing</h1>
        <span>Sign-up for our 30-day trial.&nbsp;</span>
        <p>No credit card required.</p>
      </div>
    </div>
  );
};
export default Heading;
