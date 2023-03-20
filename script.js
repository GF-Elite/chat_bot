const adapter = new window.ChatAdapter({
  openai: {
    apiKey: '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',
    chatbotId: 'org-Wx3U13xx4UXht60F3X7tYafm'
  }
});

adapter.createBotElement().then((botEl) => {
  document.getElementById('chatbot').appendChild(botEl);
});

