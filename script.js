const completed = [];
const pending = [];
const submit = document.getElementById("sub");
const all = document.querySelector(".h1");
const comp = document.getElementsByClassName("n2");
const p = document.getElementsByClassName("n3");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const ele = document.getElementById("task");
  pending.push(ele.value);
  all.innerHTML = "";
  pending.forEach((e) => {
    console.log(e);
    all.innerHTML += e;
  });
});
