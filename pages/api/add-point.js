// pages/api/add-point.js
import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, points } = req.body;
    console.log("waiting for supabase");
    const { data, error } = await supabase
      .from("next_auth.points")
      .insert([{ user_id: userId, points: 1 }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: "Point added successfully", data });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
