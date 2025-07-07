const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("solarCanvas"), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Sun
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Lighting
const pointLight = new THREE.PointLight(0xffffff, 1.5);
scene.add(pointLight);

// Planet Data
const planetData = [
  { name: "Mercury", size: 0.3, color: 0xaaaaaa, distance: 4, speed: 0.04 },
  { name: "Venus",   size: 0.5, color: 0xffc04d, distance: 6, speed: 0.015 },
  { name: "Earth",   size: 0.55, color: 0x1e90ff, distance: 8, speed: 0.01 },
  { name: "Mars",    size: 0.4, color: 0xff4500, distance: 10, speed: 0.008 },
  { name: "Jupiter", size: 1.2, color: 0xffa500, distance: 13, speed: 0.004 },
  { name: "Saturn",  size: 1.0, color: 0xf4e2b8, distance: 16, speed: 0.003 },
  { name: "Uranus",  size: 0.8, color: 0xadd8e6, distance: 19, speed: 0.002 },
  { name: "Neptune", size: 0.8, color: 0x4169e1, distance: 22, speed: 0.0015 },
];

const planets = [];
planetData.forEach(data => {
  const geo = new THREE.SphereGeometry(data.size, 32, 32);
  const mat = new THREE.MeshStandardMaterial({ color: data.color });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);
  planets.push({ ...data, mesh, angle: 0 });
});

// Controls UI
const controlsDiv = document.getElementById('controls');
planetData.forEach((data, index) => {
  const label = document.createElement('label');
  label.textContent = data.name;
  const input = document.createElement('input');
  input.type = 'range';
  input.min = 0.001;
  input.max = 0.05;
  input.step = 0.001;
  input.value = data.speed;
  input.addEventListener('input', (e) => {
    planets[index].speed = parseFloat(e.target.value);
  });
  label.appendChild(input);
  controlsDiv.appendChild(label);
});

// Animation
camera.position.z = 30;
let isAnimating = true;

function animate() {
  requestAnimationFrame(animate);
  if (!isAnimating) return;

  planets.forEach(planet => {
    planet.angle += planet.speed;
    planet.mesh.position.x = planet.distance * Math.cos(planet.angle);
    planet.mesh.position.z = planet.distance * Math.sin(planet.angle);
  });

  renderer.render(scene, camera);
}
animate();

// Pause/Resume
document.getElementById('toggleAnimation').onclick = () => {
  isAnimating = !isAnimating;
  document.getElementById('toggleAnimation').textContent = isAnimating ? 'Pause' : 'Resume';
};

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
