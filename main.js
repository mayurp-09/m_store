import './style.css'
import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';
import { getCartProductFromLS } from "./getCartProducts"; // Add this
import { updateCartValue } from "./updateCartValue";     // Add this

// 1. Get existing products from LocalStorage
const cartProducts = getCartProductFromLS();
// 2. Update the navbar cart icon immediately
updateCartValue(cartProducts); 

// 3. Show products
window.products = products;
showProductContainer(products);