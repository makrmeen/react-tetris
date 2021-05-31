export const STAGE_WIDTH =12;
export const STAGE_HEIGHT =20;

export const createStage = () =>
   Array.from(Array(STAGE_HEIGHT), () =>
    new Array (STAGE_WIDTH).fill([0, 'clear'])
   )
 // function that creates a new array from the array we created with the height and we supply 