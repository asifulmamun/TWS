const { devView } = require('./init');

// console.log(devView);


var phpFiles = [];

if(devView == 1){
  phpFiles.push(
    '../header.php',
    '../template-parts/mobile/global/header-nav.php',
    '../sidebar.php',
    '../template-parts/mobile/global/footer.php',
  
  '../page-shop-home.php',
  '../search.php',
  
  '../inc/woocommerce.php',


  '../woocommerce/content-single-product.php',
  '../woocommerce/global/breadcrumb.php',
  '../woocommerce/global/wrapper-start.php',
  '../woocommerce/global/wrapper-end.php',

  '../woocommerce/loop/loop-start.php',
  '../woocommerce/loop/sale-flash.php',
  

  '../woocommerce/template-parts/mobile/cart.php',
  '../woocommerce/template-parts/mobile/content-product.php',
  '../woocommerce/template-parts/mobile/content-single-product.php',

  '../woocommerce/cart/cart.php',
  '../woocommerce/checkout/form-checkout.php',

  '../woocommerce/myaccount/form-login.php',
  '../woocommerce/myaccount/my-account.php',
  '../woocommerce/myaccount/navigation.php',

  '../footer.php',

  );

}else if(devView == 2){
    phpFiles.push(
      '../header.php',
        '../template-parts/desktop/global/header-nav.php',
        '../sidebar.php',
        '../template-parts/desktop/global/footer.php',
        
      '../page-shop-home.php',
      '../search.php',

      '../inc/woocommerce.php',

      '../woocommerce/content-single-product.php',
      '../woocommerce/global/breadcrumb.php',
      '../woocommerce/global/wrapper-start.php',
      '../woocommerce/global/wrapper-end.php',

      '../woocommerce/loop/loop-start.php',
      '../woocommerce/loop/sale-flash.php',
      
      '../woocommerce/template-parts/desktop/cart.php',
      '../woocommerce/template-parts/desktop/content-product.php',
      '../woocommerce/template-parts/desktop/content-single-product.php',

      '../woocommerce/cart/cart.php',
      '../woocommerce/cart/mini-cart.php',
      '../woocommerce/checkout/form-checkout.php',

      '../woocommerce/myaccount/form-login.php',
      '../woocommerce/myaccount/my-account.php',
      '../woocommerce/myaccount/navigation.php',

      '../footer.php',
    );

}


module.exports = {
  purge: phpFiles,
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1280': '1280px'
    },
    extend: {

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
      inset: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      left: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      backgroundColor: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
      gradientColorStops: ['hover', 'focus', 'active', 'group-hover', 'group-focus'],
    },
  },
  plugins: [],
}
