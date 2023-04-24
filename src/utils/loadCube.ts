import * as THREE from "three";


export const loadCube = (
    scene: THREE.Scene,
    scale: { x: number; y: number; z: number },
    position: { x: number; y: number; z: number },
    modelName: string
) => {
    const cubeGeo = new THREE.BoxGeometry(scale.x, scale.y, scale.z);
    const cubeMat = new THREE.MeshBasicMaterial();
    const cube = new THREE.Mesh(cubeGeo, cubeMat);

    // set position, name
    cube.position.set(position.x, position.y, position.z);
    cube.name = modelName;

    scene.add(cube);
};
