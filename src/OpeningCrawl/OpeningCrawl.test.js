import { shallow, mount } from 'enzyme';
import React from 'react';
import fetchMock from 'fetch-mock'
import OpeningCrawl from './OpeningCrawl'

describe('<OpeningCrawl /> component', function () {

  const filmData = {
    "title": "Attack of the Clones",
    "episode_id": 2,
    "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
    "director": "George Lucas",
    "producer": "Rick McCallum",
    "release_date": "2002-05-16",
    "characters": [
      "http://swapi.co/api/people/2/",
      "http://swapi.co/api/people/3/",
      "http://swapi.co/api/people/6/",
      "http://swapi.co/api/people/7/",
      "http://swapi.co/api/people/10/",
      "http://swapi.co/api/people/11/",
      "http://swapi.co/api/people/20/",
      "http://swapi.co/api/people/21/",
      "http://swapi.co/api/people/22/",
      "http://swapi.co/api/people/33/",
      "http://swapi.co/api/people/36/",
      "http://swapi.co/api/people/40/",
      "http://swapi.co/api/people/43/",
      "http://swapi.co/api/people/46/",
      "http://swapi.co/api/people/51/",
      "http://swapi.co/api/people/52/",
      "http://swapi.co/api/people/53/",
      "http://swapi.co/api/people/58/",
      "http://swapi.co/api/people/59/",
      "http://swapi.co/api/people/60/",
      "http://swapi.co/api/people/61/",
      "http://swapi.co/api/people/62/",
      "http://swapi.co/api/people/63/",
      "http://swapi.co/api/people/64/",
      "http://swapi.co/api/people/65/",
      "http://swapi.co/api/people/66/",
      "http://swapi.co/api/people/67/",
      "http://swapi.co/api/people/68/",
      "http://swapi.co/api/people/69/",
      "http://swapi.co/api/people/70/",
      "http://swapi.co/api/people/71/",
      "http://swapi.co/api/people/72/",
      "http://swapi.co/api/people/73/",
      "http://swapi.co/api/people/74/",
      "http://swapi.co/api/people/75/",
      "http://swapi.co/api/people/76/",
      "http://swapi.co/api/people/77/",
      "http://swapi.co/api/people/78/",
      "http://swapi.co/api/people/82/",
      "http://swapi.co/api/people/35/"
    ],
    "planets": [
      "http://swapi.co/api/planets/8/",
      "http://swapi.co/api/planets/9/",
      "http://swapi.co/api/planets/10/",
      "http://swapi.co/api/planets/11/",
      "http://swapi.co/api/planets/1/"
    ],
    "starships": [
      "http://swapi.co/api/starships/21/",
      "http://swapi.co/api/starships/39/",
      "http://swapi.co/api/starships/43/",
      "http://swapi.co/api/starships/47/",
      "http://swapi.co/api/starships/48/",
      "http://swapi.co/api/starships/49/",
      "http://swapi.co/api/starships/32/",
      "http://swapi.co/api/starships/52/",
      "http://swapi.co/api/starships/58/"
    ],
    "vehicles": [
      "http://swapi.co/api/vehicles/4/",
      "http://swapi.co/api/vehicles/44/",
      "http://swapi.co/api/vehicles/45/",
      "http://swapi.co/api/vehicles/46/",
      "http://swapi.co/api/vehicles/50/",
      "http://swapi.co/api/vehicles/51/",
      "http://swapi.co/api/vehicles/53/",
      "http://swapi.co/api/vehicles/54/",
      "http://swapi.co/api/vehicles/55/",
      "http://swapi.co/api/vehicles/56/",
      "http://swapi.co/api/vehicles/57/"
    ],
    "species": [
      "http://swapi.co/api/species/32/",
      "http://swapi.co/api/species/33/",
      "http://swapi.co/api/species/2/",
      "http://swapi.co/api/species/35/",
      "http://swapi.co/api/species/6/",
      "http://swapi.co/api/species/1/",
      "http://swapi.co/api/species/12/",
      "http://swapi.co/api/species/34/",
      "http://swapi.co/api/species/13/",
      "http://swapi.co/api/species/15/",
      "http://swapi.co/api/species/28/",
      "http://swapi.co/api/species/29/",
      "http://swapi.co/api/species/30/",
      "http://swapi.co/api/species/31/"
    ],
    "created": "2014-12-20T10:57:57.886000Z",
    "edited": "2015-04-11T09:45:01.623982Z",
    "url": "http://swapi.co/api/films/5/"
  }

  const fakeFetch = fetchMock.get('http://swapi.co/api/films/5', filmData)

  const fakeFetchResponse = fakeFetch.routes[0].response

  it('should render the Title of the film', () => {
    const wrapper = shallow(<OpeningCrawl filmData={fakeFetchResponse} />)
    const filmTitle = wrapper.find('.movie-title')

    expect(filmTitle.props().children).toEqual('Attack of the Clones');
  });

  it('should render the Release Date of the film', () => {
    const wrapper = shallow(<OpeningCrawl filmData={fakeFetchResponse} />)

    const releaseYear = wrapper.find('.release-year')
    expect(releaseYear.props().children).toEqual([ '(', '2002-05-16', ')' ]);
  });

  it('should render the Opening Crawl text of the film', () => {
    const wrapper = shallow(<OpeningCrawl filmData={fakeFetchResponse} />)
    const crawlText = wrapper.find('.crawl-text p')

    expect(crawlText.props().children).toEqual(filmData.opening_crawl);
  });


});
