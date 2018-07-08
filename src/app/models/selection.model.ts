import { ColorTypeIds } from './color.model';

export type SelectionArea = [number, number];

export interface Selection {
  id: ColorTypeIds;
  areas: SelectionArea[];
}

export interface SelectionConfig {
  id: ColorTypeIds;
  area: SelectionArea;
}
