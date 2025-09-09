"use client";
import { useState } from "react";

import { Eye, EyeOff, Mail } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Change password attempt:", { email, password });
    setStep(3);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setStep(2);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex items-center justify-center h-full gap-20">
      <div className="flex-col items-center justify-center flex-1 max-w-lg p-4 shadow-lg lg:p-8 lg:px-12 bg-background backdrop-blur-md rounded-2xl">
        <div className="w-full mx-auto">
          <div className="flex flex-col items-center justify-center w-full">
            {step === 1 ? (
              <>
                <Image
                  src="/icons/ajanah-logo.svg"
                  alt="Ajanah Logo"
                  width={120}
                  height={120}
                  className="mb-2"
                />
                <div className="flex flex-col items-center justify-center mb-8 text-center">
                  <h1 className="mb-2 text-3xl font-bold">Forgot Password</h1>
                  <p className="text-muted-foreground">
                    Enter your email address and we&apos;ll send <br />
                    you a link to reset your password
                  </p>
                </div>

                <form onSubmit={handleContinue} className="w-full space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full hover:bg-primary-darker transition-smooth"
                    size="lg"
                  >
                    Continue
                  </Button>
                </form>
              </>
            ) : step === 2 ? (
              <>
                <Image
                  src="/icons/ajanah-logo.svg"
                  alt="Ajanah Logo"
                  width={120}
                  height={120}
                  className="mb-2"
                />
                <div className="flex flex-col items-center justify-center mb-8 text-center">
                  <h1 className="mb-2 text-3xl font-bold">Forgot Password</h1>
                  <p className="text-muted-foreground">
                    Kindly create a new password you can remember.{" "}
                  </p>
                </div>
                <form
                  onSubmit={handleChangePasswordSubmit}
                  className="w-full space-y-3"
                >
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute transform -translate-y-1/2 right-3 top-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute transform -translate-y-1/2 right-3 top-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full hover:bg-primary-darker transition-smooth"
                    size="lg"
                  >
                    Change Password
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Image
                  src="/icons/success-green.svg"
                  alt="Sucess Icon"
                  width={200}
                  height={200}
                  className="mb-2"
                />
                <div className="flex flex-col items-center justify-center mb-8 text-center">
                  <h1 className="mb-2 text-3xl font-bold">Success!</h1>
                  <p className="text-muted-foreground">
                    Your password has been changed successfully!{" "}
                  </p>
                </div>
                <Button
                  onClick={() => router.push("/signin")}
                  className="w-full hover:bg-primary-darker transition-smooth"
                  size="lg"
                >
                  Continue
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
