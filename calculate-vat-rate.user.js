// ==UserScript==
// @name         calculate quickly VAT rate
// @namespace    https://github.com/pawlik/tampermonkey 
// @version      0.1
// @description  calculates rought vat rate (hover over tax amount to see result)
// @author       Grzegorz Pawlik
// @match        https://*.nexwai.pl/at_de/nexwaycheckout/
// @grant        none
// ==/UserScript==

(function(){

// just for test

var gros, tax, rate;

gros = parseFloat(document.querySelectorAll('.grand_total-incl .price')[0].innerHTML.slice("X&nbsp;".length).replace(",", '.'))
tax = parseFloat(document.querySelectorAll('.tax_total .price')[0].innerHTML.slice("X&nbsp;".length).replace(",", '.'))

rate = (tax*100)/(gros-tax)

calculation = "  ("+tax+"*100)/("+gros+"-"+tax+")";

document.querySelectorAll('.tax_total .price')[0].title += "VAT Rate: " + rate + calculation;
})();
