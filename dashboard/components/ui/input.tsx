import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
	return (
		<input
			ref={ref}
			className={cn(
				"w-full rounded-lg border border-card-border bg-surface px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary",
				className
			)}
			{...props}
		/>
	);
});
Input.displayName = "Input";
