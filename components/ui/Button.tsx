import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "coral" | "ink" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  coral: "bg-brand text-white",
  ink: "bg-ink text-inverse",
  ghost: "border border-border text-ink",
};

export function Button({
  variant = "coral",
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  return (
    <button
      className={`inline-flex items-center rounded-[10px] px-6 py-[13px] text-[15px] font-semibold whitespace-nowrap transition-colors hover:opacity-90 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
