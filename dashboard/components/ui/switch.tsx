"use client";

import { cn } from "@/lib/utils";

interface SwitchProps {
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
	"aria-label"?: string;
	className?: string;
}

export function Switch({ checked, onCheckedChange, "aria-label": ariaLabel, className }: SwitchProps) {
	return (
		<button
			type="button"
			role="switch"
			aria-checked={checked}
			aria-label={ariaLabel}
			onClick={() => onCheckedChange(!checked)}
			className={cn(
				"relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
				checked ? "bg-primary" : "bg-slate-700",
				className
			)}
		>
			<span
				className={cn(
					"inline-block h-4 w-4 rounded-full bg-white shadow transition-transform",
					checked ? "translate-x-5" : "translate-x-0"
				)}
			/>
		</button>
	);
}
