// /pages/api/create-account.js
import { createClient } from "@/utils/supabase/server";
import { supabase } from "../../lib/supabaseClient"; // assuming you have a Supabase client setup in lib
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  console.log("before create client");
  const supabase = createClient();
  console.log("boom");
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // const { email, password, name } = req.body;
  // console.log("email is", email);
  // console.log("password is", password);
  // console.log("name is", name);

  // Validate the input
  // if (!email || !password || !name) {
  //   return res
  //     .status(400)
  //     .json({ message: "Email, password, and name are required" });
  // }

  try {
    // Hash the password using bcrypt
    // console.log("trying to insert data");
    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("hashed password is ", hashedPassword);

    // Insert the new user into the Supabase users table
    // const { data, error } = await supabase
    //   .from("auth.users")
    // const { data, error } = await supabase.rpc("list_all_tables");
    // const { data, error } = await supabase.from("users").select();

    if (req.method == "POST") {
      const { email, password, name } = req.body;

      const { datafetch, errorfetch } = await supabase
        .from("users") // Specify the table name
        .insert([
          {
            email: email,
            name: name,
            image: "https://example.com/john-doe.jpg",
            password: password,
            emailVerified: new Date(), // Optional: set if you want to track verification
          },
        ]);

      console.log("data is ", datafetch);
      console.log("error is ", errorfetch);
      data = datafetch;
      error = errorfetch;
    }

    // const { data, error } = await supabase.from("next_auth.users").select();

    //   .insert([{ email, password, name }])
    // .select(); //Use .select() to return the new user data

    // Handle any errors from Supabase

    // if (error) {
    //   return res.status(400).json({ message: error.message });
    // }

    // Respond with the newly created user data
    return res.status(200).json({
      message: "User created successfully",
      user: data[0], // Return the created user (you can adjust this based on your needs)
    });
  } catch (error) {
    // Handle errors like bcrypt failure, etc.
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
}
