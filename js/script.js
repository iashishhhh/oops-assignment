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

// Car and Bike Classes - Inheriting Vehicle
class Car extends Vehicle {
  constructor (brand, model, year, fuelType) {
    super(brand, model, year)
    this.fuelType = fuelType
  }
  getDetails () {
    return `${this.getInfo()} - Fuel Type: ${this.fuelType}`
  }
}

class Bike extends Vehicle {
  constructor (brand, model, year, type) {
    super(brand, model, year)
    this.type = type
  }
  getDetails () {
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
    return `${this.name} (${this.gender}) is driving  ${this.vehicle.getInfo()}`
  }
}

// Vehicles and Drivers List
const vehicles = [
  new Car('Toyota', 'Corolla', 2022, 'Petrol'),
  new Bike('Yamaha', 'FZ', 2021, 'Sport'),
  new Car('Honda', 'Civic', 2020, 'Diesel'),
  new Bike('Suzuki', 'GSX-R1000', 2023, 'Sport'),
  new Car('Lamborghini', 'Urus', 2024, 'Electric'),
  new Car('BMW', 'M5', 2024, 'Petrol'),
  new Car('Jeep Compass', 'SUV', 2024, 'Diesel')
]

const drivers = [
  new Driver('Ravi', 'Male', vehicles[0]),
  new Driver('Ishita', 'Female', vehicles[1]),
  new Driver('RishiDev', 'Male', vehicles[2]),
  new Driver('Tinna', 'Female', vehicles[3]),
  new Driver('Michak', 'Male', vehicles[4]),
  new Driver('Ruhi', 'Female', vehicles[5]),
  new Driver('Aadi', 'Male', vehicles[6])
]

// Display Vehicles List
const vehicleListElement = document.getElementById('vehicleList')
const vehicleDetails = document.getElementById('vehicleDetails')
const driverDetails = document.getElementById('driverDetails')

vehicles.forEach((vehicle, index) => {
  const listItem = document.createElement('li')
  listItem.textContent = vehicle.getInfo()
  listItem.style.cursor = 'pointer'

  listItem.onclick = () => {
    vehicleDetails.innerHTML = `<p><strong>Vehicle Details:</strong> ${vehicle.getDetails()}</p>`
    driverDetails.innerHTML = `<span><strong>Driver Info:</strong> ${drivers[index].getDriverInfo()}</span>`
  }

  vehicleListElement.appendChild(listItem)
})
