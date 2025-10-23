"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus, Smile, Paperclip, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Conversation {
  id: string;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

const conversations: Conversation[] = [
  {
    id: "1",
    name: "Chelsea Hagon",
    role: "Tech Lead",
    avatar: "/placeholder.svg",
    lastMessage: "Hey there, I met you earlier at digital nig...",
    timestamp: "12.30",
    isOnline: true,
  },
  {
    id: "2",
    name: "Chelsea Hagon",
    role: "Tech Lead",
    avatar: "/placeholder.svg",
    lastMessage: "Hey there, I met you earlier at digital nig...",
    timestamp: "12.30",
    isOnline: false,
  },
  {
    id: "3",
    name: "Samlanny UUE",
    role: "Product Manager",
    avatar: "/placeholder.svg",
    lastMessage: "Hey there, I met you earlier at digital nig...",
    timestamp: "12.30",
    isOnline: true,
  },
  {
    id: "4",
    name: "Samlanny UUE",
    role: "Product Manager",
    avatar: "/placeholder.svg",
    lastMessage: "Hey there, I met you earlier at digital nig...",
    timestamp: "12.30",
    isOnline: true,
  },
  {
    id: "5",
    name: "Samlanny UUE",
    role: "Product Manager",
    avatar: "/placeholder.svg",
    lastMessage: "Hey there, I met you earlier at digital nig...",
    timestamp: "12.30",
    isOnline: true,
  },
  {
    id: "6",
    name: "Chelsea Hagon",
    role: "Tech Lead",
    avatar: "/placeholder.svg",
    lastMessage: "Hey there, I met you earlier at digital nig...",
    timestamp: "12.30",
    isOnline: false,
  },
  {
    id: "7",
    name: "Samlanny UUE",
    role: "Product Manager",
    avatar: "/placeholder.svg",
    lastMessage: "Hey there, I met you earlier at digital nig...",
    timestamp: "12.30",
    isOnline: true,
  },
  {
    id: "8",
    name: "Chelsea Hagon",
    role: "Tech Lead",
    avatar: "/placeholder.svg",
    lastMessage: "Hey there, I met you earlier at digital nig...",
    timestamp: "12.30",
    isOnline: false,
  },
];

const messages: Message[] = [
  {
    id: "1",
    sender: "James Daniel",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    timestamp: "4:59 PM",
    isOwn: false,
  },
  {
    id: "2",
    sender: "James Daniel",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    timestamp: "4:59 PM",
    isOwn: false,
  },
  {
    id: "3",
    sender: "James Daniel",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    timestamp: "4:59 PM",
    isOwn: false,
  },
  {
    id: "4",
    sender: "James Daniel",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
    timestamp: "4:59 PM",
    isOwn: false,
  },
  {
    id: "5",
    sender: "You",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    timestamp: "4:59 PM",
    isOwn: true,
  },
];

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [messageText, setMessageText] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <div className="h-screen bg-background">
      <Tabs defaultValue="personal" className="w-full">
        <div className="border-b border-border">
          <div className="px-6 mx-auto ">
            <TabsList className="justify-start w-full h-10 gap-8 bg-transparent border-b-0">
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
              >
                Personal
              </TabsTrigger>
              <TabsTrigger
                value="community"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
              >
                Community
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="personal" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] h-[calc(100vh-57px)]">
            {/* Left Sidebar - Conversations List */}
            <div className="border-r border-border bg-muted/30">
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Search
                  </Button>
                </div>
              </div>

              <ScrollArea className="h-[calc(100vh-180px)]">
                <div className="px-3 space-y-1">
                  {conversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation)}
                      className={`w-full flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left ${
                        selectedConversation.id === conversation.id ? "bg-accent" : ""
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full bg-success border-background" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <p className="text-sm font-medium">{conversation.name}</p>
                            <p className="text-xs text-muted-foreground">{conversation.role}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {conversation.timestamp}
                          </span>
                        </div>
                        <p className="text-sm truncate text-muted-foreground">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Right Panel - Chat Area */}
            <div className="flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">My Messages</h1>
                  <div className="flex items-center gap-4">
                    <Select defaultValue="lagos">
                      <SelectTrigger className="w-[140px] border-0 bg-transparent">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="ibadan">Ibadan</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="recent">
                      <SelectTrigger className="w-[140px] border-0 bg-transparent">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Recent</SelectItem>
                        <SelectItem value="unread">Unread</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-6">
                <div className="max-w-4xl space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-3 max-w-[70%] ${message.isOwn ? "flex-row-reverse" : ""}`}>
                        {!message.isOwn && (
                          <Avatar className="flex-shrink-0 w-8 h-8">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                        )}
                        <div className={`space-y-1 ${message.isOwn ? "items-end" : "items-start"} flex flex-col`}>
                          <div
                            className={`rounded-2xl px-4 py-3 ${
                              message.isOwn
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-foreground"
                            }`}
                          >
                            {!message.isOwn && (
                              <p className="mb-1 text-sm font-medium">{message.sender}</p>
                            )}
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                          <div className="flex items-center gap-2 px-2">
                            <span className="text-xs text-muted-foreground">
                              {message.isOwn ? "You" : message.sender} • {message.timestamp}
                            </span>
                            {message.isOwn && (
                              <svg className="w-4 h-4 text-primary" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                <path d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <Button size="icon" variant="outline" className="flex-shrink-0 rounded-full">
                    <Plus className="w-5 h-5" />
                  </Button>
                  <div className="flex items-center flex-1 gap-2 px-4 rounded-full bg-muted">
                    <Input
                      placeholder="Text area"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Button size="icon" variant="ghost" className="flex-shrink-0 rounded-full">
                    <Smile className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="flex-shrink-0 rounded-full">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="flex-shrink-0 rounded-full bg-primary hover:bg-primary/90">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="community" className="mt-0">
          <div className="flex items-center justify-center h-[calc(100vh-57px)]">
            <p className="text-muted-foreground">Community messages will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Messages;