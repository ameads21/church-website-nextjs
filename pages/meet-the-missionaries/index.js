const meetTheMissionaries = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Meet The missionaries</h1>
      <div className="text-center mt-3">
        <img
          src="https://news-au.churchofjesuschrist.org/media/960x540/missionary-training-center-walk.jpg"
          alt="missionary-picture"
          className="rounded img-thumbnail w-75"
        />
        <p className="mt-3 w-50 mx-auto">
          If you would like to schedule a member message with the missionaries,
          please click the linkbelow. Just know,
          <b>
            <u>this is NOT a meal calendar</u>
          </b>
          , this is only for spiritual messages.
        </p>
        <p>
          <i>
            {
              "Monday is the missionaries p-day so if you want to sign up on Monday, they only share messages from 6:00-8:30 pm. You will receive a reminder text closer to the date you've selected to confirm that day works for you. Our number is (801) 410-3606 call or text us if you have any question we will try our best to help you."
            }
          </i>
        </p>
        <a
          href="https://docs.google.com/spreadsheets/d/1RR-gzYpH6ic-8Z4MWOkP4SytKTq8gUHpGEUydIcyYZw/edit#gid=672986660"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a spiritual message here
        </a>
      </div>
    </div>
  );
};

export default meetTheMissionaries;
