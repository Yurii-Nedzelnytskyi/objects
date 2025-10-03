const car = {
  producer: 'Renault',
  model: 'Kangoo',
  year: 2013,
  averageSpeed: 85,
  fuelTank: 60,
  fuelConsumption: 6.5,
  drivers: [],

  showInfo() {
    console.log(`Авто:
      Виробник: ${this.producer}
      Модель: ${this.model}
      Рік випуску: ${this.year}
      Середня швидкість: ${this.averageSpeed} км/год
      Обсяг паливного баку: ${this.fuelTank} л
      Витрата палива: ${this.fuelConsumption} л/100 км
      Водії: ${this.drivers.length > 0 ? this.drivers.join(", ") : 'немає'}`);
  },

  AddDriver(name) {
    if (!this.drivers.includes(name)) {
      this.drivers.push(name);
      console.log(`Водія ${name} додано.`);
    } else {
      console.log(`Водій ${name} вже є у списку.`);
    }
  },

  checkDriver(name) {
    if (this.drivers.includes(name)) {
      console.log(`${name} є серед водіїв. В списку є водії: ${this.drivers.join(', ')}`);
    } else {
      console.log(`${name} відсутній серед водіїв. В списку є водії: ${this.drivers.join(', ')}`);
    }
  },

  trip(distance) {
    let time = distance / this.averageSpeed;
    let breaks = Math.floor(time / 4);
    let totalTime = time + breaks;
    let fuelNeeded = (distance / 100) * this.fuelConsumption;

    console.log(`Для подолання ${distance} км потрібно:
    Час: ${totalTime.toFixed(2)} год
    (з ${breaks} перервами по 1 годині)
    Паливо: ${fuelNeeded.toFixed(2)} л.`);
  }
};

car.showInfo();
car.AddDriver('Jon');
car.AddDriver('Jon');
car.AddDriver('Jonni');
car.AddDriver('Billi');
car.AddDriver('Donald');
car.showInfo();
car.AddDriver('Miki');
car.showInfo();
car.checkDriver('Rafal');
car.checkDriver('Jon');
car.trip(500);
car.trip('5000');

