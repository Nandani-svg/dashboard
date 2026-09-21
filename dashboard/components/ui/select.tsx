import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => {
	return (
		<select
			ref={ref}
			className={cn(
				"w-full rounded-lg border border-card-border bg-surface px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary",
				className
			)}
			{...props}
		>
			{children}
		</select>
	);
});
Select.displayName = "Select";
