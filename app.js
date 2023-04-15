const reviews = [
    {   id: 1,
        name:"PeaU Udofia",
        job: "Web developer",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet molestias totam saepe voluptatem cupiditate ipsa laborum consequatur magnam tenetur repellat provident assumenda, aspernatur unde! Sequi, inventore sed! Ratione, dolorem id.",
        img: "img/a2.jpg"
    },
    {
        id: 2,
        name: "Zoya Mosh",
        job: "Graphic designer",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet molestias totam saepe voluptatem cupiditate ipsa laborum consequatur magnam tenetur repellat provident assumenda, aspernatur unde! Sequi, inventore sed! Ratione, dolorem id.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "img/a4.jpg"
    },
    {
        id: 3,
        name:"Mike Jonas",
        job: "Content writer",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet molestias totam saepe voluptatem cupiditate ipsa laborum consequatur magnam tenetur repellat provident assumenda, aspernatur unde! Sequi, inventore sed! Ratione, dolorem id.",
        img: "img/a3.jpg"
    },
    {
        id: 2,
        name: "Jerry Eric",
        job: "Graphic designer",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet molestias totam saepe voluptatem cupiditate ipsa laborum consequatur magnam tenetur repellat provident assumenda, aspernatur unde! Sequi, inventore sed! Ratione, dolorem id.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "img/a1.jpg"
    }
]

const pic = document.querySelector("img");
const personName = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".review");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const btn = document.querySelector(".btn3");

var currentReview = 3;

window.addEventListener("DOMContentLoaded", ()=>{
    updatePerson();
})

function updatePerson(){
    const item = reviews[currentReview];
    pic.src = item.img;
    personName.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text
}

prev.addEventListener("click", ()=>{
    if (currentReview < 0){
        currentReview = reviews.length - 1;
    }
   currentReview --;
   updatePerson()
})

next.addEventListener("click", () =>{
    currentReview ++;
    if(currentReview > reviews.length - 1){
       currentReview = 0; 
    }
    updatePerson();
})

btn.addEventListener("click", () => {
    const min = 0;
    const max = reviews.length - 1
    currentReview = Math.floor(Math.random()*(max - min) + min);
    updatePerson();
})




