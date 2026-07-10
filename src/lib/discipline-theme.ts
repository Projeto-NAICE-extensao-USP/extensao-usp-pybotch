export const disciplineTheme: Record<
  string,
  {
    bg: string;
    text: string;
    soft: string;
    border: string;
    chip: string;
    button: string;
    ring: string;
  }
> = {
  python: {
    bg: "bg-python",
    text: "text-python",
    soft: "bg-python-soft",
    border: "border-python/30",
    chip: "bg-python-soft text-python border border-python/20",
    button: "bg-python text-python-foreground hover:opacity-90",
    ring: "ring-python/40",
  },
  robotica: {
    bg: "bg-robotica",
    text: "text-robotica",
    soft: "bg-robotica-soft",
    border: "border-robotica/30",
    chip: "bg-robotica-soft text-robotica border border-robotica/20",
    button: "bg-robotica text-robotica-foreground hover:opacity-90",
    ring: "ring-robotica/40",
  },
  scratch: {
    bg: "bg-scratch",
    text: "text-scratch",
    soft: "bg-scratch-soft",
    border: "border-scratch/30",
    chip: "bg-scratch-soft text-scratch-foreground border border-scratch/20",
    button: "bg-scratch text-scratch-foreground hover:opacity-90",
    ring: "ring-scratch/40",
  },
};
