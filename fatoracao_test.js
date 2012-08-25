vows = require("vows");
assert = require("assert");




var IncludeFatoracao = require("./fatoracao.js");
var isPrimo = IncludeFatoracao.isPrimo;
var fatoracao = IncludeFatoracao.fatoracao;
var proximoMaiorPrimo = IncludeFatoracao.proximoMaiorPrimo;

vows.describe("fatores primos").addBatch({
	"Números primos": {
		"São números primos": function() {
			assert.isTrue(isPrimo(1));
			assert.isTrue(isPrimo(2));
			assert.isTrue(isPrimo(3));
			assert.isTrue(isPrimo(37));
		},

		"Não são números primos": function() {
			assert.isFalse(isPrimo(4));
			assert.isFalse(isPrimo(6));
			assert.isFalse(isPrimo(100));
		}
	},
	"Fatores primos": {
		"Número primo retorna ele mesmo": function() {
			assert.deepEqual(fatoracao(2), [2]);
			assert.deepEqual(fatoracao(3), [3]);
		},
		"Número não primo retorna fatoração primo": function() {
			assert.deepEqual(fatoracao(4), [2,2]);
			assert.deepEqual(fatoracao(12), [2,2,3]);
			assert.deepEqual(fatoracao(100), [2,2,5,5]);
			assert.deepEqual(fatoracao(276), [2,2,3,23]);
		}
	},
	"Próximo numero primo": {
		"Dado 2 retorna 3": function() {
			assert.equal(proximoMaiorPrimo(2), 3);
			assert.equal(proximoMaiorPrimo(79), 83);
		}
	}
}).run();
