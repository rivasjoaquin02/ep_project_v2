import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Asset3DType } from "../types";
import { createScene } from "../utils/createScene";
import { loadModel } from "../utils/loadModel";
import { helpers } from "../utils/helpers";

const Asset3D = ({ asset }: { asset: Asset3DType }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        let { clientWidth: width, clientHeight: height } = currentRef;

        /* 🌆 scene, 📷 camera, ✒️ renderer */
        const { scene, camera, renderer } = createScene(
            { width, height },
            { x: 0, y: 0, z: 7 }
        );

        /* mount renderer */
        currentRef?.appendChild(renderer.domElement);

        /* Load Models */
        const obj = new THREE.Object3D();
        scene.add(obj);

        loadModel(obj, asset.path, asset.scale, asset.position, asset.name);
        obj.rotateY(0.7);

        /* light */
        // addLights(scene, [
        //     {
        //         color: 0xffffff,
        //         intensity: 1.25,
        //         distance: 100,
        //         position: new THREE.Vector3(0, 10, 10),
        //     },
        // ]);

        /* Helpers */
        helpers(scene, camera, renderer);

        /* loop */
        const animate = () => {
            renderer.render(scene, camera);
            requestAnimationFrame(animate);

            obj.rotateY(0.01);
        };

        animate();

        /* onWindowResize */
        const onWindowResize = () => {
            width = currentRef?.clientWidth;
            height = currentRef?.clientHeight;

            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", onWindowResize);

        return () => {
            currentRef?.removeChild(renderer.domElement);
            window.removeEventListener("resize", onWindowResize);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="h-full w-full" />;
};
export default Asset3D;
