import ProfileContent from "@/components/profileContent";
import React from "react";
import ParticleBackground from "react-particle-backgrounds";

export default function Home() {
  const settings = {
    canvas: {
      canvasFillSpace: true,
    },
    particle: {
      particleCount: 100,
      color: "#22c55e",
      minSize: 2,
      maxSize: 4,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000,
    },
  };

  return (
    <>
      <div className="bg-gray-900 h-screen w-screen">
        <div className="absolute top-0 h-screen w-screen">
          <ParticleBackground settings={settings} />
        </div>

        <ProfileContent></ProfileContent>
      </div>
    </>
  );
}
