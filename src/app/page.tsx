"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmit = () => {
  authClient.signUp.email(
    {
      email,
      password,
      name,
    },
    {
      onError: () => {
        window.alert("Something went wrong in the signUp");
      },
      onSuccess: () => {
        window.alert("Signed up successfully");
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

      <Button onClick = {onSubmit}>Create User</Button>
    </div>
  );
}
