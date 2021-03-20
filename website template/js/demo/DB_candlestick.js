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

updateCard(stock);
buildPlot(stock);
buildGauge(stock);
}

//----------------------------------------------------------------------------------------------------------------------------

function init () {
updateCard("AAPL");
buildPlot("AAPL");
buildGauge("AAPL");
}

var apiKey = "5e8b7e74b06a1bfaec948dff759b5abe";

//----------------------------------------------------------------------------------------------------------------------------

function updateCard(stock) {

var url = `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${apiKey}`

d3.json(url).then(function(data) {


  var company = data.map(d => d.companyName);
  var price = getFormattedCurrency('USD', data.map(d => d.price));
  var mktcap = getFormattedCurrency('USD',(data.map(d => d.mktCap)/1000000));
  var vol = (data.map(d => d.volAvg)).toLocaleString(undefined,{minimumFractionDigits:2});

  document.getElementById("companyName").innerHTML =company;
  document.getElementById("close_price").innerHTML =price;
  document.getElementById("mktcap").innerHTML =`${mktcap} Million`;
  document.getElementById("vol").innerHTML =vol;

});
};
//----------------------------------------------------------------------------------------------------------------------------
function buildPlot(stock) {

var url = `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?apikey=${apiKey}`


d3.json(url).then(function(data) {

var dates = data.historical.map(d=>d.date);
var startDate = d3.min(dates);
var endDate = d3.max(dates); 
var openingPrices = data.historical.map(d=>d.open);;
var highPrices = data.historical.map(d=>d.high);
var lowPrices = data.historical.map(d=>d.low);
var closingPrices = data.historical.map(d=>d.close);
var maxPrice = d3.max(highPrices);
var minPrice = d3.min(lowPrices);

var trace1 = {
  type: "scatter",
  mode: "lines",
  x: dates,
  y: closingPrices,
  line: {
    color: "#17BECF"
  }
};

// Candlestick Trace
var trace2 = {
  type: "candlestick",
  x: dates,
  high: highPrices,
  low: lowPrices,
  open: openingPrices,
  close: closingPrices
};

var data = [trace1, trace2];

var layout = {
  margin: {
    r: 0, 
    t: 0, 
    b: 0, 
    l: 50
  }, 

  xaxis: {
    range: [startDate, endDate],
    type: "date",
    rangeselector: {
    x: 0,
    y: 1.2,
    xanchor: 'left',
    font: {size:8},
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1 month'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6 months'
    }, {
        step: 'all',
        label: 'All dates'
    }]
  }
  },
  yaxis: {
    title: "Price",
    autorange: true,
    type: "linear",
    range: [minPrice, maxPrice]
  }
};

Plotly.newPlot("candlePlot", data, layout);
});
};
//----------------------------------------------------------------------------------------------------------------------------
function buildGauge(stock) {

  var url = `https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/${stock}?apikey=${apiKey}`;
  d3.json(url).then(function (data){
  
  var dcf = data.dcf;
  var current = data["Stock Price"];
  var rate = (dcf - current )/dcf * 100;
  var dcf_price = getFormattedCurrency('USD',dcf)
  console.log(dcf_price);
  console.log(`${rate}%`);
  
  if (rate <= -20) {var bar_color = "rgb(249, 55, 6)"; var decision = "Strong Sell"}
  else if (rate > -20 && rate <10) { var bar_color = "rgb(77, 77, 255)"; var decision = "Watch"}
  else {var bar_color = "rgb(45, 179, 0)"; var decision = "Strong Buy"};
  
  document.getElementById("recommend").innerHTML =`DCF Price: ${dcf_price};\xa0\xa0\xa0\xa0\xa0\xa0\xa0Decision: ${decision}`;
  
  var data = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: rate,
    // title: { text: "Speed" },
    type: "indicator",
    mode: "gauge+number+delta",
    delta: { reference: 0 },
    gauge: {
      axis: { range: [-100, 100] },
      bar: { color: bar_color },
      steps: [
        { range: [-100, -50], color: "rgb(228, 103, 103)"},
        { range: [-50, -5], color: "rgb(228, 228, 103)" },
        { range: [-5, 5], color: "rgb(255, 255, 255)" },
        { range: [5, 50], color: "rgb(179, 255, 217)" },
        { range: [50, 100], color: "rgb(156, 226, 156)" }
      ],
      bordercolor: "orange",
    },
    
  }]
  
  var layout = { margin: { t: 0, b: 0, l: 30, r:30} };
  
  var GAUGE = document.getElementById("myGauge");
  
  Plotly.newPlot(GAUGE, data, layout);
  })};
  //-----------------------------------------------------------------------------------------------------------------------
// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
// initiate the function
init();

//---------------------------------------------------------------------------------------------------------------------

