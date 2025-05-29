import React from 'react';
import { Airplay, Zap, Cpu, Battery, Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

/**
 * A node in the flowchart with icon, title, and tooltip description.
 */
function FlowNode({ icon: Icon, title, description }) {
  return (
    <Tippy content={<span className="text-sm">{description}</span>}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
      >
        <Icon className="w-12 h-12 text-blue-400" />
        <span className="mt-2 text-white font-medium text-center">{title}</span>
      </motion.div>
    </Tippy>
  );
}

/**
 * A simple arrow connector between nodes.
 */
function Arrow({ direction = 'right' }) {
  return (
    <div className="mx-2">
      {direction === 'right' ? (
        <svg
          className="w-6 h-6 text-blue-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-blue-300 transform rotate-90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </div>
  );
}

/**
 * Reusable Flowchart component showing compressed air energy system.
 */
export default function Flowchart() {
  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      {/* Main horizontal flow: Tanks -> Compressor -> Engine -> Storage */}
      <div className="flex flex-col md:flex-row items-center">
        <FlowNode
          icon={Airplay}
          title="Compressed Air Tanks"
          description="Stores pressurized air used to power the Compressed Air Engine."
        />
        <Arrow />
        <FlowNode
          icon={Zap}
          title="Compressor for Refill Tanks"
          description="Uses stored or generated power to refill compressed air tanks."
        />
        <Arrow />
        <FlowNode
          icon={Cpu}
          title="Compressed Air Engine"
          description="Converts stored compressed air into mechanical power to drive equipment and generate electricity."
        />
        <Arrow />
        <FlowNode
          icon={Battery}
          title="BESS Storage System"
          description="Stores energy for critical applications, backup power, and closed-loop system operation."
        />
      </div>

      {/* Vertical branch: Clean Air Exhaust below engine */}
      <div className="flex flex-col items-center">
        <Arrow direction="down" />
        <FlowNode
          icon={Snowflake}
          title="Clean Air Exhaust"
          description="Produces -20°C to -40°C cold air useful for cooling applications like data centers."
        />
      </div>
    </div>
  );
} 