"use strict";
// let age: number = 12345;
// let nama: string = "23333";
// let siswa: {
//   nama: string;
//   umur: number;
//   isPelajar: boolean;
//   alamat?: string;
// };
// siswa = {
//   nama: "faizal",
//   umur: 17,
//   isPelajar: false,
//   alamat: "jakara",
// };
// siswa = {
//   nama: "akbar",
//   umur: 18,
//   isPelajar: true,
// };
// // Interface untuk mendefinisikan tipe data Object
// interface Produck {
//   id: number;
//   name: string;
//   price: number;
//   note?: string;
//   isPremium: boolean;
// }
// const produk1: Produck = {
//   id: 1,
//   name: "HP",
//   price: 40000,
//   isPremium: false,
// };
// const produk2: Produck = {
//   id: 2,
//   name: "TV",
//   price: 50000,
//   isPremium: false,
//   note: "bagus",
// };
// //Nested Object
// interface ProdukDetail {
//   manufacture: string;
//   year: number;
// }
// interface ProdukItem {
//   id: number;
//   produkName: string;
//   price: number;
//   detail: ProdukDetail;
// }
// const produk3: ProdukItem = {
//   id: 1,
//   produkName: "mobil",
//   price: 100000000,
//   detail: {
//     year: 2024,
//     manufacture: "toyota",
//   },
// };
// console.log("pabrik", produk3.detail.manufacture);
// console.log("pabrik", produk3.detail);
// // array
// const a = [1, 2, 3, 4, 5];
// //square bracket
// let b: number[];
// b = [1, 2, 3, 4, 5];
// let c: string[];
// c = ["faris", "akbar", "faisal"];
// let d: (string | number | boolean)[];
// d = [1, "satu", 2, false];
// let e: { nama: string; umur: number }[] = [
//   { nama: "akbar", umur: 17 },
//   { nama: "akbar", umur: 17 },
// ];
// //buatlah tipe data dari soal berikut
// // nomor 1
// let indentias = {
//   nama: "ihsan",
//   tempat: "sukabumi",
//   umur: 27,
//   anak: [
//     { nama: "a", umur: 10 },
//     { nama: "b", umur: 12, isSekolah: true },
//   ],
// };
// // nomor 2
// let hp = [
//   {
//     detail: {
//       nama: "oppo",
//       ukuran: 16,
//     },
//     jumlah: [
//       {
//         negara: "indonesia",
//         jumlah: 199999,
//         pabrik: 50,
//       },
//       {
//         negara: "indonesia",
//         jumlah: 199999,
//         pabrik: "50",
//       },
//     ],
//   },
// ];
// // jawaban nomor 1
// interface anak {
//   nama: string;
//   umur: number;
//   isSekolah?: boolean;
// }
// [];
// interface indentias {
//   nama: string;
//   tempat: string;
//   umur: number;
//   anak: anak;
// }
// let dataDiri = [
//   {
//     nama: "fulan",
//     alamat: "jonggol",
//     umur: 27,
//     status: [
//       {
//         isSekolah: false,
//       },
//       { isSekolah: true },
//     ],
//   },
// ];
// //jawaban
// interface status {
//   isSekolah: Boolean;
// }
// [];
// interface dataDiri {
//   nama: string;
//   alamat: string;
//   umur: number;
//   status: status;
// }
// [];
// let namaj :(string | number)[]  = ['ihsan', 'arga', 1,2,3]
// function penjumlahan() {
//   // kode yang akan dijalankan
//   return "ok";
// }
// //rumus luas persegi panjang = panjang x lebar
// function rumusLuasPP(panjang: number, lebar: number) {
//   const luas = panjang * lebar;
//   return luas
// }
// console.log(penjumlahan());
// const persegi1 = rumusLuasPP(10, 2);
// const persegi2 = rumusLuasPP(10, 6);
// const persegi3 = rumusLuasPP(8, 4);
// console.log(persegi1);
// console.log(persegi2);
// console.log(persegi3);
//buatlah function yang menghitung volume balok
function volumebalok(panjang, lebar, tinggi) {
    const balok = lebar * panjang * tinggi;
    return balok;
}
const balok1 = volumebalok(10, 2, 3);
const balok2 = volumebalok(10, 2, 1);
// console.log(balok1);
function penjumlahan(a, b, c = 0) {
    const hasil = a + b + c;
    return hasil;
}
const hasil1 = penjumlahan(10, 5, 2);
const hasil2 = penjumlahan(10, 5);
// console.log(hasil1, hasil2);
function pembagian({ a, b, c = 1 }) {
    const hasil = (a / b) * c;
    return hasil;
}
const kali1 = pembagian({ a: 5, b: 10, c: 2 });
const kali2 = pembagian({ b: 5, a: 10 });
console.log("kali1", kali1);
console.log("kali2", kali2);
// function tidak memiliki return
function satu({ a, b }) {
    console.log(a, b);
}
function dua({ a, b }) {
    return 100;
}
function tiga({ a, b }) {
    return false;
}
function empat({ a, b }) {
    return {
        msg: "berhasil",
        status: "ok",
    };
}
function lima() {
    return {
        msg: 'ok',
        status: 'ok'
    };
}
satu({ a: 1, b: "2" });
// Buatlah sebuah function untuk mengecak apakah suatu bilangan ada atau tidak dalam suatu array dan memiliki return true atau false , contoh kita memiliki array [1,2,3,4,5,6] , apakaah 3 ada didalam array
const array = [1, 2, 3, 4, 5];
function cariArray(arr, value) {
    return arr.includes(value);
}
cariArray(array, 3);
cariArray(array, 8);
