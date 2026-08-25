export default function RippleDivider({
  tone = "cream",
}: {
  tone?: "cream" | "ink";
}) {
  const stroke = tone === "cream" ? "#b08d4f" : "#d4b878";
  return (
    <div className="w-full overflow-hidden leading-[0]" aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="h-8 w-full"
      >
        <path
          d="M0 20 C 100 0, 200 40, 300 20 S 500 0, 600 20 S 800 40, 900 20 S 1100 0, 1200 20"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
