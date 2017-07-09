import { shallow, mount } from 'enzyme';
import React from 'react';
import VehicleDisplay from './VehicleDisplay'

describe('VehicleDisplay component', function () {


  const vehicleData = [
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
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/5/",
        "http://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T15:36:25.724000Z",
      "edited": "2014-12-22T18:21:15.523587Z",
      "url": "http://swapi.co/api/vehicles/4/",
      "id": "652b4b1a-b312-468f-b0b3-a0a9adc49e8b",
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
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T16:01:52.434000Z",
      "edited": "2014-12-22T18:21:15.552614Z",
      "url": "http://swapi.co/api/vehicles/6/",
      "id": "409e723e-2c10-43a7-8436-66b9e8d44abe",
      "favorite": false
    },
    {
      "name": "X-34 landspeeder",
      "model": "X-34 landspeeder",
      "manufacturer": "SoroSuub Corporation",
      "cost_in_credits": "10550",
      "length": "3.4",
      "max_atmosphering_speed": "250",
      "crew": "1",
      "passengers": "1",
      "cargo_capacity": "5",
      "consumables": "unknown",
      "vehicle_class": "repulsorcraft",
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T16:13:52.586000Z",
      "edited": "2014-12-22T18:21:15.583700Z",
      "url": "http://swapi.co/api/vehicles/7/",
      "id": "251f1052-0133-4d61-881a-a82c0d30ab0a",
      "favorite": false
    },
    {
      "name": "TIE/LN starfighter",
      "model": "Twin Ion Engine/Ln Starfighter",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": "unknown",
      "length": "6.4",
      "max_atmosphering_speed": "1200",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "65",
      "consumables": "2 days",
      "vehicle_class": "starfighter",
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/2/",
        "http://swapi.co/api/films/3/",
        "http://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T16:33:52.860000Z",
      "edited": "2014-12-22T18:21:15.606149Z",
      "url": "http://swapi.co/api/vehicles/8/",
      "id": "665eccd2-1778-469e-820c-dfa1f53c5590",
      "favorite": false
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
      "id": "c926fcd5-8088-4f89-957d-356a6f3a8244",
      "favorite": false
    },
    {
      "name": "TIE bomber",
      "model": "TIE/sa bomber",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": "unknown",
      "length": "7.8",
      "max_atmosphering_speed": "850",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "none",
      "consumables": "2 days",
      "vehicle_class": "space/planetary bomber",
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/2/",
        "http://swapi.co/api/films/3/"
      ],
      "created": "2014-12-15T12:33:15.838000Z",
      "edited": "2014-12-22T18:21:15.667730Z",
      "url": "http://swapi.co/api/vehicles/16/",
      "id": "06242fc0-859c-4ca7-8f27-6c703718fd0c",
      "favorite": false
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
      "id": "7539c9d6-b183-4af4-864e-0552ac121c0d",
      "favorite": false
    },
    {
      "name": "AT-ST",
      "model": "All Terrain Scout Transport",
      "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
      "cost_in_credits": "unknown",
      "length": "2",
      "max_atmosphering_speed": "90",
      "crew": "2",
      "passengers": "0",
      "cargo_capacity": "200",
      "consumables": "none",
      "vehicle_class": "walker",
      "pilots": [
        "http://swapi.co/api/people/13/"
      ],
      "films": [
        "http://swapi.co/api/films/2/",
        "http://swapi.co/api/films/3/"
      ],
      "created": "2014-12-15T12:46:42.384000Z",
      "edited": "2014-12-22T18:21:15.761584Z",
      "url": "http://swapi.co/api/vehicles/19/",
      "id": "3099c9f4-a687-4254-8655-04a8f4fa4ef2",
      "favorite": false
    },
    {
      "name": "Storm IV Twin-Pod cloud car",
      "model": "Storm IV Twin-Pod",
      "manufacturer": "Bespin Motors",
      "cost_in_credits": "75000",
      "length": "7",
      "max_atmosphering_speed": "1500",
      "crew": "2",
      "passengers": "0",
      "cargo_capacity": "10",
      "consumables": "1 day",
      "vehicle_class": "repulsorcraft",
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/2/"
      ],
      "created": "2014-12-15T12:58:50.530000Z",
      "edited": "2014-12-22T18:21:15.783232Z",
      "url": "http://swapi.co/api/vehicles/20/",
      "id": "3261a073-c4ba-4b0d-b3e5-4b77887d25aa",
      "favorite": false
    },
    {
      "name": "Sail barge",
      "model": "Modified Luxury Sail Barge",
      "manufacturer": "Ubrikkian Industries Custom Vehicle Division",
      "cost_in_credits": "285000",
      "length": "30",
      "max_atmosphering_speed": "100",
      "crew": "26",
      "passengers": "500",
      "cargo_capacity": "2000000",
      "consumables": "Live food tanks",
      "vehicle_class": "sail barge",
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/3/"
      ],
      "created": "2014-12-18T10:44:14.217000Z",
      "edited": "2014-12-22T18:21:15.807906Z",
      "url": "http://swapi.co/api/vehicles/24/",
      "id": "c451299c-c4b4-4043-8d86-b16875e6c26b",
      "favorite": false
    }
  ]

  const mockFn = jest.fn();
  const wrapper = shallow(<VehicleDisplay displayCards={vehicleData} starItem={mockFn}/>)

  it('should render 10 vehicle cards', () => {
    expect(wrapper.find('.vehicle-card').length).toEqual(10);
  });

  it('should render the vehicles name in the card', () => {
    const vehicleName = wrapper.find('.vehicle-name').first()
    console.log(vehicleName.props().children);
    expect(vehicleName.props().children).toEqual('Sand Crawler')
  });

  it('should render the vehicles class in the card', () => {
    const vehicleClass = wrapper.find('.vehicle-class .value').first()
    expect(vehicleClass.props().children).toEqual('wheeled')
  });

  it('should render the vehicles model in the card', () => {
    const vehicleModel = wrapper.find('.vehicle-model .value').first()
    expect(vehicleModel.props().children).toEqual('Digger Crawler')
  });

  it('should render the vehicles passenger count in the card', () => {
    const vehiclePassengers = wrapper.find('.vehicle-passengers .value').first()
    expect(vehiclePassengers.props().children).toEqual('30')
  });

  it('should execute a fn when the favorite button is clicked', function () {
    const favBtn = wrapper.find('.fav-btn').first()

    favBtn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
    favBtn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(2)
  });

});
