import { ArrowRight, CheckCircle2, FileText, Users } from "lucide-react";

const icons = [Users, FileText, CheckCircle2];
const ProjectFlow = ({ steps }: { steps: string[] }) => (
  <div className="flex items-start justify-between gap-2 border-b border-border bg-secondary/70 px-3 py-7 sm:items-center sm:px-4 md:px-6">
    {steps.map((step, index) => {
      const Icon = icons[index] ?? FileText;
      return <div key={step} className="flex min-w-0 flex-1 items-center gap-2">
        <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
          <Icon className="h-6 w-6 text-pink" aria-hidden="true" />
          <span className="w-full break-words text-xs font-medium leading-snug">{step}</span>
        </div>
        {index < steps.length - 1 && <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted-foreground sm:block" aria-hidden="true" />}
      </div>;
    })}
  </div>
);

export default ProjectFlow;