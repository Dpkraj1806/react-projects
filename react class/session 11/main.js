const getName = () => {
  let num = 0;
  return new Promise((resolve, reject) => {
    if (num) {
      resolve();
    } else {
      reject();
    }
  });
};

getName()
  .then(() => console.log("success"))
  .catch((err) => {
    console.log("err");
  });
