// UI  
const paragraph = document.querySelector('.paragraph');

// console.log(paragraph);  

let index = 3;

let pgh ="We are a sincere team with a straightforward vision. We believe that our project which we created together will be amazing. There maybe needs to be perfect that's why we are still trying to be the best. Because of this project, we become like a family. After a slow start, we found seven solid, dedicated members who are in the group today.High-performing teams don’t materialize out of the ether. They require careful cultivation from a team leader with a strong sense of team values, goals, and code of ethics.Once the right people are in place, the goal is to bring them together into a cohesive unit.";


function speedtext (){
    // console.log(pgh.length)

    paragraph.innerText = pgh.slice(0,index);

    index++;

    if(index>pgh.length){
            index=1;
    };

    setTimeout(speedtext,100);
     
};

speedtext();


// our team  .....................

const grido = document.querySelector('.grido');
const gridones = document.querySelectorAll('.gridone');
const gridtwo = document.querySelector('.gridtwo');
// const gridthree = document.querySelector('.gridthree');

const myant = document.querySelector('.myant');


// console.log(gridones);

checkboxes();
window.addEventListener('scroll',checkboxes);

function checkboxes(){

    let innerheight = window.innerHeight /1.3;

    // console.warn(innerheight);

   

    gridones.forEach(gridone=>{
        // console.log(box);

        const boxtop = gridone.getBoundingClientRect().top;


        if(boxtop < innerheight){
            gridone.classList.add("show");
        }else{
            gridone.classList.remove("show");
        }
    });
    
};



// slide our Partners-----

const btn_left = document.querySelector('.fa-chevron-left'),
    btn_right = document.querySelector('.fa-chevron-right');

const slides = document.querySelectorAll('.slide') ;
const slide_one = document.querySelector('.slide-one');
const slide_two= document.querySelector('.slide-two');
// const slide_one = document.querySelector('.slide-three');

let click = 1;


btn_left.addEventListener('click',()=>{
    // console.log('this is the left');
    slide_one.style.display = 'flex';
    slide_two.style.display = "none  ";

    btn_right.style.display = 'block';
    btn_left.style.display = 'none';
   
});

btn_right.addEventListener('click',()=>{
    console.log('this is the right');
    slide_one.style.display = 'none';
    slide_two.style.display = "flex";

    btn_right.style.display = 'none';
    btn_left.style.display = 'block';
});