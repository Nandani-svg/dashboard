import { cn } from "@/lib/utils";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
	icon?: React.ElementType;
	title: string;
	description?: string;
}

export function EmptyState({ icon: Icon, title, description, className, ...props }: EmptyStateProps) {
	return (
		<div className={cn("flex flex-col items-center justify-center gap-2 text-center", className)} {...props}>
			{Icon && <Icon className="h-8 w-8 text-slate-500" aria-hidden="true" />}
			<p className="text-sm font-semibold text-white">{title}</p>
			{description && <p className="text-xs text-slate-500">{description}</p>}
		</div>
	);
}
