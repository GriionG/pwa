const container = document.querySelector(".container");
const coffees = [
  { name: "logo", image: "img/Logo-goal.png" },
  { name: "premier", image: "img/Liga-premier-logo.png" },
  { name: "ligaMX", image: "img/liga-MX-logo.png" },
  { name: "bayern", image: "img/foto-7.jpg" },
  { name: "barca", image: "img/foto-20.jpg" },
  { name: "chivas", image: "img/foto-30.png" },
  { name: "arsenal", image: "img/foto-21.jpeg" },
  { name: "tigres", image: "img/foto-27.png" },
  { name: "trajetas", image: "img/payment-method.png" },
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
