import ProfileContent from "@/components/Profile/ProfileContent";
import StackContent from "@/components/Profile/StackContent";
import GithubPage from "@/pages/github";
import React from "react";
import ParticleBackground from "react-particle-backgrounds";
import ButtonToggle from "@/components/ModeComponent/ButtonToggle";

export default function Home() {
  const settings = {
    canvas: {
      canvasFillSpace: true,
    },
    particle: {
      particleCount: 100,
      color: "#8b5cf6",
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
      <div className="dark:bg-stone-950 bg-slate-200 font-customFont h-auto">
        <ButtonToggle></ButtonToggle>
        <ProfileContent></ProfileContent>
        <StackContent></StackContent>

        <div className="flex flex-col mt-14 justify-center items-center">
        <GithubPage></GithubPage>
        </div>

        <div className="fixed top-0 h-screen w-full">
          <ParticleBackground settings={settings} />
        </div>
      </div>
    </>
  );
}
