'use strict'

const IMAGES = {
	house: 'https://i.imgur.com/14luBmT.png'
};


const GRID_ROWS = 10;
const GRID_COLS= 10;
const GRID_CELL_SIZE = 100;
const GRID_EMPTY = [247, 245, 165];

const RESOURCES = {
	Population: '🚶',
	Money: '💵',
  Houses: '🏠'
}

const STATE = {
	resources: {
		Population: 10,
    HomelessPopulation: 10,
		Money: 1000,
    Houses: 3
	},
	cashPerHouse: 350
}

class Population extends Item{
  init(){
    this.quantity = 10;
  }
  get cost() {
    return{}
  }
}

class House extends Item{
  init(){
    this.quantity = 3;
    STATE.resources.HomelessPopulation -= 3;
    STATE.resources.HomelessPopulation = Math.max(0, STATE.resources.HomelessPopulation)
  }
  get image() {

  }
}

function init() {
	var house = new House();
	GAME.grid.place(House, 0, 0);

	var menu = new Menu('Shop', [
		new Button('Buy House', House),
		//new Button('Buy Cure', Cure)
		]);

  var population = new Population(); {
    if (population.house == 3) {
      return 'This house is full'
    }
  }
}

function main() {
  background(255,255,255);
}

let ev = new Event('Natural Disaster', 'on no! an eathquake destroyed part of the city!',[
	new Action('rebuild houses', {money: 1000}, () => {
		STATE.Money -= 1000;
	}),
	new Action('Do nothing', () => {
		STATE.HomelessPopulation += 15;
	})
	]);