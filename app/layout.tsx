import "./globals.css";
import type { Metadata } from "next";
import { Inter, Single_Day } from "next/font/google";
import Header from "@/components/header";
import AuthPage from "./authpage/authpage";
import LoginPage from "./loginpage/loginpage";
import HomePage from "@/components/homepage";

import type { NextAuthConfig } from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";

import Google from "next-auth/providers/google";
import ProfilePage from "@/pages/profilepage";
import RequestPaymentPage from "@/pages/requestpaymentpage";
import SendTransactionPage from "@/pages/sendtransactionpage";
import MakePaymentPage from "@/pages/makepaymentpage";
import ConfirmPaymentPage from "@/pages/confirmpaymentpage";
import ConfirmTransactionPage from "@/pages/confirmtransactionpage";

const config = {
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  adapter: SupabaseAdapter({
    url: "https://dxmxfoeeogrqmppxgryc.supabase.co",
    secret:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bXhmb2Vlb2dycW1wcHhncnljIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjcyMzQ3OSwiZXhwIjoyMDQyMjk5NDc5fQ.L6ioX3jWMueXDvg33r_IC_zeTXROaks1Ed2Yv7YPgsI",
  }),
  providers: [
    // GitLab,
    Google,
    // Hubspot,
    // Keycloak({ name: "Keycloak (bob/bob)" }),
    // LinkedIn,
    // Netlify,
    // Okta,
    // Passkey({
    //   formFields: {
    //     email: {
    //       label: "Username",
    //       required: true,
    //       autocomplete: "username webauthn",
    //     },
    //   },
    // }),
    // Passage,
    // Pinterest,
    // Reddit,
    // Slack,
    // Spotify,
    // Twitch,
    // Twitter,
    // Vipps,
    // WorkOS({
    //   connection: process.env.AUTH_WORKOS_CONNECTION!,
    // }),
    // Zoom,
  ],
  basePath: "/auth",
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name;
      if (account?.provider === "keycloak") {
        return { ...token, accessToken: account.access_token };
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  experimental: {
    enableWebAuthn: true,
  },
  debug: process.env.NODE_ENV !== "production" ? true : false,
} satisfies NextAuthConfig;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-100">
          {/* <Header />
          <main className="mx-auto w-full max-w-3xl flex-auto px-4 py-4 sm:px-6 md:py-6">
            {children}
          </main> */}
          {/* <AuthPage /> */}
          {/* <LoginPage /> */}
          <HomePage />
          {/* <ProfilePage /> */}
          {/* <RequestPayment /> */}
          {/* <SendTransactionPage /> */}
          {/* <MakePayment /> */}
          {/* <ConfirmPaymentPage 
            walletType={"MetaMask"} 
            paymentId={"987986097869879870"} 
            amount={"100"} 
          /> */}
          {/* <ConfirmTransactionPage /> */}
        </div>
      </body>
    </html>
  );
}
