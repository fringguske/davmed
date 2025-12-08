export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get the secret key from environment variables (Server-side only)
    // User should rename VITE_GPT_MINI_KEY to GPT_MINI_KEY in Vercel settings
    const apiKey = process.env.GPT_MINI_KEY;

    if (!apiKey) {
        console.error("Missing GPT_MINI_KEY environment variable");
        return res.status(500).json({ error: 'Server configuration error: API Key missing' });
    }

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': req.headers.origin || 'https://davmed.vercel.app', // Fallback or dynamic
                'X-Title': 'DAVMED Dental Services',
            },
            // Forward the body from the client (messages, model, etc.)
            body: JSON.stringify(req.body)
        });

        const data = await response.json();

        if (!response.ok) {
            // Forward the error from OpenRouter
            return res.status(response.status).json(data);
        }

        // Return the successful response
        return res.status(200).json(data);

    } catch (error) {
        console.error("Proxy API Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
