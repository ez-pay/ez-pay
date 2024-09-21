import Image from "next/image";
import GoogleButton from "@/components/ui/googlebutton";
import FacebookButton from "@/components/ui/facebookbutton";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default async function AuthPage() {
  const session = await auth();
  console.log("session is ", session)
  if (session) {
    redirect("/home");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ height: "5vh" }}></div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <div
          style={{
            width: "50vw",
            height: "30vh",
            position: "relative",
          }}
        >
          <Image
            src="/welcomeimage.png"
            alt="Next.js logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      <div style={{ height: "2vh" }}></div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: "4vh",
          fontWeight: "bold",
          height: "6vh",
        }}
      >
        Hello
      </div>

      {/* Subtitle 1 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "rgb(124 124 124)",
          fontWeight: "600",
          height: "3vh",
          fontSize: "2vh",
        }}
      >
        Welcome to EZPAY, where
      </div>

      {/* Subtitle 2 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "rgb(124 124 124)",
          fontWeight: "600",
          height: "3vh",
          fontSize: "2vh",
        }}
      >
        your payment is 100% secure
      </div>

      <div style={{ height: "3vh" }}></div>

      {/* Buttons for Login and Signup */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            border: "2px solid black",
            background: "white",
            color: "black",
            borderRadius: "3vh",
            height: "6vh",
            width: "60vw",
            fontSize: "2.5vh",
          }}
        >
          Login
        </button>

        <div style={{ height: "2vh" }}></div>

        <button
          style={{
            border: "2px solid black",
            background: "white",
            color: "black",
            borderRadius: "3vh",
            height: "6vh",
            width: "60vw",
            fontSize: "2.5vh",
          }}
        >
          Sign Up
        </button>

        <div style={{ height: "2vh" }}></div>

        {/* Sign in using other methods */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "rgb(124 124 124)",
            fontWeight: "bold",
            fontSize: "2.5vh",
          }}
        >
          <h1>Sign in Using</h1>
        </div>

        <div style={{ height: "1vh" }}></div>

        {/* Social login buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GoogleButton />
          <div style={{ width: "5vw" }}></div>
          <FacebookButton />
        </div>
      </div>
    </div>
  );
}
