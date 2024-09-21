import NextAuth from "next-auth";
import "next-auth/jwt";

import Apple from "next-auth/providers/apple";
import Auth0 from "next-auth/providers/auth0";
import AzureB2C from "next-auth/providers/azure-ad-b2c";
import BankIDNorway from "next-auth/providers/bankid-no";
import BoxyHQSAML from "next-auth/providers/boxyhq-saml";
import Cognito from "next-auth/providers/cognito";
import Coinbase from "next-auth/providers/coinbase";
import Discord from "next-auth/providers/discord";
import Dropbox from "next-auth/providers/dropbox";
import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github";
import GitLab from "next-auth/providers/gitlab";
import Google from "next-auth/providers/google";
import Hubspot from "next-auth/providers/hubspot";
import Keycloak from "next-auth/providers/keycloak";
import LinkedIn from "next-auth/providers/linkedin";
import Netlify from "next-auth/providers/netlify";
import Okta from "next-auth/providers/okta";
import Passage from "next-auth/providers/passage";
import Passkey from "next-auth/providers/passkey";
import Pinterest from "next-auth/providers/pinterest";
import Reddit from "next-auth/providers/reddit";
import Slack from "next-auth/providers/slack";
import Spotify from "next-auth/providers/spotify";
import Twitch from "next-auth/providers/twitch";
import Twitter from "next-auth/providers/twitter";
import Vipps from "next-auth/providers/vipps";
import WorkOS from "next-auth/providers/workos";
import Zoom from "next-auth/providers/zoom";
import { createStorage } from "unstorage";
import memoryDriver from "unstorage/drivers/memory";
import vercelKVDriver from "unstorage/drivers/vercel-kv";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import type { NextAuthConfig } from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import client from "./lib/db";


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

export const { handlers, auth, signIn, signOut } = NextAuth(config);

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
