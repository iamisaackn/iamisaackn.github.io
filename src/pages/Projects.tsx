import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Code2 } from "lucide-react";

interface Project {
  title: string;
  region: string;
  goal: string;
  methodology: string;
  outcome: string;
  technologies: string[];
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Agricultural Yield Prediction System",
      region: "East Africa",
      goal: "Predict crop yields to help farmers optimize planting decisions and reduce waste",
      methodology:
        "Developed ensemble machine learning models using Random Forest and XGBoost, incorporating weather patterns, soil quality data, and historical yields. Deployed as REST API on AWS.",
      outcome: "Achieved 89% prediction accuracy, helping 500+ farmers increase productivity by 25%",
      technologies: ["Python", "Scikit-learn", "XGBoost", "AWS", "FastAPI"],
      category: "Machine Learning",
    },
    {
      title: "Customer Churn Prediction Platform",
      region: "Kenya",
      goal: "Identify at-risk customers before they leave to enable proactive retention strategies",
      methodology:
        "Built deep learning classifier using TensorFlow with feature engineering pipeline. Implemented real-time scoring system processing 10K predictions/hour.",
      outcome: "Reduced churn rate by 35%, saving $2M annually in customer retention costs",
      technologies: ["TensorFlow", "Python", "PostgreSQL", "Docker", "Kubernetes"],
      category: "Deep Learning",
    },
    {
      title: "Real-Time Fraud Detection System",
      region: "Sub-Saharan Africa",
      goal: "Detect fraudulent transactions in mobile money platforms within milliseconds",
      methodology:
        "Designed anomaly detection system using Isolation Forest and LSTM networks. Processed streaming data using Apache Kafka and Spark.",
      outcome: "Identified 94% of fraud cases with <0.5% false positive rate, protecting $10M in transactions",
      technologies: ["Apache Spark", "Kafka", "PyTorch", "Redis", "AWS"],
      category: "Anomaly Detection",
    },
    {
      title: "Sentiment Analysis Dashboard",
      region: "Pan-African",
      goal: "Analyze social media sentiment about brands across multiple African markets",
      methodology:
        "Fine-tuned BERT model for sentiment classification. Built interactive dashboard using Streamlit and deployed on Azure.",
      outcome: "Processed 100K+ posts daily, providing actionable insights to marketing teams",
      technologies: ["BERT", "Transformers", "Streamlit", "Azure", "MongoDB"],
      category: "NLP",
    },
    {
      title: "Supply Chain Optimization Engine",
      region: "Kenya & Tanzania",
      goal: "Optimize logistics routes and inventory levels to reduce costs and delivery times",
      methodology:
        "Applied linear programming and reinforcement learning for route optimization. Integrated with existing ERP systems.",
      outcome: "Decreased delivery times by 40% and reduced logistics costs by $500K annually",
      technologies: ["Python", "OR-Tools", "Ray RLlib", "PostgreSQL"],
      category: "Optimization",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Impactful data science solutions delivered across industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-medium hover-lift cursor-pointer transition-smooth animate-fade-in-up"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm">
                  <Code2 className="h-3 w-3" />
                  {project.region}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-3">{project.goal}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{selectedProject.category}</Badge>
                    <Badge>{selectedProject.region}</Badge>
                  </div>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-base pt-2">
                    {selectedProject.goal}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 pt-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Methodology</h4>
                    <p className="text-foreground/80">{selectedProject.methodology}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                    <p className="text-foreground/80">{selectedProject.outcome}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Projects;
