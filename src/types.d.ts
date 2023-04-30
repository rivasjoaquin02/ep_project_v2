type MetricsType = {
    product: string;
    units: number;
    cost: number;
    price: number;
    year: number;
};

export interface Asset3DType {
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
    metrics: Array<MetricsType>;
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
