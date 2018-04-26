'use strict'

const IMAGES = {
	house: 'https://i.imgur.com/3mtzoKb.png'
};


const GRID_ROWS = 5;
const GRID_COLS= 5;
const GRID_CELL_SIZE = 100;
const GRID_EMPTY = [247, 245, 165];
const GRID_DRAG = false;

const RESOURCES = {
	Population: '🚶',
	Money: '💵',
 	Houses: '🏠'
}

const STATE = {
	resources: {
		Population: 10,
    HomelessPopulation: 10,
	Money: 350,
    Houses: 350
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

class House extends Item {
	init() {
		this.quantity = 3;
	}
	get cost() {
		return {
			Money: 350
		}
	}
	get image() {
		return 'house'
	}


	onPlace() {
		STATE.Houses++;
	}
}

function init() {
	var house = new House();
	GAME.grid.place(new House(), 0, 0);
	GAME.grid.place(new House(), 1, 0);
	GAME.grid.place(new House(), 2, 0);



	let menu = new Menu('Shop', [
		new BuyButton('Buy House', House)
		//new Button('Buy Cure', Cure)
		]);
		defineHarvester('Money', function() {
			return STATE.resources.Houses;
		}, 60000);

  var population = new Population(); {
    if (population.house == 3) {
      return 'This house is full'
    }
  }
}

function main() {
  background(255,255,255);
}

// let ev = new Event('Natural Disaster', 'on no! an eathquake destroyed part of the city!',[
// 	new Action('rebuild houses', {money: 1000}, () => {
// 		STATE.Money -= 1000;
// 	}),
// 	new Action('Do nothing', () => {
// 		STATE.HomelessPopulation += 15;
// 	})
// 	]);