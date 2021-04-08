if ((province == 'QUEBEC') || (province == 'ALBERTA') || (province == 'ONTARIO')) {
    rate = (province=='QUEBEC') ? rate='QUEBEC_RATE' 
        : (province=='ALBERTA') ? rate='ALBERTA_RATE'
        : (province=='ONTARIO') ? rate='ONTARIO_RATE':1
    amt = ((rate=='QUEBEC_RATE') || (rate=='ALBERTA_RATE') || (rate=='ONTARIO_RATE')) ? base*rate:base;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    const points = (province == 'QUEBEC') ? 2:null;
}

 