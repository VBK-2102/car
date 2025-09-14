import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const locations = [
    "Bangalore",
    "KR Puram",
    "Whitefield",
    "Mahadevapura",
    "Bellandur",
    "CV Raman Nagar",
    "Marathahalli"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["Mobile Number Here"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["your.email@example.com"]
    },
    {
      icon: MapPin,
      title: "Locations",
      details: locations
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: By Appointment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          src="/v44.mp4"
         
          style={{
            minHeight: '100vh',
            minWidth: '100vw',
            width: 'auto',
            height: 'auto'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      
      <main className="pt-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight animate-fade-in text-white">
                Contact Us
              </h1>
              <p className="text-lg text-gray-200 mb-8 animate-fade-in">
                Get in touch with us for premium car modification services in Bangalore and surrounding areas.
              </p>

              <form className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
                <Input placeholder="Car Make & Model (Optional)" />
                <Textarea placeholder="Tell us about your requirements" rows={5} />
                <Button className="w-full animate-fade-in">Send Message</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <info.icon className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-light text-white">
                      {info.title}
                    </h2>
                  </div>
                  <div className="space-y-2 pl-9">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-200">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map Placeholder
              <div className="mt-8 rounded-lg overflow-hidden border border-border h-[300px] bg-card flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps Integration Here</p>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
