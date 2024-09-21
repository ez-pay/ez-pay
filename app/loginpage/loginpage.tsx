import Image from "next/image";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function LoginPage() {
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
        Login
      </div>
      <div style={{ height: "40px" }}></div>
      <FormControl>
        <InputLabel htmlFor="component-outlined"></InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="Composed TextField"
          label="Name"
          sx={{ width: "300px", height: "50px" }} // Adjust width and height here
        />
      </FormControl>
    </div>
  );
}
