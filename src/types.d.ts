type MetricsType = {
    product: string;
    units: number;
    year: number;
};

export interface SceneType {
    name: string;
    path: string;
    scale: { x: number; y: number; z: number };
    position: { x: number; y: number; z: number };
}

export interface CompanyType {
    id: number;
    name: string;
    aka: string;
    description: string;
    website: string;
    metrics: Array<MetricsType>;
    scenes: Array<SceneType>;
    avatar: string;
    colors: Array<string>;
}

export interface Person {
    name: string;
    role: string;
    avatar: string;
}
