// So i wanted to try to do it with functions.. 
// So now the menu of procuts is dynamic.
// But that i could have achieved in test.js too, so this was more a practice of writing functions, its not actuelly cleaner or easier to work with than test.js.



// No use of ai, but i needed to look up how to verify if a variable is a number (Number.isFinite( ... )).

// 

const prompt = require("prompt-sync")();


// Map for products and price.
const products = new Map();
products.set("Banana", 10.50);
products.set("Apple", 13);
products.set("Mango", 8.99);
products.set("Watermelon", 15);
products.set("Orange", 11);
products.set("Grape", 21.5);
products.set("Blueberry", 29);
products.set("Mushroom", 50);
products.set("MultiVitamin Juice", 40.11111);


// Map for the Shopping cart (product and count)
const cart = new Map();


// Gets product name based on the pick-nr.
function getProduct(pickNr) {

  let i = 0;
  let prod;

  products.forEach((v, k) => {
  i++;
  if (i == pickNr) prod = k;
  });
  
  return prod;

}


// Just prints out the products and prices.
function listProducts() {

  let i = 0;

  products.forEach((v, k) => {
    i++;
    console.log(`[ ${i} ] - ${k} - Price: ${v}:-`);
  });
  
  return i; // returns how many products listed.

}


// Shows the cart
function listCart() {
  let totCost = 0;
  
  console.log("Your cart:");

  cart.forEach((v, k) => {
    console.log(`${k}: ${v}st - cost: ${(v * products.get(k))}`);
    totCost += (v * products.get(k));
  })

  totCost = Math.round(totCost * Math.pow(10, 2)) / Math.pow(10, 2);
  console.log("\nTotal cost: " + totCost + ":-\n");

  return totCost;
}



// Updates the Cart
function updateCart(pickNr, count) {

  const prod = getProduct(pickNr);

  // Return false if not a valid pickNr.
  if (pickNr < 1 && pickNr > products.size) {
    console.log("No valid product.")
    return false
  }

  // First update the cart:
  cart.set( prod, (!cart.get(prod) ? count : cart.get(prod) + count ) );

  // Check if the product now is 0 or below, then delete it:
  if (cart.get( prod) <= 0) cart.delete(prod)

  return true; // Cart updated. Return true! Never use it though...

}




console.log("\nWelcome to fruitstore! \n");

let inStore = true;
while (inStore) {

    let totalCost = listCart(); // Returns the total cost of the shopping cart.

    // Show a menu if the user wants to shop or pay.
    let menuOk = false;
    while (!menuOk) {

      console.log("What do you want to do?\n[ 1 ] - Add / remove products?\n[ 2 ] Checkout.");

      let shopMore = Number(prompt("Choose: "));
      if (shopMore == 1) {
        menuOk = true;

        // Shop!
        // Show productlist and let user pick a product.
        const prodCount = listProducts();
    
        let uPick = Number.parseInt(prompt("Pick a product: "));
        let uCount = Number.parseInt(prompt("Count ( - to remove ): "));
      
        if (Number.isFinite(uPick) && Number.isFinite(uCount) && uPick <= products.size && uPick > 0) {
          updateCart(uPick, uCount);
          console.log("Added " + uCount + " " + getProduct(uPick) + " to your cart.\n")
        } else {
          console.log("Invalid input.\n");
        }
        

      } else if (shopMore == 2) {
        menuOk = true;
        
        // Pay!!
        let pay;
        while(pay <= totalCost || !Number.isFinite(pay)) {
          pay = Number(prompt("How much do you pay? (minimum " + totalCost + ":-): "));
        }

        console.log("You get back: " + Math.round((pay - totalCost) * Math.pow(10, 2)) / Math.pow(10, 2));
        inStore = false;

      }
    }
  
}

console.log("\nWelcome back! =)\n");

