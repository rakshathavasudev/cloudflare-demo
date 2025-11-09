/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request) {
    const { method, url } = request;
    const { pathname } = new URL(url);

    if (pathname === "/api/hello" && method === "GET") {
      return Response.json({ message: "Hello from Cloudflare Workers!" });
    }

    if (pathname === "/api/echo" && method === "POST") {
      const body = await request.json();
      return Response.json({ you_sent: body });
    }

    return new Response("Not found", { status: 404 });
  },
};
