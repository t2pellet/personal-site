'use client';

import React, { useCallback, useContext } from 'react';
import TsParticles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { loadSnowPreset } from 'tsparticles-preset-snow';
import useThemeColors from '@/hooks/useThemeColors';
import ThemeContext, { ThemeProvider } from '@/context/ThemeContext';
import useLocalStorage from 'use-local-storage';

export function RawParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
    await loadSnowPreset(engine);
  }, []);
  const { loaded, colorScheme } = useContext(ThemeContext);
  const theme = useThemeColors();
  const [particles] = useLocalStorage('particles', true);
  const isLight = colorScheme === 'light';

  if (!loaded) return null;
  return particles ? (
    <TsParticles
      id='particles'
      init={particlesInit}
      className='absolute -z-10'
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
  ) : null;
}

export default function Particles() {
  return (
    <ThemeProvider>
      <RawParticles />
    </ThemeProvider>
  );
}
