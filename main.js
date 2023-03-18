const body = document.body;

let h1 = document.querySelector("h1");
body.removeChild (h1)

let h2 = document.createElement("h2");
h2.innerText = "Lab assignment 7";
h2.style.color = "blue";
document.body.appendChild(h2);

let h3 = document.createElement("h3");
h3.innerText = "Task";
h3.style.color = "red";
document.body.appendChild(h3);

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

let a1 = "find elements in the DOM (5 points);";
let b1 = "create/add/remove elements (5 points);";
let c1 = "change content of the elements (5 points);";
let d1 = "change styles of the elements (5 points);";
let e1 = "change attributes of the elements (5 points);";
let f1 = "change classes of the elements (5 points).";

const techs = [a1,b1,c1,d1,e1,f1];

let ul1 = document.createElement("ul");

for (let tech of techs) {
    let li1 = document.createElement("li");
    li1.innerText = tech;
    ul1.appendChild(li1);
}
document.body.appendChild(ul1);

let h4 = document.createElement("h4");
h4.innerText = "Submission";
h4.style.color = "red";
document.body.appendChild(h4);

let p2 = document.createElement("p");
p2.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p2);

//let list2=document.createElement('ul')
//let a2 = document.createElement('li')
//a2.innerHTML = "Create a new repository on Github, named lab7 (1 point)."
//a2.classList.add("odd")
//list2.appendChild(a2)

let a2 = "Create a new repository on Github, named lab7 (1 point)."
let b2 = "Clone this repository to your local machine and work inside it.";
let c2 = "Create a new HTML file, called index.html, which has only one <h1> tag with Hello, World! message (1 point).change content of the elements (5 points);";
let d2 = "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).";
let e2 = "Link this main.js file to your index.html file (Note: place your script at the end of the body section).";
let f2 = "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).";
let g2 = "After you finish your work, submit it to the Github (2 points).";

let insts = [b2,c2,d2,e2,f2,g2];

let ul2 = document.createElement("ul");

for (let inst of insts) {
    let li2 = document.createElement("li");
    li2.innerText = inst;
    ul2.appendChild(li2);
}
document.body.appendChild(ul2);



