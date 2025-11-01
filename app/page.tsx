"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return null;
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("AUTH_USER_TOKEN");
    console.log("Token:", token);
    if (token) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <h1>Loading...</h1>
      <p>Redirecting...</p>
    </div>
  );
}
