import { COLLECTIONS_MOCK_DATA } from '@app/mockData/collections-mock-data';
import { CollectionsActions } from '../collections.actions';

describe('CollectionsActions', () => {
  it('should create loadCollections action', () => {
    const mockData = { page: 1, perPage: 3 };
    const action = CollectionsActions.loadCollections(mockData);

    expect(action.type).toBe('[Collections] Load Collections');
    expect(action.page).toBe(mockData.page);
    expect(action.perPage).toBe(mockData.perPage);
  });

  it('should create loadCollectionsSuccess action', () => {
    const action = CollectionsActions.loadCollectionsSuccess(COLLECTIONS_MOCK_DATA);

    expect(action.type).toBe('[Collections] Load Collections success');
    expect(action.collections).toBe(COLLECTIONS_MOCK_DATA);
  });

  it('should create loadCollectionsFailure action', () => {
    const action = CollectionsActions.loadCollectionsFailure();
    expect(action.type).toBe('[Collections] Load Collections failure');
  });
});
