import { Vector3, Scene, PointLight } from "three";

interface LightProps {
    color: number;
    intensity: number;
    distance: number;
    position: Vector3;
}

export const addLights = (scene: Scene, lights: Array<LightProps>) => {
    lights.forEach((light) => {
        const pointLight = new PointLight(light.color, light.intensity, 100);
        pointLight.position.copy(light.position);
        scene.add(pointLight);
    });
};
