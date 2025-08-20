"use client";
import { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "../../../lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (init) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [init, controls]);

  const particlesLoaded = async (container?: Container) => {
    container;
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background || "#0d47a1" } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: false },
                resize: true as any,
              },
              modes: { push: { quantity: 4 } },
            },
            particles: {
              number: {
                value: particleDensity || 120,
                density: { enable: true, width: 400, height: 400 },
              },
              color: { value: particleColor || "#ffffff" },
              size: { value: { min: minSize || 1, max: maxSize || 3 } },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed: speed || 4 },
              },
              move: {
                enable: true,
                speed: { min: 0.1, max: 1 },
                outModes: { default: "out" },
              },
              shape: { type: "circle" },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
