import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("pruebas en 09-promesas", () => {
	test("getHeroeByIdAsync debe retornar un héroe", (done) => {
		const ID = 1;

		getHeroeByIdAsync(ID).then((heroe) => {
			expect(heroe).toEqual({
				id: 1,
				name: "Batman",
				owner: "DC",
			});
			done();
		});
	});

	test("getHeroeByIdAsync debe retornar un error si no existe", (done) => {
		const ID = 100;

		getHeroeByIdAsync(ID).catch((error) => {
			expect(error).toBe("No se pudo encontrar el héroe");
			done();
		});
	});
});
