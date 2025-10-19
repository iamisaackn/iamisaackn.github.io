import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Facebook, MapPin } from "lucide-react";
import profileImage from "@/assets/isaac-profile.jpg";

const Profile = () => {
  return (
    <div className="min-h-screen gradient-hero">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Nairobi, Kenya</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
                Isaac Kinyanjui
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ngugi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Data Analyst | Data Scientist | AI Engineer
              </p>
              <p className="text-lg text-foreground/80 mb-8 max-w-xl italic">
                "Turning raw data into intelligent decisions."
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:isaackngugi.ds@gmail.com">
                  <Button className="gradient-primary">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/isaackngugi/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/iamisaackn" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href="https://x.com/itsisaackngugi" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                  </Button>
                </a>
                <a href="https://www.facebook.com/iamisaackn" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                  </Button>
                </a>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                <img
                  src={profileImage}
                  alt="Isaac Kinyanjui Ngugi - Data Scientist and AI Engineer"
                  className="relative rounded-2xl shadow-large w-full max-w-md mx-auto hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-center">About Me</h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                I am a curious and analytical Data Scientist with a passion for uncovering insights
                hidden within complex datasets. My expertise spans the full spectrum of data science,
                from exploratory analysis to deploying production-ready machine learning models.
              </p>
              <p>
                With strong foundations in algorithms, statistical modeling, and cloud computing, I
                thrive on solving real-world problems through data-driven solutions. My work focuses
                on building intelligent systems that transform raw information into actionable
                strategies for business growth and innovation.
              </p>
              <p>
                Beyond technical skills, I bring leadership, clear communication, and collaborative
                problem-solving to every project. I'm constantly learning and adapting to emerging
                technologies in AI and data engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 gradient-hero">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
