// Vehicle Class
class Vehicle {
  constructor (brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
  }

  getInfo () {
    return `${this.brand} ${this.model} (${this.year})`
  }
}

// Car Class - Inheriting Vehicle
class Car extends Vehicle {
  constructor (brand, model, year, fuelType) {
    super(brand, model, year)
    this.fuelType = fuelType
  }

  getCarInfo () {
    return `${this.getInfo()} - Fuel Type: ${this.fuelType}`
  }
}

// Bike Class - Inheriting Vehicle
class Bike extends Vehicle {
  constructor (brand, model, year, type) {
    super(brand, model, year)
    this.type = type
  }

  getBikeInfo () {  
    return `${this.getInfo()} - Type: ${this.type}`
  }
}

// Driver Class
class Driver {
  constructor (name, gender, vehicle) {
    this.name = name
    this.gender = gender
    this.vehicle = vehicle
  }

  getDriverInfo () {
    return `${this.name} (${this.gender}) is driving a ${this.vehicle.getInfo()}`
  }
}

const vehicles = [
  new Car('Toyota', 'Corolla', 2022, 'Petrol'),
  new Bike('Yamaha', 'FZ', 2021, 'Sport'),
  new Car('Honda', 'Civic', 2020, 'Diesel'),
  new Bike('Suzuki', 'GSX-R1000', 2023, 'Sport'),
  new Car('lamborghini', 'Urus', 2024 , '4.0 L V8 Electric'),
  new Car('BMW ', 'M5', 2024 , 'Petrol')

]

// Creating Driver Objects
const drivers = [
  new Driver('Ravi', 'Male', vehicles[0]),
  new Driver('ishita', 'Female', vehicles[1]),
  new Driver('rishiDev', 'Male', vehicles[2]),
  new Driver('Tinna', 'Female', vehicles[3]),
  new Driver('michak', 'Male', vehicles[4]),
  new Driver('Ruhi', 'Female', vehicles[5])
]

// Displaying Vehicle List in <ul>
const vehicleListElement = document.getElementById('vehicleList')

vehicles.forEach((vehicle, index) => {
  const listItem = document.createElement('li')
  listItem.textContent = vehicle.getInfo()
  listItem.style.cursor = 'pointer'

  // Show vehicle details on click
  listItem.onclick = function () {
    let details = ''
    if (vehicle instanceof Car) {
      details = vehicle.getCarInfo()
    } else if (vehicle instanceof Bike) {
      details = vehicle.getBikeInfo()
    }
    document.getElementById('vehicleDetails').innerHTML = `<p><strong>Vehicle Details:</strong> ${details}</p>`

    // Display Driver Info
    document.getElementById('driverDetails').innerHTML = `
            <p><strong>Driver Info:</strong> ${drivers[index].getDriverInfo()}</p>
        `
  }

  vehicleListElement.appendChild(listItem)
})
