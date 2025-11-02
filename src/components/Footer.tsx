import { Github, Linkedin, Mail, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">IKN Analytics</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Data, AI & Business Intelligence Consulting
              <br />
              Nairobi, Kenya
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/services"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Services
              </Link>
              <Link
                to="/insights"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Insights
              </Link>
              <Link
                to="/case-studies"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Case Studies
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/iamisaackn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/isaackngugi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:isaackngugi.ds@gmail.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/itsisaackngugi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/iamisaackn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} IKN Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;