import { ColorTypeIds } from './color.model';

export interface Selection {
  id: ColorTypeIds;
  areas: number[][];
}


const selection = {
  id: ColorTypeIds.green,
  areas: [[0, 2], [4, 3]]
};
