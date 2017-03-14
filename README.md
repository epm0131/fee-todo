AngularJS

This front end application is created using Angular and helps a shop account for their inventory. I created this interface to edit the inventory which includes the item name, price, quantity, and color. Some prices have a discount applied but all prices are taxed at 5.75%. The items that are discounted have a sale icon next to the price. At the bottom of the inventory, user can click on the "Switch Currency" button, which will convert the prices to UK GBP and re-clicking will revert prices back to US dollars.

At the end of the inventory table, the user is also able to add a new item to the inventory with its price, quantity, color, and discount. When the page is refreshed the new item remains in the inventory list.

Testing

The testing of this application is setup using Grunt build with Karma, Mocha, and Chai.
