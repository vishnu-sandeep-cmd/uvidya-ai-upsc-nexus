import { Calendar, TrendingUp, Video, Users, FileText, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Daily Current Affairs",
      description: "Curated daily news with proper timestamps, compiled into weekly, monthly, and yearly collections for systematic revision.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Timetable",
      description: "Personalized study schedules based on your progress, strengths, and target exam dates for optimal preparation.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Animated Learning Videos",
      description: "Complex geography topics explained through engaging animations in multiple Indian languages for better understanding.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Student-Teacher Portal",
      description: "Separate interfaces for students and teachers with collaborative tools, note sharing, and progress tracking.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Previous Year Analysis",
      description: "Comprehensive analysis of 30 years of UPSC question papers with trend identification and predictive insights.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Internet-Connected AI",
      description: "Real-time access to latest information and current events through our internet-connected AI assistant.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span> for Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for comprehensive UPSC preparation, from daily current affairs to AI-powered study plans, 
            all in one intuitive platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-large transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-card backdrop-blur-sm animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">For Students</h3>
              <p className="text-muted-foreground mb-6">
                Access comprehensive study materials, practice with AI-powered question generation, 
                and track your progress with detailed analytics.
              </p>
              <div className="flex justify-center space-x-8 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Study Materials</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-muted-foreground">AI Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">6</div>
                  <div className="text-muted-foreground">Languages</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-secondary/10 to-primary/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">For Teachers</h3>
              <p className="text-muted-foreground mb-6">
                Create and manage study materials, track student progress, 
                and collaborate with AI to generate personalized content.
              </p>
              <div className="flex justify-center space-x-8 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">AI</div>
                  <div className="text-muted-foreground">Content Creation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">Real-time</div>
                  <div className="text-muted-foreground">Analytics</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">Easy</div>
                  <div className="text-muted-foreground">Management</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}