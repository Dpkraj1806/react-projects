const username = "Deepak";
const password = "deepak";

const idpass = document.getElementsByName("password");
const iduser = document.getElementsByName("username");

function check(event) {
  event.preventDefault();
  const credentialcheck = (username, password, iduser, idpass) => {
    return new Promise((resolve, reject) => {
      if (iduser[0].value == username) {
        if (idpass[0].value == password) {
          resolve("success");
        }
      } else {
        reject();
      }
    });
  };

  credentialcheck(username, password, iduser, idpass)
    .then((x) => {
      console.log(x);
    })
    .catch((err) => {
      console.log("err");
    });
}
