import SacramentDialog from "../../components/SacramentDialog";

const Sacrament = () => {
  return (
    <div className="hero-sacrament text-center">
      <div className="row">
        <h1 className="text-center col-12" style={{ color: "white" }}>
          Sacrament Meeting
        </h1>
        <div className="hero-text">
          <div className="text-center mt-5">
            <SacramentDialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sacrament;
