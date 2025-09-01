import { cn } from "@/lib/utils"

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ size = "md", className, ...props }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  }

  return (
    <div
      className={cn("relative", className)}
      {...props}
    >
      <div className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-primary-600",
        sizeClasses[size]
      )} />
    </div>
  )
}

export function LoadingDots({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex space-x-1", className)} {...props}>
      <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" />
    </div>
  )
}

export function LoadingBar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full h-1 bg-gray-200 rounded-full overflow-hidden", className)} {...props}>
      <div className="h-full bg-primary-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
    </div>
  )
}