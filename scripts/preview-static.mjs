import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../out/", import.meta.url)));
const port = Number(process.argv[2] || 4173);
await stat(resolve(root, "index.html"));
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml; charset=utf-8", ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml", ".ico": "image/x-icon" };

createServer(async (request, response) => {
  response.setHeader("X-Robots-Tag", "noindex, nofollow");
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://127.0.0.1").pathname);
    const filePath = resolve(root, `.${pathname}`);
    if ((!filePath.startsWith(`${root}${sep}`) && filePath !== root) || pathname.split("/").some((part) => part.startsWith("."))) {
      response.writeHead(403).end();
      return;
    }
    const info = await stat(filePath);
    const file = info.isDirectory() ? resolve(filePath, "index.html") : filePath;
    const body = await readFile(file);
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    const body = await readFile(resolve(root, "404.html"));
    response.writeHead(404, { "Content-Type": types[".html"] });
    response.end(request.method === "HEAD" ? undefined : body);
  }
}).listen(port, "127.0.0.1", () => console.log(`Static preview: http://127.0.0.1:${port} (out/ only; .htaccess is not interpreted)`));
