    // Submit Button handler
  function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value.toUpperCase();
  
  // clear the input value
  d3.select("#stockInput").node().value = "";
  
  updateCompany(stock);

  }
  
  //----------------------------------------------------------------------------------------------------------------------------
  
  function init () {
  updateCompany("AAPL");

  }
  
  //-----------------Function to build the balance sheet--------------------------------
  function updateCompany (stock){
    
    var url = `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=e22042cb161e2d1917a06964e0036d91`;

    d3.json(url).then(function (data) {

        //update company name and introduction and link and image 

        var company = data[0].companyName;
        var intro = data[0].description;
        var link = data[0].website;
        var image = data[0].image;

        document.getElementById("co_name").innerHTML =company;
        document.getElementById("intro").innerHTML =intro;
        document.getElementById("co_name").href = link;
        document.getElementById("myImg").src = image;



        // update company summary table
        var ceo = data[0].ceo;
        var industry = data[0].industry;
        var isin = data[0].isin;
        var cusip = data[0].cusip;
        var exh_mkt = data[0].exchangeShortName;
        var p_range = data[0].range;
        var beta = data[0].beta;
        var dividend = data[0].lastDiv;
        var ipo = data[0].ipoDate;

        var myTable = document.getElementById('myTable');

        myTable.rows[0].cells[1].innerHTML = ceo;
        myTable.rows[1].cells[1].innerHTML = industry;
        myTable.rows[2].cells[1].innerHTML = isin;
        myTable.rows[3].cells[1].innerHTML = cusip;
        myTable.rows[4].cells[1].innerHTML = exh_mkt;
        myTable.rows[5].cells[1].innerHTML = p_range;
        myTable.rows[6].cells[1].innerHTML = beta;
        myTable.rows[7].cells[1].innerHTML = dividend;
        myTable.rows[8].cells[1].innerHTML = ipo;

    })
};
//-------------------Function to build the income statement-----------------------------------------------------------------

// function updateTable (stock){

//     var url = `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=e22042cb161e2d1917a06964e0036d91`;
    
//     d3.json(url).then(function (data){

//         var ceo = json





//     });


   
// };

//--------------------------------------------------------------------------------------------------------------------------
  // Add event listener for submit button
  d3.select("#submit").on("click", handleSubmit);
  // initiate the function
  init();
  
  //---------------------------------------------------------------------------------------------------------------------
  
//         var add = data.map(d => d.address);
//         var city = data.map(d => d.city);
//         var state = data.map(d => d.state);
//         var country = data.map(d => d.country);
//         var address = `${add}, ${city}, ${state}, ${country}`

//         google.maps.event.addDomListener(window, 'load', intilize);

//         function intilize (){
//             var autocomplete = new google.maps.places.Autocomplete(address);
//             google.maps.event.addListener(autocomplete, 'place_changed', function (){
//                 var place = autocomplete.getPlace();
//                 var lat = place.geometry.location.A;
//                 var lng = place.geometry.location.F;
//                 var coord = [lat, lng];
//                 console.log(coord)
//             });
//     };
// });   
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