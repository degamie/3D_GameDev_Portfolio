import ReactDom from 'react-dom/client';
import App from 'App';
ReactDom.createRoot(document.getElementById('root',render)(<App/>));
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);
camera.position.z=5;
const geometry=new THREE.BoxGeometry();
const material=new THREE.MeshLambertMaterial({color:"#488335",emmisive:"#468855"});
const cube=new THREE.Mesh(geometry,material);