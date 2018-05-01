'use strict'

const IMAGES = {
	house: 'https://i.imgur.com/zRfNtG8.png',
  person: 'https://i.imgur.com/9ncGi3a.png'
};


const GRID_ROWS = 7;
const GRID_COLS= 7;
const GRID_CELL_SIZE = 100;
const GRID_EMPTY = [247, 245, 165];
const GRID_DRAG = false;


const RESOURCES = {
	People: '🚶',
	Families: '❤️',
	Money: '💵',
	Houses: '🏠'
}

const STATE = {
	resources: {
		People: 10,
		Families: 10,
		Money: 1000,
		Houses: 3
	},
	cashPerHouse: 350
}

class People extends Item{
  init(){
    this.quantity = 3;
  }
  get image() {
    return 'person'
  }
  onClick() {
    STATE.resources.Families += this.quantity;
    STATE.resources.People -= this.quantity;
    STATE.resources.Money += this.quantity;
    every(function() {
      place(Person, 3, 3)
    },
    30000);
    every(function() {
    	place(Person, 3, 4)
    },
    15000);
    every(function() {
    	place(Person, 3, 5)
    },
    17000);
    this.destroy();
  }
}


class House extends Item{
  init(){
     this.quantity = 1;
  }
  get cost() {
    return {
      Money: 350
    }
  }
  get image() {
      return 'house'
  }
  onClick() {
    STATE.resources.money += STATE.cashPerHouse;

  }
}

// class HouseCell extends Cell {
// 	get color() {
// 		return [66, 134, 244];
// 	}


}
function init() {
	var house = new House();
	GAME.grid.place(house, 0, 0);
  var Person = new People();
  GAME.grid.place(Person, 3, 2);

	let menu = new Menu('Shop', [
		new BuyButton('Buy House', House)
		//new Button('Buy Cure', Cure)
		]);
    defineHarvester('Money', function() {
      return STATE.resources.Houses;
    }, 60000);





function main(){
  background(255,255,255)
}



// let ev = new Event('Natural Disaster', 'on no! an eathquake destroyed part of the city!',[
// 	new Action('rebuild houses', {money: 1000}, () => {
// 		STATE.Money -= 1000;
// 	}),
// 	new Action('Do nothing', () => {
// 		STATE.HomelessPopulation += 15;
// 	})
// 	]);


