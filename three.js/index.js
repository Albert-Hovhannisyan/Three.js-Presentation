import * as THREE from 'three'
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.autoRotate = true;

const loader = new GLTFLoader();
loader.load('assets/sword.glb', function(glb){
  const root = glb.scene;
  root.scale.set(4,4,4)
  root.position.set(0,-0.8,0)
  scene.add(root);
}, function(err){
  console.log("error");
})

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(2,2,5);
scene.add(light);

const geometry_box = new THREE.BoxGeometry();
const geometry_cone = new THREE.ConeGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const cube1 = new THREE.Mesh( geometry_box, material );
const cube2 = new THREE.Mesh( geometry_cone, material );
cube1.position.set(4,0,0)
cube2.position.set(-4,0,0)
scene.add( cube1 );
scene.add( cube2 );

function animate(){
  requestAnimationFrame(animate)

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  renderer.render(scene, camera)
}

animate()