    // Submit Button handler
  function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value.toUpperCase();
  
  // clear the input value
  d3.select("#stockInput").node().value = "";
  
  updateCompany(stock);
  updateNews(stock);
  }
  //----------------------------------------------------------------------------------------------------------------------------
  
  function init () {
  updateCompany("AAPL");
  updateNews("AAPL");

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

    });
};
//-------------------Function to build the News Card-----------------------------------------------------------------

function updateNews (stock){

    var url = `https://financialmodelingprep.com/api/v3/stock_news?tickers=${stock}&limit=3&apikey=e22042cb161e2d1917a06964e0036d91`;
    
    d3.json(url).then(function (data){
      // track image in api database
      var img1 = data[0].image;
      var img2 = data[1].image;
      var img3 = data[2].image;
      // track new title in api database
      var title1 = data[0].title;
      var title2 = data[1].title;
      var title3 = data[2].title;
      // track news content in api database
      var txt1 = data[0].text;
      var txt2 = data[1].text;
      var txt3 = data[2].text;
      // track news date in api database
      var date1 = data[0].publishedDate;
      var date2 = data[1].publishedDate;
      var date3 = data[2].publishedDate;
      // track new link in api database
      var link1 = data[0].url;
      var link2 = data[1].url;
      var link3 = data[2].url;
      //update news image
      document.getElementById("news_pic1").src =img1;
      document.getElementById("news_pic2").src =img2;
      document.getElementById("news_pic3").src =img3;
      //update news title
      document.getElementById("title1").innerHTML =title1;
      document.getElementById("title2").innerHTML =title2;
      document.getElementById("title3").innerHTML =title3;
      //update news brief content
      document.getElementById("txt_1").innerHTML =txt1;
      document.getElementById("txt_2").innerHTML =txt2;
      document.getElementById("txt_3").innerHTML =txt3;
      //update news date
      document.getElementById("date1").innerHTML =date1;
      document.getElementById("date2").innerHTML =date2;
      document.getElementById("date3").innerHTML =date3;
      //update news link
      document.getElementById("ext_link_1").href =link1;
      document.getElementById("ext_link_2").href =link2;
      document.getElementById("ext_link_3").href =link3;  
    });
};

//--------------------------------------------------------------------------------------------------------------------------
  // Add event listener for submit button
  d3.select("#submit").on("click", handleSubmit);
  // initiate the function
  init();