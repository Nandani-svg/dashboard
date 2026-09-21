import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<textarea
			ref={ref}
			className={cn(
				"w-full rounded-lg border border-card-border bg-surface px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none",
				className
			)}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";
