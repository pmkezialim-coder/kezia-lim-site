type Metric = { value: string; label: string };

export default function MetricStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
      {metrics.map((metric) => (
        <div key={metric.label} className="px-2 py-6 text-center sm:py-2">
          <p className="font-serif text-[clamp(2.25rem,4vw,3rem)] leading-none text-foreground">
            {metric.value}
          </p>
          <p className="mt-2 text-xs uppercase tracking-widest text-muted">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
