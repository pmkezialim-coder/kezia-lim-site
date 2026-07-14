export default function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-dashed border-accent/50 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
      TODO: {children}
    </span>
  );
}
