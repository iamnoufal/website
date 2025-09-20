"use client"

import { FlowData } from "@/utils/types"
import { motion } from "framer-motion"
import Emoji from "./Emoji"

const TimeLineItemComponent = ({
  children,
  date,
  emoji,
  isLeft,
  index,
}: {
  children: React.ReactNode
  date: string
  emoji: string
  isLeft: boolean
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-center w-full mb-8"
    >
      {/* Desktop Layout - Alternating */}
      <div className="hidden md:flex w-full items-center">
        {isLeft ? (
          <>
            <div className="w-6/12 text-right pr-8">
              <div className="text-sm text-gray-400 mb-2">{date}</div>
              {children}
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Emoji className="text-lg">{emoji}</Emoji>
              </div>
              <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
            <div className="w-6/12"></div>
          </>
        ) : (
          <>
            <div className="w-6/12"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Emoji className="text-lg">{emoji}</Emoji>
              </div>
              <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
            <div className="w-6/12 pl-8">
              <div className="text-sm text-gray-400 mb-2">{date}</div>
              {children}
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout - Centered */}
      <div className="md:hidden flex w-full flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <Emoji className="text-lg">{emoji}</Emoji>
          </div>
          <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-400 mb-2">{date}</div>
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export default function Flow({ data }: { data: FlowData[] }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="relative">
        {/* Central line for desktop */}
        {/* <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div> */}
        
        {data.map((flow: FlowData, index) => {
          return flow.single ? (
            <motion.div
              key={`flow-${flow.order}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center py-8 mb-8 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="text-sm text-gray-400 mb-2">{flow.time}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{flow.title}</h3>
              <p className="text-gray-300">{flow.description}</p>
            </motion.div>
          ) : (
            <TimeLineItemComponent
              key={`flow-${flow.order}`}
              date={flow.time}
              emoji={flow.emoji}
              isLeft={index % 2 === 0}
              index={index}
            >
              <div>
                <h3 className="text-lg font-bold mb-2 text-white">{flow.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{flow.description}</p>
                {flow.image && (
                  <img
                    src={flow.image.url}
                    alt={flow.image.alternativeText}
                    className="w-full h-auto mt-4 rounded-lg"
                  />
                )}
              </div>
            </TimeLineItemComponent>
          )
        })}
      </div>
    </div>
  )
}
