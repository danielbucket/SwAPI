import React from 'react';
import { shallow, mount } from 'enzyme';
import LandingPage from './LandingPage';

describe('LandingPage component', function () {

  const favItems = [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        "http://swapi.co/api/people/1/",
        "http://swapi.co/api/people/2/",
        "http://swapi.co/api/people/3/",
        "http://swapi.co/api/people/4/",
        "http://swapi.co/api/people/5/",
        "http://swapi.co/api/people/6/",
        "http://swapi.co/api/people/7/",
        "http://swapi.co/api/people/8/",
        "http://swapi.co/api/people/9/",
        "http://swapi.co/api/people/10/",
        "http://swapi.co/api/people/12/",
        "http://swapi.co/api/people/13/",
        "http://swapi.co/api/people/14/",
        "http://swapi.co/api/people/15/",
        "http://swapi.co/api/people/16/",
        "http://swapi.co/api/people/18/",
        "http://swapi.co/api/people/19/",
        "http://swapi.co/api/people/81/"
      ],
      "planets": [
        "http://swapi.co/api/planets/2/",
        "http://swapi.co/api/planets/3/",
        "http://swapi.co/api/planets/1/"
      ],
      "starships": [
        "http://swapi.co/api/starships/2/",
        "http://swapi.co/api/starships/3/",
        "http://swapi.co/api/starships/5/",
        "http://swapi.co/api/starships/9/",
        "http://swapi.co/api/starships/10/",
        "http://swapi.co/api/starships/11/",
        "http://swapi.co/api/starships/12/",
        "http://swapi.co/api/starships/13/"
      ],
      "vehicles": [
        "http://swapi.co/api/vehicles/4/",
        "http://swapi.co/api/vehicles/6/",
        "http://swapi.co/api/vehicles/7/",
        "http://swapi.co/api/vehicles/8/"
      ],
      "species": [
        "http://swapi.co/api/species/5/",
        "http://swapi.co/api/species/3/",
        "http://swapi.co/api/species/2/",
        "http://swapi.co/api/species/1/",
        "http://swapi.co/api/species/4/"
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2015-04-11T09:46:52.774897Z",
      "url": "http://swapi.co/api/films/1/",
      "id": "df1bace6-95a1-44e5-8031-988583a01a79",
      "favorite": true,
      "type": "films"
    },
    {
      "title": "The Empire Strikes Back",
      "episode_id": 5,
      "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1980-05-17",
      "characters": [
        "http://swapi.co/api/people/1/",
        "http://swapi.co/api/people/2/",
        "http://swapi.co/api/people/3/",
        "http://swapi.co/api/people/4/",
        "http://swapi.co/api/people/5/",
        "http://swapi.co/api/people/10/",
        "http://swapi.co/api/people/13/",
        "http://swapi.co/api/people/14/",
        "http://swapi.co/api/people/18/",
        "http://swapi.co/api/people/20/",
        "http://swapi.co/api/people/21/",
        "http://swapi.co/api/people/22/",
        "http://swapi.co/api/people/23/",
        "http://swapi.co/api/people/24/",
        "http://swapi.co/api/people/25/",
        "http://swapi.co/api/people/26/"
      ],
      "planets": [
        "http://swapi.co/api/planets/4/",
        "http://swapi.co/api/planets/5/",
        "http://swapi.co/api/planets/6/",
        "http://swapi.co/api/planets/27/"
      ],
      "starships": [
        "http://swapi.co/api/starships/15/",
        "http://swapi.co/api/starships/10/",
        "http://swapi.co/api/starships/11/",
        "http://swapi.co/api/starships/12/",
        "http://swapi.co/api/starships/21/",
        "http://swapi.co/api/starships/22/",
        "http://swapi.co/api/starships/23/",
        "http://swapi.co/api/starships/3/",
        "http://swapi.co/api/starships/17/"
      ],
      "vehicles": [
        "http://swapi.co/api/vehicles/8/",
        "http://swapi.co/api/vehicles/14/",
        "http://swapi.co/api/vehicles/16/",
        "http://swapi.co/api/vehicles/18/",
        "http://swapi.co/api/vehicles/19/",
        "http://swapi.co/api/vehicles/20/"
      ],
      "species": [
        "http://swapi.co/api/species/6/",
        "http://swapi.co/api/species/7/",
        "http://swapi.co/api/species/3/",
        "http://swapi.co/api/species/2/",
        "http://swapi.co/api/species/1/"
      ],
      "created": "2014-12-12T11:26:24.656000Z",
      "edited": "2017-04-19T10:57:29.544256Z",
      "url": "http://swapi.co/api/films/2/",
      "id": "4c23052c-6884-45e9-b41e-1deb5abaa59f",
      "favorite": true,
      "type": "films"
    },
    {
      "title": "Return of the Jedi",
      "episode_id": 6,
      "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
      "director": "Richard Marquand",
      "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
      "release_date": "1983-05-25",
      "characters": [
        "http://swapi.co/api/people/1/",
        "http://swapi.co/api/people/2/",
        "http://swapi.co/api/people/3/",
        "http://swapi.co/api/people/4/",
        "http://swapi.co/api/people/5/",
        "http://swapi.co/api/people/10/",
        "http://swapi.co/api/people/13/",
        "http://swapi.co/api/people/14/",
        "http://swapi.co/api/people/16/",
        "http://swapi.co/api/people/18/",
        "http://swapi.co/api/people/20/",
        "http://swapi.co/api/people/21/",
        "http://swapi.co/api/people/22/",
        "http://swapi.co/api/people/25/",
        "http://swapi.co/api/people/27/",
        "http://swapi.co/api/people/28/",
        "http://swapi.co/api/people/29/",
        "http://swapi.co/api/people/30/",
        "http://swapi.co/api/people/31/",
        "http://swapi.co/api/people/45/"
      ],
      "planets": [
        "http://swapi.co/api/planets/5/",
        "http://swapi.co/api/planets/7/",
        "http://swapi.co/api/planets/8/",
        "http://swapi.co/api/planets/9/",
        "http://swapi.co/api/planets/1/"
      ],
      "starships": [
        "http://swapi.co/api/starships/15/",
        "http://swapi.co/api/starships/10/",
        "http://swapi.co/api/starships/11/",
        "http://swapi.co/api/starships/12/",
        "http://swapi.co/api/starships/22/",
        "http://swapi.co/api/starships/23/",
        "http://swapi.co/api/starships/27/",
        "http://swapi.co/api/starships/28/",
        "http://swapi.co/api/starships/29/",
        "http://swapi.co/api/starships/3/",
        "http://swapi.co/api/starships/17/",
        "http://swapi.co/api/starships/2/"
      ],
      "vehicles": [
        "http://swapi.co/api/vehicles/8/",
        "http://swapi.co/api/vehicles/16/",
        "http://swapi.co/api/vehicles/18/",
        "http://swapi.co/api/vehicles/19/",
        "http://swapi.co/api/vehicles/24/",
        "http://swapi.co/api/vehicles/25/",
        "http://swapi.co/api/vehicles/26/",
        "http://swapi.co/api/vehicles/30/"
      ],
      "species": [
        "http://swapi.co/api/species/5/",
        "http://swapi.co/api/species/6/",
        "http://swapi.co/api/species/8/",
        "http://swapi.co/api/species/9/",
        "http://swapi.co/api/species/10/",
        "http://swapi.co/api/species/15/",
        "http://swapi.co/api/species/3/",
        "http://swapi.co/api/species/2/",
        "http://swapi.co/api/species/1/"
      ],
      "created": "2014-12-18T10:39:33.255000Z",
      "edited": "2015-04-11T09:46:05.220365Z",
      "url": "http://swapi.co/api/films/3/",
      "id": "3a13a3fb-5b73-435d-b7ad-2d73e44fd892",
      "favorite": true,
      "type": "films"
    },
    {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a",
      "homeworld": {
        "name": "Tatooine",
        "rotation_period": "23",
        "orbital_period": "304",
        "diameter": "10465",
        "climate": "arid",
        "gravity": "1 standard",
        "terrain": "desert",
        "surface_water": "1",
        "population": "200000",
        "residents": [
          "http://swapi.co/api/people/1/",
          "http://swapi.co/api/people/2/",
          "http://swapi.co/api/people/4/",
          "http://swapi.co/api/people/6/",
          "http://swapi.co/api/people/7/",
          "http://swapi.co/api/people/8/",
          "http://swapi.co/api/people/9/",
          "http://swapi.co/api/people/11/",
          "http://swapi.co/api/people/43/",
          "http://swapi.co/api/people/62/"
        ],
        "films": [
          "http://swapi.co/api/films/5/",
          "http://swapi.co/api/films/4/",
          "http://swapi.co/api/films/6/",
          "http://swapi.co/api/films/3/",
          "http://swapi.co/api/films/1/"
        ],
        "created": "2014-12-09T13:50:49.641000Z",
        "edited": "2014-12-21T20:48:04.175778Z",
        "url": "http://swapi.co/api/planets/1/"
      },
      "films": [
        "http://swapi.co/api/films/2/",
        "http://swapi.co/api/films/5/",
        "http://swapi.co/api/films/4/",
        "http://swapi.co/api/films/6/",
        "http://swapi.co/api/films/3/",
        "http://swapi.co/api/films/1/"
      ],
      "species": {
        "name": "Droid",
        "classification": "artificial",
        "designation": "sentient",
        "average_height": "n/a",
        "skin_colors": "n/a",
        "hair_colors": "n/a",
        "eye_colors": "n/a",
        "average_lifespan": "indefinite",
        "homeworld": null,
        "language": "n/a",
        "people": [
          "http://swapi.co/api/people/2/",
          "http://swapi.co/api/people/3/",
          "http://swapi.co/api/people/8/",
          "http://swapi.co/api/people/23/",
          "http://swapi.co/api/people/87/"
        ],
        "films": [
          "http://swapi.co/api/films/2/",
          "http://swapi.co/api/films/7/",
          "http://swapi.co/api/films/5/",
          "http://swapi.co/api/films/4/",
          "http://swapi.co/api/films/6/",
          "http://swapi.co/api/films/3/",
          "http://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T15:16:16.259000Z",
        "edited": "2015-04-17T06:59:43.869528Z",
        "url": "http://swapi.co/api/species/2/"
      },
      "vehicles": [],
      "starships": [],
      "created": "2014-12-10T15:10:51.357000Z",
      "edited": "2014-12-20T21:17:50.309000Z",
      "url": "http://swapi.co/api/people/2/",
      "id": "2fb1ae56-79c9-4a08-9794-0638277400dc",
      "favorite": true,
      "type": "people"
    },
    {
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "hair_color": "n/a",
      "skin_color": "white, blue",
      "eye_color": "red",
      "birth_year": "33BBY",
      "gender": "n/a",
      "homeworld": {
        "name": "Naboo",
        "rotation_period": "26",
        "orbital_period": "312",
        "diameter": "12120",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "grassy hills, swamps, forests, mountains",
        "surface_water": "12",
        "population": "4500000000",
        "residents": [
          "http://swapi.co/api/people/3/",
          "http://swapi.co/api/people/21/",
          "http://swapi.co/api/people/36/",
          "http://swapi.co/api/people/37/",
          "http://swapi.co/api/people/38/",
          "http://swapi.co/api/people/39/",
          "http://swapi.co/api/people/42/",
          "http://swapi.co/api/people/60/",
          "http://swapi.co/api/people/61/",
          "http://swapi.co/api/people/66/",
          "http://swapi.co/api/people/35/"
        ],
        "films": [
          "http://swapi.co/api/films/5/",
          "http://swapi.co/api/films/4/",
          "http://swapi.co/api/films/6/",
          "http://swapi.co/api/films/3/"
        ],
        "created": "2014-12-10T11:52:31.066000Z",
        "edited": "2014-12-20T20:58:18.430000Z",
        "url": "http://swapi.co/api/planets/8/"
      },
      "films": [
        "http://swapi.co/api/films/2/",
        "http://swapi.co/api/films/5/",
        "http://swapi.co/api/films/4/",
        "http://swapi.co/api/films/6/",
        "http://swapi.co/api/films/3/",
        "http://swapi.co/api/films/1/",
        "http://swapi.co/api/films/7/"
      ],
      "species": {
        "name": "Droid",
        "classification": "artificial",
        "designation": "sentient",
        "average_height": "n/a",
        "skin_colors": "n/a",
        "hair_colors": "n/a",
        "eye_colors": "n/a",
        "average_lifespan": "indefinite",
        "homeworld": null,
        "language": "n/a",
        "people": [
          "http://swapi.co/api/people/2/",
          "http://swapi.co/api/people/3/",
          "http://swapi.co/api/people/8/",
          "http://swapi.co/api/people/23/",
          "http://swapi.co/api/people/87/"
        ],
        "films": [
          "http://swapi.co/api/films/2/",
          "http://swapi.co/api/films/7/",
          "http://swapi.co/api/films/5/",
          "http://swapi.co/api/films/4/",
          "http://swapi.co/api/films/6/",
          "http://swapi.co/api/films/3/",
          "http://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T15:16:16.259000Z",
        "edited": "2015-04-17T06:59:43.869528Z",
        "url": "http://swapi.co/api/species/2/"
      },
      "vehicles": [],
      "starships": [],
      "created": "2014-12-10T15:11:50.376000Z",
      "edited": "2014-12-20T21:17:50.311000Z",
      "url": "http://swapi.co/api/people/3/",
      "id": "ff82c65c-51b8-4f37-90d5-c4f9d95da5e3",
      "favorite": true,
      "type": "people"
    },
    {
      "name": "Hoth",
      "rotation_period": "23",
      "orbital_period": "549",
      "diameter": "7200",
      "climate": "frozen",
      "gravity": "1.1 standard",
      "terrain": "tundra, ice caves, mountain ranges",
      "surface_water": "100",
      "population": "unknown",
      "residents": [],
      "films": [
        "http://swapi.co/api/films/2/"
      ],
      "created": "2014-12-10T11:39:13.934000Z",
      "edited": "2014-12-20T20:58:18.423000Z",
      "url": "http://swapi.co/api/planets/4/",
      "id": "dde1f6c5-7b12-411b-9264-916f735196fe",
      "favorite": true,
      "type": "planets"
    },
    {
      "name": "Naboo",
      "rotation_period": "26",
      "orbital_period": "312",
      "diameter": "12120",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grassy hills, swamps, forests, mountains",
      "surface_water": "12",
      "population": "4500000000",
      "residents": [
        "R2-D2",
        "Palpatine",
        "Jar Jar Binks",
        "Roos Tarpals",
        "Rugor Nass",
        "Ric Olié",
        "Quarsh Panaka",
        "Gregar Typho",
        "Cordé",
        "Dormé",
        "Padmé Amidala"
      ],
      "films": [
        "http://swapi.co/api/films/5/",
        "http://swapi.co/api/films/4/",
        "http://swapi.co/api/films/6/",
        "http://swapi.co/api/films/3/"
      ],
      "created": "2014-12-10T11:52:31.066000Z",
      "edited": "2014-12-20T20:58:18.430000Z",
      "url": "http://swapi.co/api/planets/8/",
      "id": "0d4c3fbb-6c4e-411c-bbe9-c05f22eebf7c",
      "favorite": true,
      "type": "planets"
    },
    {
      "name": "Snowspeeder",
      "model": "t-47 airspeeder",
      "manufacturer": "Incom corporation",
      "cost_in_credits": "unknown",
      "length": "4.5",
      "max_atmosphering_speed": "650",
      "crew": "2",
      "passengers": "0",
      "cargo_capacity": "10",
      "consumables": "none",
      "vehicle_class": "airspeeder",
      "pilots": [
        "http://swapi.co/api/people/1/",
        "http://swapi.co/api/people/18/"
      ],
      "films": [
        "http://swapi.co/api/films/2/"
      ],
      "created": "2014-12-15T12:22:12Z",
      "edited": "2014-12-22T18:21:15.623033Z",
      "url": "http://swapi.co/api/vehicles/14/",
      "id": "562d247e-b884-4c29-b785-8083fb8f6a14",
      "favorite": true,
      "type": "vehicles"
    },
    {
      "name": "AT-AT",
      "model": "All Terrain Armored Transport",
      "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
      "cost_in_credits": "unknown",
      "length": "20",
      "max_atmosphering_speed": "60",
      "crew": "5",
      "passengers": "40",
      "cargo_capacity": "1000",
      "consumables": "unknown",
      "vehicle_class": "assault walker",
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/2/",
        "http://swapi.co/api/films/3/"
      ],
      "created": "2014-12-15T12:38:25.937000Z",
      "edited": "2014-12-22T18:21:15.714673Z",
      "url": "http://swapi.co/api/vehicles/18/",
      "id": "bbfd903c-a48c-4e61-ba88-5c0dc8497c5d",
      "favorite": true,
      "type": "vehicles"
    }
  ]
  const mockFn = jest.fn();
  const wrapper = mount(
    <LandingPage
      favItems={favItems}
      favsCount={favItems.length}
      starItem={mockFn}
    />
  );
  const FilmDisplay = wrapper.find('FilmDisplay')
  const PeopleDisplay = wrapper.find('PeopleDisplay')
  const PlanetDisplay = wrapper.find('PlanetDisplay')
  const VehicleDisplay = wrapper.find('VehicleDisplay')

  it('should render all 4 types of display components (Film, People, Planet, and Vehicle)', () => {
    expect(FilmDisplay.length).toEqual(1)
    expect(PeopleDisplay.length).toEqual(1)
    expect(PlanetDisplay.length).toEqual(1)
    expect(VehicleDisplay.length).toEqual(1)
  });

  it('should render an amount of cards in each of the 4 categories equal to the amount of favorites in each category', () => {
    const grouped = favItems.reduce( (obj, cVal) => {
      switch (cVal.type) {
        case 'films':     obj.films.push(cVal);    break;
        case 'people':    obj.people.push(cVal);   break;
        case 'planets':   obj.planets.push(cVal);  break;
        case 'vehicles':  obj.vehicles.push(cVal); break;
        default:
      }
      return obj
    }, {films:[], people:[], planets:[], vehicles:[]})

    expect(FilmDisplay.find('.film-card').length).toEqual(grouped.films.length);
    expect(PeopleDisplay.find('.people-cards').length).toEqual(grouped.people.length);
    expect(PlanetDisplay.find('.planet-card').length).toEqual(grouped.planets.length);
    expect(VehicleDisplay.find('.vehicle-card').length).toEqual(grouped.vehicles.length);
  });

  it('should tell you how many total favorites you have', () => {
    const favTotal = wrapper.find('.favorites-total')
    expect(favItems.length).toEqual(favTotal.props().children)
  });

});
