import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  return (
    <div className="p-6 border rounded-lg bg-secondary-dark/10 border-border">
      <h3 className="mb-2 text-lg font-semibold font-neue-regrade text-secondary-darker">
        Join Our Newsletter
      </h3>
      <p className="mb-6 text-sm text-muted-foreground">
        Our event management web app makes registration seamless, ticketing effortless.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 font-neue-regrade"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full font-medium bg-primary hover:bg-primary-hover text-primary-foreground font-neue-regrade"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;