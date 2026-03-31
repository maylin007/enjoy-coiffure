"use client";

import { useState, useRef, useEffect } from "react";

function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^[\-\*] (.+)/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*<\/li>)/, "<ul class='list-disc pl-4 my-1'>$1</ul>")
    .replace(/\n/g, "<br/>")
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Erreur");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      setMessages([...newMessages, { role: "assistant", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          assistantContent += chunk;
          setMessages([...newMessages, { role: "assistant", content: assistantContent }]);
        }
      }
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Désolé, une erreur est survenue. Appelez-nous au 40 42 66 42." }]);
    }
    setIsLoading(false);
  }

  return (
    <>
      {/* Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-brand text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-brand-dark"
          aria-label="Ouvrir le chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[340px] max-w-[calc(100vw-48px)] bg-white shadow-2xl flex flex-col overflow-hidden" style={{ height: "480px", borderRadius: 0 }}>
          {/* Header */}
          <div className="bg-brand px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div>
              <p className="text-white text-sm font-semibold">Institut Leely</p>
              <p className="text-white/60 text-[11px]">Posez-nous vos questions</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors" aria-label="Fermer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted text-sm">Ia ora na ! Comment puis-je vous aider ?</p>
                <div className="mt-4 space-y-2">
                  {["Quels sont vos horaires ?", "Quels soins proposez-vous ?", "C'est où exactement ?"].map((q) => (
                    <button
                      key={q}
                      onClick={() => { setInput(q); }}
                      className="block w-full text-left text-xs px-3 py-2 bg-white border border-gray-200 text-gray-700 hover:border-brand/30 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-brand text-white"
                    : "bg-white border border-gray-200 text-gray-800"
                }`}>
                  {m.content ? (
                    <span dangerouslySetInnerHTML={{ __html: formatMarkdown(m.content) }} />
                  ) : (isLoading && i === messages.length - 1 ? "..." : "")}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex-shrink-0 border-t border-gray-200 p-3 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre question..."
                className="flex-1 text-sm px-3 py-2 border border-gray-200 outline-none focus:border-brand/50 bg-gray-50 text-gray-800"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-brand text-white px-3 py-2 text-sm disabled:opacity-40 hover:bg-brand-dark transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
