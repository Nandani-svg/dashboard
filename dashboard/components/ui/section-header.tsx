import { cn } from "@/lib/utils";

interface SectionHeaderProps {
	title: string;
	description?: string;
	action?: React.ReactNode;
	className?: string;
}

export function SectionHeader({ title, description, action, className }: SectionHeaderProps) {
	return (
		<div className={cn("flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between", className)}>
			<div>
				<h1 className="text-xl font-semibold text-white">{title}</h1>
				{description && <p className="mt-1 text-sm text-slate-400">{description}</p>}
			</div>
			{action && <div className="shrink-0">{action}</div>}
		</div>
	);
}
