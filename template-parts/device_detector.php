<?php
    if ( ! defined( 'TWS__CSS_JS' ) ) {
        define( 'TWS__CSS_JS', true ); // defined
        // echo 'TWS device detector';

        function tws__css_js($css_js, $custom_css_js_uri) {
            // Device Detection
            $isMob = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "mobile"));
            $isTab = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "tablet"));
            $isWin = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "windows"));
            $isAndroid = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "android"));
            $isIPhone = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "iphone"));
            $isIPad = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "ipad"));
            $isIOS = $isIPhone || $isIPad;

            // Adding css by detecting devices
            if ($isMob) {
                if ($isTab) {

                    return 'Tablet';
    
                } else{
                    if ($isIOS) {

                        return 'iOS Mobile';

                    } elseif ($isAndroid) {

                        return 'ANDROID';

                    }else{

                        return 'Other Mobile';

                    }
                }
            } elseif ($isWin) {

                // return 'WINDOWS';

                if($css_js == 'css'){
                    // wp_enqueue_style( 'app', get_stylesheet_directory_uri(). '/assets/build/css/app.css',  array(), null, 'all' );
                    // return '<link rel="stylesheet" id="app-css" href="' . get_stylesheet_directory_uri() . '/assets/build/css/app.css" type="text/css" media="all">';

                
                }elseif($css_js == 'js'){
                    // wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/build/js/app.js', array(), null, true);
                    // return '<script type="text/javascript" src="' . get_template_directory_uri() .'/assets/build/js/app.js" id="app-js"></script>';

                }
            
            } else {

                // return 'Others Desktop...';
                if($css_js == 'css'){

                    // wp_enqueue_style( 'app', get_stylesheet_directory_uri(). '/assets/build/css/app.css',  array(), null, 'all' );
                    
                    // app css
                    $css_files = '<link rel="stylesheet" id="app-css" href="' . get_stylesheet_directory_uri() . '/assets/build/css/app.css" type="text/css" media="all">';

                    // woo css
                    $css_files .= '<link rel="stylesheet" id="woo-css" href="' . get_stylesheet_directory_uri() . '/assets/build/css/woo.css" type="text/css" media="all">';


                    return $css_files;

                }elseif($css_js == 'js'){

                    // wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/build/js/app.js', array(), null, true);
                    
                    // app js
                    $js_files = '<script type="text/javascript" src="' . get_template_directory_uri() .'/assets/build/js/app.js" id="app-js"></script>';

                    // woo js
                    $js_files .= '<script type="text/javascript" src="' . get_template_directory_uri() .'/assets/build/js/woo.js" id="woo-js"></script>';

                    return $js_files;

                }elseif($css_js == 'custom_css'){

                    return '<link rel="stylesheet" href="' . $custom_css_js_uri .'" type="text/css">';
                
                }elseif($css_js == 'custom_js'){
                
                    return '<script type="text/javascript" src="' . $custom_css_js_uri . '"></script>';
                
                }
            }
        } // css_js
    } // check defined js or css
    
    // Device Detection
    $isMob = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "mobile"));
    $isTab = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "tablet"));
    $isWin = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "windows"));
    $isAndroid = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "android"));
    $isIPhone = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "iphone"));
    $isIPad = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "ipad"));
    $isIOS = $isIPhone || $isIPad;
?>