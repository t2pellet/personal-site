'use client';

import React, { useCallback } from 'react';
import TsParticles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { loadSnowPreset } from 'tsparticles-preset-snow';
import useTheme from '@/hooks/useTheme';

export default function Particles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
    await loadSnowPreset(engine);
  }, []);
  const theme = useTheme();
  const isLight = theme['color-scheme'] === 'light';

  return (
    <TsParticles
      id='particles'
      init={particlesInit}
      options={{
        preset: isLight ? 'snow' : 'stars',
        background: {
          opacity: 0,
        },
        particles: {
          color: {
            value: theme.secondary,
          },
          opacity: isLight ? { value: 0.2 } : undefined,
          move: isLight
            ? {
                speed: {
                  min: -0.5,
                  max: 0.5,
                },
              }
            : undefined,
          wobble: isLight
            ? {
                speed: {
                  min: -0.1,
                  max: 0.1,
                },
              }
            : undefined,
        },
      }}
    />
  );
}
