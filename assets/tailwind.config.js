
let page = 2; 

var phpFiles = [];

if(1 == page){
  phpFiles.push(
    '../header.php',
    '../footer.php',

  );

}else if( 2 == page ){
    phpFiles.push(
      './../header.php',
        './../template-parts/desktop/global/header-nav.php',
      './../template-parts/desktop/global/aside.php',
      
      './../page-shop-home.php',
        './../woocommerce/loop/loop-start.php',
        './../woocommerce/desktop/content-product.php',

        './../woocommerce/cart/mini-cart.php',

      './../footer.php',
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

    },
  },
  plugins: [],
}
