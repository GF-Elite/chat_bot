// Import package OpenAI
const openai = require('openai');

// Inisialisasi chatbot dengan API Key dan Engine ID
const openaiApiKey = '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';
const openaiEngineId = 'org-Wx3U13xx4UXht60F3X7tYafm';
openai.apiKey = openaiApiKey;

// Fungsi untuk mengirim pesan ke chatbot
function sendMessageToChatbot(message) {
  return openai.completions.create({
    engine: openaiEngineId,
    prompt: message,
    maxTokens: 64,
    n: 1,
    stop: ['\n']
  });
}

// Fungsi untuk menampilkan balasan dari chatbot
function displayChatbotResponse(response) {
  const chatbotResponse = response.choices[0].text;
  const chatbotResponseElement = document.createElement('div');
  chatbotResponseElement.innerHTML = chatbotResponse;
  document.getElementById('chatbot-responses').appendChild(chatbotResponseElement);
}

// Event listener untuk mengirim pesan ke chatbot ketika pengguna menekan tombol Enter
document.getElementById('chat-input').addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const message = event.target.value;
    sendMessageToChatbot(message)
      .then((response) => displayChatbotResponse(response));
  }
});
