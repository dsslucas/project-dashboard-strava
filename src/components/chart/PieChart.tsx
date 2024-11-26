import React from "react"
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    labels?: any
    data?: any
}

const PieChart: React.FC<Props> = (props: Props) => {
    const data = {
        labels: props.labels,
        datasets: [{
            label: 'My First Dataset',
            data: props.data,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]        
    };

    const chartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (context: any) {
                        return "Count"
                    },
                    label: function (context: any) {
                        return `${context.label}: ${context.raw}`
                    }
                }
            }
        }        
    }

    return <Pie
        {...props}
        data={data}
        options={chartOptions}
    />
}

export default PieChart;