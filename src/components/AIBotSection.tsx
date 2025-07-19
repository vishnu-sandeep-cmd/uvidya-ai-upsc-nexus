import { useState } from "react";
import { MessageCircle, Send, Mic, Languages, Brain, BookOpen, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import askEkaBot from "@/assets/ask-eka-bot.png";

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function AIBotSection() {
  const [message, setMessage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello! I'm Ask-EKA, your AI assistant for UPSC preparation. I can help you with questions about Polity, Economy, Geography, History, Current Affairs, and even solve CSAT problems. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const languages = [
    { value: "english", label: "English", flag: "🇬🇧" },
    { value: "hindi", label: "हिंदी", flag: "🇮🇳" },
    { value: "telugu", label: "తెలుగు", flag: "🇮🇳" },
    { value: "tamil", label: "தமிழ்", flag: "🇮🇳" },
    { value: "kannada", label: "ಕನ್ನಡ", flag: "🇮🇳" },
    { value: "assamese", label: "অসমীয়া", flag: "🇮🇳" }
  ];

  const sampleQuestions = [
    "Explain the concept of federalism in Indian Constitution",
    "What are the major challenges in Indian economy?",
    "Describe the monsoon system in India",
    "Solve this CSAT reasoning problem"
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Explanations",
      description: "Get detailed explanations for complex UPSC topics with examples"
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Ask questions in 6 Indian languages for better understanding"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Coverage",
      description: "Covers all UPSC subjects including prelims, mains, and CSAT"
    }
  ];

  // Sample AI responses based on question type
  const getAIResponse = (userMessage: string, language: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('csat') || msg.includes('reasoning') || msg.includes('solve')) {
      return `🧮 **CSAT Problem Solution:**

I'd be happy to help you solve CSAT reasoning problems! Here's how I approach logical reasoning:

**For Analytical Reasoning:**
1. Read the problem carefully
2. Identify the given conditions
3. Create a logical framework
4. Apply step-by-step deduction

**Sample Problem Type - Syllogism:**
If you have: "All cats are animals. Some animals are dogs."
- Conclusion: Some dogs might be cats (Invalid)
- Correct approach: Draw Venn diagrams to visualize relationships

Please share the specific CSAT problem you'd like me to solve, and I'll provide a detailed step-by-step solution!

*Available in: ${language === 'hindi' ? 'हिंदी में भी उपलब्ध!' : language === 'telugu' ? 'తెలుగులో కూడా అందుబాటులో!' : 'Multiple languages!'} 🇮🇳*`;
    }
    
    if (msg.includes('polity') || msg.includes('constitution') || msg.includes('fundamental rights')) {
      return `🏛️ **Indian Polity Explanation:**

Great question about Indian Polity! Here's a comprehensive explanation:

**Key Concept - Fundamental Rights:**
- Right to Equality (Articles 14-18)
- Right to Freedom (Articles 19-22)
- Right against Exploitation (Articles 23-24)
- Right to Freedom of Religion (Articles 25-28)
- Cultural and Educational Rights (Articles 29-30)
- Right to Constitutional Remedies (Article 32)

**Important Points:**
✅ Article 32 is called the "Heart and Soul" of Constitution
✅ Fundamental Rights are justiciable (enforceable by courts)
✅ They can be suspended during Emergency (except Articles 20-21)

**Recent Updates:** Supreme Court judgments have expanded the scope of Right to Privacy and Right to Education.

Need specific clarification on any Article or concept? Ask me! 📚`;
    }
    
    if (msg.includes('economy') || msg.includes('economic') || msg.includes('gdp') || msg.includes('budget')) {
      return `📊 **Economic Concepts Explained:**

Excellent question about Indian Economy! Let me break this down:

**Key Economic Indicators:**
- **GDP Growth:** Measures economic expansion
- **Inflation:** Price level changes (CPI, WPI)
- **Fiscal Deficit:** Government spending vs revenue
- **Current Account Deficit:** Trade balance indicator

**Recent Economic Highlights:**
🔹 Digital Economy growth post-pandemic
🔹 PLI (Production Linked Incentive) schemes
🔹 Startup India initiatives impact
🔹 Green economy transition

**Budget 2024 Key Points:**
- Focus on infrastructure development
- MSP increase for farmers
- Digital India 2.0 initiatives

Want me to explain any specific economic concept or current policy? I'm here to help! 💹`;
    }
    
    if (msg.includes('geography') || msg.includes('climate') || msg.includes('monsoon') || msg.includes('mapping')) {
      return `🌍 **Geography Insights:**

Fantastic geography question! Here's a detailed explanation:

**Indian Monsoon System:**
- **Southwest Monsoon (June-September):** Brings 75% of annual rainfall
- **Northeast Monsoon (October-December):** Affects Tamil Nadu, Andhra Pradesh
- **El Niño/La Niña:** Pacific Ocean phenomena affecting Indian monsoons

**Climate Change Impact:**
🌡️ Rising temperatures affecting crop patterns
🌊 Sea level rise threatening coastal areas
🏔️ Himalayan glacier retreat concerns
💧 Changing precipitation patterns

**Mapping Techniques:**
- Topographical maps for terrain analysis
- Satellite imagery for real-time monitoring
- GIS applications in disaster management

**Pro Tip:** Always correlate physical geography with human activities for better understanding!

Need help with specific geographical concepts or map reading? Let me know! 🗺️`;
    }
    
    if (msg.includes('history') || msg.includes('ancient') || msg.includes('medieval') || msg.includes('modern')) {
      return `🏺 **Historical Analysis:**

Great history question! Let me provide a comprehensive overview:

**Periodization of Indian History:**

**Ancient India (3300 BCE - 700 CE):**
- Indus Valley Civilization
- Vedic Period
- Mauryan & Gupta Empires
- South Indian Dynasties

**Medieval India (700 - 1707 CE):**
- Delhi Sultanate
- Mughal Empire
- Regional Kingdoms
- Bhakti & Sufi Movements

**Modern India (1707 - 1947):**
- British Colonial Rule
- Freedom Struggle
- Socio-religious Reform Movements
- Partition & Independence

**Key Learning Strategy:**
📅 Create timelines for better retention
🗺️ Use maps to understand territorial changes
👥 Study personalities and their contributions
📜 Focus on cause-effect relationships

Which specific period or event would you like me to elaborate on? 📖`;
    }
    
    // Default response
    return `🤖 **Ask-EKA AI Assistant:**

Thank you for your question! I'm here to help with all UPSC-related queries.

**I can assist you with:**
📚 **Subjects:** Polity, Economy, Geography, History, Environment, International Relations, Science & Technology, Ethics
🧮 **CSAT:** Logical reasoning, quantitative aptitude, comprehension
📰 **Current Affairs:** Daily news analysis, monthly compilations
📝 **Answer Writing:** Structure, content, and presentation tips
📊 **Previous Year Analysis:** Trend identification and pattern recognition

**My Capabilities:**
✅ Multilingual support (6 Indian languages)
✅ Step-by-step problem solving
✅ Concept clarification with examples
✅ Current affairs updates
✅ Mock test assistance

Please feel free to ask me any specific question about UPSC preparation, and I'll provide a detailed response tailored to your needs!

*Tip: Be specific in your questions for more targeted help!* 💡`;
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message.trim(),
      sender: 'user',
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(userMessage.text, selectedLanguage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSampleQuestion = (question: string) => {
    setMessage(question);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">AI Assistant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet <span className="gradient-text">Ask-EKA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your intelligent AI companion for UPSC preparation. Get instant answers, solve complex problems, 
            and understand difficult concepts in your preferred language.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bot Character and Features */}
          <div className="space-y-8">
            {/* Bot Character */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 floating-animation">
                  <img 
                    src={askEkaBot} 
                    alt="Ask-EKA AI Bot"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Floating elements around the bot */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start space-x-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="space-y-6">
            <Card className="border-0 shadow-large bg-gradient-card backdrop-blur-sm h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Ask-EKA AI Assistant</div>
                    <div className="text-sm text-muted-foreground">Ready to help with your UPSC queries</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col space-y-4 min-h-0">
                {/* Language Selector */}
                <div className="flex-shrink-0">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Choose your preferred language:
                  </label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          <span className="flex items-center space-x-2">
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 min-h-0">
                  <ScrollArea className="h-full pr-4">
                    <div className="space-y-4">
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-2`}>
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              msg.sender === 'user' ? 'bg-primary ml-2' : 'bg-accent mr-2'
                            }`}>
                              {msg.sender === 'user' ? (
                                <User className="w-4 h-4 text-white" />
                              ) : (
                                <Bot className="w-4 h-4 text-white" />
                              )}
                            </div>
                            
                            {/* Message bubble */}
                            <div className={`rounded-2xl px-4 py-3 ${
                              msg.sender === 'user' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted text-foreground border border-border/50'
                            }`}>
                              <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                              <div className={`text-xs mt-1 ${
                                msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                              }`}>
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Typing indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="flex items-start space-x-2">
                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-muted border border-border/50 rounded-2xl px-4 py-3">
                              <div className="flex items-center space-x-1">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                </div>
                                <span className="text-sm text-muted-foreground ml-2">Ask-EKA is thinking...</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>

                {/* Sample Questions - Only show if no messages yet */}
                {chatMessages.length === 1 && (
                  <div className="flex-shrink-0">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Try these sample questions:
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {sampleQuestions.slice(0, 2).map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-left justify-start h-auto p-3 text-wrap hover:bg-primary/5"
                          onClick={() => handleSampleQuestion(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Input */}
                <div className="flex-shrink-0 space-y-3">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask any UPSC related question..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button size="icon" variant="outline" disabled={isTyping}>
                      <Mic className="w-4 h-4" />
                    </Button>
                    <Button 
                      onClick={handleSendMessage} 
                      className="bg-gradient-primary hover:opacity-90"
                      disabled={isTyping || !message.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}