import { useState } from "react";
import { Users, FileText, Calendar, BarChart3, Brain, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";

export default function Teachers() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const quickActions = [
    {
      icon: FileText,
      title: "Create Content",
      description: "Generate notes with AI assistance",
      action: "content"
    },
    {
      icon: Users,
      title: "Manage Students",
      description: "Track student progress",
      action: "students"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Plan lessons and activities",
      action: "schedule"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "View performance metrics",
      action: "analytics"
    }
  ];

  const recentStudents = [
    { name: "Arjun Kumar", progress: 85, lastActive: "2 hours ago", subjects: ["Polity", "Economy"] },
    { name: "Priya Sharma", progress: 92, lastActive: "1 hour ago", subjects: ["Geography", "History"] },
    { name: "Rajesh Patel", progress: 78, lastActive: "5 hours ago", subjects: ["Environment", "S&T"] },
    { name: "Anita Singh", progress: 88, lastActive: "3 hours ago", subjects: ["Ethics", "IR"] }
  ];

  const contentTemplates = [
    {
      title: "Daily Current Affairs Summary",
      description: "AI-generated summary template for daily news compilation",
      type: "Template"
    },
    {
      title: "Subject-wise Question Bank",
      description: "Automatically generated questions based on UPSC patterns",
      type: "Question Bank"
    },
    {
      title: "Mock Test Generator",
      description: "Create custom mock tests with AI assistance",
      type: "Assessment"
    },
    {
      title: "Study Schedule Planner",
      description: "AI-powered personalized study schedules for students",
      type: "Planner"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Teacher's <span className="gradient-text">Command Center</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower your teaching with AI-assisted content creation, student progress tracking, 
              and comprehensive analytics for effective UPSC preparation guidance.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-secondary mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8 bg-muted/50 backdrop-blur-sm">
              <TabsTrigger value="dashboard" className="text-xs md:text-sm">Dashboard</TabsTrigger>
              <TabsTrigger value="content" className="text-xs md:text-sm">Content</TabsTrigger>
              <TabsTrigger value="students" className="text-xs md:text-sm">Students</TabsTrigger>
              <TabsTrigger value="analytics" className="text-xs md:text-sm">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Overview Cards */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">24</div>
                        <div className="text-sm text-muted-foreground">Active Students</div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <FileText className="w-8 h-8 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent">156</div>
                        <div className="text-sm text-muted-foreground">Content Created</div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <BarChart3 className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-secondary">87%</div>
                        <div className="text-sm text-muted-foreground">Avg Progress</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-primary" />
                        <span>AI Teaching Assistant</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold mb-2">Today's AI Suggestions</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Create mock test on "Constitutional Amendments" - High demand topic</li>
                          <li>• Review current affairs compilation for December 2024</li>
                          <li>• Schedule revision session for Geography - Students showing difficulty</li>
                          <li>• Generate practice questions for Economic Survey 2024</li>
                        </ul>
                      </div>
                      <Button className="w-full gradient-button">
                        Start AI Content Creation
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Stats */}
                <div className="space-y-6">
                  <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">New student joined - Ankit Verma</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">Mock test completed by 18 students</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-muted-foreground">AI generated 25 new questions</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">Current affairs updated</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>This Week's Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Environment & Ecology</span>
                            <span className="text-muted-foreground">80%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '80%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Current Affairs</span>
                            <span className="text-muted-foreground">65%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '65%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Mock Tests</span>
                            <span className="text-muted-foreground">45%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-gradient-secondary h-2 rounded-full" style={{ width: '45%' }} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="content" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-primary" />
                      <span>AI Content Templates</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contentTemplates.map((template, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors duration-300 cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{template.title}</h4>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {template.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Content Creation Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">AI-Powered Generation</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Create comprehensive study materials, question banks, and lesson plans with AI assistance.
                      </p>
                      <Button className="gradient-button">
                        Start Creating
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-xs text-muted-foreground">Templates</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">AI</div>
                        <div className="text-xs text-muted-foreground">Powered</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="students" className="mt-0">
              <Card className="border-0 bg-gradient-card backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Student Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStudents.map((student, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors duration-300"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground">{student.name}</h4>
                            <p className="text-sm text-muted-foreground">Last active: {student.lastActive}</p>
                          </div>
                          <span className="text-sm font-medium text-primary">{student.progress}%</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {student.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="text-center py-16">
                <BarChart3 className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Advanced Analytics Dashboard</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Comprehensive analytics for student performance, content effectiveness, and teaching insights 
                  will be available soon with AI-powered recommendations and detailed reporting.
                </p>
                <Button size="lg" className="gradient-button">
                  Coming Soon - Analytics Suite
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}