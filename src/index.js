// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    money = new Object;
    if (currency<=0) return money;
    if (currency>10000) {
    	money.error="You are rich, my friend! We don't have so much coins for exchange"
    	return money;
    };
    money.H=Math.trunc(currency/50);
    money.Q=Math.trunc((currency-money.H*50)/25);
    money.D=Math.trunc((currency-money.H*50-money.Q*25)/10);
    money.N=Math.trunc((currency-money.H*50-money.Q*25-money.D*10)/5);
    money.P=currency-money.H*50-money.Q*25-money.D*10-money.N*5;
    if(money.H==0) delete money.H;
    if(money.Q==0) delete money.Q;
    if(money.D==0) delete money.D;
    if(money.N==0) delete money.N;
    if(money.P==0) delete money.P;
    return money;
}
