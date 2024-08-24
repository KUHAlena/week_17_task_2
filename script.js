//создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
    constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    }
    getInfo() {
    return `Type: ${this.type}, Brand: ${this.brand}`;
    }
getPrice() {
    return `Price: ${this.price}`;
    }
}

  //создать класс Car, который наследует от Transport. 
//Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;

class Car extends Transport {
    constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
    }

getDoorsCount() {
    return `Doors: ${this.doors}`;
    }
}
//создать класс Bike, который наследует от Transport. 
//Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
    return `Max Speed: ${this.maxSpeed} km/h`;
    }
}

    //Объект работы:
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];
  
const container = document.getElementById('transport-container');

data.forEach(item => {
    let transport;
    if (item.type === 'car') {
    transport = new Car(item.type, item.price, item.brand, item.doors);
    } else if (item.type === 'bike') {
        transport = new Bike(item.type, item.price, item.brand, item.maxSpeed);
    }

    const transportDiv = document.createElement('div');
    transportDiv.className = 'transport';

    const img = document.createElement('img');
    img.src = item.image;
    transportDiv.appendChild(img);

    const info = document.createElement('p');
    info.textContent = transport.getInfo();
    transportDiv.appendChild(info);

    const price = document.createElement('p');
    price.textContent = transport.getPrice();
    transportDiv.appendChild(price);
    if (item.type === 'car') {
    const doors = document.createElement('p');
    doors.textContent = transport.getDoorsCount();
    transportDiv.appendChild(doors);
    } else if (item.type === 'bike') {
    const maxSpeed = document.createElement('p');
    maxSpeed.textContent = transport.getMaxSpeed();
    transportDiv.appendChild(maxSpeed);
    }

    container.appendChild(transportDiv);
});
