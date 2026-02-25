const first = document.getElementById("btnn");
let count = 0;

increase.addEventListener("click", () => {
  count++;
  first.innerText = count;
});

decrease.addEventListener("click", () => {
  count--;
  first.innerText = count;
});

reset.addEventListener("click", () => {
  count = 0;
  first.innerText = count;
});
