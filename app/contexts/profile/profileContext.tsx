"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type ProfileContextType = {
  profileUrl: string;
  username: string;
  setProfileUrl: (url: string) => void;
  setUsername: (username: string) => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profileUrl, setProfileUrl] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  
  useEffect(() => {
  
    if (typeof window !== "undefined") {
      const storedProfileUrl = localStorage.getItem("profileUrl");
      const storedUsername = localStorage.getItem("username");
      if (storedProfileUrl) setProfileUrl(storedProfileUrl);
      if (storedUsername) setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {

    if (typeof window !== "undefined") {
      if (profileUrl) localStorage.setItem("profileUrl", profileUrl);
      if (username) localStorage.setItem("username", username);
    }
  }, [profileUrl, username]);

  return (
    <ProfileContext.Provider value={{ profileUrl, username, setProfileUrl, setUsername }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
