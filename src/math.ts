/**
 * Convert an angle from degrees to radians.
 */
export function deg2rad(degrees: number): number {
  return degrees * Math.PI / 180;
}

/**
 * Convert an angle from radians to degrees.
 */
export function rad2deg(radians: number): number {
  return radians * 180 / Math.PI;
}

/**
 * Create sine waves using familiar parameters.
 */
export function sinWave(t: number, speed: number, amplitude: number, offset: number = 0) {
  return Math.sin((t * speed) + offset) * amplitude;
}

/**
 * Create cosine waves using familiar parameters.
 */
export function cosWave(t: number, speed: number, amplitude: number, offset: number = 0) {
  return Math.sin((t * speed) + offset) * amplitude;
}
