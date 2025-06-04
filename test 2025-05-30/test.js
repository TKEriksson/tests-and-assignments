/* 
Test 
Good Morning!  
 We are reimplementing the previous task.   
Implement following tasks 
1) User input 5 products and store them in a set. Make sure if user re enters the product it 
should not be added to Set. 

2) Use a loop to display every product and ask user to enter the price for it. Store the 
product and price in a Map. 

3) Design a menu to display all product names and price from the map 

4) Once product is selected – ask for the quantity 

5) Then calculate the total cost of the product. 

6) Check if the user wants to proceed to purchase again or to check out. 

7) If purchase is selected repeat task 2 

8) If the checkout option is selected display the total price of all purchases. 

9) Ask user to enter the price to pay. 

10) In case the user has paid more than the total purchase price then display the return 
amount. 

11) Display the most expensive product and the least expensive product from purchased 
products 

Optional: display the return cost in following format based on the return price 
1000  X  number of laps (1, 2 or more) 
500 X number of laps 
200 X number of laps 
100 X number of laps 
50 X number of laps 
20 X number of laps 
10 X number of laps 
5 X number of laps 
2 X number of laps 
1 X number of laps 
*/



const prompt = require("prompt-sync")();


let userProds = new Set();

while (userProds.size < 5) {
  let newP = prompt("Add product " + (userProds.size+1) + "/5:").trim();
  if (newP.length > 0 && typeof(newP) == "string") userProds.add(newP.toUpperCase());
}

const products = new Map();
for (elm of userProds) {
  let userCost;
  do  {
    userCost = Number.parseInt((prompt("Cost for " + elm + ": ")));
  } while ((!Number.isFinite(userCost) || (userCost <= 0)))
    products.set(elm, userCost);
}




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
    console.log(`${k}: ${v}st - costs: ${(v * products.get(k))}`);
    totCost += (v * products.get(k));
  })

  if (totCost === 0) {
    console.log("No items yet.");
  }
  console.log("\nTotal cost: " + totCost + ":-\n");

  return totCost;
}



// Updates the Cart
function updateCart(pickNr, count) {

  const prod = getProduct(pickNr);

  // Return false if not a valid pickNr.
  if (pickNr < 1 || pickNr > products.size) {
    console.log("No valid product.");
    return false;
  }

  // First update the cart:
  cart.set( prod, (!cart.get(prod) ? count : cart.get(prod) + count ) );

  // Check if the product now is 0 or below, then delete it:
  if (cart.get( prod) <= 0) cart.delete(prod)

  return true; // Cart updated. Return true! Never use it though...

}


function howMany(value, total) {
  return Math.floor(value / total);
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
        let pay = -1;
        do {
          pay = Number(prompt("How much do you pay? (minimum " + totalCost + ":-): "));
        } while (pay < totalCost || !Number.isFinite(pay)) 
        

        const costs = new Map();
        cart.forEach((v, k) => {
          costs.set(k, v * products.get(k));
        });


        if (costs.size > 0) {
          let sortedCostMap = new Map();
          costs.forEach((v, k) => {
            if (sortedCostMap.has(v)) {
              sortedCostMap.set(v, sortedCostMap.get(v) + ", " + k);
            } else {
              sortedCostMap.set(v, k);
            }
          })
          // So now it groups the products if they have the same cost in the cart.
          
          // It will be like:
          /* 

          Specifications:
          You bought MELON, KIWI for 20:- (each)
          You bought SANDWICH for 60:-
          You bought PIZZA, KEBAB for 600:- (each)

          */


          let sortedCosts = [... sortedCostMap.entries()].sort((a,b) => a[0]-b[0]); 
          // let [smallestCost, smallestProd] = sortedCosts[0];
          // let [biggestCost, biggestProd] = sortedCosts[sortedCosts.length - 1];

          console.log("\nSpecifications:")

          // Aha! ;)
          for (const [ind, [price, item]] of sortedCosts.entries()) {
            console.log(`You bought ${item} for ${price}:- ${(item.includes(',') ? 'each' : '')} ${(ind == 0 && sortedCosts.length > 1) ? '(least expensive)' : (ind == sortedCosts.length - 1 && sortedCosts.length > 1 ) ? ('(most expensive)') : ''}`);
          }

          // sortedCosts.forEach((v) => {
          //   console.log("You bought " + v[1] + " for " + v[0] + ":-" + (v[1].includes(",") ? " (each)" : ""));
          // });
          // console.log("\n");
          // console.log("So the most expensive products in your cart was: " + biggestProd + " - " + biggestCost + ":-");
          // console.log("And the least expensive products in your cart was: " + smallestProd + " - " + smallestCost + ":-");

        }

        let totalBack = (pay - totalCost);
        console.log("\n");
        if (totalBack > 0) {
          console.log("You get back: " + totalBack);

          let moneys = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
          let moneysCount = [];

          for (let i = 0; i < moneys.length; i++) {

            const howManyMoney = howMany(totalBack, moneys[i]);
            totalBack -= (moneys[i] * howManyMoney);
            moneysCount.push(howManyMoney);

          }
          
          for (let i = 0; i < moneys.length; i++) {
            if (moneysCount[i]>0) console.log(moneys[i] + " x " + moneysCount[i]);
          }

        }

        inStore = false;

      }
    }
  
}

console.log("\nWelcome back! =)\n");

