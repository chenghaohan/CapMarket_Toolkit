const getFormattedCurrency = (currency, amount) => new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
  }).format(amount);
  
  // Submit Button handler
  function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value.toUpperCase();
  
  // clear the input value
  d3.select("#stockInput").node().value = "";
  
  updateCompany(stock);
  createMap(stock);

  }
  
  //----------------------------------------------------------------------------------------------------------------------------
  
  function init () {
  updateCompany("AAPL");
  createMap("AAPL");

  }
  
  //-----------------Function to build the balance sheet--------------------------------
  function updateCompany (stock){
    
    var url = url = `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=e22042cb161e2d1917a06964e0036d91`;

    d3.json(url).then(function (data) {

        var company = data[0].companyName;
        var intro = data[0].description;
        var link = data[0].website;

        document.getElementById("co_name").innerHTML =company;
        
        document.getElementById("intro").innerHTML =intro;

        document.getElementById("co_name").href = link;
        

        console.log(link);



    })


    

};
//-------------------Function to build the income statement-----------------------------------------------------------------

function createMap (stock){

    url = `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=e22042cb161e2d1917a06964e0036d91`;
    
    d3.json(url).then(function (data){

        var add = data.map(d => d.address);
        var city = data.map(d => d.city);
        var state = data.map(d => d.state);
        var country = data.map(d => d.country);
        var address = `${add}, ${city}, ${state}, ${country}`

        google.maps.event.addDomListener(window, 'load', intilize);

        function intilize (){
            var autocomplete = new google.maps.places.Autocomplete(address);
            google.maps.event.addListener(autocomplete, 'place_changed', function (){
                var place = autocomplete.getPlace();
                var lat = place.geometry.location.A;
                var lng = place.geometry.location.F;
                var coord = [lat, lng];
                console.log(coord)
            });
    };
});


    

        
    // }


    // var MAP_KEY = "pk.eyJ1IjoidG9vb255aGFuIiwiYSI6ImNra2VuODBhaTAwejYydnBlNW95cHc0aTQifQ.lDJ6660vKFDESAP286lP9g";

    // //Create a map
    // var myMap = L.map("mapid", {
    //     center: [37.09, -95.71],
    //     zoom: 3
    // });

    // //This step is creating a mapbox map layer and add it to myMap
    // L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    //     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    //     tileSize: 512,
    //     maxZoom: 18,
    //     zoomOffset: -1,
    //     id: "mapbox/streets-v11",
    //     accessToken: MAP_KEY
    // }).addTo(myMap);
   
};

//--------------------------------------------------------------------------------------------------------------------------
  // Add event listener for submit button
  d3.select("#submit").on("click", handleSubmit);
  // initiate the function
  init();
  
  //---------------------------------------------------------------------------------------------------------------------
  
  