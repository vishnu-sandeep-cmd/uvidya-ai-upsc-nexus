import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Import subject images
import polityImage from "@/assets/subjects/polity.png";
import economyImage from "@/assets/subjects/economy.png";
import geographyImage from "@/assets/subjects/geography.png";
import historyImage from "@/assets/subjects/history.png";

export function SubjectsGrid() {
  const subjects = [
    {
      id: "polity",
      title: "Indian Polity",
      description: "Constitution, governance, political processes, and institutions",
      image: polityImage,
      color: "from-blue-500 to-indigo-600",
      topics: ["Constitution", "Fundamental Rights", "Parliament", "Judiciary"]
    },
    {
      id: "economy",
      title: "Economy",
      description: "Economic concepts, policies, and current economic affairs",
      image: economyImage,
      color: "from-green-500 to-emerald-600",
      topics: ["Microeconomics", "Macroeconomics", "Public Finance", "Economic Survey"]
    },
    {
      id: "geography",
      title: "Geography",
      description: "Physical and human geography, world geography, and mapping",
      image: geographyImage,
      color: "from-blue-400 to-cyan-500",
      topics: ["Physical Geography", "Human Geography", "World Geography", "Mapping"]
    },
    {
      id: "history",
      title: "History",
      description: "Ancient, medieval, and modern Indian history",
      image: historyImage,
      color: "from-amber-500 to-orange-600",
      topics: ["Ancient History", "Medieval History", "Modern History", "Art & Culture"]
    },
    {
      id: "environment",
      title: "Environment",
      description: "Environmental science, ecology, and climate change",
      image: geographyImage, // Using geography image as placeholder
      color: "from-green-400 to-teal-500",
      topics: ["Ecology", "Climate Change", "Biodiversity", "Environmental Laws"]
    },
    {
      id: "international-relations",
      title: "International Relations",
      description: "Foreign policy, international organizations, and global affairs",
      image: polityImage, // Using polity image as placeholder
      color: "from-purple-500 to-pink-600",
      topics: ["Foreign Policy", "International Organizations", "Global Issues", "Bilateral Relations"]
    },
    {
      id: "science-technology",
      title: "Science & Technology",
      description: "Latest developments in science, technology, and innovation",
      image: economyImage, // Using economy image as placeholder
      color: "from-indigo-500 to-purple-600",
      topics: ["Space Technology", "Biotechnology", "IT & Communication", "Defence Technology"]
    },
    {
      id: "ethics",
      title: "Ethics & Integrity",
      description: "Moral philosophy, case studies, and ethical dilemmas",
      image: historyImage, // Using history image as placeholder
      color: "from-rose-500 to-red-600",
      topics: ["Moral Philosophy", "Case Studies", "Public Administration", "Ethical Dilemmas"]
    }
  ];

  const importantLinks = [
    { name: "Press Information Bureau (PIB)", url: "https://pib.gov.in/", description: "Official government press releases" },
    { name: "World Health Organization (WHO)", url: "https://www.who.int/", description: "Global health information" },
    { name: "Better India", url: "https://www.thebetterindia.com/", description: "Positive news and stories" },
    { name: "Ministry of External Affairs", url: "https://www.mea.gov.in/", description: "Foreign affairs updates" },
    { name: "Economic Survey", url: "https://www.indiabudget.gov.in/", description: "Annual economic report" },
    { name: "NITI Aayog", url: "https://www.niti.gov.in/", description: "Policy think tank" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete <span className="gradient-text">Subject Coverage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive study materials and resources for all UPSC subjects with AI-powered explanations and visual learning aids.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {subjects.map((subject, index) => (
            <Card
              key={subject.id}
              className="group hover:shadow-large transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-card backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <img 
                    src={subject.image} 
                    alt={subject.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {subject.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {subject.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {subject.topics.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                  {subject.topics.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{subject.topics.length - 2} more
                    </span>
                  )}
                </div>
                <Link to={`/students/subjects/${subject.id}`}>
                  <Button 
                    size="sm" 
                    className="w-full group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    Explore
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Links Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Essential <span className="gradient-text">Government Resources</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to important government websites and official sources for current affairs and authentic information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {importantLinks.map((link, index) => (
            <Card
              key={link.name}
              className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {link.description}
                </p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium text-sm hover:text-accent transition-colors duration-300"
                >
                  Visit Website
                  <ArrowRight className="ml-1 w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}