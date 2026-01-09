import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Floating404() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Text
        fontSize={2}
        color="#0DA2E7"
        anchorX="center"
        anchorY="middle"
      >
        404
      </Text>
    </Float>
  );
}

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-[#0F141A] flex flex-col items-center justify-center">

      <div className="w-full h-[60%]">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Floating404 />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-display">Page Not Found</h1>
        <p className="text-gray-400 mt-2">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/app"
          className="inline-block mt-6 px-6 py-3 bg-[#0DA2E7] text-black rounded-xl hover:scale-95 transition"
        >
          Go Home
        </Link>
      </motion.div>

    </div>
  );
}
