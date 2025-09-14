import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Book Your Luxury Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your vehicle? Get in touch with our experts and schedule your premium detailing service today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-glass-border animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get a Quote</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-background/50 border-glass-border focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-background/50 border-glass-border focus:border-accent transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background/50 border-glass-border focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input 
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  className="bg-background/50 border-glass-border focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Vehicle Details</label>
                <Input 
                  placeholder="2023 Mercedes S-Class" 
                  className="bg-background/50 border-glass-border focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your detailing needs..." 
                  rows={4}
                  className="bg-background/50 border-glass-border focus:border-accent transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-semibold group transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)]"
              >
                Get Quote Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-glass-border hover:bg-card/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Visit Our Studio</h4>
                  <p className="text-muted-foreground">
                    123 Luxury Avenue<br />
                    Premium District, City 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-glass-border hover:bg-card/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567<br />
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-glass-border hover:bg-card/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                  <p className="text-muted-foreground">
                    hello@luxurydetailing.com<br />
                    support@luxurydetailing.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-glass-border hover:bg-card/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;