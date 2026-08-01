import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#102A43", mint: "#4FD1A5", mist: "#F4F8F7" }, boxShadow: { glow: "0 20px 50px rgba(16,42,67,.12)" } } }, plugins: [] } satisfies Config;
