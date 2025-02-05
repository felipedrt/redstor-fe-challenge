import { ICollection } from '@app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { CollectionsActions } from './collections.actions';

export const collectionsFeatureKey = 'collections';

export interface State {
  collections: ICollection[];
  isLoading: boolean;
  page: number;
  perPage: number;
}

export const initialState: State = {
  collections: [],
  isLoading: false,
  page: 1,
  perPage: 3
};

export const reducer = createReducer(
  initialState,
  on(CollectionsActions.loadCollections, (state, { page, perPage }) => {
    return { ...state, page, perPage, isLoading: true };
  }),
  on(CollectionsActions.loadCollectionsSuccess, (state, { collections }) => {
    return { ...state, collections, isLoading: false };
  }),
  on(CollectionsActions.loadCollectionsFailure, state => ({ ...state, isLoading: false }))
);
