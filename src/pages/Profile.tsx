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
                Data & AI Consultant | Business Growth Partner
              </p>
              <p className="text-lg text-foreground/80 mb-8 max-w-xl italic">
                I help SMEs turn messy data into smarter strategies, stronger sales, and scalable growth.
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
                I bridge the gap between raw data and business growth. My work focuses on transforming numbers
                into narratives that drive better marketing, smarter operations, and confident decisions.
              </p>
              <p>
                Whether it’s predicting customer churn, automating reporting, or building AI tools that 
                forecast sales, I help SMEs grow through data intelligence — not guesswork.
              </p>
              <p>
                I blend technical precision with strategic insight, working side-by-side with business teams
                to design practical, results-oriented data solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl mb-10 text-center">How I Help Businesses Grow</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl shadow-sm hover-lift bg-background">
              <h3 className="text-xl font-semibold mb-2">Customer Insights</h3>
              <p className="text-muted-foreground text-sm">
                Use data to understand customer behavior, refine targeting, and boost conversions.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-sm hover-lift bg-background">
              <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-muted-foreground text-sm">
                Automate repetitive processes and predict issues before they hit profits.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-sm hover-lift bg-background">
              <h3 className="text-xl font-semibold mb-2">Smarter Financial Planning</h3>
              <p className="text-muted-foreground text-sm">
                Build AI-driven forecasts and models that guide better investment and budget decisions.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-sm hover-lift bg-background">
              <h3 className="text-xl font-semibold mb-2">Innovation & AI Tools</h3>
              <p className="text-muted-foreground text-sm">
                Develop custom AI tools that help SMEs stay competitive in fast-changing markets.
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
