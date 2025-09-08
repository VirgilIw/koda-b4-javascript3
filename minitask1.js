// mencari 1 build-in method atau function
// membuat proses manual sesuai  dengan built in method atau function yang ditemukan

let userName = ["gil", "piu", "iw", "amb"];

for (i = 0; i < userName.length; i++) {
  console.log(userName[i]);
}

// manual
userName.length = 3;

// method
const removeLast = userName.pop();

console.log(removeLast);
console.log(userName);
