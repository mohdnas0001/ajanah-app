"use client";
import { useState } from "react";

import { Eye, EyeOff, Mail, Phone } from "lucide-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("signIn");
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in attempt:", { email, password, rememberMe });
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

  const handleCreateAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Create account attempt:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      rememberMe,
    });
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (activeTab === "createAccount") {
      setActiveTab("signIn");
      setStep(1);
    }
  };

  return (
    <div className="flex items-center justify-center h-full gap-20">
      {/* Left side - Form */}
      <div className="flex-col justify-center flex-1 w-1/2 p-4 shadow-lg lg:p-8 lg:px-12 bg-background backdrop-blur-md rounded-2xl">
        <div className="w-full mx-auto">
          {/* Navigation tabs */}
          <div className="flex p-1 mb-8 rounded-lg bg-muted">
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-smooth ${
                activeTab === "signIn"
                  ? "bg-background text-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => {
                setActiveTab("signIn");
                setStep(1);
              }}
            >
              Sign In
            </button>
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-smooth ${
                activeTab === "createAccount"
                  ? "bg-background text-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => {
                setActiveTab("createAccount");
                setStep(1);
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Back Button (only for Create Account) */}
          {activeTab === "createAccount" && step === 2 && (
            <button
              onClick={handleBack}
              className="flex items-center px-3 py-2 mb-4 font-bold rounded-lg text-primary shadow-soft transition-smooth"
            >
              <Image
                src={"/icons/arrow-square-left.svg"}
                alt="back"
                className="mr-2 "
                width={24}
                height={16}
              />{" "}
              Back
            </button>
          )}

          {/* Content based on active tab */}
          {activeTab === "signIn" ? (
            <>
              {/* Welcome text */}
              <div className="mb-8">
                <h1 className="mb-2 text-xl font-bold leading-3 text-pretty md:text-3xl">
                  Welcome Back, <span className="text-primary-active">Ade</span>
                </h1>
                <p className="text-muted-foreground">
                  Sign in to your event account
                </p>
              </div>

              {/* Sign In Form */}
              <form onSubmit={handleSignInSubmit} className="space-y-6">
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

                <div className="space-y-2">
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) =>
                        setRememberMe(checked as boolean)
                      }
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <a
                    href="/forgot-password"
                    className="text-sm text-primary hover:text-primary-hover transition-smooth"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full hover:bg-primary-darker transition-smooth"
                  size="lg"
                  onClick={()=>router.push("/user/dashboard") }
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary hover:text-primary-hover transition-smooth"
                    onClick={() => {
                      setActiveTab("createAccount");
                      setStep(1);
                    }}
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Welcome text */}
                <div className="mb-4">
                  
                <h1 className="mb-2 text-xl font-bold leading-3 text-pretty md:text-3xl">
                    Create an account</h1>
                <p className="text-sm text-muted-foreground">
                  Enter your details to join the Ajanah Event App
                </p>
              </div>

              {/* Create Account Form - Multi-step */}
              {step === 1 ? (
                <form onSubmit={handleContinue} className="space-y-6">
                  <div className="space-y-2">
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

                  <p className="text-sm text-muted-foreground">
                    By signing up you agree to our terms and conditions
                  </p>

                  <Button
                    type="submit"
                    className="w-full hover:bg-primary-darker transition-smooth"
                    size="lg"
                  >
                    Continue
                  </Button>
                </form>
              ) : (
                <form
                  onSubmit={handleCreateAccountSubmit}
                  className="space-y-3"
                >
                  <div className="flex space-x-2">
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

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
                        disabled
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="pl-10"
                        required
                      />
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

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) =>
                          setRememberMe(checked as boolean)
                        }
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-primary hover:text-primary-hover transition-smooth"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    By signing up you agree to our terms and conditions
                  </p>

                  <Button
                    type="submit"
                    className="w-full hover:bg-primary-darker transition-smooth"
                    size="lg"
                  >
                    Create Account
                  </Button>
                </form>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary hover:text-primary-hover transition-smooth"
                    onClick={() => {
                      setActiveTab("signIn");
                      setStep(1);
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="items-center justify-center flex-1 hidden p-8 lg:flex bg-[#EFFFEB] rounded-tr-[2rem] rounded-bl-[2rem] overflow-hidden">
        <div className="text-center">
          <div>
            <Image
              src="/images/auth-l-bg.svg"
              alt="Event Hub illustration"
              width={380}
              height={200}
            />
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            <div className="w-2 h-2 rounded-full bg-primary/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
