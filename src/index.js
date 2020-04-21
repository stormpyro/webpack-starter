// import { solicitud } from "./js/componentes";
import { obtenerUsuarios } from "./js/http-provider";
import { init } from "./js/chistes-page";
(async () => {
	"use strict";
	init();
	obtenerUsuarios().then(console.log);

	// obtenerChiste().then((chiste) => console.log(chiste));
	/* const jokeUrl = "https://api.chucknorris.io/jokes/random";

	await fetch(jokeUrl)
		.then((respuestaServidor) =>
			respuestaServidor.json().then((dataDevuelta) => console.log(dataDevuelta))
		) */
	/*La función fetch devuelve una promesa. Su argumento es una url a un backend. 
		Lo que resuelve es la respuesta de ese backend. El metodo json() lee esa respuesta JSON del backend de principio a fin. 
		Es decir lee todo el body de esa pagina del backend y resuelve toda la data ya parseada, es decir, convertida a objeto literal. */
	/* .catch((reject) => console.log(reject));
	solicitud("black")
		.then(async ({ alias, poderes }) => {
			if (alias == "Black Widow") {
				console.log("Primer then " + alias);
				return poderes;
			} else {
				throw "Objeto no encontrado";
			}
		})
		.then((resolve) => console.log(resolve)); */
	/*Se pueden utilizar varios then anidados. Siempre y cuando el anterior then retorne una promesa. Sino es el caso, entonces 
el siguiente then retornara undefined. */

	/* 	const ejecutar = async () => {
		await fetch(jokeUrl).then((respuestaServidor) =>
			respuestaServidor.json().then((dataDevuelta) => console.log(dataDevuelta))
		);
		solicitud("black")
			.then(async ({ alias, poderes }) => {
				if (alias == "Black Widow") {
					console.log("Primer then " + alias);
					return poderes;
				} else {
					throw "Objeto no encontrado";
				}
			})
			.then((resolve) => console.log(resolve));
	};
	ejecutar(); */
	/*Recordar que cada promesa se ejecuta en un hilo distinto y una vez ejecutado, regresa al hilo principal. 
	En el caso de la funcion ejecutar, estamos obligando a que la promesa solicitud espere a que termine la ejecucion del fecth
	usando el await. Una vez el fetch haya terminado su ejecucion, se ejecuta la promesa solicitud. Sino fuera asi,
	El que demora menos retornaria primero su data, en este caso solicitud se demora menos que fecth, por eso es que al principio,
	el primer retorno es de solicitud y luego es el del fetch. Pero podemos controlar el hilo y decirle a solicitud que
	espere a que fetch termine su ejecucion; todo esto gracias al await. */
})();
