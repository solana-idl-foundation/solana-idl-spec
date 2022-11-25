type Refiner = [(value: any) => boolean, string];

export const RX_SEMVER =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export const VALIDATE_DISCRIMINATOR: Refiner = [
  (val: number[]): boolean => [1, 2, 4, 8].includes(val.length),
  "Discriminator should be a number array of 1, 2, 4, or 8 bytes",
];
