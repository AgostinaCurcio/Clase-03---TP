var parametro1 = Number (prompt ("Ingresa un número", 0))
var parametro2 = Number (prompt ("Ingresa otro número", 0))
var calculo = prompt ("¿Qué operación querés hacer?")

var arroper = ["suma", "resta", "division", "multiplicacion"]
var operacion = function (a, b){
	for (var i= 0; i< arroper.length; i ++ ){
		if (arroper [0] === calculo){
			return a + b
		}else if (arroper [1] ===calculo){
			return a - b
		}else if (arroper [2] ===calculo){
			return a / b
		}else {
			return a * b
		}


	}
}

operacion(parametro1, parametro2)

var res = operacion (parametro1, parametro2)
console.log (res)
