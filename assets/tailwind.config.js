
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
    extend: {},
  },
  plugins: [],
}
