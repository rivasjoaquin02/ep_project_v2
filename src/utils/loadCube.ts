import { Scene, BoxGeometry, MeshBasicMaterial, Mesh } from "three";

export const loadCube = (
    scene: Scene,
    scale: { x: number; y: number; z: number },
    position: { x: number; y: number; z: number },
    modelName: string
) => {
    const cubeGeo = new BoxGeometry(scale.x, scale.y, scale.z);
    const cubeMat = new MeshBasicMaterial();
    const cube = new Mesh(cubeGeo, cubeMat);

    // set position, name
    cube.position.set(position.x, position.y, position.z);
    cube.name = modelName;

    scene.add(cube);
};
