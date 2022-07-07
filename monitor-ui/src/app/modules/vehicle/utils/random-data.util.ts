import { SPEED, TEMPERATURES, POSITIONS } from '../constants';
import { Position } from '../types';

export const generateRandomSpeed = (): number => {
  const speedOptions: number[] = SPEED;
  return speedOptions[Math.floor(getRandomIndex(speedOptions.length))];
};

export const generateRandomTemp = (): number => {
  const tempOptions: number[] = TEMPERATURES;
  return tempOptions[Math.floor(getRandomIndex(tempOptions.length))];
};

export const getRandomPosition = (): Position => {
  const positionOptions: Position[] = POSITIONS;
  return positionOptions[Math.floor(getRandomIndex(positionOptions.length))];

};

const getRandomIndex = (max: number) => {
  return Math.random() * max;
};
