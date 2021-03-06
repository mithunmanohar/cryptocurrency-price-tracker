# coinmarketcap.com cryptocurrency-data-tracker
Track all your favorite cryptocurrencies in one place on google spread sheet using data from coinmarketcap.com API. The sheet fetches the latest crytocurrency Rank, Price in any supported currency, MarketCap, 24h vol, 24h price change(%), 7d price change(%) from the API and updates the google spreadsheet.

# How to use the tracker

1. If you know google app script:
    - Create a new google spreadsheet and create a sheet with name 'crypto tracker'.
    - Create columns: Coin Name, Symbol, Rank, Price in USD, MarketCap, 24h vol, 24h price change (%), 7d price change (%)
    - In the toolbar go to Tools and click on Script Editor.
    - In the script editor, paste the code from coinmarketcap-cryptocurrency-tracker.js file and save it.
    - In the Coin Name, Symbol columns, add the coins you want to track.
    - In the main sheet insert an 'UPDATE' button image and assign the function 'fetch_data'. You are ready to go!
   Google sheets may ask for permission to run the script when you run it for the first time. Provide the required permission. If everything is set up correctly, you will be able to see the latest data updated on the sheet.


2. If you donot know how to use google app scipt, simply make a copy of the spread sheet from https://goo.gl/zHMNtj (opens a read-only copy of the tracker sheet) and follow the instructions below. 
    - On the tool bar, click on File > Make a copy. This will save a copy of the sheet on to your google drive.
    - Add the name, ticker of the coins you want to track in columns A, B of the sheet.
    - Click on the 'UPDATE' button. The sheet will ask for permission to run for the first time. Provide the required permissions. You will now see the latest data from coinmarketcap updated on to the sheet.

Note : 
    
     Coinmarketcap.com api supports multiple currencies. The default is USD. If you want to fetch the data in another currency, change the URL parameter accordigly in the script.
     For example :
     
     To fetch data in USD: https://api.coinmarketcap.com/v1/ticker/?start=0&limit=5000
     
     To fetch data in AUD: https://api.coinmarketcap.com/v1/ticker/?convert=AUD&start=0&limit=5000
 
