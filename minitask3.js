const queque = (str, time) => {
  const antrian = new Promise((resolve, reject) => {
    if (typeof str != "string") {
      reject("tipe data tidak valid");
    }
    setTimeout(() => {
      resolve(str);
    }, time);
  });
  return antrian;
};

queque("john", 1500)
  .then(function (res) {
    console.log("ini " + res);
    queque("Ed", 2000)
      .then(function (res) {
        console.log(res);
        queque("Jane", 500)
          .then(function (res) {
            console.log(res);
          })
          .catch(function (err) {
            console.log(err);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  })
  .catch(function (err) {
    console.log(err);
  });

// async

async function namaNama() {
  try {
    const name1 = await queque("John", 1500);
    console.log(name1);

    const name2 = await queque("Ed", 2000);
    console.log(name2);

    const name3 = await queque("Jane", 500);
    console.log(name3);
  } catch (err) {
    console.log(err);
  }
}
namaNama();
