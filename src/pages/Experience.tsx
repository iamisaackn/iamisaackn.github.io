import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const engagements = [
    {
      title: "Data Analyst Intern",
      client: "Presta Technologies Ltd",
      location: "Nairobi, Kenya",
      period: "May 2025 - Aug 2025",
      highlights: [
        "Designed and automated analytics workflows using SQL, Zoho DataPrep, and AWS services.",
        "Developed 10+ API-connected data pipelines linking financial and CRM systems for real-time insights.",
        "Increased reporting speed by 40% and reduced manual data errors by 25%.",
        "Built BI dashboards that improved lending decision cycles across multiple departments.",
        "Integrated LLM-powered insights into client-facing chatbots, enhancing customer engagement efficiency."
      ],
    },
    {
      title: "Community Lead",
      client: "Innovation Hub CUEA",
      location: "Nairobi, Kenya",
      period: "Oct 2024 - Apr 2025",
      highlights: [
        "Facilitated digital transformation for 24 student-led startups through data-driven market validation.",
        "Implemented analytics frameworks that tracked product performance and customer feedback.",
        "Increased online community engagement by over 1,000 users through strategic platform optimization."
      ],
    },
    {
      title: "Data Science Lead",
      client: "Google Developer Group – CUEA Chapter",
      location: "Nairobi, Kenya",
      period: "May 2023 - Oct 2024",
      highlights: [
        "Conducted 5+ AI and machine learning workshops, training over 100 emerging developers.",
        "Supervised predictive analytics and sentiment modeling projects for student startups.",
        "Introduced collaborative GitHub workflows that improved project delivery speed by 30%.",
        "Supported competition readiness, increasing participation and project submissions by 50%.",
        "Developed AI learning roadmaps for technical clubs, fostering long-term skills growth."
      ],
    },
  ];

  const capabilities = {
    technical: [
      "Data Analytics & Visualization: Power BI, Tableau, Google Data Studio, Python (Pandas, Matplotlib), R",
      "Database Management: SQL, PostgreSQL, MySQL, MongoDB, Data Warehousing, ETL, Apache Airflow",
      "AI & Machine Learning: Scikit-learn, TensorFlow, PyTorch, XGBoost, LLMs, NLP, LangChain, RAG Systems",
      "Cloud & Big Data: AWS, GCP, Azure, Databricks, Snowflake, Docker, Kubernetes, Streaming Data (Kafka)",
      "MLOps & Automation: MLflow, Weights & Biases, Model Deployment, Feature Engineering, CI/CD",
      "Business Intelligence: Predictive Analytics, Performance Dashboards, Forecasting Models",
      "Data Governance: Privacy Compliance (GDPR/ISO), Security, Ethics, Data Lifecycle Management"
    ],
    strategic: [
      "Leadership: Guides cross-functional teams to deliver measurable business outcomes.",
      "Communication: Simplifies technical data into actionable business insights.",
      "Analytical Thinking: Translates raw data into growth and performance metrics.",
      "Problem Solving: Designs efficient, scalable data-driven systems.",
      "Collaboration: Partners with product, finance, and operations teams to align strategy.",
      "Project Management: Executes projects with clear milestones and ROI tracking.",
      "Innovation: Develops AI-based tools to streamline operations and boost productivity.",
      "Decision-Making: Integrates data intelligence into executive and board-level strategy."
    ],
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">
            Proven Experience. Real Business Impact.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            IKN Analytics partners with organizations to transform data into strategy — driving smarter,
            faster, and more sustainable growth.
          </p>
        </div>

        {/* Engagements */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-8">
            {engagements.map((eng, index) => (
              <Card key={index} className="shadow-medium hover-lift animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{eng.title}</CardTitle>
                        <CardDescription className="text-base">
                          {eng.client} • {eng.location}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {eng.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {eng.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Expertise</CardTitle>
                <CardDescription>
                  The technologies and frameworks powering data intelligence solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {capabilities.technical.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Strategic */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Strategic Expertise</CardTitle>
                <CardDescription>
                  The mindset and leadership that translate analytics into action.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {capabilities.strategic.map((skill, index) => (
                    <Badge key={index} className="gradient-primary px-3 py-1.5 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mt-20 text-lg text-muted-foreground italic">
          At IKN Analytics, we don’t just analyze data — we transform it into business advantage.
        </div>
      </div>
    </div>
  );
};

export default Experience;