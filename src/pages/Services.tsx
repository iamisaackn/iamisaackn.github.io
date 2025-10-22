import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, BarChart3, Database, Bot } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data Intelligence & Business Insights",
      purpose: "Turn raw data into clear, actionable strategies that drive revenue and smarter decisions.",
      offerings: [
        "Design and develop interactive dashboards and business performance reports.",
        "Set up automated data systems for accurate, clean, and secure reporting.",
        "Deliver predictive analytics tools for smarter sales, finance, and operations planning.",
        "Offer continuous strategic guidance to help businesses make data-backed decisions."
      ],
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Smart Systems & Database Solutions",
      purpose: "Build the digital backbone your business needs to scale efficiently.",
      offerings: [
        "Design and implement secure, scalable databases for your operations.",
        "Develop data-driven websites that display dashboards, analytics, and reports in real time.",
        "Automate manual workflows to save time and reduce human error.",
        "Provide ongoing database management, optimization, and maintenance."
      ],
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Automation & Chatbot Systems",
      purpose: "Automate customer engagement, service, and internal workflows with intelligent AI tools.",
      offerings: [
        "Create custom chatbots and virtual assistants trained on your company data.",
        "Develop chat-based document readers (ChatPDF-style) for internal knowledge access.",
        "Integrate AI agents to handle customer support, lead generation, and task automation.",
        "Use natural language processing (NLP) and generative AI to personalize communication."
      ],
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics & AI Innovation",
      purpose: "Help businesses forecast, adapt, and innovate using advanced AI and predictive analytics.",
      offerings: [
        "Build and deploy machine learning and deep learning models tailored to business goals.",
        "Use reinforcement learning and predictive analytics to anticipate market trends.",
        "Implement Retrieval-Augmented Generation (RAG) systems for smarter, data-driven automation.",
        "Offer continuous model monitoring, optimization, and lifecycle management through MLOps."
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We help small and medium businesses in Kenya turn data, AI, and automation into growth engines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medium hover-lift animate-fade-in-up">
              <CardHeader className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">{service.icon}</div>
                <div>
                  <CardTitle className="text-2xl mb-1">{service.title}</CardTitle>
                  <CardDescription>{service.purpose}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-4">
                  {service.offerings.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Badge variant="outline" className="px-3 py-1 text-sm">
                    SME Focused Solutions
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Closing Section */}
        <div className="text-center mt-20 text-lg text-muted-foreground italic">
          Every SME deserves tools that think as fast as they work. Let’s build intelligent systems that grow with your business.
        </div>
      </div>
    </div>
  );
};

export default Services;
