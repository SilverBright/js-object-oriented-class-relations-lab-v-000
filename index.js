let store = { drivers: [], passengers: [], trips: []}


let driverId = 0;

class Driver {
	constructor(name) {
		this.id = ++driverId;
		this.name = name;

		store.drivers.push(this);
	}

	trips() {
    	return store.trips.filter(f => {
      	return f.driverId = this.id
     	})
    }

    passengers() {
    	return store.passengers.filter(f =>  {
      	return f.driverId = this.id
    	})
  	}
}


let passengerId = 0

class Passenger {
	constructor(name) {
		this.id = ++passengerId;
		this.name = name;

		store.passengers.push(this);
	}

	trips() {
    	return store.trips.filter(f => {
      	return f.tripsId = this.id
    	})
    }
     drivers() {
    	return store.drivers.filter(f => {
      	return f.driverId = this.id
    	})
  	}
}


let tripId = 0

class Trip {
	constructor (driver, passenger) {
		this.id = ++tripId
		this.driverId = driver.id
		this.passengerId = passenger.id

		store.trips.push(this)
	}

	passenger() {
    	return store.passengers.find(f => {
      	return f.tripId = this.id
    	})
  	}

  	driver() {
    	return store.drivers.find(f => {
      	return driverId = this.id
    	})
  	}
}