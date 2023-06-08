import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import vertexNormal from './shaders/vertex.glsl';

const Globe = ({ width, height }) => {
  const containerRef = useRef();
  let scene, camera, renderer, globe, clouds, controls;

  useEffect(() => {
    const init = () => {
      // Create a scene
      scene = new THREE.Scene();

      // Create a camera
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 3.5;

      // Create a renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setClearColor(0x000000, 0); // Set background color and opacity
      containerRef.current.appendChild(renderer.domElement);

      // Load the texture images
      const textureLoader = new THREE.TextureLoader();
      const globeTexture = textureLoader.load('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
      const cloudsTexture = textureLoader.load('./clouds.png');

      // Create a globe geometry and material with the globe texture
      const globeGeometry = new THREE.SphereGeometry(2, 32, 32);


      const globeMaterial = new THREE.MeshBasicMaterial({ map: globeTexture });


      globe = new THREE.Mesh(globeGeometry, globeMaterial);
      
      scene.add(globe);

      // Create a cloud geometry and material with the cloud texture
      const cloudsGeometry = new THREE.SphereGeometry(2.05, 32, 32);
      const cloudsMaterial = new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true,blending:THREE.AdditiveBlending,side:THREE.BackSide });
      clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
      scene.add(clouds);

      // Add lighting to the scene
      const light = new THREE.PointLight(0xffffff, 1);
      light.position.set(2, 2, 2);
      scene.add(light);

      // Add controls for mouse manipulation
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableRotate = true;
      controls.enablePan = false;
      controls.enableZoom = false;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.005; // Rotate the globe
        rotateClouds(); // Rotate the clouds
        renderer.render(scene, camera);
      };
      animate();
    };

    const rotateClouds = () => {
      if (clouds) {
        clouds.rotation.y += 0.003; // Adjust the rotation speed of the clouds
      }
    };

    init();

    // Clean up Three.js resources on unmount
    return () => {
      controls.dispose();
      renderer.dispose();
    };
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      style={{ width: `${width}px`, height: `${height}px`, background: 'transparent' }}
    />
  );
};

export default Globe;
