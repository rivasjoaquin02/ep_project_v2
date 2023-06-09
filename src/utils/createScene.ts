import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

export const createScene = (
    sizes: { width: number; height: number },
    cameraPosition: { x?: number; y?: number; z?: number } = {}
) => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );
    const defaultCameraPosition = { x: 0, y: 0, z: 10 };
    camera.position.set(
        cameraPosition?.x ?? defaultCameraPosition.x,
        cameraPosition?.y ?? defaultCameraPosition.y,
        cameraPosition?.z ?? defaultCameraPosition.z
    );
    scene.add(camera);

    const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);

    return { scene, camera, renderer };
};
