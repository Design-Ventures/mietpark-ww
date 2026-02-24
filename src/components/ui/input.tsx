import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-10 w-full rounded-lg border bg-white px-3 text-sm",
            "placeholder:text-neutral-400",
            "transition-colors duration-[var(--transition-fast)]",
            "focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
            error
              ? "border-red-300 focus:ring-red-500/20 focus:border-red-500"
              : "border-neutral-300",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
        {hint && !error && <p className="text-xs text-neutral-500">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };

/** Textarea variant */
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border bg-white px-3 py-2 text-sm min-h-[80px]",
            "placeholder:text-neutral-400",
            "transition-colors duration-[var(--transition-fast)]",
            "focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
            error ? "border-red-300" : "border-neutral-300",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export { Textarea };
