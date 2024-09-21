import Image from "next/image";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

async function xtest() {
  const response = fetch("http://localhost:3000/api/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "example@example.com",
      password: "123456",
      name: "John Doe",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

async function loginUser(email: string, password: string) {
  const response = await fetch("http://localhost:3000/api/login-account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    console.log("Login successful:", data);
    // Handle successful login (e.g., redirect or store user info)
  } else {
    console.error("Error logging in:", data.message);
    // Handle error (e.g., show an error message)
  }
}

async function registerUser(email: string, password: string, name: string) {
  const response = await fetch("http://localhost:3000/api/create-account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });
  console.log("response is ", response);
  const data = await response.json();
  console.log("data is ", data);

  if (response.ok) {
    console.log("User created successfully:", data.user);
  } else {
    console.error("Error creating user:", data);
  }
}

export default function SignUpPage() {
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
      <div
        style={{
          height: "7vh",
        }}
      ></div>
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
        Sign Up
      </div>
      <div style={{ height: "4vh" }}></div>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="Name"
          sx={{
            width: "80vw",
            height: "9vh",
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
            },
          }}
        />
      </FormControl>
      <div style={{ height: "2vh" }}></div>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="password"
          type="password"
          sx={{
            width: "80vw",
            height: "9vh",
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
            },
          }}
        />
      </FormControl>

      <div style={{ height: "1vh" }}></div>
      <div
        style={{
          height: "3vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: "100%",
        }}
      >
        <div style={{ width: "10vw" }}></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "end",
        }}
      >
        <form
          action={async () => {
            "use server";
            // xtest();
            registerUser("mar12345678@gmail.com", "william0910", "william");
          }}
        >
          <button
            style={{
              border: "2px solid black",
              background: "white",
              color: "black",
              borderRadius: "2vh",
              height: "7vh",
              width: "26vw",
            }}
          >
            Sign Up
          </button>
        </form>

        <div style={{ width: "10vw" }}></div>
      </div>
    </div>
  );
}

// //{async () => {
//   "use server";
//   registerUser(
//     "williamjacobwijaya021@gmail.com",
//     "williamjacob021",
//     "William Jacob"
//   );
// }}
