import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { MetricsType } from "../types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    title?: string;
    metrics: Array<MetricsType>;
}

export const BarChart = ({ title, metrics }: Props) => {
    const labels = metrics.map((product) => product.product);

    const data = {
        labels,
        datasets: [
            {
                label: "Fabricacion",
                data: metrics.map((product) => product.cost),
                backgroundColor: "rgba(132, 0, 255, 0.5)",
                borderColor: "rgba(255, 255, 255, 1)",
                // borderColor: "rgba(132, 0, 255, 1)",
                borderWidth: 1,
            },
            {
                label: "Venta",
                data: metrics.map((product) => product.price),
                backgroundColor: "rgba(173, 204, 0, 0.5)",
                borderColor: "rgba(255, 255, 255, 1)",
                // borderColor: "rgba(173, 204, 0, 1)",
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

    return (
        <div className="h-[80%]">
            <Bar options={options} data={data} />;
        </div>
    );
};
