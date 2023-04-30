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
import { BarMetrics } from "../types";

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
    metrics: Array<BarMetrics>;
}

export const BarChart = ({ title, metrics }: Props) => {
    const labels = metrics.map((product) => product.year);

    const data = {
        labels,
        datasets: [
            {
                label: "Ingresos Totales ($B)",
                data: metrics.map((product) => product.income),
                backgroundColor: "rgba(132, 0, 255, 0.5)",
                borderColor: "rgba(255, 255, 255, 1)",
                // borderColor: "rgba(132, 0, 255, 1)",
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
