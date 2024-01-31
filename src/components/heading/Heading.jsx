import blob from "../../assets/svg/bg-pattern.svg";

const Heading = () => {
  return (
    <div className="heading-container">
      <img className="blob" src={blob} alt="background" />
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
    </div>
  );
};
export default Heading;
