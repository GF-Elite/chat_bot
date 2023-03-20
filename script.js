const adapter = new window.ChatAdapter({
  openai: {
    apiKey: 'YOUR_API_KEY_HERE',
    chatbotId: 'YOUR_CHATBOT_ID_HERE'
  }
});

adapter.createBotElement().then((botEl) => {
  document.getElementById('chatbot').appendChild(botEl);
});

