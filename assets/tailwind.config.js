/**
* Tailwindcss
    1  Mobile
    2  Desktop

**/

let page = 1; 

var phpFiles = [];

if(1 == page){
  phpFiles.push(
    '../header.php',
    '../template-parts/mobile/global/header-nav.php',
    '../sidebar.php',
  
  '../page-shop-home.php',
    '../woocommerce/loop/loop-start.php',
    '../woocommerce/mobile/content-product.php',

    '../woocommerce/cart/mini-cart.php',

  '../footer.php',

  );

}else if( 2 == page ){
    phpFiles.push(
      '../header.php',
        '../template-parts/desktop/global/header-nav.php',
        '../sidebar.php',
      
      '../page-shop-home.php',
        '../woocommerce/loop/loop-start.php',
        '../woocommerce/desktop/content-product.php',

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
