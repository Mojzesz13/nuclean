// import ReactDOM from 'react-dom';
// import React, { useRef, useState } from 'react';
// import { Canvas, useFrame } from 'react-three-fiber';
// import './AboutUs.scss';
// import * as THREE from 'three';
// import { OrbitControls } from 'drei';

// const tempObject = new THREE.Object3D();

// const AboutUs = () => {
//   function Box(props) {
//     const mesh = useRef();

//     useFrame((state) => {
//       let i = 0;
//       let number = 58;
//       for (let x = 0; x <= number; x++)
//         for (let z = 0; z <= number; z++) {
//           let id = i++;
//           let time = state.clock.getElapsedTime();
//           tempObject.position.set(
//             20 * (x / number - 0.5),
//             0,
//             20 * (z / number - 0.5)
//           );
//           tempObject.rotation.y =
//             Math.sin(x / 4 + time) + Math.sin(z / 4 + time);
//           const scale = 1;
//           tempObject.scale.set(scale, scale, scale);
//           tempObject.updateMatrix();
//           mesh.current.setMatrixAt(id, tempObject.matrix);
//         }
//       mesh.current.instanceMatrix.needsUpdate = true;
//     });
//     return (
//       <instancedMesh {...props} ref={mesh} args={[null, null, 1000]}>
//         <boxBufferGeometry attach='geometry' args={[0.03, 0.03, 0.03]} />
//         <meshStandardMaterial attach='material' color={'orange'} />
//       </instancedMesh>
//     );
//   }
//   return (
//     <div className='aboutUs-container'>
//       <Canvas camera={{ position: [1, 0, 0] }}>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Box position={[5, 0, 0]} />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };

// export default AboutUs;
