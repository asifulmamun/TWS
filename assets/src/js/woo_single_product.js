import '../sass/woo_single_product.scss'; // for single products page

console.log('this is woo_single_product.js');


// qty of products update
const inpt_qty = document.querySelector('input[name=quantity]');

// Create the "Before" button
const btnBefore = document.createElement('button');
btnBefore.textContent = '-';
btnBefore.id = 'qty_dec';
btnBefore.type = 'button';

// Create the "After" button
const btnAfter = document.createElement('button');
btnAfter.textContent = '+';
btnAfter.id = 'qty_inc';
btnAfter.type = 'button';

// Insert the buttons before and after the input element
inpt_qty.parentNode.insertBefore(btnBefore, inpt_qty);
inpt_qty.parentNode.insertBefore(btnAfter, inpt_qty.nextSibling);

const qty_inc = document.getElementById('qty_inc');
const qty_dec = document.getElementById('qty_dec');


// Add event listener for quantity increment
qty_inc.addEventListener('click', () => {
    const currentValue = parseInt(inpt_qty.value);
    inpt_qty.value = currentValue + 1;
  });
  
  // Add event listener for quantity decrement
  qty_dec.addEventListener('click', () => {
    const currentValue = parseInt(inpt_qty.value);
    if (currentValue > 1) {
      inpt_qty.value = currentValue - 1;
    }
  });