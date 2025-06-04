/*

Test
Good Morning! 
 
You can use if , loop, function and switch case to solve this task. (If any one wants to use array, set and map, feel free to use)
 
Implement following tasks
Design a menu to display product name and price. Have at least 5 products.
Once product is selected – ask for the quantity
Then calculate the total cost of the product.
Check if the user wants to proceed to purchase again or to check out.
If purchase is selected repeat task 2
If the checkout option is selected display the total price of all purchases.
Ask user to enter the price to pay.
In case the user has paid more than the total purchase price then display the return amount.
 
*/

const prompt = require("prompt-sync")();

let inStore = true;


const products = new Map();
products.set("Banana", 10);
products.set("Apple", 13);
products.set("Mango", 8);
products.set("Watermelon", 15);
products.set("Orange", 11);

const cart = new Map();

console.log("\n****** Welcome to the fruit store! ******");

while (inStore) {


  let aNr = 0;  
  console.log("\nAdd to basket");
  products.forEach((v, k) => {
    aNr++;
    console.log("[ " + aNr + " ] - " + k + " - Price: " + v + ":-");
  })

  let userProduct = Number.parseInt(prompt("Pick a product: 1 - " + products.size + ": "));
  let userProductCount = Number.parseInt(prompt("How many? ( - to decrease)"));

  if (userProduct > 0 && userProduct <= products.size && Number.isFinite(userProduct) && Number.isFinite(userProductCount)) {

    const count = 0;
    switch(userProduct) {
      case 1:

        cart.set("Banana", (!cart.get("Banana") ? 0 : cart.get("Banana")) + userProductCount);
        if (cart.get("Banana") <= 0) cart.delete("Banana");
      break;
      case 2:
        cart.set("Apple", (!cart.get("Apple") ? 0 : cart.get("Apple")) + userProductCount);
        if (cart.get("Apple") <= 0) cart.delete("Apple");
      break;
      case 3:
              cart.set("Mango", (!cart.get("Mango") ? 0 : cart.get("Mango")) + userProductCount);
        if (cart.get("Mango") <= 0) cart.delete("Mango");
      break;
      case 4:
              cart.set("Watermelon", (!cart.get("Watermelon") ? 0 : cart.get("Watermelon")) + userProductCount);
        if (cart.get("Watermelon") <= 0) cart.delete("Watermelon");
      break;
      case 5:
              cart.set("Orange", (!cart.get("Orange") ? 0 : cart.get("Orange")) + userProductCount);
        if (cart.get("Orange") <= 0) cart.delete("Orange");
      break;
      default:
        console.log("No valid product chosen.\n")
      break;
    }

   } else {
    console.log("Invalid input.");
   }

  console.log("\n\nYour shoppingcart:");

  let totalCost = 0;
  cart.forEach((v, k) => {
    console.log(k + " - count: " + v + " - Total price: " + (v * products.get(k)) + ":-");
    totalCost += (v * products.get(k));
  })

  console.log("Total cost: " + totalCost + ":-\n");

  const checkout = prompt("Checkout? (y)");

  if (String(checkout).toLowerCase() == "y") {

    let payOk = false;
    let pay = 0;

    do {
      pay = Number(prompt("How much do you pay? ( minimum " + totalCost + ":- ): "));
      if (pay >= totalCost) payOk = true;
    } while (!payOk)

    console.log("\nThank you for shopping!");
    if (pay > totalCost) {
      console.log("You get: " + Math.abs((totalCost - pay)) + ":- back.");
    }

    inStore = false;

  }

}

console.log("\nWelcome back! =)\n");

