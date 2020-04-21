const persona = {
	black: {
		nombre: "Natasha",
		apellido: "Romanof",
		alias: "Black Widow",
		afiliacion: "Avengers",
		poderes: ["asesinato", "rapidez", "oscuridad", "balas eléctricas"],
	},
};

export const solicitud = async (nombre) => {
	const heroe = persona[nombre];

	if (heroe) {
		return heroe;
	} else {
		throw `El heroe ${nombre} no existe en la base de datos`;
	}
};
