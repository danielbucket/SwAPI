import { shallow, mount } from 'enzyme';
import fetchMock from '';
import FavoritesViewer from './FavoritesViewer';

describe( 'FavoritesViewer', () => {
  it('should take a shit', () => {
    const FavoritesViewer = shallow(<FavoritesViewer />)

    console.log(FavoritesViewer.fin('div'))
    // expect(FavoritesViewer.find('div'))
  })
})
