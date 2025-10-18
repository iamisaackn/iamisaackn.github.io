import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "TechCorp Africa",
      location: "Nairobi, Kenya",
      period: "2022 - Present",
      highlights: [
        "Led development of predictive models reducing customer churn by 35%",
        "Architected scalable ML pipeline processing 10M+ daily transactions",
        "Mentored team of 5 junior data scientists on best practices",
        "Deployed real-time recommendation engine improving engagement by 45%",
      ],
    },
    {
      title: "Data Analyst",
      company: "FinTech Solutions Ltd",
      location: "Nairobi, Kenya",
      period: "2020 - 2022",
      highlights: [
        "Built automated reporting dashboards saving 20 hours weekly",
        "Conducted A/B testing framework increasing conversion rates by 28%",
        "Analyzed customer behavior patterns identifying 3 new market segments",
        "Collaborated with product team to define data-driven KPIs",
      ],
    },
    {
      title: "Junior Data Analyst",
      company: "DataHub Kenya",
      location: "Nairobi, Kenya",
      period: "2019 - 2020",
      highlights: [
        "Performed exploratory data analysis on customer datasets",
        "Created visualizations for C-level presentations",
        "Cleaned and preprocessed data for ML model training",
        "Assisted in deployment of first company ML project",
      ],
    },
  ];

  const skills = {
    technical: [
      "Python",
      "R",
      "SQL",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Git",
      "Apache Spark",
    ],
    soft: [
      "Leadership",
      "Communication",
      "Analytical Thinking",
      "Problem Solving",
      "Collaboration",
      "Project Management",
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
