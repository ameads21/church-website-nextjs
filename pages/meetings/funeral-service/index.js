import React from 'react'

import styles from './index.module.css'
import funeralImage from '../../../assets/images/funeralServiceImage.png'
import Image from 'next/image';

const FuneralServiceTab = () => {
    const currentDate = new Date();
    const scheduledDate = new Date("2023-01-14");
    return (
        <div
            className={"mb-5 p-3 mb-5 bg-white rounded " + styles['funeralServiceContainer']}
        >
            <div className="text-center card">
                <h3 className='mt-2'>Gus Hoffmans Funeral Service</h3>
                <p className="mt-2">Meeting located at: Relief Society Room</p>
                {scheduledDate.getDate() == currentDate.getDate() && (
                    <>
                        <p>Meeting starts at: 10:00 AM</p>
                        <div>
                            <a href="https://zoom.us/j/92486126131" className="btn btn-primary mb-3" target="_blank" rel="noreferrer">
                                Join with Zoom
                            </a>
                        </div>

                    </>
                )}
                {scheduledDate.getDate() != currentDate.getDate() && (
                    <>
                        <h3>It seems there isn't one scheduled today.</h3>
                        <p>Next scheduled date: January 11th at 10:00 AM</p>
                    </>
                )}
            </div>
            <div className='row'>
                <div className='mx-auto mt-5 mb-5 col-12 col-md-4'>
                    <Image
                        className="img-thumbnail"
                        src={funeralImage.src}
                        alt="Gus Hoffman Picture"
                        width="500"
                        height="500"
                    />
                </div>
                <div className='col-12 col-md-8 mt-md-5 mt-2'>
                    <p className={styles.funeralText}>
                        Lloyd Eugene ("Gus") Hoffman, Jr., passed away peacefully at his home on
                        January 8, 2023, with his loving wife by his side.
                        <br />
                        <br />
                        Gus was born July 12, 1938, to Gerda Johannesson and Lloyd Hoffman in
                        Rockford, Illinois. Gus spent his childhood in Mount Morris, Illinois. After high
                        school, Gus attended Coe College in Iowa and graduated with his Bachelor's
                        degree in Biology in 1960. Gus then attended the University of Florida Medical
                        School from 1960-1964, graduating with his medical degree in 1964. Gus
                        specialized in pediatrics and completed a fellowship in pediatric cardiology in
                        1965, where he received an award for his work in infant heart
                        catheterization/angiography. Gus was an active member of the United States
                        Navy, stationed in Queens, New York to provide pediatric services. He received
                        the National Defence Service Medal and was honorably discharged in 1971. Gus'
                        love for pediatric medicine was strong; Gus was a member of Hope Alliance,
                        traveling to Peru to help bring medical care to children in need. Gus worked as a
                        pediatrician for more than 40 years, including his time at Brigham Young
                        University, where he obtained his MBA in 1992. Gus retired in 2006 after more
                        than 20 years at BYU.
                        <br />
                        <br />
                        Gus married the love of his life, Rebecca (Becky) Sprott, on May 18, 1963, in
                        Mulberry, Florida. They lived in Gainesville, Florida, where they started their
                        family. They later went on to live and expand their family in Queens, New York,
                        and Pensacola, Florida, before settling in Holladay, Utah, in 1977, where they
                        lived for 26 years before retiring in Cedar Hills, Utah. Together they raised five
                        children: Mark (Cindy) Hoffman, Michael (Michelle) Hoffman, Sherrie Hoffman,
                        Matthew (Samantha) Hoffman, and Miriam (Timothy) Andrus, and took joy in their
                        19 grandchildren.
                        <br />
                        <br />
                        Gus and Becky were introduced to the Church of Jesus Christ of Latter-Day
                        Saints in 1964. They quickly baptized and became life-long and faithful members.
                        They were sealed for time and all eternity on April 11, 1967, in the Salt Lake City
                        temple. Gus' love for the gospel was a lifelong learning and leadership journey.
                        Gus served in several positions in the church, being called as a patriarch in 2007.
                        Gus served on the Church of Jesus Christ of Latter-Day Saints' Mission Health
                        Board, where he led efforts to provide education and prevention of tuberculosis
                        with missionaries. Gus and Becky served as the Gulf State Mission medical
                        missionaries from 2008-2010, providing medical care to missionaries in all United
                        States southern missions from Florida to Louisiana. Soon after returning, they
                        were asked to serve as medical missionaries in Africa from 2012-2014, where
                        Gus performed hundreds of patriarchal blessings to members throughout Africa.
                        <br />
                        <br />
                        Gus was extremely passionate about genealogy and found joy in working on his
                        family history. Gus loved photography, hiking, camping, scuba diving, and
                        scouting. Gus will be missed by all those who knew and loved him and will be
                        remembered for his fun antics, belly laugh while watching The Christmas Story,
                        and love for football and old westerns. We love and will miss you, Papa Gus. God
                        be with you till we meet again.
                        <br />
                        <br />
                        The family wishes to express their love and thanks to friends, neighbors, and
                        healthcare and hospice workers who have provided love and care. A viewing will
                        occur on January 13, 2023, from 6:00 pm to 8:00 pm at Anderson & Sons Lone
                        Peak Chapel in Highland, Utah. An additional viewing will be held Saturday,
                        January 14, 2023, from 12:45 pm to 1:45 pm at the Cedar Hills 12th Ward
                        building, located at 10351 N Bayhill Dr Cedar Hills, UT 84062. Immediately
                        following, a celebration of life will be held at 2:00 pm. Following the services, a
                        private burial will occur at the Highland, Utah cemetery.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default FuneralServiceTab