"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const Confirmation = () => {
  const router = useRouter();

  const steps = [
    { id: 1, label: "Your details", description: "Please provide your name and details", completed: true },
    { id: 2, label: "Payment", description: "Please provide your name and details", completed: true },
    { id: 3, label: "Get QR Code", description: "Verify at least one device", completed: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar - Steps */}
          <aside className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-success text-success-foreground">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{step.label}</h3>
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
              <div className="space-y-6 text-center">
                <div>
                  <h2 className="mb-2 text-xl font-semibold">Attending</h2>
                  <h1 className="mb-6 text-3xl font-bold">Digital Nigeria</h1>
                </div>

                <div className="max-w-sm p-8 mx-auto rounded-lg bg-background">
                  {/* QR Code */}
                  <div className="flex items-center justify-center w-48 h-48 mx-auto mb-6 bg-foreground">
                    <svg viewBox="0 0 200 200" className="w-full h-full p-4">
                      {/* Simple QR code pattern */}
                      <rect x="0" y="0" width="200" height="200" fill="white"/>
                      <rect x="10" y="10" width="60" height="60" fill="none" stroke="black" strokeWidth="8"/>
                      <rect x="25" y="25" width="30" height="30" fill="black"/>
                      <rect x="130" y="10" width="60" height="60" fill="none" stroke="black" strokeWidth="8"/>
                      <rect x="145" y="25" width="30" height="30" fill="black"/>
                      <rect x="10" y="130" width="60" height="60" fill="none" stroke="black" strokeWidth="8"/>
                      <rect x="25" y="145" width="30" height="30" fill="black"/>
                      <rect x="90" y="15" width="8" height="8" fill="black"/>
                      <rect x="102" y="15" width="8" height="8" fill="black"/>
                      <rect x="114" y="15" width="8" height="8" fill="black"/>
                      <rect x="82" y="27" width="8" height="8" fill="black"/>
                      <rect x="106" y="35" width="8" height="8" fill="black"/>
                      <rect x="90" y="47" width="8" height="8" fill="black"/>
                      <rect x="15" y="82" width="8" height="8" fill="black"/>
                      <rect x="27" y="86" width="8" height="8" fill="black"/>
                      <rect x="39" y="90" width="8" height="8" fill="black"/>
                      <rect x="51" y="94" width="8" height="8" fill="black"/>
                      <rect x="90" y="82" width="8" height="8" fill="black"/>
                      <rect x="102" y="86" width="8" height="8" fill="black"/>
                      <rect x="130" y="90" width="8" height="8" fill="black"/>
                      <rect x="150" y="94" width="8" height="8" fill="black"/>
                      <rect x="82" y="130" width="8" height="8" fill="black"/>
                      <rect x="94" y="142" width="8" height="8" fill="black"/>
                      <rect x="106" y="154" width="8" height="8" fill="black"/>
                      <rect x="130" y="130" width="8" height="8" fill="black"/>
                      <rect x="142" y="142" width="8" height="8" fill="black"/>
                      <rect x="154" y="154" width="8" height="8" fill="black"/>
                    </svg>
                  </div>
                  
                  <div className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-success/20 text-success">
                    ATT-2025-013
                  </div>
                  
                  <p className="text-sm text-muted-foreground">Scan to check in</p>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={() => router.push("/user/discover-events")}
                    className="w-full max-w-sm bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Done
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;