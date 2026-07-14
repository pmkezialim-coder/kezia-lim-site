import { Fragment } from "react";

type Step = {
  icon?: string;
  label: string;
  sublabel?: string;
};

export default function FlowSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0">
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          <div className="flex items-center gap-4 sm:flex-1 sm:flex-col sm:items-center sm:gap-3 sm:text-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-copper/50 bg-copper/10 text-2xl">
              {step.icon ?? i + 1}
            </div>
            <div>
              <p className="text-sm font-medium">{step.label}</p>
              {step.sublabel && (
                <p className="mt-0.5 text-xs text-muted">{step.sublabel}</p>
              )}
            </div>
          </div>
          {i < steps.length - 1 && (
            <span
              className="self-center text-xl text-accent/40 sm:mt-7 sm:shrink-0 sm:px-2"
              aria-hidden
            >
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
