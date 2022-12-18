import Link from "next/link";
import { useEffect, useState } from "react";
import globals from "../globals/globals";

const SacramentDialog = () => {
  const [nextAvailableSunday, setNextAvailableSunday] = useState("");
  const today = new Date();
  let day = today.getDay();

  useEffect(() => {
    const date = new Date();
    const sunday = 0;
    let days = 7;
    date.setDate(date.getDate() + ((sunday + (7 - date.getDay())) % days));

    while (
      (
        globals.excludeSacramentDays.find((excludedDate) => {
          return (
            excludedDate.toLocaleDateString("en-US") ==
            date.toLocaleDateString("en-US")
          );
        }) || []
      ).length != 0
    ) {
      days += 7;
      date.setDate(date.getDate() + ((sunday + (7 - date.getDay())) % days));
    }

    setNextAvailableSunday(date.toLocaleDateString("en-US"));
  }, []);

  // 0 = Sunday
  if (day !== 0) {
    return (
      <div>
        <h2 className="text-center mt-5">
          It seems nothing is scheduled today.
        </h2>
        <h3 className="text-center mt-5">
          Next meeting starts {nextAvailableSunday} <br />{" "}
          {globals.sacramentMeetingTime}
        </h3>
      </div>
    );
  }

  if (globals.restrictSacramentMeeting === true) {
    return (
      <div>
        <h2 className="col-12 mb-4">Announcement</h2>
        <h5 className="hero-announcment">
          Due to some recent changes, we will no longer have the zoom link
          available for everyone. We encourage those who are traveling to
          participate in Sacrament Meeting at the nearest church building. If
          you are unable to attend sacrament meeting and would love the zoom
          passcode, please text Bishop Williams at:
        </h5>
        <h5>801-310-6421</h5>
        <br />
        <br />
        <h4>Sacrament Meeting starts at {globals.sacramentMeetingTime}</h4>
        <Link
          className="btn btn-lg btn-secondary mt-3"
          href="https://zoom.us/j/98704447539?pwd=UWZ6NE9uallFT0pXaExDenp1Ulk4Zz09"
          target="_blank"
          rel="noreferrer"
        >
          Join Zoom{globals.restrictSacramentMeeting === true && (<span> with passcode</span>)}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h4>Sacrament Meeting starts at {globals.sacramentMeetingTime}</h4>
      <Link
        className="btn btn-lg btn-secondary mt-3"
        href="https://zoom.us/j/98704447539?pwd=UWZ6NE9uallFT0pXaExDenp1Ulk4Zz09"
        target="_blank"
        rel="noreferrer"
      >
        Join Zoom {with passcode
      </Link>
    </div>
  );
};

export default SacramentDialog;
