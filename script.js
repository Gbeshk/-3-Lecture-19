let button = document.getElementById("button");
button.addEventListener("mouseover", () => {
  let x = document.getElementById("linkisicon");
  x.style.opacity = 0;
  let y = document.getElementById("linkisicon1");
  y.style.opacity = 1;
  button.style.backgroundColor = "hsla(24, 56%, 63%, 1)"
});
button.addEventListener("mouseleave", () => {
  let x = document.getElementById("linkisicon");
  x.style.opacity = 1;
  let y = document.getElementById("linkisicon1");
  y.style.opacity = 0;
  button.style.backgroundColor = "black"
});
