import { State } from '@ngrx/store';
import { CollectionsSelectors } from '../collections.selectors';
import { COLLECTIONS_MOCK_DATA } from '@app/mockData/collections-mock-data';

describe('Collections Selectors', () => {
  const mockState = {
    collections: COLLECTIONS_MOCK_DATA,
    isLoading: true,
    page: 2,
    perPage: 5
  };

  it('should get selectCollectionsFeature state', () => {
    const result = CollectionsSelectors.selectCollectionsFeature.projector(mockState);
    expect(result).toEqual(mockState);
  });

  it('should get selectCollections from state', () => {
    const result = CollectionsSelectors.selectCollections.projector(mockState);
    expect(result).toEqual(mockState.collections);
  });

  it('should get selectIsLoading from state', () => {
    const result = CollectionsSelectors.selectIsLoading.projector(mockState);
    expect(result).toBe(mockState.isLoading);
  });

  it('should get selectPage from state', () => {
    const result = CollectionsSelectors.selectPage.projector(mockState);
    expect(result).toBe(mockState.page);
  });

  it('should get selectPerPage  from state', () => {
    const result = CollectionsSelectors.selectPerPage.projector(mockState);
    expect(result).toBe(mockState.perPage);
  });
});
