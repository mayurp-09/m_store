import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductFromLS();
    const currentProdElem = document.querySelector(`#card${id}`)
    //console.log(currentProdElem);

    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;
    //console.log(quantity, price);
    
    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    );
    console.log(existingProd);
    if(existingProd && quantity > 1){
        price = Number(price * quantity);
        localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    }

    if(existingProd){ 
        return false
    };


    price = Number(price * quantity);
    quantity = Number(quantity);



    arrLocalStorageProduct.push({id, quantity, price})
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

}