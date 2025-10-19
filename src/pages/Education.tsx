import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "The Catholic University of Eastern Africa",
      location: "Nairobi, Kenya",
      period: "Sept 2022 - Oct 2026",
      description: "Focus on Data Science and Big Data Security",
      achievements: [
        "Led CUEA team in KAPS/Inter University Hackathon 2024 winning 1st runners up in AI in Business",
      ],
    }
  ];

  const certifications = [
    {
      name: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "On going",
      credentialId: " ",
    }
  ];

  const scholarships = [
    {
      name: "MasterCard Foundation Scholarship",
      organization: "Moringa School",
      period: "May 2024 - Nov 2024",
      description:
        "Scholarship covering tuition and mentorship for advanced data science training",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">Education & Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl mb-8">Academic Background</h2>
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
                        <p className="text-sm text-muted-foreground italic">{edu.description}</p>
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

        {/* Scholarships */}
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
        <div className="max-w-4xl mx-auto">
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
                    <span className="text-xs text-muted-foreground">{cert.credentialId}</span>
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

export default Education;
