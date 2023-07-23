let number = 0;
const a = [];
const submit = document.getElementById("sub");
const all = document.querySelector(".h1");
const comp = document.getElementsByClassName("n2");
const p = document.getElementsByClassName("n3");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

const bb1 = document.getElementById("bb1");
const bb2 = document.getElementById("bb2");
const bb3 = document.getElementById("bb3");

submit.addEventListener("click", (e) => {
  number += 1;
  e.preventDefault();
  const ele = document.getElementById("task");
  a.push({ text: ele.value.toString(), id: number, set: 0 });
  ele.value = "";
  all.innerHTML = "";
  bb1.classList.add("underline");
  bb2.classList.remove("underline");
  bb3.classList.remove("underline");
  a.forEach((e) => {
    console.log(e.text, " ", e.id);
    if (e.set == 0) {
      all.innerHTML += `<div class="pl"> 
      <input type="checkbox" onclick="change(${e.id})" id="${e.id}" >
      
      <label> ${e.text}</label>
      </div>`;
    } else {
      all.innerHTML += `<div  class="pl"> 
      <input type="checkbox" onclick="change(${e.id})" id="${e.id}" checked >   
      <label> ${e.text}</label> 
      </div>`;
    }
  });
});

function change(id) {
  objIndex = a.findIndex((obj) => obj.id == id);
  a[objIndex].set = 1 - a[objIndex].set;
}

b1.addEventListener("click", (e) => {
  bb1.classList.add("underline");
  bb2.classList.remove("underline");
  bb3.classList.remove("underline");
  all.innerHTML = "";
  a.forEach((e) => {
    console.log(e.text, " ", e.id);
    if (e.set == 0) {
      all.innerHTML += `<div  class="pl"> 
       <input type="checkbox" onclick="change(${e.id})" id="${e.id}" >  
       <label> ${e.text}</label>
       </div>`;
    } else {
      all.innerHTML += `<div  class="pl"> 
      <input type="checkbox" onclick="change(${e.id})" id="${e.id}" checked >  
      <label> ${e.text}</label> 
      </div>`;
    }
  });
});

b2.addEventListener("click", (e) => {
  bb1.classList.remove("underline");
  bb3.classList.remove("underline");
  bb2.classList.add("underline");
  all.innerHTML = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i].set == 1) {
      all.innerHTML += `<div  class="pl"> <p>${a[i].text}</p></div>`;
    }
  }
});

b3.addEventListener("click", (e) => {
  bb3.classList.add("underline");
  bb1.classList.remove("underline");
  bb2.classList.remove("underline");
  all.innerHTML = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i].set == 0) {
      all.innerHTML += `<div  class="pl"> <p>${a[i].text}</p></div>`;
    }
  }
});
