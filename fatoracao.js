exports.isPrimo =  function(numero) {
	for (var i = 2; i < numero; i++) {
		if (numero % i == 0) 
			return false;
	}	
	return true;
}

exports.fatoracao = function(numero) {
	if (exports.isPrimo(numero))  return [numero];
	
	var listaDeFatores = [];	
	var fator = 2;	
	
	while (numero > 1) {				
		if (numero % fator == 0) {
			numero = numero / fator;
			listaDeFatores.push(fator);
		} else {
			fator = exports.proximoMaiorPrimo(fator);
		}				 
	}	
	return listaDeFatores;	
}

exports.proximoMaiorPrimo = function(numero) {		
	while (!exports.isPrimo(++numero));
	return numero;	
}
