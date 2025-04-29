"use client";

import { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState<
    { user: string; bot: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput) return;

    setLoading(true);
    const newConversation = [...conversation, { user: userInput, bot: "..." }];
    setConversation(newConversation);
    try {
      const body = { question: userInput };
      const response = await axios.post("/api/chat", body);
      const botResponse = response.data.answer;
      setConversation([
        ...newConversation.slice(0, -1),
        { user: userInput, bot: botResponse },
      ]);
    } catch (error) {
      console.error("Error fetching response from API:", error);
      setConversation([
        ...newConversation.slice(0, -1),
        { user: userInput, bot: "Error retrieving response" },
      ]);
    }
    setUserInput("");
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? "user" : "bot"}`}
          >
            <p>
              {message.user ? `You: ${message.user}` : `Bot: ${message.bot}`}
            </p>
          </div>
        ))}
        {loading && <p className="loading">Bot is typing...</p>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything..."
          className="input-field"
        />
        <button onClick={handleSendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
