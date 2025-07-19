import { useState } from "react";
import { BookOpen, Brain, Calendar, Video, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { SubjectsGrid } from "@/components/SubjectsGrid";
import { AIBotSection } from "@/components/AIBotSection";

export default function Students() {
  const [activeTab, setActiveTab] = useState("subjects");

  const quickActions = [
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "Access comprehensive notes and resources",
      action: "subjects"
    },
    {
      icon: Brain,
      title: "Ask AI",
      description: "Get instant help from Ask-EKA",
      action: "ai-assistant"
    },
    {
      icon: Calendar,
      title: "Current Affairs",
      description: "Daily news and compilations",
      action: "current-affairs"
    },
    {
      icon: Video,
      title: "Video Lessons",
      description: "Animated learning content",
      action: "videos"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracker",
      description: "Monitor your preparation",
      action: "progress"
    }
  ];

  const currentAffairsTopics = [
    { title: "Today's News Brief", date: "Dec 19, 2024", category: "Current Affairs" },
    { title: "Weekly Compilation", date: "Dec 15-21, 2024", category: "Weekly Review" },
    { title: "Monthly Summary", date: "December 2024", category: "Monthly Digest" },
    { title: "Government Schemes Update", date: "Dec 18, 2024", category: "Policy Updates" }
  ];

  const recentActivity = [
    { subject: "Polity", topic: "Fundamental Rights", progress: 85 },
    { subject: "Economy", topic: "Economic Survey 2024", progress: 60 },
    { subject: "Geography", topic: "Climate Change", progress: 90 },
    { subject: "History", topic: "Freedom Movement", progress: 75 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Your <span className="gradient-text">Learning Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your personalized UPSC preparation hub with AI-powered learning, comprehensive study materials, 
              and real-time progress tracking.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card
                  key={action.title}
                  className="group hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer border-0 bg-gradient-card backdrop-blur-sm animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveTab(action.action)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto mb-8 bg-muted/50 backdrop-blur-sm">
              <TabsTrigger value="subjects" className="text-xs md:text-sm">Subjects</TabsTrigger>
              <TabsTrigger value="ai-assistant" className="text-xs md:text-sm">AI Assistant</TabsTrigger>
              <TabsTrigger value="current-affairs" className="text-xs md:text-sm">Current Affairs</TabsTrigger>
              <TabsTrigger value="videos" className="text-xs md:text-sm">Videos</TabsTrigger>
              <TabsTrigger value="progress" className="text-xs md:text-sm">Progress</TabsTrigger>
            </TabsList>

            <TabsContent value="subjects" className="mt-0">
              <SubjectsGrid />
            </TabsContent>

            <TabsContent value="ai-assistant" className="mt-0">
              <AIBotSection />
            </TabsContent>

            <TabsContent value="current-affairs" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>Recent Current Affairs</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentAffairsTopics.map((topic, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors duration-300 cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{topic.title}</h4>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {topic.category}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{topic.date}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Current Affairs Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Daily Compilation</h3>
                      <p className="text-muted-foreground text-sm">
                        Get curated daily news with timestamps, automatically compiled into weekly, monthly, and yearly collections.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">365</div>
                        <div className="text-xs text-muted-foreground">Daily Updates</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">52</div>
                        <div className="text-xs text-muted-foreground">Weekly Digests</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">12</div>
                        <div className="text-xs text-muted-foreground">Monthly Reviews</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <div className="text-center py-16">
                <Video className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Animated Learning Videos</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Access comprehensive video lessons with animations for complex Geography topics in multiple Indian languages. 
                  Content will be available soon with AI-generated explanations and visual learning aids.
                </p>
                <Button size="lg" className="gradient-button">
                  Coming Soon - Video Library
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span>Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-sm">{activity.subject}</h4>
                            <p className="text-xs text-muted-foreground">{activity.topic}</p>
                          </div>
                          <span className="text-sm font-medium text-primary">{activity.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${activity.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Progress Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <div className="text-3xl font-bold text-primary mb-2">78%</div>
                        <div className="text-sm text-muted-foreground">Overall Progress</div>
                      </div>
                      <div className="p-4 bg-accent/5 rounded-lg">
                        <div className="text-3xl font-bold text-accent mb-2">142</div>
                        <div className="text-sm text-muted-foreground">Topics Completed</div>
                      </div>
                    </div>
                    <div className="p-6 bg-secondary/5 rounded-lg">
                      <Brain className="w-12 h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">AI Recommendation</h4>
                      <p className="text-sm text-muted-foreground">
                        Focus on Environment and Science & Technology topics for the next week to balance your preparation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}