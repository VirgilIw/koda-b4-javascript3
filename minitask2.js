// build in method

// 1. string

/* length

fungsi length adalah untuk mengakses seluru nilai atau isi didalam sebuah variabel

*/

// contoh length
const age = [20, 25, 21, 22, 26];
let panjang = age.length;
console.log(panjang);

/* slice

fungsi slice adalah memotong bagian yang kita pilih, caranya adalah =
Saat kita menulis method slice(), parameternya terdapat 2 yaitu start position, end position

- Start position = bagian pertama di sebuah variabel yang dihitung berdasarkan panjang variabel, start dimulai dari 0

- End position = bagian akhir atau batas yang ingin kita potong

*/

let hobby = "bermain basket di gor UNY jam 4 sore";
let potong = hobby.slice(0, 15);
console.log(potong);

/* split

fungsi split adalah memotong string menjadi array, parameter pertama untuk memotong bagian mana, parameter kedua itu batas yang mau diambil

*/

let laptop = "asus,hp,macBook,lenovo";
let laptopSplit = laptop.split(",", 2);
console.log(laptopSplit);

/* toUpperCase

mengubah text yang awalnya huruf kecil semuanya menjadi huruf besar

*/

let textToUpper = "Makan Ikan";
console.log(textToUpper.toUpperCase());

/* toLowerCase

kebalikan dari toUpperCase, toLowerCase yang awalnya huruf besar semua, menjadi kecil semua
*/

console.log(textToUpper.toLowerCase());

/* trim

untuk menghilangkan spasi di awal dan akhir kalimat dalam sebuah variabel
*/

let sapa = "   Hello World    ";

console.log(sapa);
console.log(sapa.trim());

/* trim start

menghilangkan spasi di awal kalimat
*/

let saySomething = "           Hai babe      ";

console.log(saySomething.trimStart());

/* trim end

menghilangkan spasi di akhir kalimat

*/

let replyAnswer = "    Hai darling    ";
console.log(replyAnswer.trimEnd());

/*
string.at

diperkenalkan saat maret 2022 agar bisa mengakses indeks dengan nilai positif maupun negatif
negatif artinya dihitung dari belakang
*/
let check = "akupengentidur";

console.log(check[-2]); // undefined, tanpa at ga bisa pakai -2
console.log(check.at(-2));
console.log(check.at(4));

// 2. Number

/* toString 

fungsi toString menjadikan data sebuah variabel bertipe apapun menjadi string

*/

let x = [1, 2, 3, 4];
let y = 1;
let v = true;
console.log(x.toString());
console.log(y.toString());
console.log(typeof v.toString());

/* valueOf

fungsi untuk melihat nilai mentah / primitive dalam sebuah objek atau variabel biasa
*/

const datas = {
  name: "gil",
  job: "programmer",
};
let j = 123;
let b = false;
let d = new Date();

console.log(d.valueOf()); // (timestamp dalam ms, angka mentah dari Date)
console.log(j.valueOf());
console.log(typeof b);
console.log(datas.valueOf());

/* toFixed

fungsi toFixed untuk membulatkan jumlah angka dibelakang koma sesuai yang kita inginkan
*/
let toFix = 9.656;

console.log(toFix.toFixed(0));
console.log(toFix.toFixed(1));
console.log(toFix.toFixed(2));

/* toExponential

fungsinya mengubah angka menjadi bentuk notasi ilmiah (exponential / scientific notation).
*/

let toExpo = 8.665;
console.log(toExpo.toExponential());

/* toPrecision

mengembalikan angka dalam bentuk string, dengan jumlah digit signifikan (total digit, bukan cuma di belakang koma) sebanyak n.

isi dari argumen dalam toPrecision dimulai dari 1 sampai 100 tidak bisa dari 0 atau lebih dari 100
*/

let precision = 9.656;
console.log(precision.toPrecision(1));
console.log(precision.toPrecision(11));

// 3. object

/*
Object.keys()

untuk mengakses semua key dalam sebuah object
*/

const company = {
  name: "nastha",
  adress: "jl. perumahan depok maharaja",
};

console.log(Object.keys(company));

/* 

Object.values()
untuk mengakses semua value dalam sebuah object

*/

const typeOfBaterai = {
  name: "alkaline",
  price: 22000,
};
console.log(Object.values(typeOfBaterai));

/* Object.entries()

 untuk mengakses seluruh key dan value jika ada lebih dari 1 dalam sebuah object
*/

const priceIkan = [
  {
    name: "tuna",
    price: 50000,
  },
  {
    name: "nila",
    price: 20000,
  },
];

console.log(Object.entries(priceIkan));

// 4. array

/* slice
Memotong bagian array dimulai dari elemen array yang dipilih jadi pilih 1 maka array yang 0 dihapus
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);

/* shift

memotong indeks ke 0 dalam sebuah array
*/

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits2.shift());
console.log(fruits2);

/* unshift

menambahkan isi baru ke indeks paling pertama atau 0 jadi panjang arraynya pun bertambah

*/

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits3.unshift("durian"));
console.log(fruits3);

/* concat

menggabungkan 2 array menjadi array baru

*/
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

/* join

menggabungkan isi baru ke data sebelumnya tetapi mengubah tipe menjadi string
*/

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits4);
console.log(fruits.join(" * "));

// build in function

// 1. parseInt()

/* fungsi parseInt()

 mengubah string menjadi integer (bilangan bulat).
*/
console.log(parseInt("123")); // 123
console.log(parseInt("123.45")); // 123   (hanya ambil integer)
console.log(parseInt("100px")); // 100   (berhenti di "px")
console.log(parseInt("abc123")); // NaN   (tidak mulai dengan angka)

// 2. parseFloat()

/* fungsi untuk mengubah string menjadi bilangan pecahan (floating point number  */

console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("10.99px")); // 10.99  (px diabaikan)
console.log(parseFloat("123")); // 123    (tetap jadi number)
console.log(parseFloat("abc123")); // NaN    (bukan angka)

// 3. isNaN

/* isNaN
digunakan untuk mengecek apakah suatu nilai itu NaN (Not-a-Number) atau bukan.
*/
console.log(isNaN(123)); // false (karena 123 adalah angka valid)
console.log(isNaN("abc")); // true  ("abc" bukan angka)
console.log(isNaN(NaN)); // true  (memang NaN)
console.log(isNaN("123")); // false (string "123" bisa diubah ke number)
console.log(isNaN("123abc")); // true  (tidak bisa full jadi angka)

// 4. isFinite

/* isFinite

mengecek apakah sebuah nilai adalah angka terbatas (finite number) atau bukan. 

Nilai yang dicek akan dicoba dikonversi ke number dulu.
Setelah itu dicek: apakah hasil konversi itu finite (bukan Infinity, -Infinity, NaN).
*/

console.log(isFinite(100)); // true  (angka biasa)
console.log(isFinite("123")); // true  (string bisa diubah ke angka)
console.log(isFinite("abc")); // false (bukan angka → NaN)
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false

// 5. decoreURI
/* Fungsinya adalah meng-decode URI (Uniform Resource Identifier) yang sebelumnya sudah di-encode.
Fungsi ini mengubah kode escape sequence (misalnya %20, %3A, dll) menjadi karakter aslinya.
 */
let url = "https://example.com/?nama=Gil%20Piu";
console.log(url); // https://example.com/?nama=Gil%20Piu
console.log(decodeURI(url)); // https://example.com/?nama=Gil Piu
