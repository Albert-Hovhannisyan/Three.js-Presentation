const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// const gltfLoader = new THREE.GLTFLoader();
// const url = 'assets/Swordb.gltf';
// gltfLoader.load(url, (gltf) => {
//     const root = gltf.scene;
//     scene.add(root);
// });

// const loader = new THREE.GLTFLoader();

// loader.load( 'assets/Swordb.gltf', function ( gltf ) {

//     scene.add( gltf.scene );

//     }, undefined, function ( error ) {

//     console.error( error );
//     } );

renderer.render( scene, camera )

// const animate = function () {
//   requestAnimationFrame( animate );

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render( scene, camera );
// };

// animate();