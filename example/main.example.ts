import { Elysia } from "elysia";
import { problemDetails } from "../src/main";

const app = new Elysia()
	.use(problemDetails())
	.get("/", () => {
		console.log("Normal response");

		return {
			title: "Return normal!",
		};
	})
	.get("/error", () => {
		console.log("Error response direct return");
		return new Error();
	})
	.get("/error-throw", () => {
		console.log("Error response throw");
		throw new Error();
	})
	.listen(3000, (server) => {
		console.log(`Listening @ ${server.hostname}:${server.port}`);
	});