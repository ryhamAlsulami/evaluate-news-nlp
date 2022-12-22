function checkForURL(inputURL) {
    //i used this Regex https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
    var checkUrl = inputURL.match('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i');

     if(checkUrl == null){
         return false;
     } else{
     return true;
     }
 }

 export { checkForURL }