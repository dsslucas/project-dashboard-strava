import React from "react";
import Section from "../components/section/Section";
import H1 from "../components/h1/H1";
import TestImage from "../assets/images/test.jpg"
import Img from "../components/img/Img";
import A from "../components/a/A";
import Span from "../components/span/Span";
import PieChart from "../components/chart/PieChart";
import H5 from "../components/h5/H5";
import DashContent from "../components/dashboard/DashContent";

const Dashboard = () => {
    return (
        <>
            <Section flex flexCol sectionInfos gap>
                <div className="flex justify-between">
                    <H1 uppercase fontBold>Athlete data</H1>
                    <A textOrange text="View on Strava" href="https://www.strava.com/athletes/97961731" />
                </div>

                <div className="flex xs:flex-col sm:flex-row w-full">
                    <div className="flex sm:flex-col sm:w-full md:w-1/4 sm:items-center">
                        <figure className="w-full">
                            <Img image={TestImage} alt="profile-image" />
                        </figure>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="flex flex-1">
                                <Span fontBold>Lucas Souza</Span>
                            </div>
                        </div>

                        <Span>Um goiano que corre atrás de condicionamento físico, baixar tempo e, às vezes, um ortopedista.</Span>
                        <Span location>Chiola, Brazil</Span>
                        <div className="flex">
                            <div className="flex gap-3">
                                <div className="flex gap-x-2">
                                    <Span textGray500>Followers</Span>
                                    <Span fontBold>10</Span>
                                </div>
                                <Span>|</Span>
                                <div className="flex gap-x-2">
                                    <Span textGray500>Following</Span>
                                    <Span fontBold>25</Span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <H1 fontBold>Physical activities:</H1>
                            <div className="grid grid-cols-4 justify-between text-center">
                                {/* <div className="flex flex-col">
                                    <Span textGray500>This week</Span>
                                    <Span fontBold>25</Span>
                                </div> */}
                                <div className="flex flex-col">
                                    <Span textGray500>Last 4 weeks</Span>
                                    <Span fontBold>25</Span>
                                </div>
                                {/* <div className="flex flex-col">
                                    <Span textGray500>This year</Span>
                                    <Span fontBold>25</Span>
                                </div>
                                <div className="flex flex-col">
                                    <Span textGray500>Since register</Span>
                                    <Span fontBold>180</Span>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

            {/* <Section flex flex1 flexCol itemsCenter justifyCenter sectionInfos gap>
                Exercise Activity Data not found!
            </Section> */}

            <H1 uppercase fontBold>This week:</H1>

            <DashContent
                key={Math.random() * 100}
                title="Running"
                counterActivities={8}
                pieChart={true}
                contentData={
                    {
                        resume: [{
                            name: "Treadmill",
                            count: 7,
                            time: "0h 15m",
                            distance: 2.8
                        }, {
                            name: "Street",
                            count: 1,
                            time: "2h 8m",
                            distance: 21.095
                        }],
                        data: [{
                            id: 12740016806,
                            name: "BSB Half Marathon 2024",
                            type: "Steeet",
                            distance: 20834.4,
                            elapsed_time: 7681,
                            average_speed: 2.74,
                            average_rhythm: 6.05
                        }, {
                            id: 12740016806,
                            name: "Esteira",
                            type: "Treadmill",
                            distance: 2.5,
                            elapsed_time: 902,
                            average_speed: 2.749,
                            average_rhythm: 5.04
                        }],
                    }
                }
            />

            <DashContent
                key={Math.random() * 100}
                title="Swimming"
                counterActivities={6}
                pieChart={true}
                contentData={
                    {
                        resume: [],
                        data: [{
                            id: 12740016806,
                            name: "BSB Half Marathon 2024",
                            type: "Steeet",
                            distance: 20834.4,
                            elapsed_time: 7681,
                            average_speed: 2.74,
                            average_rhythm: 6.05
                        }, {
                            id: 12740016806,
                            name: "Esteira",
                            type: "Treadmill",
                            distance: 2.5,
                            elapsed_time: 902,
                            average_speed: 2.749,
                            average_rhythm: 5.04
                        }],
                    }
                }
            />

            <DashContent
                key={Math.random() * 100}
                title="Cycling"
                counterActivities={3}
                pieChart={false}
                contentData={
                    {
                        resume: [{
                            name: "Indoor",
                            count: 3,
                            time: "0h 42m",
                            distance: 2.45
                        },
                        {
                            name: "Street",
                            count: 3,
                            time: "3h 16m",
                            distance: 15
                        }],
                        data: [{
                            id: 12740016806,
                            name: "BSB Half Marathon 2024",
                            type: "Steeet",
                            distance: 20834.4,
                            elapsed_time: 7681,
                            average_speed: 2.74,
                            average_rhythm: 6.05
                        }, {
                            id: 12740016806,
                            name: "Esteira",
                            type: "Treadmill",
                            distance: 2.5,
                            elapsed_time: 902,
                            average_speed: 2.749,
                            average_rhythm: 5.04
                        }],
                    }
                }
            />

            <DashContent
                key={Math.random() * 100}
                title="Other"
                counterActivities={7}
                pieChart={false}
                contentData={
                    {
                        resume: [{
                            name: "Workout",
                            count: 7,
                            time: "3h 16m",
                            distance: 0
                        }],
                        data: [{
                            id: 12740016806,
                            name: "BSB Half Marathon 2024",
                            type: "Steeet",
                            distance: 20834.4,
                            elapsed_time: 7681,
                            average_speed: 2.74,
                            average_rhythm: 6.05
                        }, {
                            id: 12740016806,
                            name: "Esteira",
                            type: "Treadmill",
                            distance: 2.5,
                            elapsed_time: 902,
                            average_speed: 2.749,
                            average_rhythm: 5.04
                        }],
                    }
                }
            />

            {/* <Section flex flexCol itemsCenter justifyCenter sectionInfos gap>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-between gap-2">
                        <H1 uppercase fontBold>Swimming</H1>
                        <Span fontBold>7 times - 0h 15m - 2.8km</Span>
                    </div>

                    <div className="flex flex-col text-left w-full">
                        <H5>Activities list</H5>
                        <table className="w-full border border-solid border-gray-600 text-center overflow-auto">
                            <thead className="bg-gray-800 text-white uppercase">
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Distance</th>
                                    <th>Time</th>
                                    <th>Rhythm</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Morning Street</td>
                                    <td>Treadmill</td>
                                    <td>2,44 km</td>
                                    <td>13m 55s</td>
                                    <td>6:55/min</td>
                                    <td>
                                        <A href="https://www.strava.com/activities/12740016806" textOrange text="See on Strava" />
                                    </td>
                                </tr>
                                <tr className="bg-gray-300">
                                    <td>BSB Half Marathon</td>
                                    <td>Street</td>
                                    <td>21,095 km</td>
                                    <td>2h 08m</td>
                                    <td>6:05/min</td>
                                    <td>
                                        <A href="https://www.strava.com/activities/12740016806" textOrange text="See on Strava" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section> */}

            {/* <DashContent
                title="Other activities"
                counterActivities={2}
                pieChart={false}
            /> */}
        </>
    );
}

export default Dashboard;