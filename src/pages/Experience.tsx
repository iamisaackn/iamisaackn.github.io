import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Presta Technologies Ltd",
      location: "Nairobi, Kenya",
      period: "May 2025 - Aug 2025",
      highlights: [
        "Collected, cleaned, and analyzed financial and CRM data using Zoho DataPrep and SQL.",
        "Designed and automated 10+ data reports, linking APIs to LLM workflows with Amazon Bedrock.",
        "Improved reporting speed by 40% and data accuracy by 25% through pipeline optimization.",
        " Built dashboards supporting faster data-driven lending decisions across departments.",
        "Collaborated with the AI team to integrate LLM insights into Presta whatsapp chat bot."
      ],
    },
    {
      title: "Community Lead",
      company: "Innovation Hub CUEA",
      location: "Nairobi, Kenya",
      period: "Oct 2024 - Apr 2025",
      highlights: [
        "Led a team of 4 to enhance student engagement and startup development.",
        "Supported 24 student-led startups improve their Market Viable Products through data driven feedback.",
        "Managed digital platforms (LinkedIn, WhatsApp, Instagram) reaching 1,000+ students."
      ],
    },
    {
      title: "Data Science Lead",
      company: "– Google Developer Group CUEA Chapter",
      location: "Nairobi, Kenya",
      period: "May 2023 - Oct 2024",
      highlights: [
        "Organized and taught 5 hands-on ML workshops with 100+ student participants.",
        "Supervised 3 student data projects, including sentiment analysis and predictive modeling.",
        "Increased student project submissions for competitions by 50% through mentorship.",
        "Implemented GitHub collaboration for club projects, raising team efficiency by 30%.",
        "Trained 20+ members on Python, data visualization, and machine learning basics."
      ],
    },
  ];

  const skills = {
    technical: [
    "Data Analysis & Visualization: Excel, Power BI, Tableau, Google Data Studio, Python (Pandas, NumPy, Matplotlib, Seaborn), R",
    "Database Management: SQL, NoSQL, PostgreSQL, MySQL, MongoDB, Oracle, SQLite, Data Warehousing, ETL, dbt, Apache Airflow",
    "Programming & Development: Python, R, JavaScript, Bash, REST APIs, FastAPI, Flask, Django, Microservices, Git, GitHub Actions, CI/CD",
    "Machine Learning & Statistics: Scikit-learn, TensorFlow, PyTorch, Keras, XGBoost, LightGBM, CatBoost, Statsmodels, Predictive Modeling, A/B Testing",
    "AI & Deep Learning: NLP (SpaCy, NLTK, HuggingFace), LangChain, Vector Databases (FAISS, Pinecone, Chroma), Generative AI, LLMs, Prompt Engineering, AI Agents, RAG, AI Chatbots, AI PDF Readers, MCP Systems",
    "Big Data & Cloud: Apache Spark, Hadoop, Databricks, Snowflake, BigQuery, AWS, Azure, GCP, Docker, Kubernetes, Cloud-Native Architecture, Streaming Data (Kafka, Flink)",
    "MLOps & Deployment: MLflow, Weights & Biases, Model Deployment, Feature Engineering, Experiment Tracking, Version Control for ML, AIOps",
    "Data Governance & Security: Data Modeling, Data Cleaning, Data Wrangling, Data Pipelines, Data Ethics, Privacy Compliance (GDPR/ISO), Data Security",
    "Specializations: Computer Vision, Reinforcement Learning, Predictive Analytics, Business Intelligence, Automation, Decision Support Systems"
    ],
    soft: [
      "Leadership: Guides and motivates technical teams to deliver results under tight deadlines.",
      "Communication: Explains complex technical concepts clearly to both technical and business audiences.",
      "Analytical Thinking: Breaks down complex data problems into actionable insights and strategies.",
      "Problem Solving: Uses logic, algorithms, and creativity to design efficient, scalable solutions.",
      "Collaboration: Works seamlessly across data, product, and business teams to achieve shared goals.",
      "Project Management: Plans, tracks, and delivers projects with clear milestones and accountability.",
      "Adaptability: Quickly learns new tools and frameworks in fast-changing tech environments.",
      "Time Management: Prioritizes tasks effectively to balance coding, research, and deployment work.",
      "Critical Thinking: Evaluates data and models objectively to ensure accuracy and reliability.",
      "Innovation: Brings fresh, experimental approaches to AI, automation, and product optimization.",
      "Decision-Making: Balances data-driven insights with practical business judgment.",
    ],
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">Work Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering data-driven solutions across industries
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-medium hover-lift animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{exp.title}</CardTitle>
                        <CardDescription className="text-base">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-foreground/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Skills</CardTitle>
                <CardDescription>
                  Tools and technologies I work with daily
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Soft Skills</CardTitle>
                <CardDescription>
                  Interpersonal strengths that drive success
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <Badge key={index} className="gradient-primary px-3 py-1.5 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
