console.log(document.getElementsByClassName("title"))
var div = document.createElement("div");
// average_cost
const average_cost_inputField = document.querySelector('input[name="_itm_-avg_cost_price"]');
const average_cost = parseFloat(average_cost_inputField.value).toFixed(4);

// dpp
const dpp_inputField = document.querySelector('input[name="_itm_-default_purchase_price"]');
const dpp = parseFloat(dpp_inputField.value).toFixed(4);

// price_a
const price_a_inputField = document.querySelector('input[name="_price_-pr0"]');
const price_a = parseFloat(price_a_inputField.value).toFixed(2);

// promo_price
const promo_price_inputField = document.querySelector('input[name="_price_-promo0"]');
const promo_price = parseFloat(promo_price_inputField.value).toFixed(2);

let cost;
if (average_cost == 0) {
    cost = dpp;
} else {
    cost = average_cost;
}

const price_a_margin = ((((price_a / 1.1) - cost) / cost) * 100).toFixed(2);
let promo_margin;
if (((((promo_price / 1.1) - cost) / cost) * 100).toFixed(2) == -100) {
    promo_margin = "N/A"
} else {
    promo_margin = ((((promo_price / 1.1) - cost) / cost) * 100).toFixed(2);
}

var html = `
<div class="row">
    <div class="span2 cp-ui5-stdinp">
        <label>Markup - Price (A)</label>
        <div class="input-prepend">
            <span class="add-on">%</span>
            <input cp-init="text-input;" value="${price_a_margin}" name="_itm_-retail" class="ntextinput input-small" placeholder="0.00" min="0" step="0.01" readonly="" type="number">
        </div>
    </div>

    <div class="span2 cp-ui5-stdinp">
        <label>Markup - Promo Price (A)</label>
        <div class="input-prepend">
            <span class="add-on">%</span>
            <input type="text" step="0.0001" placeholder="0.0000" class="ntextinput input-small" name="_itm_-avg_cost_price" value="${promo_margin}" readonly="" cp-init="text-input;">
        </div>
    </div>
</div>
`
div.innerHTML = html
document.getElementById("pricing").appendChild(div)