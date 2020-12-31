/*
 Detects the browser language
 */
var userLang = navigator.language || navigator.userLanguage;
redirect(userLang);

/*
 redirects to the desired URLs
 Only the first two letters of the ISO country code are used
 */
function redirect(actuallang){
  var url ='./';
  switch(actuallang){
    case 'en':
      url ='./en/index.html';
      break;
    case 'es':
      url ='./es/index.html';
      break;
    default:
      url='./en/index.html';
      break;
  }
  window.location.replace(url);
}
