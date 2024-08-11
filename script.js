document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

const responses = {
   "Hi": "Hello! How can I assist you today?",
    "How are you": "I'm just a bot, but I'm doing great! How about you?",
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "what's your name": "I'm Nexos, your virtual assistant.",
    "bye": "Goodbye! Have a great day!",
    "hi": "Hello! How can I assist you today?",
      "what is the weather today": "It's a sunny day with a light breeze.",
      "what is ai": "Artificial Intelligence is the simulation of human intelligence in machines.",
      "Kichu bhalo lagche na bhai":"Kotha bol amar sathe then",
      "kichu bhalo lagche na bhai":"ghuma ja",
      "Bal":"Gali diccchis Mc",
      "bal":"chutiya chup",
      "Ami ki moti ?":"Tor bhai k jigesh kor"
      


      
      // Add more inputs and responses here
  
  
};

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value.trim();
    if (userInput) {
        displayMessage(userInput, 'user-message');
        inputField.value = '';
        
        setTimeout(() => {
            const response = responses[userInput] || "Sorry, I don't understand that.";
            displayMessage(response, 'bot-message');
        }, 500);
    }
}

function displayMessage(message, className) {
    const chatContent = document.getElementById('chat-content');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}
