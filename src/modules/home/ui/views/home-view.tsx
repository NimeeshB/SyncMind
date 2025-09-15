"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner"; // or "react-hot-toast"
import {  useRouter } from "next/router";



export const HomeView = () => {
  const {data: session } = authClient.useSession();
    const router = useRouter();
  if(!session) {
    return(<p>Loading...</p>)
  }


  return ( 
  <div className="flex flex-col p-4 gap-y-4">
    <p>Logged in as {session.user.name}</p>
    <Button onClick={() => authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        }
      }
    })}>
      Sign Out 
    </Button>
  </div>
);
}
 

