"use client";
import { redirect } from "next/navigation";
import React from "react";

export default function ProfileNavButton() {
  const handleClick = () => {
    // Different behavior based on the button id or title
    alert(`You clicked `);
  };

  return (
    <a 
            href="#" 
            className="hover:text-gray-400"
            onClick={handleClick}>Profile</a>
  );
}