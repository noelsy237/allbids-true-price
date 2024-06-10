prices = document.querySelectorAll('.h1.ng-binding.ng-scope');
        
prices.forEach(price => {
    currentValue = price.textContent
    
    asInteger = currentValue.replace('$', '').trim();
    
    afterTax = (asInteger * 1.225).toFixed(2);
    
    price.textContent = currentValue + " ($" + afterTax + ")";
});
