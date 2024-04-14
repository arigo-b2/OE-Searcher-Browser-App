chrome.runtime.onInstalled.addListener(() => {
    //create first context menu
    chrome.contextMenus.create({
        id: "menu1",
        title: "Search in OutbackEquipment for \"%s\"", 
        contexts: ["selection"], 
    })
});

//listener for context menu
chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "menu1"){
        baseURL = "https://www.outbackequipment.com.au/?rf=kw&kw=";
        var newURL = baseURL + info.selectionText;
        chrome.tabs.create({ url: newURL });
    } 
});