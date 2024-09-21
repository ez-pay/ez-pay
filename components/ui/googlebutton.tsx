import { FaGoogle } from "react-icons/fa";

export default function GoogleButton() {
  return (
    <button
      className="icon-button"
      style={{
        borderRadius: "20px", // Reduce size proportionally
        background: "rgb(219, 68, 55)",
        width: "40px", // Button width reduced proportionally
        height: "40px", // Button height reduced proportionally
        display: "flex", // Flexbox to center the icon
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FaGoogle
        className="icon"
        style={{
          alignItems: "center",
          color: "white",
          width: "20px", // Reduced width of the icon
          height: "20px", // Reduced height of the icon
        }}
      />
    </button>
  );
}
