// mencari 1 build-in method atau function
// membuat proses manual sesuai  dengan built in method atau function yang ditemukan

// method

let userName = ["gil", "piu", "iw", "amb"];

for (i = 0; i < userName.length; i++) {
  console.log(userName[i]);
}

const removeLast = userName.pop();

console.log(removeLast);
console.log(userName);

// manual

let namaUser = ["gil", "piu", "iw", "amb"];

for (i = 0; i < namaUser.length; i++) {
  console.log(namaUser[i]);
}

namaUser.length = 3;

console.log(namaUser);
