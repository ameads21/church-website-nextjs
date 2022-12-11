const zoomInstructions = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Hosting a Zoom meeting</h1>
      <div className="row mt-5 text-center">
        <div className="col">
          <h4 className="mb-4">Step 1 - Create an account</h4>
          <p>If you don't have one already, create a free Zoom account.</p>
          <a
            className="btn btn-success"
            href="https://zoom.us/signup"
            target="_blank"
          >
            Sign Up Here
          </a>
        </div>
        <div className="col">
          <h4 className="mb-4">Step 2 - Install Zoom</h4>
          <p>Install the Zoom application on your device.</p>
          <a
            className="btn btn-success"
            href="https://zoom.us/download"
            target="_blank"
          >
            Download Here
          </a>
        </div>
        <div className="col">
          <h4 className="mb-4">Step 3 - Schedule</h4>
          <p>
            Inside the zoom application, select the schedule option. Fill out
            the time for your meeting and save it. Email the schedule to your
            ward leaders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default zoomInstructions;
