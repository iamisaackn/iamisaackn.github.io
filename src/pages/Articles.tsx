import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const articles = [
    {
      title: "Dear CEOs: Math Isn’t the Enemy, It's the Blueprint of AI",
      description:
        "An honest reflection on why math isn’t just theory but the backbone of every AI system—from DeepMind’s AlphaGo to the predictive models driving modern business intelligence.",
      date: "October 18, 2025",
      readTime: "8 min read",
      category: "AI & Business",
      tags: ["AI", "Math", "Data Science", "Leadership"],
      link: "https://www.linkedin.com/pulse/dear-ceos-math-isnt-enemy-its-blueprint-ai-isaac-ngugi-3ya8f/?trackingId=yuvO0WB4RkKjapWi0C7dpw%3D%3D",
    },
    {
      title: "Dear CEOs: How Walmart Used Hadoop and AI to Reinvent Retail Analytics!!",
      description:
        "An in-depth look at how Walmart leveraged Hadoop, AI, and Machine Learning to transform petabytes of messy retail data into smart, automated decisions that revolutionized their business operations.",
      date: "October 15, 2025",
      readTime: "8 min read",
      category: "Big Data & AI",
      tags: ["Hadoop", "AI", "Machine Learning", "Retail Analytics", "Big Data"],
      link: "https://www.linkedin.com/pulse/ceos-how-walmart-used-hadoop-ai-reinvent-retail-analytics-isaac-ngugi-ttgjf/?trackingId=J0BiW1BiTryZImGLNnljEg%3D%3D",
    },
    {
      title: "Dear CEOs: How Apple Turned Big Data Privacy into Its Competitive Superpower",
      description:
        "A deep dive into how Apple transformed user privacy from a regulatory headache into a global market advantage — setting a new gold standard for ethical tech leadership.",
      date: "October 14, 2025",
      readTime: "8 min read",
      category: "Business & Data Strategy",
      tags: ["Big Data", "Privacy", "Apple", "AI", "Business Growth"],
      link: "https://www.linkedin.com/pulse/ceo-how-apple-turned-big-data-privacy-its-competitive-isaac-ngugi-8amnf/?trackingId=ozMV1wzMSN2uB4bc%2Fpx94w%3D%3D",
    },
    {
      title: "Dear CEOs: Agentic AI Your Secret Weapon For Scaling Your SMEs",
      description:
        "How small and medium businesses can use Agentic AI to automate repetitive workflows, boost efficiency, and scale operations affordably using frameworks like LangChain and Salesforce Agentforce.",
      date: "October 5, 2025",
      readTime: "7 min read",
      category: "AI for Business",
      tags: ["Agentic AI", "Automation", "LangChain", "SMEs", "Salesforce Agentforce"],
      link: "https://www.linkedin.com/pulse/ceos-agentic-ai-your-secret-weapon-scaling-smes-isaac-ngugi-lgcaf/?trackingId=6RQ3gptSS660cAom%2FewO9Q%3D%3D",
    },
    {
      title: "Dear CEOs: Why SMEs Should Implement a Chat-PDF Tool",
      description:
        "A breakdown of how small and medium-sized businesses can use AI-powered Chat-PDF systems to speed up decision-making, improve document management, and cut operational inefficiencies.",
      date: "September 11, 2025",
      readTime: "14 min read",
      category: "AI for Business",
      tags: ["SMEs", "ChatPDF", "AI Strategy", "Automation"],
      link: "https://www.linkedin.com/pulse/why-smes-should-implement-chat-pdf-tool-isaac-ngugi-jbezf/?trackingId=g23HmwmcQFC7d47LLaKXRQ%3D%3D",
    },
    {
      title: "Dear CEOs: Chat with OpenAI: SME Fast AI Assistant",
      description:
        "A hands-on walkthrough on how SMEs can connect to OpenAI’s API, safely manage keys, build chatbots with unique personalities, and understand response metadata to power AI-driven tools.",
      date: "September 21, 2025",
      readTime: "10 min read",
      category: "AI Development",
      tags: ["OpenAI", "Python", "API", "SME Solutions"],
      link: "https://www.linkedin.com/pulse/chat-openai-sme-fast-ai-assistant-isaac-ngugi-iuruf/?trackingId=1XRVty4ZQe%2BRZ%2FdXszqknA%3D%3D",
    },
    {
      title: "Dear CEOs: AI Agents and How to Build Them",
      description:
        "A deep dive into how AI agents work — from sensing and reasoning to acting — and how small businesses can use them to automate fraud detection, customer insights, and more.",
      date: "September 24, 2025",
      readTime: "10 min read",
      category: "AI Engineering",
      tags: ["AI Agents", "Automation", "SMEs"],
      link: "https://www.linkedin.com/pulse/ai-agents-how-build-them-isaac-ngugi-u1ebf/?trackingId=ptfGGCcoQY%2B2UaC0hKOAuA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">Articles & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on data science, AI, and the future of technology in Africa
          </p>
        </div>

        {/* Featured Article */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-large hover-lift transition-smooth animate-fade-in-up">
            <CardHeader>
              <Badge className="w-fit gradient-primary mb-4">Featured Article</Badge>
              <CardTitle className="text-3xl mb-3">{articles[0].title}</CardTitle>
              <CardDescription className="text-base flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {articles[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {articles[0].readTime}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 mb-6">{articles[0].description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {articles[0].tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <a
                href={articles[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gradient-primary">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Article Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.slice(1).map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
              <Card className="shadow-medium hover-lift cursor-pointer transition-smooth animate-fade-in-up">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                  <CardDescription className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
