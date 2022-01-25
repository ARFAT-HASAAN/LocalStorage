const SearchProduct = () => {
  const productName = document.getElementById("productName").value;
  //   console.log(productName);
  if (!productName) {
    return;
  }
  addProduct(productName);

  // add in localStorage
  addToLocalStorage(productName);
  //   clearInput
  document.getElementById("productName").value = "";
};

const addProduct = (name) => {
  const container = document.getElementById("container");
  const li = document.createElement("li");
  li.innerText = name;
  container.appendChild(li);
};

const getItemFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  let obj;
  if (cart) {
    obj = JSON.parse(cart);
  } else {
    obj = {};
  }
  return obj;
};

const addToLocalStorage = (name) => {
  const cart = getItemFromLocalStorage();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  }

  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

function placeOrder() {
  const container = document.getElementById("container");
  container.textContent = "";
  localStorage.removeItem("cart");
}
const displayItem = () => {
  const cart = getItemFromLocalStorage();
  for (const item in cart) {
    addProduct(item);
  }
};

displayItem();
