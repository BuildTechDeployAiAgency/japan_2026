type Props = {
  className?: string;
  label?: string;
};

export default function BrushDivider({ className = "", label }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg
        viewBox="0 0 400 12"
        preserveAspectRatio="none"
        className="h-3 flex-1 text-sumi/70"
        aria-hidden
      >
        <path
          d="M2 6 Q 60 2 120 6 T 240 6 T 360 5 L 396 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
      {label && (
        <span className="font-serif text-xs uppercase tracking-[0.4em] text-sumi/55">
          {label}
        </span>
      )}
      <svg
        viewBox="0 0 400 12"
        preserveAspectRatio="none"
        className="h-3 flex-1 text-sumi/70"
        aria-hidden
      >
        <path
          d="M4 6 L 40 7 Q 160 4 280 6 T 398 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
