"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/text-area";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [selectedTicket, setSelectedTicket] = useState("general");

  const steps = [
    { id: 1, label: "Your details", description: "Please provide your name and details", completed: true },
    { id: 2, label: "Payment", description: "Please provide your name and details", completed: false },
    { id: 3, label: "Get QR Code", description: "Verify at least one device", completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar - Steps */}
          <aside className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.completed
                      ? "bg-success text-success-foreground"
                      : step.id === 2
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.completed ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      step.id <= 2 ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              {/* User Info Banner */}
              <div className="p-6 mb-8 border rounded-lg bg-success/10 border-success/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mb-1 text-lg font-bold">
                      Registering as: Yusuf Gambo Abba
                    </h3>
                    <p className="text-sm text-success">
                      yusuf.gambo@email.com • Nigeria
                    </p>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/90">
                    Edit Profile
                  </Button>
                </div>
              </div>

              {/* Event Title */}
              <div className="mb-8">
                <h1 className="mb-2 text-2xl font-bold">Digital Nigeria 2025</h1>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                </div>
                <p className="text-sm font-medium text-success">November 24 2025</p>
              </div>

              {/* Ticket Selection */}
              <div className="mb-8">
                <h3 className="mb-4 font-semibold">Select Your Ticket</h3>
                <RadioGroup value={selectedTicket} onValueChange={setSelectedTicket}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg border-border">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="general" id="general" />
                        <div>
                          <Label htmlFor="general" className="font-semibold cursor-pointer">
                            General Admission
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Access to main conference and networking
                          </p>
                        </div>
                      </div>
                      <span className="font-bold text-success">FREE</span>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg border-border">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="vip" id="vip" />
                        <div>
                          <Label htmlFor="vip" className="font-semibold cursor-pointer">
                            VIP Access
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Premium seating, lunch included, exclusive networking
                          </p>
                        </div>
                      </div>
                      <span className="font-bold">$150</span>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg border-border">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="speaker" id="speaker" />
                        <div>
                          <Label htmlFor="speaker" className="font-semibold cursor-pointer">
                            Speaker Package
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            For confirmed speakers and panelists
                          </p>
                        </div>
                      </div>
                      <span className="font-bold text-success">COMPLIMENTARY</span>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Additional Options */}
              <div className="mb-8">
                <h3 className="mb-4 font-semibold">Additional Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="cursor-pointer">
                      Subscribe to event updates and newsletters
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="calendar" defaultChecked />
                    <Label htmlFor="calendar" className="cursor-pointer">
                      Add to calendar reminder
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="dietary" />
                    <Label htmlFor="dietary" className="cursor-pointer">
                      Request special dietary accommodations
                    </Label>
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div className="mb-8">
                <Label htmlFor="requirements" className="block mb-2">
                  Special Requirements or Comments (Optional)
                </Label>
                <Textarea
                  id="requirements"
                  placeholder="Any accessibility needs, dietary restrictions or other requirements..."
                  className="min-h-[100px]"
                />
              </div>

              {/* Action Button */}
              <Button
                onClick={() => router.push("/user/discover-events/payment")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Continue to Payment
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;