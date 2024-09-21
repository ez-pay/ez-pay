export default async function handler(req, res) {
  console.log("end point is reached");
  return res.status(200).json({ message: "Point added successfully" });
}
