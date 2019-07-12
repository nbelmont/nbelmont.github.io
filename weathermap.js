alert("HI")

var view;
var map;
var initialLocation;
var london;

function init() {
  initialLocation = ol.proj.fromLonLat([41.043316, 28.862457]);
  london = ol.proj.fromLonLat([-0.12755, 51.507222]);

 view = new ol.View({
   center: initialLocation,
   zoom : 6
 });

 map = new ol.Map({
   target : 'map',
   layers : [
     new ol.layer.Tile({
       source: new ol.source.OSM()
     })
   ],
   loadTilesWhileAnimating: true,
   view: view
 });
 }
 onClick('elasticToMoscow', function() {
     view.animate({
       center: moscow,
       duration: 2000,
       easing: elastic
     });
   });
 function panHome() {
 view.animate({
   center: london,
   duration: 2000
 })
 }
window.onload = init;
