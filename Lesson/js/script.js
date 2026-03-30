// localStorage.setItem("name", "Kristina");

// const a = localStorage.getItem("name");

// console.log(a);

// function check() {
//     let val = document.getElementsByName("radio");
//     if(val[0].checked) {
//         console.log("Жіноча");
//     } else if(val[1].checked) {
//         console.log("Чоловіча");
//     }
// };

// const form = document.querySelector(".form");

// const nameInput = document.querySelector(".inputName");
// const lastNameInput = document.querySelector(".inputLastName");
// const age = document.querySelector("#age");
// const male = document.getElementsByName("radio");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(eventHandler) {
//     eventHandler.preventDefault();
//     const info = {
//         name: nameInput.value,
//         lastName: lastNameInput.value,
//         age: age.value,
//         male: male[1].checked,
//     };

//     localStorage.setItem("info", JSON.stringify(info));
// }
 
// if(localStorage.getItem("info")) {
//     const ls = JSON.parse(localStorage.getItem("info"));
//     console.log(ls);
//     nameInput.value = ls.name;
//     lastNameInput.value = ls.lastName;
//     male[0].value = ls.male;
//     age.value = ls.age;
// }

// let form = document.querySelector("#form");
// let formData = {};

// form.addEventListener("input", function(eventHandler) {
//     formData[eventHandler.target.name] = eventHandler.target.value;

//     localStorage.setItem("formData", JSON.stringify(formData));
// });


// if(localStorage.getItem("formData")) {
//     formData = JSON.parse(localStorage.getItem("formData"));

//     for(let key in formData) {
//         form.elements[key].value = formData[key];
//     }
// };