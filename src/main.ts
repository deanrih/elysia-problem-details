import { Elysia } from "elysia";

// https://datatracker.ietf.org/doc/html/rfc9457
export function problemDetails(options?: {}) {
	return new Elysia({
		name: "@deanrih/elysia-problem-details"
	})
		// Using mapResponse since onAfterHandle won't be called on throw
		.mapResponse({ as: "scoped" }, ({ response, set }) => {
			if (!(response instanceof Error)) {
				return response;
			}

			// set.headers["content-encoding"] = "gzip";
			// set.headers["content-type"] = "text/plain; charset=utf-8";
			// return new Response(Bun.gunzipSync("asd"), {
			// 	// headers: {
			// 	// 	// "Content-Type": "text/plain; charset=utf-8"
			// 	// 	"Content-Type": "text/plain"
			// 	// }
			// });
			return {
				type: "typeurl",
				status: 400,
				title: "Problem Title",
				detail: "Detailed explanation",
				instance: "Problem Instance"
			};
		})
		;
}