/*PART A*/ 
function sumValues(num1,num2,add){
    if(add){ 
        var result = 0; 
        result = num1+num2; 
        console.log('values add  : ', result)
    }else return; 

    console.log('final result: ', result); 

}

sumValues(10,10,true); 

/*PART B*/
function discountPrices(prices, discount){
    const discounted=[]; 
    const length = prices.length; 

    for(let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i]*(1-discount); 
        discounted.push(discountedPrice); 
    }
    
    //console.log(i); 
    //console.log(length); 
    //console.log(finalPrice); 

    return discounted; 

}
discountPrices([100,200,300], 0.5);
