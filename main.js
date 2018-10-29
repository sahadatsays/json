
var myRequest = new XMLHttpRequest();

myRequest.open('GET', 'https://github.com/samayo/country-json/blob/master/src/country-by-abbreviation.json');

myRequest.onload = () => {
    console.log(myRequest.responseText);
}

myRequest.send();