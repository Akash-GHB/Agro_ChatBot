import axios from 'axios';
export const chat = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "message required" });

    const reply = await getChatReply(message);
    res.status(201).json({ reply });
  } catch (err) {
    console.error("Chat error:", err?.response?.data || err.message);
    res.status(500).json({ error: "chat failed", details: err?.message });
  }

}
// -------------------- CHAT (Perplexity) -------------------- //
async function getChatReply(userText) {
  const systemPrompt = "You are an agricultural assistant. Always reply in Tamil (simple and clear).";

  const payload = {
    model: "sonar-pro", // Perplexity model
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userText }
    ],
    max_tokens: 400,
    temperature: 0.6
  };

  const resp = await axios.post(
    "https://api.perplexity.ai/chat/completions",
    payload,
    {
      headers: {
        "Authorization": `Bearer ${process.env.PERPLEXITY_API_KEY}`, // ✅ fixed
        "Content-Type": "application/json",
        "User-Agent": "NodeServer/1.0"
      }
    }
  );

  return resp.data.choices[0].message.content;
}