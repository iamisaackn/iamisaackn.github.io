import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, ShieldCheck } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "The Catholic University of Eastern Africa",
      location: "Nairobi, Kenya",
      period: "Sept 2022 - Oct 2026",
      description:
        "Focused on Data Science, Big Data Security, and Applied Machine Learning — equipping me to design secure, data-driven systems for enterprise intelligence.",
      achievements: [
        "Led the CUEA innovation team in the KAPS/Inter-University Hackathon 2024, winning 1st Runners-Up for an 'AI in Business' solution.",
        "Developed data-driven models predicting sales trends and customer churn for SME case studies.",
      ],
    },
  ];

  const certifications = [
    {
      name: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "Ongoing",
      credentialId: "",
    },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC²",
      date: "2025",
      credentialId: "",
    },
  ];

  const scholarships = [
    {
      name: "MasterCard Foundation Scholarship",
      organization: "Moringa School",
      period: "May 2024 - Nov 2024",
      description:
        "Awarded for excellence in Data Science and innovation, advancing practical AI solutions for African businesses.",
    },
  ];

  const cyberModels = [
    {
      name: "Confidentiality",
      description:
        "Protects sensitive business data from unauthorized access, ensuring client trust and data privacy.",
    },
    {
      name: "Integrity",
      description:
        "Guarantees that business information remains accurate, consistent, and tamper-proof across data systems.",
    },
    {
      name: "Availability",
      description:
        "Ensures data and systems are accessible to authorized users when needed — critical for operational resilience.",
    },
    {
      name: "Authentication",
      description:
        "Verifies digital identities before granting access, strengthening enterprise-level access control.",
    },
    {
      name: "Non-repudiation",
      description:
        "Provides verifiable proof of actions and transactions, preventing denial of responsibility in digital operations.",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">
            Institutional Foundation & Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The academic, professional, and cybersecurity backbone that powers
            IKN Analytics — Data, AI & Business Intelligence Consulting.
          </p>
        </div>

        {/* Academic Background */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl mb-8">Academic Foundation</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-medium hover-lift animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{edu.degree}</CardTitle>
                        <CardDescription className="text-base mb-2">
                          {edu.institution} • {edu.location}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground italic">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scholarships & Awards */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl mb-8">Scholarships & Awards</h2>
          <div className="space-y-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="shadow-medium hover-lift">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{scholarship.name}</CardTitle>
                      <CardDescription className="text-base mb-2">
                        {scholarship.organization} • {scholarship.period}
                      </CardDescription>
                      <p className="text-foreground/80">{scholarship.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl mb-8">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-soft hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{cert.date}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {cert.credentialId}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cybersecurity Framework */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Cybersecurity Competency Model</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            IKN Analytics integrates the 5Cs cybersecurity model to ensure every
            data, AI, and business intelligence solution we deliver is secure,
            resilient, and compliant with modern digital standards.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cyberModels.map((model, index) => (
              <Card key={index} className="shadow-medium hover-lift animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center mt-20 text-lg text-muted-foreground italic">
          IKN Analytics — where data intelligence meets secure, AI-driven business growth.
        </div>
      </div>
    </div>
  );
};

export default Education;