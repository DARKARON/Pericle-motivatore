/* Cloudflare Worker di esempio: inoltra a Claude Haiku nascondendo la chiave.
   Deploy: workers.cloudflare.com -> nuovo Worker -> incolla questo file
   -> Settings -> Variables -> aggiungi ANTHROPIC_API_KEY.
   Poi copia l'indirizzo del Worker in chat-config.js. */

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return new Response("Solo POST", { status: 405, headers: cors });

    const body = await request.json();
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: body.model || "claude-haiku-4-5",
        max_tokens: body.max_tokens || 200,
        system: body.system,
        messages: body.messages
      })
    });
    const dati = await res.json();
    const reply = dati?.content?.[0]?.text || "";
    return new Response(JSON.stringify({ reply }), {
      headers: { ...cors, "Content-Type": "application/json" }
    });
  }
};
