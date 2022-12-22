export const Noise = () => {
  return (
    <svg className="absolute inset-0 mix-blend-overlay opacity-70" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  )
}
