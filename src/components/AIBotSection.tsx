import { useState } from "react";
import { MessageCircle, Send, Mic, Languages, Brain, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import askEkaBot from "@/assets/ask-eka-bot.png";

export function AIBotSection() {
  const [message, setMessage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isTyping, setIsTyping] = useState(false);

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

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setIsTyping(true);
    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      setMessage("");
    }, 2000);
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
            <Card className="border-0 shadow-large bg-gradient-card backdrop-blur-sm">
              <CardHeader>
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
              <CardContent className="space-y-4">
                {/* Language Selector */}
                <div>
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

                {/* Sample Questions */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Try these sample questions:
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {sampleQuestions.map((question, index) => (
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

                {/* Chat Input */}
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask any UPSC related question..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button size="icon" variant="outline">
                      <Mic className="w-4 h-4" />
                    </Button>
                    <Button onClick={handleSendMessage} className="bg-gradient-primary hover:opacity-90">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {isTyping && (
                    <div className="flex items-center space-x-2 text-primary">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                      <span className="text-sm">Ask-EKA is thinking...</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}