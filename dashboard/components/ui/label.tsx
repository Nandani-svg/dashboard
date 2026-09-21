import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
	return (
		<label ref={ref} className={cn("text-xs font-medium text-slate-300", className)} {...props} />
	);
});
Label.displayName = "Label";
