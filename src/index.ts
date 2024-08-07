// sub class

// sub class merupakan turunan dari class baik itu property maupun method

class Smartphone {
  color: string;
  brand: string;
  model: string;
  isTKDN: boolean;

  constructor(color: string, brand: string, model: string) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.isTKDN = true;
  }

  charging(): void {
    console.log(`Smartphone ${this.model} lagi di cas`);
  }
}

const nokia = new Smartphone("merah", "nokia", "E63");
console.log("nokia", nokia);

//sub class

// sub class akan menurukan sifat dan perilaku dari class

// class Android extends Smartphone {

//   splitScreen(){
//     console.log('split sreen berhasil')
//   }
// }

// const xiaomi = new Android('red', 'xiaomi', 'xiaomi redmi 4')
// console.log('xiaoi', xiaomi)
// xiaomi.charging()
// xiaomi.splitScreen()

class Ios extends Smartphone {
  airDrop() {
    console.log("air drop berhasil");
  }
}

///Polymorphism

// merupakan suatu keadaan dimana sub class ingin mengubah sifat atau perilaku dari class

class Android extends Smartphone {
  layar: number;

  constructor(color: string, brand: string, model: string, layar: number) {
    super(color, brand, model);
    this.layar = layar;
  }

  splitScreen() {
    console.log("split sreen berhasil");
  }

  showbrand(){
    console.log(`brand handphone ini adlaah ${this.brand} dan ukuran ${this.layar}`)
  }

  charging(): void {
    super.charging()
    console.log(`Smartphone ${this.model} lagi di cas dengan fast charging`);
  }


}

const xiaomi = new Android("blue", "xiaomi", "12", 6);
console.log('xiaomi', xiaomi)
xiaomi.showbrand()
xiaomi.splitScreen()
xiaomi.charging()
