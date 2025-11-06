var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

window.onkeydown = handleKeydown;
function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

/*  Filter */
/* Hover */
const hoodie = document.getElementById("hoodie");
if (hoodie) {
  hoodie.addEventListener("mouseover", () => {
    hoodie.src = "images/tourhoodieblack_3back.jpg";
  });
  hoodie.addEventListener("mouseout", () => {
    hoodie.src = "images/tour_hoodie_black_1.jpg";
  });
}


/* Counter */
const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  number = document.querySelector(".number");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;

  number.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;

    number.innerText = a;
  }
});

/* Cart */
var shopButtons = document.querySelectorAll("button.cart");
for (let i = 0; i < shopButtons.length; i++) {
  shopButtons[i].onclick = addToShoppingCart;
}

function addToShoppingCart() {
  let shoppingCartAmount = document.querySelector(".shoppingcart span");
  let currentAmount = shoppingCartAmount.innerHTML;
  currentAmount = parseInt(currentAmount);
  let newAmount = currentAmount + 1;

  shoppingCartAmount.innerHTML = newAmount;
}
