function insertUrls(){
    // <meta itemprop="sku" content="MA704-10"></meta>
    var meta = document.querySelector("[itemprop=sku]");
    var sku_element = document.getElementsByClassName("product-sku")[0]

    if(meta.hasAttribute("url-inserted") || sku_element == "undefined"){return}
    meta.setAttribute("url-inserted", "done");
    var sku = meta.getAttribute("content");

    var cpanel_link = document.createElement("a");
    var stock_link = document.createElement("a");

    var cpanel_href  = "https://www.outbackequipment.com.au/_cpanel/products/view?sku=" + sku;
    var stock_href  = "https://www.outbackequipment.com.au/_cpanel/quicksearch?keyword=" + sku + "&fn=item";
    cpanel_link.innerHTML = "<br> <u> View Product in cpanel </u>";
    cpanel_link.href = cpanel_href;
    cpanel_link.setAttribute('target', '_blank');
    stock_link.innerHTML = "<br> <u> View Stock Level in cpanel </u>";
    stock_link.setAttribute('target', '_blank');
    stock_link.href = stock_href;
    sku_element.appendChild(cpanel_link)
    sku_element.appendChild(stock_link)
}

insertUrls();
document.getElementById("_jstl__header_r").addEventListener("DOMSubtreeModified", insertUrls)