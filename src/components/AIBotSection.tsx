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

  // Advanced AI knowledge base for UPSC topics
  const knowledgeBase = {
    subjects: {
      polity: {
        keywords: ['polity', 'constitution', 'government', 'parliament', 'judiciary', 'fundamental rights', 'dpsp', 'amendment', 'article', 'president', 'governor', 'minister', 'election', 'democracy'],
        concepts: {
          'fundamental rights': 'Articles 12-35 guarantee six fundamental rights including Right to Equality, Freedom, Constitutional Remedies, etc.',
          'dpsp': 'Directive Principles (Articles 36-51) are guidelines for state policy, inspired by Irish Constitution.',
          'amendment': 'Article 368 provides amendment procedure. Special majority (Art 368) vs Simple majority vs Ratification by states.',
          'federalism': 'Indian Constitution follows quasi-federal structure with strong center. Dual polity, division of powers, independent judiciary.',
          'emergency': 'Three types: National (Art 352), State (Art 356), Financial (Art 360). Affects fundamental rights and federal structure.',
        }
      },
      economy: {
        keywords: ['economy', 'economic', 'budget', 'gdp', 'inflation', 'monetary', 'fiscal', 'rbi', 'banking', 'finance', 'trade', 'agriculture', 'industry'],
        concepts: {
          'inflation': 'Persistent rise in general price level. Types: Demand-pull, Cost-push, Structural. Measured by WPI, CPI.',
          'monetary policy': 'RBI tool to control money supply. Repo, Reverse Repo, CRR, SLR, MSF, Bank Rate are key instruments.',
          'fiscal policy': 'Government policy on taxation and expenditure to influence economic activity.',
          'gdp': 'Gross Domestic Product measures total economic output. Real vs Nominal GDP, GDP deflator.',
          'budget': 'Annual financial statement. Revenue budget (receipts/expenditure) + Capital budget (assets/liabilities).',
        }
      },
      geography: {
        keywords: ['geography', 'climate', 'maps', 'rivers', 'mountains', 'monsoon', 'agriculture', 'minerals', 'forests', 'population', 'urbanization'],
        concepts: {
          'monsoon': 'Southwest monsoon (June-Sept) brings 75% rainfall. Northeast monsoon affects Tamil Nadu, Kerala.',
          'rivers': 'Ganga-Brahmaputra largest river system. Peninsula rivers: Godavari, Krishna, Kaveri are major.',
          'climate': 'Tropical monsoon climate with four seasons: Winter, Summer, Southwest monsoon, Northeast monsoon.',
          'mountains': 'Himalayas (young fold), Western Ghats (fault-block), Eastern Ghats (residual), Aravalli (oldest).',
          'agriculture': 'Kharif (monsoon crops), Rabi (winter crops), Zaid (summer crops). Green Revolution impact.',
        }
      },
      history: {
        keywords: ['history', 'ancient', 'medieval', 'modern', 'mughal', 'british', 'freedom struggle', 'independence', 'gupta', 'maurya', 'harappa'],
        concepts: {
          'ancient india': 'Indus Valley (2500-1500 BCE), Vedic period, Mahajanapadas, Mauryas (321-185 BCE), Guptas (320-550 CE)',
          'medieval india': 'Delhi Sultanate (1206-1526), Mughal Empire (1526-1857), Regional kingdoms like Vijayanagara',
          'modern india': 'British rule (1757-1947), Revolt of 1857, Freedom struggle, Gandhi, Independence movement',
          'mauryas': 'Founded by Chandragupta (321 BCE). Ashoka greatest ruler. Administrative system, Arthashastra.',
          'mughals': 'Babur founded (1526). Akbar, Shahjahan, Aurangzeb major rulers. Decline after Aurangzeb.',
        }
      },
      csat: {
        keywords: ['csat', 'aptitude', 'quantitative', 'reasoning', 'logical', 'data interpretation', 'mathematics', 'comprehension'],
        concepts: {
          'quantitative aptitude': 'Arithmetic, Algebra, Geometry, Mensuration, Data Interpretation, Statistics',
          'logical reasoning': 'Syllogisms, Puzzles, Blood relations, Direction sense, Coding-decoding, Series',
          'comprehension': 'Reading speed, Understanding, Inference, Vocabulary, Critical thinking',
          'data interpretation': 'Tables, Graphs, Charts analysis. Calculate percentages, ratios, trends.',
        }
      }
    },
    currentAffairs: {
      keywords: ['current affairs', 'news', 'recent', 'latest', 'today', 'government scheme', 'policy', 'international'],
      sources: ['PIB', 'The Hindu', 'Indian Express', 'Yojana', 'Kurukshetra', 'Economic Survey', 'Budget']
    },
    strategy: {
      keywords: ['strategy', 'preparation', 'study plan', 'timetable', 'revision', 'notes', 'books', 'coaching', 'mock test'],
      tips: [
        'Follow NCERT first, then standard books',
        'Make concise notes for quick revision',
        'Practice previous year questions',
        'Take regular mock tests',
        'Focus on weak areas',
        'Maintain consistency in study'
      ]
    }
  };

  // Context-aware response generator with chat history analysis
  const generateContextualResponse = (message: string, chatHistory: ChatMessage[]): string => {
    const lowerMessage = message.toLowerCase();
    
    // Analyze context from recent chat history
    const recentMessages = chatHistory.slice(-3).map(msg => msg.text.toLowerCase()).join(' ');
    
    // Detect subject area with confidence scoring
    let detectedSubject = '';
    let confidence = 0;
    let detectedConcepts: string[] = [];
    
    for (const [subject, data] of Object.entries(knowledgeBase.subjects)) {
      const matchCount = data.keywords.filter(keyword => lowerMessage.includes(keyword)).length;
      
      // Check for specific concepts
      const conceptMatches = Object.keys(data.concepts || {}).filter(concept => 
        lowerMessage.includes(concept) || recentMessages.includes(concept)
      );
      
      const totalScore = matchCount + (conceptMatches.length * 2); // Concept matches have higher weight
      
      if (totalScore > confidence) {
        confidence = totalScore;
        detectedSubject = subject;
        detectedConcepts = conceptMatches;
      }
    }
    
    // Generate intelligent response based on context and confidence
    if (confidence > 0) {
      return generateAdvancedSubjectResponse(detectedSubject, lowerMessage, detectedConcepts, recentMessages);
    }
    
    // Handle conversation flow patterns
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return generateIntelligentGreeting();
    }
    
    if (lowerMessage.includes('explain more') || lowerMessage.includes('tell me more') || lowerMessage.includes('elaborate')) {
      return generateElaboration(recentMessages);
    }
    
    if (lowerMessage.includes('example') || lowerMessage.includes('give me an example')) {
      return generateExamples(recentMessages);
    }
    
    // Handle strategy and preparation questions
    if (knowledgeBase.strategy.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return generateAdvancedStrategyResponse(lowerMessage);
    }
    
    // Handle current affairs questions
    if (knowledgeBase.currentAffairs.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return generateCurrentAffairsResponse(lowerMessage);
    }
    
    // Advanced pattern recognition for question types
    if (lowerMessage.includes('?')) {
      return generateQuestionResponse(lowerMessage, recentMessages);
    }
    
    // Intelligent fallback with contextual suggestions
    return generateIntelligentFallback(lowerMessage, recentMessages);
  };

  const generateAdvancedSubjectResponse = (subject: string, message: string, concepts: string[], context: string): string => {
    const subjectData = knowledgeBase.subjects[subject as keyof typeof knowledgeBase.subjects];
    
    // If specific concepts are detected, provide detailed explanations
    if (concepts.length > 0) {
      const concept = concepts[0];
      const explanation = subjectData.concepts?.[concept] || '';
      
      return `🎯 **Deep Dive: ${concept.toUpperCase()}**\n\n📖 **Core Understanding:**\n${explanation}\n\n🔍 **Detailed Analysis:**\n${getDetailedConceptAnalysis(subject, concept)}\n\n💡 **Study Strategy:**\n${getConceptStudyStrategy(subject, concept)}\n\n❓ **Want to explore more about ${concept} or ask follow-up questions?**`;
    }
    
    // General subject guidance with personalized approach
    return getAdvancedSubjectGuidance(subject, message);
  };

  const getDetailedConceptAnalysis = (subject: string, concept: string): string => {
    const analyses = {
      polity: {
        'fundamental rights': '• **Historical Background**: Borrowed from US Constitution\n• **Scope**: Both positive and negative rights\n• **Limitations**: Reasonable restrictions under Article 19(2)-(6)\n• **Judicial Review**: Courts can strike down laws violating FRs',
        'federalism': '• **Unique Features**: Asymmetric federalism (Art 370, 371)\n• **Center vs State**: Union List (97), State List (61), Concurrent List (52)\n• **Emergency Powers**: Center can override federal structure\n• **Finance Commission**: Ensures fiscal federalism',
        'amendment': '• **Types**: Simple majority (some provisions), Special majority (most), Ratification (federal provisions)\n• **Limitations**: Basic structure doctrine (Kesavananda Bharati case)\n• **Process**: Both houses must pass, President assent required\n• **Frequency**: 105 amendments since 1950'
      },
      economy: {
        'inflation': '• **Measurement**: WPI (wholesale), CPI (consumer), Core inflation (excluding food/fuel)\n• **RBI Target**: 4% (+/- 2%) for CPI inflation\n• **Impact**: Reduces purchasing power, affects savings\n• **Policy Response**: Monetary tightening, supply-side measures',
        'gdp': '• **Components**: Consumption (C) + Investment (I) + Government (G) + Net Exports (X-M)\n• **Measurement**: Production, Income, Expenditure approaches\n• **Limitations**: Doesn\'t capture inequality, environmental costs\n• **India\'s Growth**: Target 7-8% for becoming developed economy'
      },
      geography: {
        'monsoon': '• **Mechanism**: Seasonal wind reversal, ITCZ shift\n• **Branches**: Arabian Sea (western coast), Bay of Bengal (eastern regions)\n• **Variability**: El Niño reduces, La Niña enhances rainfall\n• **Economic Impact**: Agriculture, water resources, food security',
        'climate': '• **Classification**: Koeppen system - Am, Aw, BSh, BWh types in India\n• **Controls**: Latitude, altitude, distance from sea, relief\n• **Change Impact**: Rising temperatures, erratic rainfall, extreme events\n• **Adaptation**: Climate-resilient agriculture, renewable energy'
      }
    };
    
    return analyses[subject as keyof typeof analyses]?.[concept] || 'Comprehensive analysis with multiple dimensions and interconnections.';
  };

  const getConceptStudyStrategy = (subject: string, concept: string): string => {
    const strategies = {
      polity: '• Read constitutional provisions + landmark cases\n• Make comparative charts (Center vs State powers)\n• Practice map-based questions for administrative geography\n• Follow current constitutional debates',
      economy: '• Understand basic theory + current data/trends\n• Practice numerical problems and data interpretation\n• Read Economic Survey + Budget documents\n• Follow RBI policies and their impact',
      geography: '• Use maps and diagrams extensively\n• Connect physical and human geography\n• Practice map-based questions daily\n• Follow weather patterns and climate news',
      history: '• Create chronological timelines\n• Study cause-effect relationships\n• Connect ancient practices with modern relevance\n• Use memory techniques for dates and dynasties'
    };
    
    return strategies[subject as keyof typeof strategies] || 'Multi-dimensional approach with theory, practice, and current relevance.';
  };

  const getAdvancedSubjectGuidance = (subject: string): string => {
    const guidance = {
      polity: `🏛️ **Indian Polity & Constitution - Advanced Study Guide**\n\n📚 **Phase-wise Approach:**\n\n**Foundation (Month 1-2):**\n• NCERT 6-12 Political Science\n• Constitutional fundamentals, Preamble analysis\n• Fundamental Rights vs DPSP comparison\n\n**Intermediate (Month 3-4):**\n• Laxmikant Indian Polity (detailed study)\n• Union-State relations, Emergency provisions\n• Electoral process, Political parties\n\n**Advanced (Month 5-6):**\n• Constitutional amendments and their impact\n• Recent Supreme Court judgments\n• Comparative constitutional analysis\n\n🎯 **Current Focus Areas:**\n• Digital governance and e-democracy\n• Judicial reforms and pendency\n• Federal restructuring debates\n• Constitutional morality concepts\n\n💡 **Pro Tips:**\n• Create Article-wise quick reference\n• Follow constitutional bench judgments\n• Practice map questions on constitutional bodies\n• Link current events with constitutional provisions`,
      
      economy: `💰 **Indian Economy - Comprehensive Mastery Plan**\n\n📊 **Structured Learning Path:**\n\n**Basics (Month 1-2):**\n• NCERT 11-12 Economics\n• Fundamental concepts: GDP, inflation, monetary/fiscal policy\n• Indian economic development since independence\n\n**Intermediate (Month 3-4):**\n• Ramesh Singh Indian Economy\n• Sectoral analysis: Agriculture, Industry, Services\n• Government schemes and their economic impact\n\n**Advanced (Month 5-6):**\n• Economic Survey deep analysis\n• Budget documents understanding\n• International economics and trade\n\n🔥 **Current Priorities:**\n• Digital economy and fintech revolution\n• Sustainable development and green economy\n• Post-pandemic economic recovery\n• Geopolitical impact on trade\n\n📈 **Daily Practice:**\n• Economic newspaper reading (Business Standard/ET)\n• Data interpretation from government sources\n• Trend analysis of key economic indicators\n• Budget allocation and expenditure analysis`,
      
      geography: `🌍 **Geography - Physical & Human Integration**\n\n🗺️ **Systematic Approach:**\n\n**Physical Geography (Month 1-3):**\n• NCERT 6-12 + G.C. Leong\n• Climate, landforms, drainage, natural vegetation\n• Disaster management and environmental issues\n• Map-based practice (daily 30 minutes)\n\n**Human Geography (Month 4-6):**\n• Population, settlements, economic activities\n• Regional development and planning\n• Transportation and communication\n• Urban geography and smart cities\n\n🎯 **Integration Strategy:**\n• Connect physical features with human activities\n• Resource-development correlation\n• Environmental impact assessment\n• Sustainable development geography\n\n🌟 **Cutting-edge Topics:**\n• Climate change adaptation strategies\n• Remote sensing and GIS applications\n• Blue economy and marine resources\n• Space geography and satellite technology\n\n📍 **Map Work Excellence:**\n• Daily map practice (15-20 locations)\n• Thematic mapping (rivers, mountains, minerals)\n• Current events mapping (cyclones, earthquakes)\n• Comparative regional analysis`,
      
      history: `📜 **Indian History - Analytical Timeline Approach**\n\n⏳ **Chronological Mastery:**\n\n**Ancient India (Month 1-2):**\n• NCERT 6-12 + Nitin Singhania\n• Harappan to Gupta period\n• Cultural and religious developments\n• Art and architecture evolution\n\n**Medieval India (Month 3-4):**\n• NCERT + Satish Chandra\n• Delhi Sultanate to Mughal Empire\n• Regional kingdoms and resistance\n• Indo-Islamic culture synthesis\n\n**Modern India (Month 5-6):**\n• NCERT + Bipan Chandra + Spectrum\n• British colonial policies\n• Freedom struggle chronology\n• Socio-religious reform movements\n\n🔍 **Analytical Framework:**\n• Cause-effect relationship analysis\n• Multiple perspectives on events\n• Contemporary relevance connection\n• Cross-cultural comparisons\n\n🎭 **Cultural Integration:**\n• Art forms and their historical context\n• Literature and social movements\n• Architecture as historical evidence\n• Philosophical traditions continuity`,
      
      csat: `🧮 **CSAT - Strategic Problem Solving**\n\n📋 **Skill-based Preparation:**\n\n**Quantitative Aptitude:**\n• Basic arithmetic and percentage\n• Data interpretation and analysis\n• Logical mathematical reasoning\n• Time and work problems\n\n**Logical Reasoning:**\n• Syllogisms and logical deduction\n• Puzzles and arrangement problems\n• Blood relations and directions\n• Coding-decoding patterns\n\n**Reading Comprehension:**\n• Speed reading techniques\n• Critical analysis skills\n• Vocabulary enhancement\n• Inference and conclusion drawing\n\n⚡ **Performance Strategy:**\n• Time management (90 seconds per question)\n• Accuracy over speed (qualifying nature)\n• Strategic question selection\n• Regular mock tests analysis\n\n🎯 **Daily Practice Schedule:**\n• 30 minutes quantitative aptitude\n• 30 minutes logical reasoning\n• 20 minutes reading practice\n• 10 minutes mock test review`
    };
    
    return guidance[subject as keyof typeof guidance] || 'Comprehensive subject mastery with strategic approach.';
  };

  const generateIntelligentGreeting = (): string => {
    const greetings = [
      "🙏 **Namaste! I'm Ask-EKA, your advanced UPSC AI mentor!**\n\nI possess comprehensive knowledge across all UPSC domains with contextual understanding, analytical capabilities, and personalized guidance systems.\n\n🧠 **My Advanced Capabilities:**\n• Deep subject matter expertise with interconnected learning\n• Contextual conversation memory and adaptive responses\n• Current affairs integration with static knowledge\n• Strategic preparation planning with progress tracking\n• Multi-dimensional problem-solving approach\n\n🎯 **Ready to explore:** Complex concepts, strategic guidance, answer writing techniques, or current affairs analysis?\n\n**What aspect of UPSC preparation shall we master today?**",
      
      "🚀 **Hello! I'm Ask-EKA - Your Intelligent UPSC Companion!**\n\nI'm designed with advanced understanding of UPSC patterns, comprehensive subject knowledge, and strategic thinking capabilities.\n\n💡 **How I can accelerate your preparation:**\n• Concept clarity with real-world applications\n• Strategic study planning with time optimization\n• Current events analysis with exam perspective\n• Answer writing improvement with feedback\n• Mock test strategy and performance enhancement\n\n🎪 **Special Features:**\n• Contextual conversation flow\n• Previous year question pattern analysis\n• Personalized weakness identification\n• Success strategy customization\n\n**Let's begin your journey to success! What topic interests you most?**"
    ];
    
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const generateAdvancedStrategyResponse = (message: string): string => {
    if (message.includes('timetable') || message.includes('schedule') || message.includes('time management')) {
      return `⏰ **Advanced UPSC Timetable Strategy - Personalized Approach**\n\n📅 **Daily Structure (Flexible 8-12 hour study schedule):**\n\n**🌅 Morning Block (6:00-10:00 AM)** - Peak Concentration\n• Current Affairs + Newspaper Analysis (1 hour)\n• Primary Subject Study (2-3 hours)\n• Quick Revision of Previous Day (30 minutes)\n\n**🌞 Day Block (10:30 AM-2:30 PM)** - Intensive Study\n• Secondary Subject (2-3 hours)\n• Note-making and Mind Maps (1 hour)\n\n**🌇 Evening Block (4:00-8:00 PM)** - Application\n• Optional Subject / Weak Areas (2 hours)\n• Answer Writing Practice (1 hour)\n• Previous Year Questions (1 hour)\n\n**🌙 Night Block (8:30-10:30 PM)** - Consolidation\n• Revision and Memory Techniques (1 hour)\n• Mock Test Analysis (1 hour)\n\n**📊 Weekly Pattern:**\n• Monday-Friday: Regular schedule\n• Saturday: Full-length mock tests\n• Sunday: Comprehensive revision + recreation\n\n**🎯 Monthly Targets:**\n• Month 1-6: Foundation building\n• Month 7-12: Integration and practice\n• Month 13-15: Intensive revision and tests\n\n**💡 Personalization Tips:**\n• Adjust timing based on your peak productivity hours\n• Allocate more time to weaker subjects\n• Include buffer time for unexpected events\n• Regular assessment and schedule modification`;
    }
    
    if (message.includes('books') || message.includes('resources') || message.includes('study material')) {
      return `📚 **Comprehensive UPSC Resource Strategy - Quality over Quantity**\n\n**🏗️ Foundation Layer (NCERT - Non-negotiable):**\n• Class 6-12 History, Geography, Political Science, Economics\n• Science (Class 9-10 for basic concepts)\n• Focus: Concept clarity, basic understanding\n\n**🏛️ POLITY:**\n• **Primary:** M. Laxmikant Indian Polity\n• **Advanced:** DD Basu Constitutional Law, Subhash Kashyap\n• **Current:** PRS Legislative Research, Constitution bench judgments\n\n**💰 ECONOMY:**\n• **Primary:** Ramesh Singh Indian Economy\n• **Government:** Economic Survey, Budget documents\n• **Advanced:** Nitin Singhania, Datt & Sundaram\n• **Current:** Business newspapers, RBI reports\n\n**🌍 GEOGRAPHY:**\n• **Physical:** NCERT + G.C. Leong\n• **Human:** NCERT + Certificate Geography (G.C. Leong)\n• **Maps:** Oxford School Atlas, Survey of India maps\n• **Current:** NIDM disaster management reports\n\n**📜 HISTORY:**\n• **Ancient:** NCERT + Nitin Singhania\n• **Medieval:** NCERT + Satish Chandra\n• **Modern:** NCERT + Bipan Chandra + Spectrum\n• **Art & Culture:** Nitin Singhania, CCRT materials\n\n**📰 CURRENT AFFAIRS:**\n• **Daily:** The Hindu, Indian Express, PIB\n• **Monthly:** Vision IAS, Insight IAS compilations\n• **Government:** Yojana, Kurukshetra magazines\n• **Analysis:** Rajya Sabha TV, AIR Spotlight\n\n**🧮 CSAT:**\n• **Primary:** TMH CSAT Manual\n• **Practice:** Arihant, Previous year papers\n• **Advanced:** R.S. Aggarwal Quantitative Aptitude\n\n**💡 Resource Management Strategy:**\n• One book per subject rule (avoid multiple books)\n• Government documents > Private publications\n• Digital resources for current affairs\n• Regular revision > extensive reading`;
    }
    
    if (message.includes('revision') || message.includes('notes') || message.includes('memory')) {
      return `🔄 **Advanced Revision Strategy - Scientific Memory Enhancement**\n\n**📝 Note-Making Excellence:**\n\n**Hierarchical Structure:**\n• **Level 1:** Main topics (broad concepts)\n• **Level 2:** Sub-topics (detailed explanations)\n• **Level 3:** Key points (facts, figures, dates)\n• **Level 4:** Examples and current relevance\n\n**Memory Techniques:**\n\n**🧠 For Facts & Figures:**\n• **Acronyms:** Create memorable abbreviations\n• **Mnemonics:** Story-based memory aids\n• **Visualization:** Mental imagery for complex concepts\n• **Association:** Link new info with known concepts\n\n**📊 For Data & Statistics:**\n• **Charts & Graphs:** Visual representation\n• **Comparative Tables:** Side-by-side analysis\n• **Timeline Method:** Chronological arrangement\n• **Mind Maps:** Central concept with branches\n\n**⏰ Revision Schedule (Spaced Repetition):**\n• **Day 1:** Initial learning\n• **Day 3:** First revision (24-hour rule)\n• **Day 7:** Second revision (weekly rule)\n• **Day 21:** Third revision (monthly rule)\n• **Day 60:** Final revision (quarterly rule)\n\n**🎯 Subject-wise Revision Strategy:**\n• **Static Subjects:** Focus on concept clarity\n• **Dynamic Topics:** Regular updates integration\n• **Numerical Data:** Chart-based quick reference\n• **Current Affairs:** Monthly compilation review\n\n**📱 Digital Tools:**\n• **Anki/Quizlet:** Spaced repetition flashcards\n• **Mind42/XMind:** Digital mind mapping\n• **Notion/Obsidian:** Connected note-taking\n• **Google Sheets:** Data organization`;
    }
    
    return `🎯 **Comprehensive UPSC Strategy Framework**\n\n**📋 Three-Phase Preparation Model:**\n\n**Phase 1: Foundation (Months 1-8)**\n• NCERT completion across all subjects\n• Basic conceptual understanding\n• Current affairs habit development\n• Initial test-taking experience\n\n**Phase 2: Building (Months 9-15)**\n• Standard book completion\n• Advanced concept integration\n• Regular answer writing practice\n• Systematic test series participation\n\n**Phase 3: Mastery (Months 16-18)**\n• Intensive revision cycles\n• Strategic gap filling\n• Advanced test analysis\n• Interview preparation\n\n**🚀 Success Multipliers:**\n• **Consistency > Intensity:** Regular study beats sporadic marathon sessions\n• **Quality > Quantity:** Deep understanding beats superficial coverage\n• **Practice > Theory:** Application solidifies knowledge\n• **Analysis > Attempt:** Learning from mistakes accelerates growth\n\n**⚡ Daily Non-negotiables:**\n• Newspaper reading with note-making\n• Previous year question practice\n• Current affairs documentation\n• Answer writing (at least one answer daily)\n\nWhich specific aspect of strategy would you like me to elaborate on?`;
  };

  const generateCurrentAffairsResponse = (message: string): string => {
    return `📰 **Strategic Current Affairs Mastery - UPSC-Focused Approach**\n\n**📱 Daily Information Sources (Priority Order):**\n\n**🥇 Tier 1 (Essential - Daily Reading):**\n• **The Hindu:** Editorials, National, International pages\n• **PIB:** Government press releases and policy updates\n• **AIR News:** Authentic government perspective\n• **Rajya Sabha TV:** In-depth analysis programs\n\n**🥈 Tier 2 (Important - Regular Reading):**\n• **Indian Express:** Explained section, opinion pieces\n• **Business Standard:** Economic and business news\n• **Yojana Magazine:** Government schemes deep-dive\n• **Kurukshetra:** Rural development focus\n\n**🥉 Tier 3 (Supplementary - Weekly/Monthly):**\n• **Frontline:** Detailed analytical articles\n• **Economic & Political Weekly:** Academic perspectives\n• **Down to Earth:** Environmental issues\n• **International magazines:** Foreign Affairs, The Economist\n\n**🎯 UPSC-Centric Reading Strategy:**\n\n**📋 Daily Routine (90 minutes):**\n• **The Hindu Editorial (20 min):** Note key arguments, government policies mentioned\n• **National News (15 min):** Focus on governance, social issues, development\n• **International News (15 min):** India's bilateral relations, global issues affecting India\n• **PIB Releases (10 min):** Government initiatives, scheme launches\n• **Economy Page (15 min):** Budget implications, economic indicators\n• **Science & Technology (10 min):** Space, defense, health innovations\n• **Note Making (5 min):** Key points summary\n\n**📊 Monthly Compilation Strategy:**\n\n**Week 1-2:** Collect and categorize news\n**Week 3:** Create thematic notes (Economy, Polity, International Relations, etc.)\n**Week 4:** Integration with static knowledge + revision\n\n**🔗 Static-Dynamic Integration:**\n• Link current events with constitutional provisions\n• Connect economic news with theoretical concepts\n• Relate international events with India's foreign policy\n• Associate environmental news with geographical concepts\n\n**📝 Effective Note-Making Format:**\n\n**Issue:** Brief description\n**Stakeholders:** Who are involved\n**Government Response:** Policies, schemes, measures\n**UPSC Relevance:** Potential questions, mains topics\n**Key Terms:** Important vocabulary\n**Static Connection:** Related theoretical concepts\n\n**💡 Pro Tips for Current Affairs:**\n• Focus on issues, not just events\n• Understand government's perspective on every issue\n• Track 6-month trends for pattern recognition\n• Practice current affairs-based answer writing\n• Create monthly current affairs-based mock questions\n\nWant me to help you analyze any specific current topic or create a customized current affairs strategy?`;
  };

  const generateElaboration = (context: string): string => {
    if (context.includes('polity') || context.includes('constitution')) {
      return `🔍 **Deep Constitutional Analysis - Advanced Understanding**\n\n**🏛️ Constitutional Philosophy:**\nOur Constitution isn't just a legal document; it's a social contract embodying our civilizational values. Understanding the 'why' behind every provision helps in holistic comprehension.\n\n**📚 Multi-dimensional Study Approach:**\n• **Historical Context:** Why specific provisions were included\n• **Comparative Analysis:** How India's Constitution differs from others\n• **Judicial Evolution:** How Supreme Court interpretations have evolved\n• **Contemporary Relevance:** Modern challenges and constitutional responses\n\n**🔗 Interconnected Learning:**\n• Link constitutional provisions with current political developments\n• Connect fundamental rights with social justice movements\n• Relate center-state issues with real-time political scenarios\n• Understand amendment processes through recent constitutional changes\n\n**💡 Advanced Study Techniques:**\n• Create visual timelines of constitutional amendments\n• Develop case study approaches for complex provisions\n• Practice constitutional problem-solving with current issues\n• Build comparative charts (India vs other federal countries)\n\nWhich specific constitutional aspect would you like me to analyze in greater depth?`;
    }
    
    return `🔍 **Enhanced Learning Framework - Deeper Insights**\n\nLet me provide more comprehensive understanding:\n\n**🎯 Multi-layered Analysis:**\n• **Conceptual Layer:** Theoretical foundations and principles\n• **Practical Layer:** Real-world applications and examples\n• **Analytical Layer:** Critical thinking and evaluation\n• **Integrative Layer:** Connections with other subjects\n\n**🔬 Research-based Approach:**\n• Primary sources and government documents\n• Academic research and scholarly articles\n• Current data and statistical analysis\n• International comparisons and best practices\n\n**💡 Critical Thinking Development:**\n• Question assumptions and conventional wisdom\n• Analyze multiple perspectives on issues\n• Evaluate policy effectiveness and outcomes\n• Synthesize information from diverse sources\n\n**🎪 Interactive Learning:**\n• Case study analysis with real scenarios\n• Problem-solving with practical applications\n• Debate preparation with multiple viewpoints\n• Answer writing with comprehensive coverage\n\nWhich specific dimension would you like me to explore further?`;
  };

  const generateExamples = (context: string): string => {
    return `📝 **Practical Examples & Case Studies**\n\n**🎯 Real-world Applications:**\n\nLet me provide concrete examples to illustrate the concepts:\n\n**📊 Case Study Approach:**\n• **Scenario Analysis:** Current events as examples\n• **Policy Evaluation:** Government schemes and their outcomes\n• **Comparative Studies:** Different states/countries approaches\n• **Success Stories:** Best practices and learning points\n\n**💡 Example Categories:**\n• **Constitutional Examples:** Recent Supreme Court judgments\n• **Economic Examples:** Policy impacts with data analysis\n• **Historical Examples:** Parallel situations from the past\n• **International Examples:** Global best practices\n\n**🔍 Analytical Framework:**\n• **Context:** Background and setting\n• **Challenge:** Problems and issues identified\n• **Response:** Actions taken and policies implemented\n• **Outcome:** Results and lessons learned\n• **UPSC Relevance:** How this relates to exam questions\n\nPlease specify which topic you'd like detailed examples for, and I'll provide comprehensive case studies with analysis!`;
  };

  const generateQuestionResponse = (message: string, context: string): string => {
    return `❓ **Intelligent Question Analysis & Response**\n\n🎯 **Question Understanding:**\nI've analyzed your question and here's my comprehensive response approach:\n\n**📋 Response Structure:**\n• **Direct Answer:** Immediate response to your specific query\n• **Context Building:** Background information for better understanding\n• **Detailed Explanation:** In-depth analysis with multiple dimensions\n• **Practical Applications:** Real-world relevance and examples\n• **UPSC Relevance:** How this knowledge helps in exam preparation\n\n**🔍 Multi-angle Analysis:**\n• **Conceptual Clarity:** Core principles and definitions\n• **Current Relevance:** Recent developments and updates\n• **Comparative Perspective:** Different viewpoints and approaches\n• **Future Implications:** Trends and potential developments\n\n**💡 Learning Enhancement:**\n• **Memory Aids:** Techniques to remember key information\n• **Practice Questions:** Related questions for self-assessment\n• **Further Reading:** Additional resources for deeper study\n• **Integration Tips:** How to connect with other subjects\n\nCould you please rephrase or provide more specific details about what exactly you'd like to know? This will help me give you the most targeted and useful response!`;
  };

  const generateIntelligentFallback = (message: string, context: string): string => {
    // Analyze the message for potential topics
    const possibleTopics = [];
    if (message.includes('india') || message.includes('indian')) possibleTopics.push('Indian context analysis');
    if (message.includes('government') || message.includes('policy')) possibleTopics.push('Government policies');
    if (message.includes('exam') || message.includes('upsc')) possibleTopics.push('UPSC exam strategy');
    if (message.includes('study') || message.includes('preparation')) possibleTopics.push('Study methodology');
    
    return `🤔 **Intelligent Query Analysis - Let me help you better!**\n\nI understand you're seeking information about UPSC preparation. Let me provide targeted assistance:\n\n**🎯 Based on your query, you might be interested in:**\n${possibleTopics.length > 0 ? possibleTopics.map(topic => `• ${topic}`).join('\n') : '• General UPSC guidance\n• Subject-specific help\n• Strategy development\n• Current affairs analysis'}\n\n**📚 I can provide detailed help with:**\n• **Subject Mastery:** Polity, Economy, Geography, History, Science, Environment\n• **Skill Development:** Answer writing, time management, revision techniques\n• **Current Affairs:** Daily analysis, monthly compilation, trend identification\n• **Strategy Planning:** Personalized study plans, resource optimization\n• **Problem Solving:** CSAT, reasoning, quantitative aptitude\n\n**💡 For the best assistance, try asking:**\n• "Explain [specific concept] in detail"\n• "How should I prepare for [subject name]?"\n• "What's the best strategy for [specific challenge]?"\n• "Help me understand [current affairs topic]"\n\n**🚀 Example queries I excel at:**\n• "Explain the concept of cooperative federalism with examples"\n• "What's the best approach to prepare Geography for UPSC?"\n• "Analyze the impact of recent budget on economic growth"\n• "How to improve answer writing for mains examination?"\n\n**What specific aspect of UPSC preparation can I help you master today?**`;
  };

  // Main response generator with enhanced intelligence
  const getAIResponse = (userMessage: string): string => {
    return generateContextualResponse(userMessage, chatMessages);
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