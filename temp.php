
<?php

// Check if the "mobile" word exists in User-Agent 
$isMob = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "mobile")); 
  
// Check if the "tablet" word exists in User-Agent 
$isTab = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "tablet")); 
 
// Platform check  
$isWin = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "windows")); 
$isAndroid = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "android")); 
$isIPhone = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "iphone")); 
$isIPad = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "ipad")); 
$isIOS = $isIPhone || $isIPad; 
 
if($isMob){ 
    if($isTab){ 
        echo 'Using Tablet Device...'; 
		echo '<button class="ring-offset-2">Button A</button>';
    }else{ 
        echo 'Using Mobile Device...'; 
		echo '<button class="ring-2ring-offset-2 ring-4">Button Desktop</button>';
    } 
}else{ 
    echo 'Using Desktop...'; 
} 

if($isIOS){ 
    echo 'iOS'; 
}elseif($isAndroid){ 
    echo 'ANDROID'; 
}elseif($isWin){ 
    echo 'WINDOWS'; 
}

?>
