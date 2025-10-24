"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

const Payment = () => {
  const router = useRouter();

  const steps = [
    { id: 1, label: "Your details", description: "Please provide your name and details", completed: true },
    { id: 2, label: "Payment", description: "Please provide your name and details", completed: true },
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
                      : step.id === 3
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
                      step.completed ? "text-foreground" : step.id === 3 ? "text-foreground" : "text-muted-foreground"
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
              {/* Card Visual */}
              <div className="flex gap-4 mb-8">
                <div className="flex flex-col justify-between w-full h-48 max-w-md p-6 shadow-xl bg-primary rounded-xl text-primary-foreground">
                  <div className="flex items-start justify-between">
                    <CreditCard className="w-8 h-8" />
                    <div className="text-xs tracking-wider">•••</div>
                  </div>
                  <div className="text-sm font-medium">Card</div>
                </div>
                <div className="flex items-center justify-center w-20 p-4 shadow-xl bg-primary rounded-xl text-primary-foreground h-28">
                  <div className="text-xs tracking-wider">•••</div>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="cardNumber" className="block mb-2">
                    Card number
                  </Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      placeholder="1234 1234 1234 1234"
                      className="pr-32"
                    />
                    <div className="absolute flex gap-2 -translate-y-1/2 right-3 top-1/2">
                      <div className="text-xs font-bold text-muted-foreground">VISA</div>
                      <div className="text-xs font-bold text-muted-foreground">MC</div>
                      <div className="text-xs font-bold text-muted-foreground">DISCOVER</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="block mb-2">
                      Expiry
                    </Label>
                    <Input id="expiry" placeholder="MM / YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvc" className="block mb-2">
                      CVC
                    </Label>
                    <Input id="cvc" placeholder="CVC" maxLength={3} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country" className="block mb-2">
                      Country
                    </Label>
                    <Select defaultValue="us">
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ng">Nigeria</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="postal" className="block mb-2">
                      Postal code
                    </Label>
                    <Input id="postal" placeholder="90210" />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-8">
                <Button
                  onClick={() => router.push("/user/discover-events/register")}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  Back
                </Button>
                <Button
                  onClick={() => router.push("/user/discover-events/confirmation")}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Continue
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;