/**
 * Created by wxy on 2017/6/20.
 */
var jsonURL = './superHero.json';

var request = new XMLHttpRequest();
request.open('GET',jsonURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var jsonText = request.response;
    var superHero = JSON.parse(jsonText);
}