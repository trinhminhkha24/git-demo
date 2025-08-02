function phuongTrinhBac1(a, b) {
  if (a === 0) {
    if (b === 0) {
      return "Phuong trinh vo so nghiem";
    } else {
      return "Phuong trinh vo nghiem";
    }
  } else {
    let x = -b / a;
    return `Phuong trinh co nghiem x = ${x}`;
  }
}

function phuongTrinhBac2(a, b, c) {
  if (a === 0) {
    return console.log(phuongTrinhBac1(b, c));
  } else {
    let delta = b * b - 4 * a * c;
    console.log(`Delta = ${delta}`);
    if (delta > 0) {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [x1, x2];
    } else if (delta === 0) {
      let x = -b / (2 * a);
      return `Phuong trinh co nghiem kep: x = ${x}`;
    } else {
      return "Phuong trinh vo nghiem";
    }
  }
}

// let a1 = parseInt(prompt("Nhap a: "));
// let b1 = parseInt(prompt("Nhap b: "));
// let c1 = parseInt(prompt("Nhap c: "));

// console.log(phuongTrinhBac2(a1, b1, c1));
// let typeNull = null;
// let typeUndefined;

// console.log(typeNull); // null

// let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Khởi tạo mảng 10 số nguyên

// let found = numsArray.find((element) => element % 2 == 0); // Tìm số chẵn đầu tiên tìm thấy
// console.log(found);

// var testVar = null;
// console.log(testVar); //shows null
// console.log(typeof testVar);

// console.log(typeUndefined); // undefined
// console.log(typeof typeUndefined); // undefined

// var titleElement = document.getElementById("title");
// console.log(titleElement.textContent); // Lấy phần tử có id là "title"

// var tagP = document.getElementsByTagName("p");
// for (let i = 0; i < tagP.length; i++) {
//   console.log(tagP[i].textContent); // Lấy tất cả các thẻ <p> trong tài liệu
// }

// Đổi màu nền của thẻ <h1> thành vàng

// var newElement = document.createElement("div");
// newElement.className = "new-element"; // Thêm class cho phần tử mới

// newElement.innerText = "New Element";
// //add tag p in to newElement
// var newParagraph = document.createElement("p");
// var newSpan = document.createElement("span");
// newSpan.innerText = "This is a new span.";
// newParagraph.appendChild(newSpan); // Thêm thẻ <span> vào thẻ <p>

// newParagraph.innerText = "This is a new paragraph.";
// newElement.appendChild(newParagraph);
// document.body.appendChild(newParagraph); // Thêm thẻ <p> vào thẻ <div> mới

// // Thêm phần tử vào DOM
// document.body.appendChild(newElement);

// function addText(value) {
//   let newElement = document.createElement("div");
//   let newParagraph = document.createElement("p");
//   newParagraph.innerText = value;
//   newElement.appendChild(newParagraph);
//   document.querySelector(".container-last").appendChild(newElement); // Thêm thẻ <div> mới vào thẻ <div class="container">
// }

// let inputValue = "";
// let inputField = document.getElementById("inputField");
// inputField.addEventListener("input", () => {
//   inputValue = inputField.value;
// });

// let btnId = document.getElementById("btn-add");
// btnId.addEventListener("click", () => {
//   if (inputValue) {
//     addText(inputValue);
//     inputField.value = ""; // Xóa nội dung ô input sau khi thêm
//   } else {
//     alert("Please enter some text before adding.");
//   }
// });

// let titleElement = document.getElementById("title");
let paragraphTag = document.getElementsByTagName("p");
let container = document.querySelector(".container"); // Lấy thẻ <div class="container">
let titleElement = document.querySelector("#title"); // Lấy thẻ <h1> có id là "title"
console.log(titleElement.textContent);
titleElement.innerText = "Khoá Web 25A - Trần Thành Huy";
container.appendChild(titleElement); // Thêm thẻ <h1> vào thẻ <div class="container">
let spanElement = document.createElement("span");
spanElement.innerHTML = "<span> Khoá Web 25A - Trần Thành Huy </span>";
container.appendChild(spanElement); // Thêm thẻ <span> vào thẻ <div class="container">

let btnAdd = document.getElementById("btn-add");
let containerLast = document.querySelector(".container-last");
console.log(btnAdd);
let list = [];

let inputField = document.getElementById("inputField");
inputField.addEventListener("input", () => {
  console.log(inputField.value); // In ra giá trị của ô input khi người dùng nhập
});

btnAdd.addEventListener("click", () => {
  let newElement = document.createElement("p");
  newElement.innerText = inputField.value;
  list.push(inputField.value); // Thêm giá trị vào mảng list
  containerLast.appendChild(newElement); // Thêm thẻ <p> mới vào thẻ <div class="container-last">
  inputField.value = ""; // Xóa nội dung ô input sau khi thêm
});
function bindingEvent() {
  list.forEach((item) => {
    let newElement = document.createElement("p");
    newElement.innerText = item;
    containerLast.appendChild(newElement); // Thêm thẻ <p> mới vào thẻ <div class="container-last">
  });
}
document.addEventListener("DOMContentLoaded", () => {});

let a = [];
a.push(1);
console.log(a); // In ra mảng a
a.push(2);
console.log(a); // In ra mảng a sau khi thêm phần tử mới
a.push(3);
console.log(a);
a.unshift(4);
console.log(a);