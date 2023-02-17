const ham = document.querySelector(".ham");
const hamNav = document.querySelector(".ham-nav");

ham.addEventListener('click', () =>{
    hamNav.classList.toggle("active");
});

const d = new Date();

d.setDate(d.getDate());
console.log(d)

document.getElementById("date").innerHTML = d;