// // async await build in method

const url = "https://jsonplaceholder.typicode.com/users";

async function testingUrl() {
  try {
    const api = await fetch(url);
    const datas = await api.json();

    const mapped = datas.map((data) => {
      return data.email;
    });

    const ubah = mapped.toString();
    const lower = ubah.toLowerCase();

    console.log(lower.split(","));
  } catch (err) {
    console.log(`${err} : error bosku
    `);
  }
}

testingUrl();

// // then-catch build in method

fetch(url).then((res) =>
  res.json().then((datas) => {
    // console.log(datas[0]);
    const mapped = datas.map((data) => {
      return data.email;
      //   console.log(mapped);
    });

    const objectToString = mapped.toString();
    // console.log(objectToString);
    const toLower = objectToString.toLowerCase();
    // console.log(toLower);
    console.log(toLower.split(","));
  })
);

// async await tanpa method

async function urlTanpaMethod() {
  const response = await fetch(url);
  const datas = await response.json();

  const kapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const kecil = "abcdefghijklmnopqrstuvwxyz";

  const hasilArray = [];
  let panjang = 0; // manual counter untuk isi array

  for (let i = 0; i < datas.length; i++) {
    const namaAsli = datas[i].name;
    // console.log(namaAsli);

    let namaBaru = "";

    for (let j = 0; j < namaAsli.length; j++) {
      const huruf = namaAsli[j];
      // console.log(huruf);

      let ketemu = false;

      for (let k = 0; k < kapital.length; k++) {
        // jika huruf sama dengan isi dari kapital
        // ganti ke huruf kecil
        if (huruf === kapital[k]) {
          namaBaru = namaBaru + kecil[k];
          ketemu = true;
          break;
        }
      }

      if (!ketemu) {
        namaBaru = namaBaru + huruf;
      }
    }

    // Simpan ke array manual tanpa .push()
    hasilArray[panjang] = namaBaru;
    panjang = panjang + 1;
  }

  console.log(hasilArray); // satu array berisi semua nama yang sudah diubah
}

urlTanpaMethod();

fetch(url).then((res) => {
  res.json().then(datas);
});
