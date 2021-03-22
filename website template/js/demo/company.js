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
  
  var apiKey = "e22042cb161e2d1917a06964e0036d91";
  
  //-----------------Function to build the balance sheet--------------------------------
  function updateCompany (stock){
    
    var url = `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${stock}?apikey=${apiKey}&limit=1` ;

    d3.json(url).then(function (data){

        console.log(data);


    });

};
//-------------------Function to build the income statement-----------------------------------------------------------------

function createMap (stock){

    var url = `https://financialmodelingprep.com/api/v3/income-statement/${stock}?limit=1&apikey=${apiKey}`;
    
    d3.json(url).then(function (data){

        console.log(data);
    });

};

//--------------------------------------------------------------------------------------------------------------------------
  // Add event listener for submit button
  d3.select("#submit").on("click", handleSubmit);
  // initiate the function
  init();
  
  //---------------------------------------------------------------------------------------------------------------------
  
  