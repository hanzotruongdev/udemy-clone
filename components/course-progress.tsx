import { cn } from "@/lib/utils"
import { Progress } from "./ui/progress"



export interface ICourseProgressProps {
  variant?: "default" | "success"
  size?: "default" | "sm"
  value: number
}

const colorByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700"
}

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs"
}

export function CourseProgress({ value, variant, size }: ICourseProgressProps) {
  return (
    <div>
      <Progress
        variant={variant}
        className="h-2"
        value={value}
      />
      <p className={cn(
        "font-medium mt-2 text-sky-700",
        colorByVariant[variant || "default"],
        sizeByVariant[size || "default"]
      )}>
        {Math.round(value)}% Complete
      </p>
    </div>
  );
}
