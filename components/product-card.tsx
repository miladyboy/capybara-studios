import type { ReactNode } from "react"
import Image from "next/image"
import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  icon: ReactNode
  color: "purple" | "blue" | "pink"
  imageUrl: string
  isLive?: boolean
  actionText?: string
}

const colorMap = {
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    button: "bg-purple-100 hover:bg-purple-200 text-purple-800",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    button: "bg-blue-100 hover:bg-blue-200 text-blue-800",
  },
  pink: {
    bg: "bg-pink-50",
    border: "border-pink-200",
    button: "bg-pink-100 hover:bg-pink-200 text-pink-800",
  },
}

export default function ProductCard({
  title,
  description,
  icon,
  color,
  imageUrl,
  isLive,
  actionText,
}: ProductCardProps) {
  const colors = colorMap[color]

  return (
    <Card
      className={`${colors.bg} border ${colors.border} rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300`}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">{icon}</div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
          <Image src={imageUrl || "/placeholder.svg"} alt={`${title} illustration`} fill className="object-cover" />
        </div>
      </div>
      <CardFooter className="p-6 pt-0">
        {isLive ? (
          <Button className={`${colors.button} w-full justify-between rounded-xl py-6`}>
            {actionText || "Try it now"} <ArrowRight className="h-5 w-5" />
          </Button>
        ) : (
          <Button variant="ghost" className={`${colors.button} w-full justify-between rounded-xl py-6`} disabled>
            Coming soon <ArrowRight className="h-5 w-5" />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
