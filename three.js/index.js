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
})

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(2,2,5);
scene.add(light);

const geometry_box = new THREE.BoxGeometry();
const geometry_cone = new THREE.ConeGeometry();
const material1 = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
const material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

const mesh1 = new THREE.Mesh( geometry_box, material1 );
const mesh2 = new THREE.Mesh( geometry_cone, material2 );
mesh1.position.set(4,0,0)
mesh2.position.set(-4,0,0)
scene.add( mesh1 );
scene.add( mesh2 );

function animate(){
  requestAnimationFrame(animate)

  mesh1.rotation.x += 0.01;
  mesh1.rotation.y += 0.01;

  mesh2.rotation.x += 0.01;
  mesh2.rotation.y += 0.01;

  renderer.render(scene, camera)
}

animate()