const number = document.querySelector("#number");
const liOne = document.querySelector("#li1");
const liTwo = document.querySelector("#li2");
const liThree = document.querySelector("#li3");
const liFour = document.querySelector("#li4");
const liFive = document.querySelector("#li5");
const people = document.querySelector("#people");
const amount = document.querySelector("#amount");
const total = document.querySelector("#total-value");
const btn = document.querySelector("button");

const results = function (percent) {
  let tip = (number.value * percent.value) / 100;
  let calc = tip * people.value;
  let tots = +number.value + +calc.toFixed(2);
  amount.textContent = `$${calc}.00`;
  total.textContent = `$${tots}.00`;

  // clear flelds
  number.value = "";
  people.value = "";

  btn.style.backgroundColor = "cyan";
};

// reset after each calculation
btn.addEventListener("click", () => {
  amount.textContent = "$0.00";
  total.textContent = "$0.00";

  btn.style.backgroundColor = "hsl(184, 14%, 56%)";
});

liOne.addEventListener("click", () => {
  results(liOne);
});

liTwo.addEventListener("click", () => {
  results(liTwo);
});
liThree.addEventListener("click", () => {
  results(liThree);
});
liFour.addEventListener("click", () => {
  results(liFour);
});
liFive.addEventListener("click", () => {
  results(liFive);
});
