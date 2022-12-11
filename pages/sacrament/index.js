const Sacrament = () => {
  return (
    <div className="hero-sacrament text-center">
      <div className="row">
        <h1 className="text-center col-12" style={{ color: "white" }}>
          Sacrament Meeting
        </h1>
        <div className="hero-text">
          <div className="text-center mt-5">
            <h2 className="col-12 mb-4">Announcement</h2>
            <h5 className="hero-announcment">
              Due to some recent changes, we will no longer have the zoom link
              available for everyone. We encourage those who are traveling to
              participate in Sacrament Meeting at the nearest church building.
              If you are unable to attend sacrament meeting and would love the
              zoom passcode, please text Bishop Williams at:
            </h5>
            <h5>801-310-6421</h5>
            <br />
            <br />
            <h4>Sacrament Meeting starts at 12:00 PM</h4>
            <a
              className="btn btn-lg btn-secondary mt-3"
              href="https://zoom.us/j/98704447539?pwd=UWZ6NE9uallFT0pXaExDenp1Ulk4Zz09"
              target="_blank"
              rel="noreferrer"
            >
              Join Zoom with passcode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sacrament;
