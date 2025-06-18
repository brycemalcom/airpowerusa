import React from 'react';
import ReactFlow from 'react-flow-renderer';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const nodeTypes = {
  custom: ({ data }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        width: 90,
        height: 90,
        borderRadius: '50%',
        border: '2px solid #4a90e2',
        background: 'rgba(255,255,255,0.01)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
      }}>
        <img
          src={data.icon}
          alt={data.label}
          style={{ width: 60, height: 60, filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(102%) contrast(90%)' }}
        />
      </div>
      <div style={{ color: '#eee', textAlign: 'center', fontSize: '1.05rem', maxWidth: 160, lineHeight: 1.3 }}>{data.label}</div>
    </div>
  ),
};

// Fine-tuned node positions and connection points for a visually perfect branched layout
const nodes = [
  {
    id: 'air',
    type: 'custom',
    data: { label: 'Compressed air as fuel', icon: '/images/air-tanks.svg' },
    position: { x: 120, y: 60 },
    sourcePosition: 'right',
    targetPosition: 'bottom',
  },
  {
    id: 'engine',
    type: 'custom',
    data: { label: 'Powers Compressed Air Engine', icon: '/images/engine.svg' },
    position: { x: 420, y: 60 },
    sourcePosition: 'bottom',
    targetPosition: 'left',
  },
  {
    id: 'generator',
    type: 'custom',
    data: { label: 'Air engine drives generator', icon: '/images/generator.svg' },
    position: { x: 270, y: 220 },
    sourcePosition: 'bottom',
    targetPosition: 'top',
  },
  {
    id: 'equipment',
    type: 'custom',
    data: { label: 'Produces electricity to directly power equipment', icon: '/images/equipment.svg' },
    position: { x: 70, y: 380 },
    sourcePosition: 'top',
    targetPosition: 'top',
  },
  {
    id: 'bess',
    type: 'custom',
    data: { label: 'Or store power in the BESS (Battery Energy Storage System)', icon: '/images/bess.svg' },
    position: { x: 370, y: 380 },
    sourcePosition: 'top',
    targetPosition: 'top',
  },
];

const edges = [
  { id: 'e1', source: 'air', target: 'engine', animated: true, style: { stroke: '#4a90e2', strokeWidth: 2 }, type: 'straight' },
  { id: 'e2', source: 'engine', target: 'generator', animated: true, style: { stroke: '#4a90e2', strokeWidth: 2 }, type: 'straight' },
  { id: 'e3', source: 'generator', target: 'equipment', animated: true, style: { stroke: '#4a90e2', strokeWidth: 2 }, type: 'straight' },
  { id: 'e4', source: 'generator', target: 'bess', animated: true, style: { stroke: '#4a90e2', strokeWidth: 2 }, type: 'straight' },
];

const ReactFlowChart = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  // Hide React Flow watermark in dev
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = '.react-flow__attribution { display: none !important; }';
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ width: '100%', display: 'flex', justifyContent: 'center', background: 'none', margin: '0 auto' }}
    >
      <div style={{ width: '100%', maxWidth: 700, height: 600 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          panOnDrag={false}
          minZoom={1}
          maxZoom={1}
          style={{ background: 'none', border: 'none' }}
          fitView
          fitViewOptions={{ padding: 0.18 }}
        />
      </div>
    </motion.div>
  );
};

export default ReactFlowChart; 