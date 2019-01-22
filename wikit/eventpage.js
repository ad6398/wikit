var menu={
    "id":"wikit",
    "title":"Wikit",
    "contexts":["selection"]
}

chrome.contextMenus.create(menu);

function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="wikit" && clickData.selectionText){
        var wiki="https://en.wikipedia.org/wiki/" + fixedEncodeURIComponent(clickData.selectionText);
        var createurl={
            "url":wiki,
            "type":"popup"
        }
        chrome.windows.create(createurl,function(){});
    }
})