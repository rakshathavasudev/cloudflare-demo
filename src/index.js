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

    // Serve a small HTML web page at GET /
    if (pathname === "/" && method === "GET") {
      const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Me - Rakshatha Vasudev</title>
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(120deg, #f6f9fc, #e9f3ff);
            color: #222;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 2rem;
          }
          .card {
            background: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border-radius: 16px;
            max-width: 600px;
            padding: 2rem;
            text-align: center;
          }
          h1 {
            color: #0078D7;
          }
          p {
            line-height: 1.6;
          }
          a {
            color: #0078D7;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Hi, I'm Rakshatha Vasudev 👋</h1>
          <p>
            I'm a graduate student at the University at Buffalo passionate about
            data engineering, distributed systems, and deep learning research.
            Previously, I worked at Citi optimizing ETL pipelines for large-scale
            financial data and automating incident management with ML.
          </p>
          <p>
            Some of my recent projects include:<br>
            • InsightBot – an end-to-end Retrieval-Augmented Generation pipeline<br>
            • CNN-based tumor classification with diffusion models<br>
            • Optimizing Hadoop-based ingestion frameworks
          </p>
          <p>
            Let’s connect: 
            <a href="https://www.linkedin.com/in/rakshatha-vasudev/" target="_blank">LinkedIn</a> |
            <a href="mailto:rakshatha@example.com">Email Me</a>
          </p>
        </div>
      </body>
      </html>
      `;

      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // keep your POST /api/echo for testing
    if (pathname === "/api/echo" && method === "POST") {
      const body = await request.json();
      return Response.json({ you_sent: body });
    }

    return new Response("Not found", { status: 404 });
  },
};
