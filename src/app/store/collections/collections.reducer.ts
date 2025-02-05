import { ICollection } from '@app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { CollectionsActions } from './collections.actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ICollection[];
  isLoading: boolean;
}

export const initialState: State = {
  collections: [],
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(CollectionsActions.loadCollectionsSuccess, (state, { collections }) => ({ ...state, collections }))
);
