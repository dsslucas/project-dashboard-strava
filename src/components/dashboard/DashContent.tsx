import React from "react";
import Section from "../section/Section";
import H1 from "../h1/H1";
import Span from "../span/Span";
import PieChart from "../chart/PieChart";
import H5 from "../h5/H5";
import A from "../a/A";

interface ResumeItem {
    name: string;
    count: number;
    time: string;
    distance: number;
}

interface DataItem {
    id: number;
    name: string;          
    type: string;          // ex: "street", "treadmill"
    distance: number;      // Km/h
    elapsed_time: number;  // Seconds
    average_speed: number; // Km/h
    average_rhythm: number;
}

interface ActivityData {
    resume: ResumeItem[];
    data: DataItem[];
}

interface Props {
    key: number;
    title: string;
    counterActivities: number;
    pieChart: boolean;
    contentData: ActivityData
}

const DashContent: React.FC<Props> = (props: Props) => {
    const existsContentResume = Array.isArray(props.contentData.resume) && props.contentData.resume.length > 0;
    var contentResumeLength = 0;
    const existsContentData = Array.isArray(props.contentData.data) && props.contentData.data.length > 0;

    var labels: string[] = [];
    var counters: number[] = [];

    if (existsContentResume) {
        labels = props.contentData.resume.map((item: ResumeItem) => item.name);
        counters = props.contentData.resume.map((item: ResumeItem) => item.count);
        contentResumeLength = props.contentData.resume.length;
    }

    return <>
        <Section flex flexCol itemsCenter justifyCenter sectionInfos gap>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between gap-2">
                    <H1 uppercase fontBold>{props.title}</H1>

                    {!existsContentResume && (
                        <Span fontBold>{props.counterActivities}</Span>
                    )}
                </div>

                {existsContentResume && (
                    <>
                        <div className={`flex flex-col w-full text-center`}>
                            {props.contentData.resume.map((element: ResumeItem, key: number) => {
                                return (
                                    <div className="flex justify-between" key={key}>
                                        <Span>{element.name}</Span>
                                        <Span>{element.count} times - {element.time} - {element.distance} km</Span>
                                    </div>
                                )
                            })}
                        </div>

                        {existsContentResume && props.pieChart && (
                            <div>
                                <PieChart
                                    labels={labels}
                                    data={counters}
                                />
                            </div>
                        )}
                    </>
                )}

                {existsContentData && (
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
                                {props.contentData.data.map((element: DataItem, key:number) => {
                                    return (
                                        <tr className="even:bg-gray-300 odd:bg-white text-center break-words" key={key}>
                                            <td>{element.name}</td>
                                            <td>{element.type}</td>
                                            <td>{element.distance} km</td>
                                            <td>{element.elapsed_time}</td>
                                            <td>{element.average_rhythm}</td>
                                            <td>
                                                <A href={`https://www.strava.com/activities/${element.id}`} textOrange text="View on Strava" />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Section>
    </>
}

export default DashContent;