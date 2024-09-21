// import { createClient } from "@/utils/supabase/server";
// import { supabase } from "your-supabase-client"; // Adjust this import according to your setup
// import bcrypt from "bcrypt";

// export default async function handler(req, res) {
//   const supabase = createClient();
//   if (req.method === "POST") {
//     const { email, password } = req.body;

//     // Fetch user from the database
//     const { data: user, error: fetchError } = await supabase
//       .from("users")
//       .select("password")
//       .eq("email", email)
//       .single();

//     if (fetchError || !user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // Compare the provided password with the hashed password in the database
//     const isMatch = password !== data.password;
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // Successful login
//     return res.status(200).json({ message: "Login successful", user });
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
