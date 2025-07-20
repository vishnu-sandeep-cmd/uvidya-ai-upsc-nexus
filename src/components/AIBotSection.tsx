import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, Mic, Languages, Brain, BookOpen, Clock, TrendingUp, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import askEkaBot from "@/assets/ask-eka-bot.png";

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface LiveUpdate {
  id: string;
  title: string;
  category: string;
  time: string;
  importance: 'high' | 'medium' | 'low';
}

export function AIBotSection() {
  const [message, setMessage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [liveUpdates, setLiveUpdates] = useState<LiveUpdate[]>([]);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

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
      icon: Globe,
      title: "Real-Time Updates",
      description: "Live current affairs and UPSC notifications with analysis"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Get immediate answers with contextual understanding"
    }
  ];

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: '1',
      type: 'bot',
      content: `🙏 Namaste! I'm Ask-EKA, your AI companion for UPSC preparation. I can help you with:

📚 **Subject Queries**: Polity, Economy, Geography, History, Environment, etc.
📰 **Current Affairs**: Latest updates with UPSC relevance
🧮 **CSAT Problems**: Mathematical reasoning and logical questions
📝 **Essay Writing**: Structure and content guidance
🗓️ **Study Planning**: Personalized timetables and strategies

Ask me anything in your preferred language!`,
      timestamp: new Date(),
    };
    setChatMessages([welcomeMessage]);

    // Simulate live updates
    const updates: LiveUpdate[] = [
      { id: '1', title: 'Economic Survey 2024 highlights released', category: 'Economy', time: '2 hours ago', importance: 'high' },
      { id: '2', title: 'New environmental policy announced', category: 'Environment', time: '4 hours ago', importance: 'medium' },
      { id: '3', title: 'Supreme Court verdict on Article 370', category: 'Polity', time: '6 hours ago', importance: 'high' },
      { id: '4', title: 'India-Japan strategic partnership update', category: 'International Relations', time: '8 hours ago', importance: 'medium' },
    ];
    setLiveUpdates(updates);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Current Affairs
    if (lowerMessage.includes('current affairs') || lowerMessage.includes('news') || lowerMessage.includes('latest')) {
      return `📰 **Current Affairs Update**\n\nHere are today's key developments relevant to UPSC:\n\n• **Economic Survey 2024**: Highlights India's GDP growth projection at 6.5-7%\n• **Environmental Policy**: New guidelines for carbon neutrality by 2070\n• **Digital India**: Progress in rural connectivity and e-governance\n\n💡 **UPSC Relevance**: These topics are crucial for GS Paper 3 (Economy & Environment) and Essay writing.`;
    }
    
    // CSAT/Math problems
    if (lowerMessage.includes('csat') || lowerMessage.includes('math') || lowerMessage.includes('reasoning')) {
      return `🧮 **CSAT Problem Solving**\n\nI can help you with:\n• Quantitative Aptitude\n• Logical Reasoning\n• Data Interpretation\n• Reading Comprehension\n\n**Example**: If a train travels 240 km in 3 hours, what's its speed?\n**Solution**: Speed = Distance/Time = 240/3 = 80 km/h\n\n📝 Share your specific problem, and I'll solve it step-by-step!`;
    }
    
    // Subject-specific queries
    if (lowerMessage.includes('polity') || lowerMessage.includes('constitution')) {
      return `🏛️ **Indian Polity**\n\n**Key Topics**:\n• Constitutional Framework\n• Fundamental Rights & Duties\n• Union & State Relations\n• Judiciary & Parliament\n\n**Recent Updates**: Supreme Court judgments on privacy rights and federalism\n\n🎯 **Tip**: Focus on constitutional amendments and landmark cases for both Prelims and Mains.`;
    }
    
    if (lowerMessage.includes('economy') || lowerMessage.includes('economic')) {
      return `💰 **Indian Economy**\n\n**Current Focus Areas**:\n• Budget 2024 Analysis\n• Inflation & Monetary Policy\n• Banking & Financial Markets\n• Economic Reforms\n\n📊 **Key Data**: India's GDP growth, inflation rate, and fiscal deficit targets\n\n🎯 **Strategy**: Link economic concepts with current government policies.`;
    }
    
    if (lowerMessage.includes('geography') || lowerMessage.includes('monsoon')) {
      return `🌍 **Geography**\n\n**Important Topics**:\n• Physical Geography (Climate, Monsoons)\n• Human Geography (Population, Urbanization)\n• Economic Geography (Resources, Industries)\n• Environmental Geography\n\n🌧️ **Monsoon System**: SW monsoon (June-Sept) brings 80% of annual rainfall\n\n🗺️ **Tip**: Use maps and diagrams for better retention.`;
    }
    
    // Study planning
    if (lowerMessage.includes('timetable') || lowerMessage.includes('study plan') || lowerMessage.includes('preparation')) {
      return `📅 **Study Planning**\n\n**Daily Schedule Suggestion**:\n• 6-8 AM: Current Affairs + Newspaper\n• 9-12 PM: Core Subject (Polity/Economy)\n• 2-5 PM: Geography/History\n• 6-8 PM: CSAT Practice\n• 9-10 PM: Revision\n\n⏰ **Weekly Plan**: 6 days study + 1 day complete revision\n\n🎯 **Success Mantra**: Consistency > Intensity`;
    }
    
    // Default response
    return `🤖 I understand your query about "${userMessage}". Let me provide you with comprehensive information:\n\n**Analysis**: This topic is relevant for UPSC preparation and requires systematic study.\n\n**Key Points**:\n• Understand the conceptual foundation\n• Connect with current developments\n• Practice with previous year questions\n• Create mind maps for retention\n\n💡 **Next Steps**: Could you be more specific about which aspect you'd like me to focus on? I can provide detailed explanations, current affairs connections, or practice questions.`;
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date(),
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateAIResponse(message),
        timestamp: new Date(),
      };
      
      setChatMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice recognition implementation would go here
    if (!isListening) {
      // Simulate voice input
      setTimeout(() => {
        setIsListening(false);
        setMessage("What are the key features of Indian Constitution?");
      }, 3000);
    }
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
            {/* Live Updates */}
            <Card className="border-0 shadow-lg bg-gradient-card backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>Live UPSC Updates</span>
                  <Badge variant="secondary" className="text-xs">Real-time</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-24">
                  <div className="space-y-2">
                    {liveUpdates.map((update) => (
                      <div key={update.id} className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 flex-1">
                          <div className={`w-2 h-2 rounded-full ${
                            update.importance === 'high' ? 'bg-red-500' : 
                            update.importance === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          } animate-pulse`} />
                          <span className="text-foreground font-medium truncate">{update.title}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{update.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Main Chat Interface */}
            <Card className="border-0 shadow-large bg-gradient-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Ask-EKA AI Assistant</div>
                      <div className="text-sm text-muted-foreground flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>Online & Ready</span>
                      </div>
                    </div>
                  </div>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          <span className="flex items-center space-x-2">
                            <span>{lang.flag}</span>
                            <span className="text-xs">{lang.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Chat Messages */}
                <ScrollArea className="h-96 pr-4">
                  <div className="space-y-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            msg.type === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
                          <div className="text-xs opacity-70 mt-1">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                            </div>
                            <span className="text-sm text-muted-foreground">Ask-EKA is thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                </ScrollArea>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2">
                  {sampleQuestions.slice(0, 4).map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-left justify-start h-auto p-2 text-xs text-wrap hover:bg-primary/5"
                      onClick={() => handleSampleQuestion(question)}
                    >
                      {question.slice(0, 40)}...
                    </Button>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask anything about UPSC..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button 
                      size="icon" 
                      variant="outline"
                      onClick={handleVoiceInput}
                      className={isListening ? 'bg-red-100 border-red-300' : ''}
                    >
                      <Mic className={`w-4 h-4 ${isListening ? 'text-red-600 animate-pulse' : ''}`} />
                    </Button>
                    <Button 
                      onClick={handleSendMessage} 
                      disabled={!message.trim() || isTyping}
                      className="bg-gradient-primary hover:opacity-90"
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