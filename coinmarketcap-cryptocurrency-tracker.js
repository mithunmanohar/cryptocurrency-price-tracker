/**
 * @author mithun manohar <mithunmanohar79@gmail.com>
 */

function fetch_data() {
    var url = "https://api.coinmarketcap.com/v1/ticker/?convert=AUD&start=0&limit=5000"; // fetches top 5000 coins from coinmarketcap.com api
    // more details about api at https://coinmarketcap.com/api/
    
    var options = {
        "method": "GET",
        "followRedirects": true,
        "muteHttpExceptions": true
    };

    var result = UrlFetchApp.fetch(url, options);
    
    if (result.getResponseCode() == 200) {
        var params = JSON.parse(result.getContentText()); // parse the json response from the api
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("crypto tracker"); // get the cryto tracker sheet
        var totalRows = sheet.getLastRow();
        coin_list = []
    
      for (var i = 2; i <= totalRows; i++) {
  
            var coin = sheet.getRange(i, 1).getValue();
            coin_list.push(coin)
        }

        for (var i = 0; i < coin_list.length; i++) {
            for (var k = 0; k < params.length; k++) {
                coin_data = []

                if (params[k]["name"] == coin_list[i]) {

                    coin_data.push(params[k]["rank"])
                    coin_data.push(params[k]["price_aud"])
                    coin_data.push(params[k]["market_cap_aud"])
                    coin_data.push(params[k]["24h_volume_aud"])
                    coin_data.push(params[k]["percent_change_24h"])
                    coin_data.push(params[k]["percent_change_7d"])
                    t_data = []
                    t_data.push(coin_data)
                    r = i + 2
                    range = sheet.getRange("C" + r.toString() + ":" + "H" + r.toString())
                    range.setValues(t_data) // write the data to the sheet

                }
            }
        }
    }
}
