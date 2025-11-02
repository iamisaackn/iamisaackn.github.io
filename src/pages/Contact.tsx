import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">Let’s Build Smarter, Data-Driven Businesses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            IKN Analytics partners with organizations to transform raw data into intelligence, automation, and growth. Let’s start the conversation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-large animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Let’s Talk Business</CardTitle>
              <CardDescription>Share your goals or challenges — we will respond within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form 
                action="https://formspree.io/f/xpwygwvz"
                method="POST"
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Brief or Inquiry</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, data needs, or consulting request..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>

          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="shadow-medium hover-lift transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Email</CardTitle>
                    <CardDescription>
                      <a
                        href="mailto:isaackngugi.ds@gmail.com"
                        className="text-primary hover:underline"
                      >
                        isaackngugi.ds@gmail.com
                      </a>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/*Phone*/}
            <Card className="shadow-medium hover-lift transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Phone</CardTitle>
                    <CardDescription>
                      <a href="tel:+254111905855" className="text-primary hover:underline">
                        +254 111 905855
                      </a>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/*Location*/}
            <Card className="shadow-medium hover-lift transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Head Office</CardTitle>
                    <CardDescription>Nairobi, Kenya</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Availability */}
            <Card className="shadow-medium bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 text-lg">Consulting Availability</h3>
                <p className="text-sm opacity-90">
                  IKN Analytics is open for collaborations, enterprise consulting, and strategic partnerships.  
                  Whether you need advanced analytics, AI automation, or business intelligence solutions —  
                  our team is ready to help your organization grow smarter, faster, and more securely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
