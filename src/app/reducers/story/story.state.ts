import { Selection } from '../../models/selection.model';

export interface StoryState {
  origin: string;
  highlighted: string;
  selections: Selection[];
}

