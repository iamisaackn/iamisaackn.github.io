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
            {/* Left: Text */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Nairobi, Kenya</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
                Isaac Kinyanjui Ngugi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Data & AI Consultant | Business Growth Partner
              </p>
              <p className="text-lg text-foreground/80 mb-8 max-w-xl italic">
                I help businesses unlock growth by transforming raw data into
                intelligent strategies, automation, and insights that drive smarter decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:isaackngugi.ds@gmail.com">
                  <Button className="gradient-primary">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/isaackngugi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <a
                  href="https://github.com/iamisaackn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://x.com/itsisaackngugi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/iamisaackn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                <img
                  src={profileImage}
                  alt="Isaac Kinyanjui Ngugi - Founder of IKN Analytics"
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">About IKN Analytics</h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                IKN Analytics is a Nairobi-based consultancy helping organizations harness
                the power of Data, Artificial Intelligence, and Business Intelligence to
                drive measurable growth.
              </p>
              <p>
                We work with startups, SMEs, and enterprises to transform data into insights,
                automate processes, and enable smarter, data-driven decision-making.
              </p>
              <p>
                Our approach blends technical precision with strategic understanding — 
                ensuring every AI or data solution we build directly supports business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl mb-10 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl shadow-sm hover-lift bg-background">
              <h3 className="text-xl font-semibold mb-2">Data Intelligence</h3>
              <p className="text-muted-foreground text-sm">
                Turn complex data into actionable insights through modern analytics and visualization.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-sm hover-lift bg-background">
              <h3 className="text-xl font-semibold mb-2">AI & Automation</h3>
              <p className="text-muted-foreground text-sm">
                Build intelligent systems and predictive models that optimize business performance.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-sm hover-lift bg-background">
              <h3 className="text-xl font-semibold mb-2">Business Intelligence</h3>
              <p className="text-muted-foreground text-sm">
                Develop BI dashboards and analytics platforms for smarter financial and operational decisions.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-sm hover-lift bg-background">
              <h3 className="text-xl font-semibold mb-2">Strategy Consulting</h3>
              <p className="text-muted-foreground text-sm">
                Provide data-driven growth strategies and digital transformation consulting for lasting impact.
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
              <div className="text-4xl font-bold text-primary mb-2">1+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Used</div>
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
