'use client'

import { useEffect, useState } from 'react'

interface VisualizerBar {
  height: number
  color: string
}

export default function AudioVisualizer() {
  const [bars, setBars] = useState<VisualizerBar[]>([])

  useEffect(() => {
    // Generate the audio visualizer bars based on the design
    const colors = ['white', 'cyan-400', 'purple-400', 'green-400', 'yellow-400']
    const heights = [
      20, 40, 15, 25, 35, 30, 20, 45, 25, 40, 30, 
      80, 60, 90, 100, 85, 75, 95, 70, 80, 65, 85, 75, 90, 60, 85, 70, 95, 80, 75, 85, 65, 90, 70, 85, 60, 95, 75, 80, 65, 90, 70, 85,
      60, 95, 75, 80, 65, 90, 70, 85, 60, 95, 75
    ]

    const generatedBars = heights.map((height) => ({
      height,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))

    setBars(generatedBars)
  }, [])

  const getColorClass = (color: string) => {
    switch (color) {
      case 'white': return 'bg-white'
      case 'cyan-400': return 'bg-cyan-400'
      case 'purple-400': return 'bg-purple-400'
      case 'green-400': return 'bg-green-400'
      case 'yellow-400': return 'bg-yellow-400'
      default: return 'bg-white'
    }
  }

  return (
    <div className="flex items-end justify-center space-x-1 mb-20 h-32">
      {bars.map((bar, index) => (
        <div
          key={index}
          className={`w-2 ${getColorClass(bar.color)} rounded-full`}
          style={{ height: `${bar.height}px` }}
        />
      ))}
    </div>
  )
}
