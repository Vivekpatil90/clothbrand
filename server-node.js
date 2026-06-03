import { createServer } from "node:http";
import { createServerAdapter } from "@whatwg-node/server";
import { default as app } from "./dist/server/server.js";

const adapter = createServerAdapter(app.fetch.bind(app));
const server = createServer(adapter);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});