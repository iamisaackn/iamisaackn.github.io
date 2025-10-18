import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const articles = [
    {
      title: "The Future of AI in African Agriculture",
      description:
        "Exploring how machine learning and predictive analytics are revolutionizing farming practices across the continent, from precision agriculture to yield optimization.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI & Agriculture",
      tags: ["Machine Learning", "Agriculture", "Innovation"],
    },
    {
      title: "Building Scalable ML Pipelines with Kubernetes",
      description:
        "A comprehensive guide to deploying production-grade machine learning workflows using containerization and orchestration tools for maximum reliability.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "MLOps",
      tags: ["Kubernetes", "Docker", "DevOps"],
    },
    {
      title: "Data Privacy in the Age of Big Data",
      description:
        "Examining the balance between leveraging data for insights and protecting user privacy, with practical frameworks for ethical data science practice.",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "Ethics & Privacy",
      tags: ["Privacy", "Ethics", "Data Governance"],
    },
    {
      title: "Transfer Learning: Standing on the Shoulders of Giants",
      description:
        "How pre-trained models are democratizing AI by allowing smaller teams to achieve state-of-the-art results without massive computational resources.",
      date: "January 22, 2024",
      readTime: "7 min read",
      category: "Deep Learning",
      tags: ["Transfer Learning", "Neural Networks", "NLP"],
    },
    {
      title: "From Data to Decisions: A Framework for Business Impact",
      description:
        "Bridging the gap between technical analysis and business value. Strategies for communicating data insights to non-technical stakeholders effectively.",
      date: "January 5, 2024",
      readTime: "9 min read",
      category: "Business Analytics",
      tags: ["Communication", "Strategy", "Leadership"],
    },
    {
      title: "Real-Time Analytics with Apache Kafka and Spark",
      description:
        "Building streaming data pipelines that process millions of events per second, with hands-on examples and architecture best practices.",
      date: "December 18, 2023",
      readTime: "15 min read",
      category: "Data Engineering",
      tags: ["Kafka", "Spark", "Streaming"],
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
              <Button className="gradient-primary">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Article Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.slice(1).map((article, index) => (
              <Card
                key={index}
                className="shadow-medium hover-lift cursor-pointer transition-smooth animate-fade-in-up"
              >
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
