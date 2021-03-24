const getCurrency = (currency, amount) => new Intl.NumberFormat(undefined, {
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
  
  BalanceSheet(stock);
  IncomeSt(stock);
  CashFlow(stock);

  }
  
  //----------------------------------------------------------------------------------------------------------------------------
  
  function init () {
  BalanceSheet("AAPL");
  IncomeSt("AAPL");
  CashFlow("AAPL");

  }
  
  var apiKey = "e22042cb161e2d1917a06964e0036d91";
  
  //-----------------Function to build the balance sheet--------------------------------
  function BalanceSheet (stock){
    
    var url = `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${stock}?apikey=${apiKey}&limit=1` ;

    d3.json(url).then(function (data){

        var name = data[0].symbol;
        var date = data[0].date;
        var fs_name = name + " Financial Statements as of "+date;
        var fs_link = data[0].link;

        document.getElementById("fs_name").innerHTML = fs_name;
        document.getElementById("fs_name").href = fs_link;

        var accountpayables = data[0].accountPayables;
        var accumulatedothercomprehensiveincomeloss = data[0].accumulatedOtherComprehensiveIncomeLoss;
        var cashandcashequivalents = data[0].cashAndCashEquivalents;
        var cashandshortterminvestments = data[0].cashAndShortTermInvestments;
        var commonstock = data[0].commonStock;
        var deferredrevenue = data[0].deferredRevenue;
        var deferredrevenuenoncurrent = data[0].deferredRevenueNonCurrent;
        var deferredtaxliabilitiesnoncurrent = data[0].deferredTaxLiabilitiesNonCurrent;
        var goodwill = data[0].goodwill;
        var goodwillandintangibleassets = data[0].goodwillAndIntangibleAssets;
        var intangibleassets = data[0].intangibleAssets;
        var inventory = data[0].inventory;
        var longtermdebt = data[0].longTermDebt;
        var longterminvestments = data[0].longTermInvestments;
        var netdebt = data[0].netDebt;
        var netreceivables = data[0].netReceivables;
        var otherassets = data[0].otherAssets;
        var othercurrentassets = data[0].otherCurrentAssets;
        var othercurrentliabilities = data[0].otherCurrentLiabilities;
        var otherliabilities = data[0].otherLiabilities;
        var othernoncurrentassets = data[0].otherNonCurrentAssets;
        var othernoncurrentliabilities = data[0].otherNonCurrentLiabilities;
        var othertotalstockholdersequity = data[0].othertotalStockholdersEquity;
        var propertyplantequipmentnet = data[0].propertyPlantEquipmentNet;
        var retainedearnings = data[0].retainedEarnings;
        var shorttermdebt = data[0].shortTermDebt;
        var shortterminvestments = data[0].shortTermInvestments;
        var totalassets = data[0].totalAssets;
        var totalcurrentassets = data[0].totalCurrentAssets;
        var totalcurrentliabilities = data[0].totalCurrentLiabilities;
        var totaldebt = data[0].totalDebt;
        var totalinvestments = data[0].totalInvestments;
        var totalliabilities = data[0].totalLiabilities;
        var totalliabilitiesandstockholdersequity = data[0].totalLiabilitiesAndStockholdersEquity;
        var totalnoncurrentassets = data[0].totalNonCurrentAssets;
        var totalnoncurrentliabilities = data[0].totalNonCurrentLiabilities;
        var totalstockholdersequity = data[0].totalStockholdersEquity;

        var myTable = document.getElementById('balance_sheet');

        myTable.rows[0].cells[1].innerHTML = getCurrency("USD",accountpayables/1000);
        myTable.rows[1].cells[1].innerHTML = getCurrency("USD",accumulatedothercomprehensiveincomeloss/1000);
        myTable.rows[2].cells[1].innerHTML = getCurrency("USD",cashandcashequivalents/1000);
        myTable.rows[3].cells[1].innerHTML = getCurrency("USD",cashandshortterminvestments/1000);
        myTable.rows[4].cells[1].innerHTML = getCurrency("USD",commonstock/1000);
        myTable.rows[5].cells[1].innerHTML = getCurrency("USD",deferredrevenue/1000);
        myTable.rows[6].cells[1].innerHTML = getCurrency("USD",deferredrevenuenoncurrent/1000);
        myTable.rows[7].cells[1].innerHTML = getCurrency("USD",deferredtaxliabilitiesnoncurrent/1000);
        myTable.rows[8].cells[1].innerHTML = getCurrency("USD",goodwill/1000);
        myTable.rows[9].cells[1].innerHTML = getCurrency("USD",goodwillandintangibleassets/1000);
        myTable.rows[10].cells[1].innerHTML = getCurrency("USD",intangibleassets/1000);
        myTable.rows[11].cells[1].innerHTML = getCurrency("USD",inventory/1000);
        myTable.rows[12].cells[1].innerHTML = getCurrency("USD",longtermdebt/1000);
        myTable.rows[13].cells[1].innerHTML = getCurrency("USD",longterminvestments/1000);
        myTable.rows[14].cells[1].innerHTML = getCurrency("USD",netdebt/1000);
        myTable.rows[15].cells[1].innerHTML = getCurrency("USD",netreceivables/1000);
        myTable.rows[16].cells[1].innerHTML = getCurrency("USD",otherassets/1000);
        myTable.rows[17].cells[1].innerHTML = getCurrency("USD",othercurrentassets/1000);
        myTable.rows[18].cells[1].innerHTML = getCurrency("USD",othercurrentliabilities/1000);
        myTable.rows[19].cells[1].innerHTML = getCurrency("USD",otherliabilities/1000);
        myTable.rows[20].cells[1].innerHTML = getCurrency("USD",othernoncurrentassets/1000);
        myTable.rows[21].cells[1].innerHTML = getCurrency("USD",othernoncurrentliabilities/1000);
        myTable.rows[22].cells[1].innerHTML = getCurrency("USD",othertotalstockholdersequity/1000);
        myTable.rows[23].cells[1].innerHTML = getCurrency("USD",propertyplantequipmentnet/1000);
        myTable.rows[24].cells[1].innerHTML = getCurrency("USD",retainedearnings/1000);
        myTable.rows[25].cells[1].innerHTML = getCurrency("USD",shorttermdebt/1000);
        myTable.rows[26].cells[1].innerHTML = getCurrency("USD",shortterminvestments/1000);
        myTable.rows[27].cells[1].innerHTML = getCurrency("USD",totalassets/1000);
        myTable.rows[28].cells[1].innerHTML = getCurrency("USD",totalcurrentassets/1000);
        myTable.rows[29].cells[1].innerHTML = getCurrency("USD",totalcurrentliabilities/1000);
        myTable.rows[30].cells[1].innerHTML = getCurrency("USD",totaldebt/1000);
        myTable.rows[31].cells[1].innerHTML = getCurrency("USD",totalinvestments/1000);
        myTable.rows[32].cells[1].innerHTML = getCurrency("USD",totalliabilities/1000);
        myTable.rows[33].cells[1].innerHTML = getCurrency("USD",totalliabilitiesandstockholdersequity/1000);
        myTable.rows[34].cells[1].innerHTML = getCurrency("USD",totalnoncurrentassets/1000);
        myTable.rows[35].cells[1].innerHTML = getCurrency("USD",totalnoncurrentliabilities/1000);
        myTable.rows[36].cells[1].innerHTML = getCurrency("USD",totalstockholdersequity/1000);

        
    });

};
//-------------------Function to build the income statement-----------------------------------------------------------------

function IncomeSt (stock){

    var url = `https://financialmodelingprep.com/api/v3/income-statement/${stock}?limit=1&apikey=${apiKey}`;
    
    d3.json(url).then(function (data){

        var costandexpenses = data[0].costAndExpenses;
        var costofrevenue = data[0].costOfRevenue;
        var depreciationandamortization = data[0].depreciationAndAmortization;
        var ebitda = data[0].ebitda;
        var generalandadministrativeexpenses = data[0].generalAndAdministrativeExpenses;
        var grossprofit = data[0].grossProfit;
        var incomebeforetax = data[0].incomeBeforeTax;
        var incometaxexpense = data[0].incomeTaxExpense;
        var interestexpense = data[0].interestExpense;
        var netincome = data[0].netIncome;
        var operatingexpenses = data[0].operatingExpenses;
        var operatingincome = data[0].operatingIncome;
        var otherexpenses = data[0].otherExpenses;
        var researchanddevelopmentexpenses = data[0].researchAndDevelopmentExpenses;
        var revenue = data[0].revenue;
        var sellingandmarketingexpenses = data[0].sellingAndMarketingExpenses;
        var totalotherincomeexpensesnet = data[0].totalOtherIncomeExpensesNet;
        var weightedaverageshsout = data[0].weightedAverageShsOut;
        var weightedaverageshsoutdil = data[0].weightedAverageShsOutDil;

        var myTable = document.getElementById('income_statement');
        
        myTable.rows[0].cells[1].innerHTML = getCurrency("USD",costandexpenses/1000);
        myTable.rows[1].cells[1].innerHTML = getCurrency("USD",costofrevenue/1000);
        myTable.rows[2].cells[1].innerHTML = getCurrency("USD",depreciationandamortization/1000);
        myTable.rows[3].cells[1].innerHTML = getCurrency("USD",ebitda/1000);
        myTable.rows[4].cells[1].innerHTML = getCurrency("USD",generalandadministrativeexpenses/1000);
        myTable.rows[5].cells[1].innerHTML = getCurrency("USD",grossprofit/1000);
        myTable.rows[6].cells[1].innerHTML = getCurrency("USD",incomebeforetax/1000);
        myTable.rows[7].cells[1].innerHTML = getCurrency("USD",incometaxexpense/1000);
        myTable.rows[8].cells[1].innerHTML = getCurrency("USD",interestexpense/1000);
        myTable.rows[9].cells[1].innerHTML = getCurrency("USD",netincome/1000);
        myTable.rows[10].cells[1].innerHTML = getCurrency("USD",operatingexpenses/1000);
        myTable.rows[11].cells[1].innerHTML = getCurrency("USD",operatingincome/1000);
        myTable.rows[12].cells[1].innerHTML = getCurrency("USD",otherexpenses/1000);
        myTable.rows[13].cells[1].innerHTML = getCurrency("USD",researchanddevelopmentexpenses/1000);
        myTable.rows[14].cells[1].innerHTML = getCurrency("USD",revenue/1000);
        myTable.rows[15].cells[1].innerHTML = getCurrency("USD",sellingandmarketingexpenses/1000);
        myTable.rows[16].cells[1].innerHTML = getCurrency("USD",totalotherincomeexpensesnet/1000);
        myTable.rows[17].cells[1].innerHTML = getCurrency("USD",weightedaverageshsout/1000);
        myTable.rows[18].cells[1].innerHTML = getCurrency("USD",weightedaverageshsoutdil/1000);


    });

};

//-------------------Function to build the income statement-----------------------------------------------------------------

function CashFlow (stock){

    var url = `https://financialmodelingprep.com/api/v3/cash-flow-statement/${stock}?apikey=${apiKey}&limit=1`;

    d3.json(url).then(function (data){

        var accountspayables = data[0].accountsPayables;
        var accountsreceivables = data[0].accountsReceivables;
        var acquisitionsnet = data[0].acquisitionsNet;
        var capitalexpenditure = data[0].capitalExpenditure;
        var cashatbeginningofperiod = data[0].cashAtBeginningOfPeriod;
        var cashatendofperiod = data[0].cashAtEndOfPeriod;
        var changeinworkingcapital = data[0].changeInWorkingCapital;
        var commonstockissued = data[0].commonStockIssued;
        var commonstockrepurchased = data[0].commonStockRepurchased;
        var debtrepayment = data[0].debtRepayment;
        var deferredincometax = data[0].deferredIncomeTax;
        var depreciationandamortization = data[0].depreciationAndAmortization;
        var dividendspaid = data[0].dividendsPaid;
        var effectofforexchangesoncash = data[0].effectOfForexChangesOnCash;
        var freecashflow = data[0].freeCashFlow;
        var inventory = data[0].inventory;
        var investmentsinpropertyplantandequipment = data[0].investmentsInPropertyPlantAndEquipment;
        var netcashprovidedbyoperatingactivities = data[0].netCashProvidedByOperatingActivities;
        var netcashusedforinvestingactivites = data[0].netCashUsedForInvestingActivites;
        var netcashusedprovidedbyfinancingactivities = data[0].netCashUsedProvidedByFinancingActivities;
        var netchangeincash = data[0].netChangeInCash;
        var netincome = data[0].netIncome;
        var operatingcashflow = data[0].operatingCashFlow;
        var otherfinancingactivites = data[0].otherFinancingActivites;
        var otherinvestingactivites = data[0].otherInvestingActivites;
        var othernoncashitems = data[0].otherNonCashItems;
        var otherworkingcapital = data[0].otherWorkingCapital;
        var purchasesofinvestments = data[0].purchasesOfInvestments;
        var salesmaturitiesofinvestments = data[0].salesMaturitiesOfInvestments;
        var stockbasedcompensation = data[0].stockBasedCompensation;

        var myTable = document.getElementById('cash_flow');

        myTable.rows[0].cells[1].innerHTML = getCurrency("USD",accountspayables/1000);
        myTable.rows[1].cells[1].innerHTML = getCurrency("USD",accountsreceivables/1000);
        myTable.rows[2].cells[1].innerHTML = getCurrency("USD",acquisitionsnet/1000);
        myTable.rows[3].cells[1].innerHTML = getCurrency("USD",capitalexpenditure/1000);
        myTable.rows[4].cells[1].innerHTML = getCurrency("USD",cashatbeginningofperiod/1000);
        myTable.rows[5].cells[1].innerHTML = getCurrency("USD",cashatendofperiod/1000);
        myTable.rows[6].cells[1].innerHTML = getCurrency("USD",changeinworkingcapital/1000);
        myTable.rows[7].cells[1].innerHTML = getCurrency("USD",commonstockissued/1000);
        myTable.rows[8].cells[1].innerHTML = getCurrency("USD",commonstockrepurchased/1000);
        myTable.rows[9].cells[1].innerHTML = getCurrency("USD",debtrepayment/1000);
        myTable.rows[10].cells[1].innerHTML = getCurrency("USD",deferredincometax/1000);
        myTable.rows[11].cells[1].innerHTML = getCurrency("USD",depreciationandamortization/1000);
        myTable.rows[12].cells[1].innerHTML = getCurrency("USD",dividendspaid/1000);
        myTable.rows[13].cells[1].innerHTML = getCurrency("USD",effectofforexchangesoncash/1000);
        myTable.rows[14].cells[1].innerHTML = getCurrency("USD",freecashflow/1000);
        myTable.rows[15].cells[1].innerHTML = getCurrency("USD",inventory/1000);
        myTable.rows[16].cells[1].innerHTML = getCurrency("USD",investmentsinpropertyplantandequipment/1000);
        myTable.rows[17].cells[1].innerHTML = getCurrency("USD",netcashprovidedbyoperatingactivities/1000);
        myTable.rows[18].cells[1].innerHTML = getCurrency("USD",netcashusedforinvestingactivites/1000);
        myTable.rows[19].cells[1].innerHTML = getCurrency("USD",netcashusedprovidedbyfinancingactivities/1000);
        myTable.rows[20].cells[1].innerHTML = getCurrency("USD",netchangeincash/1000);
        myTable.rows[21].cells[1].innerHTML = getCurrency("USD",netincome/1000);
        myTable.rows[22].cells[1].innerHTML = getCurrency("USD",operatingcashflow/1000);
        myTable.rows[23].cells[1].innerHTML = getCurrency("USD",otherfinancingactivites/1000);
        myTable.rows[24].cells[1].innerHTML = getCurrency("USD",otherinvestingactivites/1000);
        myTable.rows[25].cells[1].innerHTML = getCurrency("USD",othernoncashitems/1000);
        myTable.rows[26].cells[1].innerHTML = getCurrency("USD",otherworkingcapital/1000);
        myTable.rows[27].cells[1].innerHTML = getCurrency("USD",purchasesofinvestments/1000);
        myTable.rows[28].cells[1].innerHTML = getCurrency("USD",salesmaturitiesofinvestments/1000);
        myTable.rows[29].cells[1].innerHTML = getCurrency("USD",stockbasedcompensation/1000);
    });

};


  // Add event listener for submit button
  d3.select("#submit").on("click", handleSubmit);
  // initiate the function
  init();
  
  //---------------------------------------------------------------------------------------------------------------------
  
  