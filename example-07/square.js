/**
 * Retorna un objeto "square" con funciones para imprimir su área
 * @param {*} width Ancho del cuadrado
 */
function square(width) {

	return {
		printArea: function() {
			console.log("Cuadrado de área " + (width * width));
		}
	}

}

module.exports = square;