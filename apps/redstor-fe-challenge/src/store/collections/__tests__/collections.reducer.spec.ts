import { CollectionsActions } from '../collections.actions';
import { ICollection } from '@app/interfaces';
import { initialState, reducer } from '../collections.reducer';
import { COLLECTIONS_MOCK_DATA } from '@app/mockData/collections-mock-data';

describe('Collections Reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('should call loadCollections and set isLoading to true', () => {
    const action = CollectionsActions.loadCollections({ page: 1, perPage: 3 });
    const state = reducer(initialState, action);

    expect(state.isLoading).toBeTrue();
    expect(state.page).toBe(1);
    expect(state.perPage).toBe(3);
  });

  it('should call loadCollectionsSuccess and update collections', () => {
    const collections: ICollection[] = COLLECTIONS_MOCK_DATA;
    const action = CollectionsActions.loadCollectionsSuccess(collections);
    const state = reducer(initialState, action);

    expect(state.collections).toEqual(collections);
    expect(state.isLoading).toBeFalse();
  });

  it('should set isLoading to false when loadCollectionsFailure is dispatched', () => {
    const action = CollectionsActions.loadCollectionsFailure();
    const state = reducer(initialState, action);

    expect(state.isLoading).toBeFalse();
  });
});
