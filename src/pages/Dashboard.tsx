import React, { useEffect, useState } from "react";
import Section from "../components/section/Section";
import H1 from "../components/h1/H1";
import Img from "../components/img/Img";
import A from "../components/a/A";
import Span from "../components/span/Span";
import H5 from "../components/h5/H5";
import DashContent from "../components/dashboard/DashContent";
import api from '../api/constants'
import Button from "../components/button/Button";
import constants from "../common/constants";
import Select from "../components/select/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Divider from "../components/div/Div";
import getAllActivities from "../api/activities";

interface Club {
    id: number;
    name: string;
    profile: string;
    activity_types: string[];
    city: string;
    state: string;
    country: string;
    url: string;
}

interface Shoes {
    id: string;
    name: string;
    converted_distance: number;
    retired: boolean;
}

interface Bikes {
    id: string;
    name: string;
    distance: number;
}

const currentDate = new Date();

const Dashboard = () => {
    console.log("API: ", api.activitiesLastWeek)
    const infoUser = api.infoAfterLogin;
    /*
    const existsDataLastWeek = Array.isArray(api.activitiesLastWeek);
    const existsDataLastFourWeeks = Array.isArray(api.activitiesLastFourWeeks);
    const existsDataCurrentYear = Array.isArray(api.activitiesAllYear);
    */

    // Dropdown of events
    const [isBikesOpen, setIsBikesOpen] = useState<boolean>(false);
    const [isClubOpen, setIsClubOpen] = useState<boolean>(false);
    const [isShoesOpen, setIsShoesOpen] = useState<boolean>(false);

    const toggleDropdownBikes = () => {
        setIsBikesOpen((prev: boolean) => !prev);
    }

    const toggleDropdownClub = () => {
        setIsClubOpen((prev: boolean) => !prev);
    };

    const toggleDropdownShoes = () => {
        setIsShoesOpen((prev: boolean) => !prev);
    }

    const [selectedMonth, setSelectedMonth] = useState<string>((currentDate.getMonth() + 1).toString().padStart(2, '0'));
    const [selectedYear, setSelectedYear] = useState<number>(currentDate.getFullYear());

    const [years, setYears] = useState<string[]>([]);
    const [isMonthYearCurrent, setIsMonthYearCurrent] = useState<boolean>(true);

    //const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    //const years = Array.from({ length: selectedYear - 2019 + 1 }, (_, i) => selectedYear - i);

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = Number(event.target.value);
        setSelectedYear(newYear);
    };

    // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedYear = Number(event.target.value);
    //     setSelectedYear(selectedYear);
    //     //onChange(selectedYear);
    // };

    // Choose an option when click
    const renderDateByOption = (type: string) => {
        console.log(type)
    }

    useEffect(() => {
        // Generate the years list
        const yearsGenerated = Array.from(
            { length: currentDate.getFullYear() - 2020 + 1 },
            (_, index) => (2020 + index).toString()
          ).reverse();
          setYears(yearsGenerated);
    }, []);

    useEffect(() => {
        const compareMonth = (currentDate.getMonth() + 1) === Number(selectedMonth);
        const compareYear = (currentDate.getFullYear()) === Number(selectedYear);

        setIsMonthYearCurrent(compareMonth && compareYear);

        getAllActivities(Number(selectedMonth), Number(selectedYear), compareMonth && compareYear);
    }, [selectedMonth, selectedYear]);

    return (
        <>
            <Section flex flexCol sectionInfos gap>
                <Divider flex justifyBetween>
                    <H1 uppercase fontBold>Athlete data</H1>
                    <A textOrange text="View on Strava" href={`https://www.strava.com/athletes/${infoUser.id}`} />
                </Divider>

                <Divider flex flexRowMobileScreen widthFull gap2>
                    <Divider flex width75PercentMobileScreen width25PercentMediumScreen justifyCenterMobileScreen>
                        <figure className="w-full">
                            <Img image={infoUser.profile} alt="profile-image" />
                        </figure>
                    </Divider>
                    <Divider flex flexCol>
                        <Divider flex>
                            <Divider flex flex1>
                                <Span fontBold>{infoUser.firstname} {infoUser.lastname}</Span>
                            </Divider>
                        </Divider>
                        <Divider flex>
                            <Span location>{infoUser.city}, {infoUser.state}, {infoUser.country}</Span>
                        </Divider>
                        <Divider flex>
                            <Divider flex gap3>
                                <Divider flex gapX2>
                                    <Span textGray500>Followers</Span>
                                    <Span fontBold>{infoUser.follower_count}</Span>
                                </Divider>
                                <Span>|</Span>
                                <Divider flex gapX2>
                                    <Span textGray500>Following</Span>
                                    <Span fontBold>{infoUser.friend_count}</Span>
                                </Divider>
                            </Divider>
                        </Divider>
                        <Span>{infoUser.bio}</Span>
                    </Divider>
                </Divider>
            </Section>

            {Array.isArray(infoUser.bikes) && infoUser.bikes.length > 0 && (
                <Section flex flexCol sectionInfos>
                    <Divider flex justifyBetween itemsCenter>
                        <Divider flex itemsCenter>
                            <H1 fontBold>Bikes</H1>
                        </Divider>
                        <Divider flex gapX3>
                            <Span>({infoUser.bikes.length})</Span>
                            <Button type="button" onClick={toggleDropdownBikes} hoverUnderline>
                                {isBikesOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                            </Button>
                        </Divider>
                    </Divider>
                    <Divider dropdown transitionAll duration300 dropdownOpen={isBikesOpen} overflowHidden>
                        <Divider flex flexColMobileScreen gap2 marginTop4>
                            <Divider flex flexCol>
                                {infoUser.bikes.map((element: Bikes, key: number) => {
                                    return <article className="flex justify-between" key={key}>
                                        <Span>{element.name}</Span>
                                        <Span>{element.distance.toLocaleString("pt-br")} km</Span>
                                    </article>
                                })}
                            </Divider>
                        </Divider>
                    </Divider>
                </Section>
            )}

            {Array.isArray(infoUser.clubs) && infoUser.clubs.length > 0 && (
                <Section flex flexCol sectionInfos>
                    <Divider flex justifyBetween itemsCenter>
                        <Divider flex itemsCenter>
                            <H1 fontBold>Clubs</H1>
                        </Divider>
                        <Divider flex gapX3>
                            <Span>({infoUser.clubs.length})</Span>
                            <Button type="button" onClick={toggleDropdownClub} hoverUnderline>
                                {isClubOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                            </Button>
                        </Divider>
                    </Divider>
                    <Divider dropdown transitionAll duration300 dropdownOpen={isClubOpen} overflowHidden>
                        <Divider flex flexColMobileScreen gap2 marginTop4>
                            {infoUser.clubs.map((element: Club, key: number) => (
                                <article className="flex justify-between gap-2" key={key}>
                                    <Divider flex flexCol width25PercentMobileScreen>
                                        <figure className="w-full">
                                            <Img image={element.profile} alt="club-image" />
                                        </figure>
                                    </Divider>
                                    <Divider flex flexCol width75PercentMobileScreen>
                                        <H5 fontBold>{element.name}</H5>
                                        <Span location>
                                            {element.city}, {element.state}, {element.country}
                                        </Span>
                                        <A
                                            href={`https://www.strava.com/clubs/${element.url}`}
                                            textOrange
                                            text="View on Strava"
                                        />
                                    </Divider>
                                </article>
                            ))}
                        </Divider>
                    </Divider>
                </Section >
            )}

            {
                Array.isArray(infoUser.shoes) && infoUser.shoes.length > 0 && (
                    <Section flex flexCol sectionInfos>
                        <Divider flex justifyBetween itemsCenter>
                            <Divider flex itemsCenter>
                                <H1 fontBold>Shoes</H1>
                            </Divider>
                            <Divider flex gapX3>
                                <Span>({infoUser.shoes.length})</Span>
                                <Button type="button" onClick={toggleDropdownShoes} hoverUnderline>
                                    {isShoesOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                                </Button>
                            </Divider>
                        </Divider>
                        <Divider dropdown transitionAll duration300 dropdownOpen={isShoesOpen} overflowHidden>
                            <Divider flex flexColMobileScreen gap2 marginTop4>
                                <Divider>
                                    {infoUser.shoes.map((element: Shoes, key: number) => {
                                        return <article className="flex justify-between" key={key}>
                                            <Span>{element.name}{element.retired ? " (retired)" : ""}</Span>
                                            <Span>{element.converted_distance.toLocaleString("pt-br")} km</Span>
                                        </article>
                                    })}
                                </Divider>
                            </Divider>
                        </Divider>
                    </Section >
                )
            }

            <Section flex flexCol sectionInfos>
                <Divider flex justifyBetween itemsCenter>
                    <H1 fontBold>Physical activities</H1>
                    <Divider flex gapX2 textCenter>
                        <Divider flex flexCol>
                            <Select
                                onChange={handleMonthChange}
                                value={selectedMonth}
                                textCenter border borderGray400 rounded>
                                {constants.monthsInText.map((month: string, index: number) => (
                                    <option key={index} value={(index + 1).toString().padStart(2, '0')}>
                                        {month}
                                    </option>
                                ))}
                            </Select>
                        </Divider>
                        <Divider flex flexCol>
                            <Select
                                onChange={handleYearChange}
                                value={selectedYear.toString()}
                                textCenter border borderGray400 rounded>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </Select>
                        </Divider>
                    </Divider>
                </Divider>

                <Divider flex flexCol>
                    <Divider flex flexWrap justifyBetween widthFull textCenter>
                        {isMonthYearCurrent && (
                            <Button type="button" onClick={() => renderDateByOption("week")} width25Percent hoverGray300>
                                <Divider flex flexCol>
                                    <Span textGray500>This week</Span>
                                    <Span fontBold>{api.activitiesLastWeek.length}</Span>
                                </Divider>
                            </Button>
                        )}

                        <Button type="button" onClick={() => renderDateByOption("month")} width25Percent hoverGray300>
                            <Divider flex flexCol>
                                <Span textGray500>This month</Span>
                                <Span fontBold>{api.activitiesLastFourWeeks.length}</Span>
                            </Divider>
                        </Button>

                        <Button type="button" onClick={() => renderDateByOption("years")} width25Percent hoverGray300>
                            <Divider flex flexCol>
                                <Span textGray500>This year</Span>
                                <Span fontBold>{api.activitiesAllYear.length}</Span>
                            </Divider>
                        </Button>

                        <Button type="button" onClick={() => renderDateByOption("sinceRegister")} width25Percent hoverGray300>
                            <Divider flex flexCol>
                                <Span textGray500>Since register</Span>
                                <Span fontBold>180</Span>
                            </Divider>
                        </Button>
                    </Divider>
                </Divider>
            </Section >

            {/* <Section flex flex1 flexCol itemsCenter justifyCenter sectionInfos gap>
                Exercise Activity Data not found!
            </Section> */}

            <H1 uppercase fontBold> This week:</H1 >

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