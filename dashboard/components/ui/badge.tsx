import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: "default" | "success" | "warning" | "error";
}

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
	const variants = {
		default: "bg-slate-800 text-slate-300",
		success: "bg-green-900 text-green-300",
		warning: "bg-yellow-900 text-yellow-300",
		error: "bg-red-900 text-red-300",
	};
	return (
		<span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium", variants[variant], className)} {...props}>
			{children}
		</span>
	);
}
