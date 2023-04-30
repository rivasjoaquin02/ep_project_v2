import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PieMetrics } from "../types";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface Props {
    title?: string;
    metrics: Array<PieMetrics>;
}

export const PieChart = ({ title, metrics }: Props) => {
    const data = {
        labels: metrics.map((product) => product.product),
        datasets: [
            {
                label: "% ventas ($B)",
                data: metrics.map((product) => product.percent),
                backgroundColor: [
                    "rgba(132, 0, 255, 0.3)",
                    "rgba(173, 204, 0, 0.3)",
                    "rgba(255, 99, 132, 0.3)",
                    "rgba(54, 162, 235, 0.3)",
                ],
                borderColor: [
                    "rgba(255, 255, 255, 0.7)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: title != undefined,
                text: title,
            },
        },
    };

    return <Pie options={options} data={data} />;
};
