const { devView } = require('./init');

// console.log(devView);


var phpFiles = [];

if(devView == 1){
  phpFiles.push(
    '../header.php',
    '../template-parts/mobile/global/header-nav.php',
    '../sidebar.php',
  
  '../page-shop-home.php',
    '../woocommerce/loop/loop-start.php',
    '../woocommerce/template-parts/mobile/content-product.php',

    '../woocommerce/cart/mini-cart.php',

  '../footer.php',

  );

}else if(devView == 2){
    phpFiles.push(
      '../header.php',
        '../template-parts/desktop/global/header-nav.php',
        '../sidebar.php',
      
      '../page-shop-home.php',
        '../woocommerce/loop/loop-start.php',
        '../woocommerce/template-parts/desktop/content-product.php',

        '../woocommerce/cart/mini-cart.php',

      '../footer.php',
    );

}


module.exports = {
  purge: phpFiles,
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1280': '1280px'
    }
  },
  variants: {
    extend: {
      height: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      padding: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      margin: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      fontSize: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      display: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      opacity: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      boxShadow: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      // borderWidth: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      // borderStyle: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      borderColor: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      
    },
  },
  plugins: [],
}
