import { cn } from "@/lib/utils";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "success" | "error" | "warning" | "info";
	dismissible?: boolean;
	onDismiss?: () => void;
	children?: React.ReactNode;
}

export function Alert({ variant = "info", dismissible, onDismiss, children, className, ...props }: AlertProps) {
	const variants = {
		success: "bg-green-950 border-green-800 text-green-300",
		error: "bg-red-950 border-red-800 text-red-300",
		warning: "bg-yellow-950 border-yellow-800 text-yellow-300",
		info: "bg-blue-950 border-blue-800 text-blue-300",
	};
	return (
		<div className={cn("flex items-start justify-between gap-3 rounded-lg border px-4 py-3 text-sm", variants[variant], className)} {...props}>
			<span>{children}</span>
			{dismissible && onDismiss && (
				<button type="button" onClick={onDismiss} className="shrink-0 opacity-70 hover:opacity-100">✕</button>
			)}
		</div>
	);
}
