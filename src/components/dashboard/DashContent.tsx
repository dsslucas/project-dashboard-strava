import React from "react";
import Section from "../section/Section";
import H1 from "../h1/H1";
import Span from "../span/Span";
import H5 from "../h5/H5";
import A from "../a/A";
import BarChart from "../chart/BarChart";
import Divider from "../div/Div";
import { ChartOptions } from "chart.js";

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
    barChart: boolean;
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

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Activities",
                data: [2, 0, 5, 3, 4, 2],
                backgroundColor: "rgba(252, 76, 2, 1)",
                borderColor: "rgba(252, 76, 2, 1)",
                borderWidth: 0,
            },
        ],
    };
    
    const options: ChartOptions<"bar"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Remove a legenda
            },
        },
        scales: {
            y: {
                ticks: {
                    stepSize: 1, // Garante que os números sejam inteiros
                    callback: function (tickValue: string | number) {
                        // Certifique-se de tratar os dois casos: string ou number
                        if (typeof tickValue === "number" && Number.isInteger(tickValue)) {
                            return tickValue;
                        }
                        return null; // Retorna `null` para não exibir valores não inteiros
                    },
                },
                grid: {
                    drawOnChartArea: false, // Remove as linhas horizontais
                    drawTicks: true, // Mantém os ticks no eixo
                },
            },
            x: {
                grid: {
                    drawOnChartArea: false, // Remove as linhas verticais
                },
            },
        },
    };    

    return <>
        <Section flex flexCol itemsCenter justifyCenter sectionInfos gap>
            <Divider flex flexCol justifyCenter itemsCenter>
                <Divider flex justifyBetween gap2>
                    <H1 uppercase fontBold>{props.title}</H1>

                    {!existsContentResume && (
                        <Span fontBold>{props.counterActivities}</Span>
                    )}
                </Divider>

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

                        {existsContentResume && props.barChart && (
                            <Divider widthFull marginAuto>
                                <BarChart data={data} options={options} />
                            </Divider>
                        )}
                    </>
                )}

                {existsContentData && (                    
                    <Divider flex flexCol widthFull>
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
                                {props.contentData.data.map((element: DataItem, key: number) => {
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
                    </Divider>
                )}
            </Divider>
        </Section>
    </>
}

export default DashContent;