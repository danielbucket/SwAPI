export const peopleStub = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
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
    },
    "species": {
      "name": "Human",
      "classification": "mammal",
      "designation": "sentient",
      "average_height": "180",
      "skin_colors": "caucasian, black, asian, hispanic",
      "hair_colors": "blonde, brown, black, red",
      "eye_colors": "brown, blue, green, hazel, grey, amber",
      "average_lifespan": "120",
      "language": "Galactic Basic",
    },
    "id": "c5d5f2a6-f685-4f4d-914b-0b47637f6b69",
    "favorite": false
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
    },
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
    },
    "id": "2a491405-5d4a-4747-a971-4e737896cf3f",
    "favorite": false
  }
]

export const filmStub = [{
  "count": 7,
  "next": null,
  "previous": null,
  "results": [{
      "title": "The Phantom Menace",
      "episode_id": 1,
      "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "1999-05-19",
      "id": "86e4e169-295c-4b10-ada5-7de550b85e85",
      "favorite": false
    },
    {
      "title": "Attack of the Clones",
      "episode_id": 2,
      "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "2002-05-16",
      "id": "8b250cf2-2e88-446a-96ad-5d0b0bec727f",
      "favorite": false
    }]
}]

export const planetStub = [{
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "grasslands, mountains",
    "surface_water": "40",
    "population": "2000000000",
    "residents": [
      "Leia Organa",
      "Bail Prestor Organa",
      "Raymus Antilles"
    ],
    "id": "fd27d157-bb7d-4c09-bb8c-c911411869a3",
    "favorite": false
  },
  {
    "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
    "climate": "temperate, tropical",
    "gravity": "1 standard",
    "terrain": "jungle, rainforests",
    "surface_water": "8",
    "population": "1000",
    "residents": [],
    "id": "855e7fee-28b9-4f83-adf5-17dcebbbff77",
    "favorite": false
  }
]

export const vehicleStub = {
  "count": 39,
  "next": "http://swapi.co/api/vehicles/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "manufacturer": "Corellia Mining Corporation",
      "cost_in_credits": "150000",
      "length": "36.8",
      "max_atmosphering_speed": "30",
      "crew": "46",
      "passengers": "30",
      "cargo_capacity": "50000",
      "consumables": "2 months",
      "vehicle_class": "wheeled",
      "id": "89a7d8d6-535f-403d-b053-268912314334",
      "favorite": false
    },
    {
      "name": "T-16 skyhopper",
      "model": "T-16 skyhopper",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": "14500",
      "length": "10.4",
      "max_atmosphering_speed": "1200",
      "crew": "1",
      "passengers": "1",
      "cargo_capacity": "50",
      "consumables": "0",
      "vehicle_class": "repulsorcraft",
      "id": "af9ab7ec-e95e-45f0-a51a-8a46a4eb5fa6",
      "favorite": false
    }
  ]
}
