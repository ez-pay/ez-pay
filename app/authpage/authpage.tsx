import Image from "next/image";
import GoogleButton from "@/components/ui/googlebutton";
import FacebookButton from "@/components/ui/facebookbutton";
import { FaGoogle } from "react-icons/fa";

export default function AuthPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Aligns content at the top
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ height: "100px" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Image
          src="/welcomeimage.png"
          alt="Next.js logo"
          width={300}
          height={300}
          priority
        />
        <div style={{ height: "30px" }}></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: "42px",
          fontWeight: "bold",
          height: "55px",
        }}
      >
        Hello
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "rgb(124 124 124)",
          fontWeight: "600",
          height: "20px",
        }}
      >
        Welcome to EZPAY, where
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "rgb(124 124 124)",
          fontWeight: "600",
          height: "20px",
        }}
      >
        your payment is 100% secure
      </div>
      <div style={{ height: "40px" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "white",
            borderRadius: "20px",
          }}
        >
          <button
            style={{
              border: "2px solid black",
              background: "white",
              color: "black",
              borderRadius: "20px",
              height: "45px",
              width: "240px",
            }}
          >
            Login
          </button>
          <div style={{ height: "20px" }}></div>
          <button
            style={{
              border: "2px solid black",
              background: "white",
              color: "black",
              borderRadius: "20px",
              height: "45px",
              width: "240px",
            }}
          >
            Sign Up
          </button>
          <div style={{ height: "30px" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "rgb(124 124 124)",
              fontWeight: "bold",
            }}
          >
            <h1>Sign in Using</h1>
          </div>
          <div style={{ height: "5px" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <GoogleButton />
            <div style={{ width: "20px" }}></div>
            <FacebookButton />
          </div>
        </div>
      </div>
    </div>
  );
}
