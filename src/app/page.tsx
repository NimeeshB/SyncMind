"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner"; // or "react-hot-toast"



export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const onSubmit = () => {
    // Basic client-side validation
  if (!name.trim() || !email.trim() || !password.trim()) {
    toast.error("Please fill in all fields");
    return;
  }

  if (password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return;
  }

   // Continue with sign-up
  setIsLoading(true);

  authClient.signUp.email(
    {
      email,
      password,
      name,
    },
    {
      onError: () => {
        setIsLoading(false);
        toast.error("Something went wrong during sign up");
      },
      onSuccess: () => {
        setIsLoading(false);
        toast.success("Signed up successfully");
      },
    }
  ); 
};

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Input 
      placeholder="Full Name" 
      value={name} 
      onChange={(e) => setName(e.target.value)}
      />

      <Input 
      placeholder="Email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
      />

      <Input 
      placeholder="Password" 
      type="password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick = {onSubmit} disabled={isLoading}> {isLoading ? "Creating..." : "Create User"}</Button>
    </div>
  );
}
