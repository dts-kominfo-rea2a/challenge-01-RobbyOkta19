// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let name = "Monica";
let gender = "Female";
let age = 17;
let email = "monica@dingdong.com";

let favoriteColor = new Set();
// Yellow, Pink, White, Purple
favoriteColor.add("Yellow");
favoriteColor.add("Pink");
favoriteColor.add("White");
favoriteColor.add("Purple");
favoriteColor.add("Yellow");

let isHavePet = "Yes";

let education = [];
let educationDetail = {
  name: "SD 01",
  city: "Jakarta",
  graduate: 2016,
};
education.push(educationDetail);
educationDetail = {
  name: "SMP 02",
  city: "Jakarta",
  graduate: 2019,
};
education.push(educationDetail);
educationDetail = {
  name: "SMA 03",
  city: "Tangerang",
};
education.push(educationDetail);

// Bento, Sushi, Pancake, Eggy, Tempura, Bento, Eggy, Padang, Tteok, Sushi, Sushi

let favoriteRestaurant = new Set();

favoriteRestaurant.add("Bento");
favoriteRestaurant.add("Sushi");
favoriteRestaurant.add("Pancake");
favoriteRestaurant.add("Eggy");
favoriteRestaurant.add("Tempura");
favoriteRestaurant.add("Bento");
favoriteRestaurant.add("Eggy");
favoriteRestaurant.add("Bento");
favoriteRestaurant.add("Padang");
favoriteRestaurant.add("Tteok");
favoriteRestaurant.add("Tteok");
favoriteRestaurant.add("Sushi");

const firstUser = {
  name: name,
  gender: gender,
  age: age,
  email: email,
  favoriteColor: favoriteColor,
  isHavePet: isHavePet,
  education: education,
  favoriteRestaurant: favoriteRestaurant,
};
// END of user 1

name = "Wendy";
gender = "Male";
age = 22;
email = "wendy@dingdong.com";

favoriteColor = new Set();
// Blue, Black, Grey
favoriteColor.add("Blue");
favoriteColor.add("Black");
favoriteColor.add("Black");
favoriteColor.add("Grey");

isHavePet = "No";

education = new Array();
educationDetail = {
  name: "SD 02",
  city: "Jakarta",
  graduate: 2010,
};
education.push(educationDetail);
educationDetail = {
  name: "SMP 03",
  city: "Bogor",
  graduate: 2013,
};
education.push(educationDetail);
educationDetail = {
  name: "SMA 01",
  city: "Surabaya",
  graduate: 2016,
};
education.push(educationDetail);

educationDetail = {
  name: "Universitas Maju",
  city: "Tangerang",
};
education.push(educationDetail);

// Tempura, Bento, Sushi, Pancake, Padang, Katsu, Geprek, Pancake, Eggy
favoriteRestaurant = new Set();

favoriteRestaurant.add("Tempura");
favoriteRestaurant.add("Bento");
favoriteRestaurant.add("Sushi");
favoriteRestaurant.add("Pancake");
favoriteRestaurant.add("Padang");
favoriteRestaurant.add("Katsu");
favoriteRestaurant.add("Geprek");
favoriteRestaurant.add("Pancake");
favoriteRestaurant.add("Eggy");

const secondUser = {
  name: name,
  gender: gender,
  age: age,
  email: email,
  favoriteColor: favoriteColor,
  isHavePet: isHavePet,
  education: education,
  favoriteRestaurant: favoriteRestaurant,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
