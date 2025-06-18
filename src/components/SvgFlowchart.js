import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Node data: icon path, label, and coordinates
const nodes = [
  {
    id: 'air',
    icon: '/images/air-tanks.svg',
    label: 'Compressed air as fuel',
    x: 100,
    y: 40,
  },
  {
    id: 'engine',
    icon: '/images/engine.svg',
    label: 'Powers Compressed Air Engine',
    x: 340,
    y: 40,
  },
  {
    id: 'generator',
    icon: '/images/generator.svg',
    label: 'Air engine drives generator',
    x: 220,
    y: 180,
  },
  {
    id: 'equipment',
    icon: '/images/equipment.svg',
    label: 'Produces electricity to directly power equipment',
    x: 80,
    y: 320,
  },
  {
    id: 'bess',
    icon: '/images/bess.svg',
    label: 'Or store power in the BESS (Battery Energy Storage System)',
    x: 320,
    y: 320,
  },
];

// Arrow data: from node, to node
const arrows = [
  { from: 'air', to: 'engine' },
  { from: 'engine', to: 'generator' },
  { from: 'generator', to: 'equipment' },
  { from: 'generator', to: 'bess' },
];

const nodeSize = 90;
const iconSize = 60;
const svgWidth = 480;
const svgHeight = 420;

const SvgFlowchart = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  // Helper to get node center
  const getNodeCenter = (node) => [node.x + nodeSize / 2, node.y + nodeSize / 2];

  // Helper to get node by id
  const getNode = (id) => nodes.find((n) => n.id === id);

  return (
    <div ref={ref} style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
      <motion.svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{ maxWidth: '100%', height: 'auto', background: 'none' }}
        initial="hidden"
        animate={controls}
      >
        {/* Arrows */}
        {arrows.map((arrow, i) => {
          const from = getNode(arrow.from);
          const to = getNode(arrow.to);
          const [x1, y1] = getNodeCenter(from);
          const [x2, y2] = getNodeCenter(to);
          // Draw a curved path for branches
          let path;
          if (arrow.from === 'generator') {
            const curve = arrow.to === 'equipment' ? -60 : 60;
            path = `M${x1},${y1} Q${x1 + curve},${y1 + 60} ${x2},${y2 - nodeSize / 2}`;
          } else {
            path = `M${x1},${y1} L${x2},${y2 - nodeSize / 2}`;
          }
          return (
            <motion.path
              key={i}
              d={path}
              stroke="#4a90e2"
              strokeWidth={3}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              markerEnd="url(#arrowhead)"
            />
          );
        })}
        {/* Arrowhead marker */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 5, 0 10" fill="#4a90e2" />
          </marker>
        </defs>
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
          >
            {/* Circle background */}
            <circle
              cx={node.x + nodeSize / 2}
              cy={node.y + nodeSize / 2}
              r={nodeSize / 2}
              fill="rgba(255,255,255,0.01)"
              stroke="#4a90e2"
              strokeWidth={2}
            />
            {/* Icon */}
            <image
              href={node.icon}
              x={node.x + (nodeSize - iconSize) / 2}
              y={node.y + (nodeSize - iconSize) / 2}
              width={iconSize}
              height={iconSize}
              style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(102%) contrast(90%)' }}
            />
            {/* Label */}
            <foreignObject
              x={node.x - 30}
              y={node.y + nodeSize + 8}
              width={nodeSize + 60}
              height={48}
            >
              <div style={{ color: '#eee', textAlign: 'center', fontSize: '1.05rem', lineHeight: 1.3, fontFamily: 'inherit', fontWeight: 400 }}>
                {node.label}
              </div>
            </foreignObject>
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
};

export default SvgFlowchart; 