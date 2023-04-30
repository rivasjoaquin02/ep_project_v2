export type BarMetrics = {
    year: number;
    income: number;
};

export type PieMetrics = {
    product: string;
    money: number;
    percent: number;
    year: number;
};

interface Asset3DType {
    name: string;
    path: string;
    scale: { x: number; y: number; z: number };
    position: { x: number; y: number; z: number };
}

// companies.json
export interface CompanyType {
    id: number;
    name: string;
    aka: string;
    description: string;
    website: string;
    pastel_metrics: Array<PieMetrics>;
    bar_metrics: Array<BarMetrics>;
    assets: Array<Asset3DType>;
    avatar: string;
}

// credits.json
export interface PersonType {
    name: string;
    role: string;
    avatar: string;
    social: string;
}
