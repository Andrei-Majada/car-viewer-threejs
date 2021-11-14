var scene, camera, renderer;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xff5f0f);

camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight);
camera.position.set(0, 100, 1000);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth/window.innerHeight);

document.body.appendChild(renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();