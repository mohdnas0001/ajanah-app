"use client";

import { useState } from "react";
import { Plus, Smile, Mic, Send } from "lucide-react"; // icons

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState<"personal" | "community">("personal");

  // sample data
  const personalChats = [
    { id: 1, name: "Chelsea Hagon", role: "Tech Lead", lastMsg: "Hey there, I met you earlier at digital night...", time: "12:30" },
    { id: 2, name: "Samlanny UUE", role: "Product Manager", lastMsg: "Don’t forget the meeting at 4", time: "12:20" },
    { id: 3, name: "Michael Lee", role: "Designer", lastMsg: "Can you send me the Figma link?", time: "11:45" },
    { id: 4, name: "Chelsea Hagon", role: "Tech Lead", lastMsg: "Following up on our last discussion.", time: "11:15" },
    { id: 5, name: "Samlanny UUE", role: "Product Manager", lastMsg: "Got the presentation ready?", time: "10:55" },
  ];

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-border pb-2">
        <button
          onClick={() => setActiveTab("personal")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "personal"
              ? "text-primary border-b-2 border-primary"
              : "text-neutral"
          }`}
        >
          Personal
        </button>
        <button
          onClick={() => setActiveTab("community")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "community"
              ? "text-primary border-b-2 border-primary"
              : "text-neutral"
          }`}
        >
          Community
        </button>
      </div>

      {/* Search + My Messages Row */}
      <div className="flex items-center gap-4 mt-4">
        <div className="flex border border-border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 text-sm focus:outline-none"
          />
          <button className="bg-primary text-white px-4">Search</button>
        </div>
        <h2 className="font-semibold text-base">My Messages</h2>
      </div>

      {/* Content Area */}
      <div className="mt-6">
        {activeTab === "personal" ? (
          <div className="grid grid-cols-12 gap-6">
            {/* LEFT SIDEBAR */}
            <aside className="col-span-4 bg-card rounded-lg shadow-soft p-4">
              <div className="space-y-3">
                {personalChats.map((chat) => (
                  <div
                    key={chat.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer"
                  >
                    <div>
                      {/* Name + Role in one line */}
                      <p className="font-medium text-sm flex items-center gap-2">
                        {chat.name}
                        <span className="w-1 h-1 rounded-full bg-neutral"></span>
                        <span className="text-xs text-neutral">{chat.role}</span>
                      </p>
                      <p className="text-xs text-neutral mt-1">{chat.lastMsg}</p>
                    </div>
                    <span className="text-xs text-neutral">{chat.time}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* RIGHT CHAT WINDOW */}
            <section className="col-span-8 bg-card rounded-lg shadow-soft p-4 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-3">
                {/* Example messages */}
                <div className="flex items-start gap-2">
                  <img src="/avatar1.png" alt="user" className="w-8 h-8 rounded-full" />
                  <div>
                    <div className="bg-muted rounded-lg p-3 text-sm max-w-xs">
                      In publishing and graphic design, Lorem ipsum is a placeholder text...
                    </div>
                    <p className="text-xs text-neutral mt-1">James Daniel • 4:59 PM</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div>
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 text-sm max-w-xs">
                      In publishing and graphic design, Lorem ipsum is a placeholder text...
                    </div>
                    <p className="text-xs text-neutral mt-1 text-right">You • 4:59 PM ✔✔</p>
                  </div>
                </div>
              </div>

              {/* INPUT ROW */}
              <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
                {/* Left side: Plus */}
                <button className="p-2 hover:bg-muted rounded-full"><Plus size={18} /></button>

                {/* Input box */}
                <input
                  type="text"
                  placeholder="Text area"
                  className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none"
                />

                {/* Right side: Smile, Mic, Send */}
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-muted rounded-full"><Smile size={18} /></button>
                  <button className="p-2 hover:bg-muted rounded-full"><Mic size={18} /></button>
                  <button className="p-2 bg-primary text-white rounded-full">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="p-6 text-neutral">
            🌍 Community messages list goes here...
          </div>
        )}
      </div>
    </div>
  );
}
