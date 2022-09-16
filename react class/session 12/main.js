//Promise.all--- We haveto send array as input arguments
//while we send array of function as input and it return the return value of that function

// const getName = () => {
//   let num = 1;
//   return new Promise((resolve, reject) => {
//     if (num) {
//       resolve("Dheena");
//     } else reject();
//   });
// };
// const getAge = () => {
//   let num = 1;
//   return new Promise((resolve, reject) => {
//     if (num) {
//       resolve();
//     } else reject();
//   });
// };

// Promise.all([getName, getAge])
// .then((results)=>{
//     console.log(results);
// })
// .catch(()=>{
//     console.log("Failed");
// });




// in this we return results 
const getName = new Promise((resolve, reject) => {
    //   if (num) {
        resolve("Dheena");
    //   else reject();
    });
const getAge = new Promise((resolve, reject) => {
    //   if (num) {
        resolve({name:"React",age:"25"});
    //    else reject();
    });

  
  Promise.all([getName, getAge])
  .then((results)=>{
      console.log(results);
  })
  .catch(()=>{
      console.log("Failed");
  });
  