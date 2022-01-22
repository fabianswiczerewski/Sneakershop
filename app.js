//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", ({ pageX, pageY }) => {
  const { top: topIndent, left: leftIndent, width, height } = container.getBoundingClientRect();
  let xAxis = -((pageX - leftIndent) - width / 2) /-30;
  let yAxis = ((pageY - topIndent) - height / 2) /-30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = 'all 0.2s ease-out';
  setTimeout(() => {
    card.style.transition = 'none';
  },300);
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(180px) rotateZ(-25deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
