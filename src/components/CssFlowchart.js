import React from 'react';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  min-height: 540px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 130px 130px 130px;
  grid-template-areas:
    'air engine'
    '. generator'
    'equipment bess';
  width: 100%;
  height: 100%;
  position: relative;
`;

const Node = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const IconCircle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 2px solid #4a90e2;
  background: rgba(255,255,255,0.01);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  color: #eee;
  text-align: center;
  font-size: 1.05rem;
  max-width: 160px;
  line-height: 1.3;
`;

const ArrowSvg = styled.svg`
  position: absolute;
  pointer-events: none;
  z-index: 1;
`;

const CssFlowchart = () => {
  // Adjusted arrow positions for better alignment
  return (
    <ChartWrapper>
      {/* Arrows */}
      {/* Top row: air -> engine */}
      <ArrowSvg width="200" height="40" style={{ top: 65, left: 170 }}>
        <line x1="0" y1="20" x2="200" y2="20" stroke="#4a90e2" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 5, 0 10" fill="#4a90e2" />
          </marker>
        </defs>
      </ArrowSvg>
      {/* engine -> generator */}
      <ArrowSvg width="40" height="90" style={{ top: 120, left: 385 }}>
        <line x1="20" y1="0" x2="20" y2="90" stroke="#4a90e2" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 5, 0 10" fill="#4a90e2" />
          </marker>
        </defs>
      </ArrowSvg>
      {/* generator -> equipment */}
      <ArrowSvg width="120" height="100" style={{ top: 250, left: 200 }}>
        <line x1="60" y1="0" x2="0" y2="100" stroke="#4a90e2" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 5, 0 10" fill="#4a90e2" />
          </marker>
        </defs>
      </ArrowSvg>
      {/* generator -> bess */}
      <ArrowSvg width="120" height="100" style={{ top: 250, left: 340 }}>
        <line x1="60" y1="0" x2="120" y2="100" stroke="#4a90e2" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 5, 0 10" fill="#4a90e2" />
          </marker>
        </defs>
      </ArrowSvg>
      <Grid>
        <Node style={{ gridArea: 'air' }}>
          <IconCircle>
            <img src="/images/air-tanks.svg" alt="Compressed air as fuel" style={{ width: 60, height: 60, filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(102%) contrast(90%)' }} />
          </IconCircle>
          <Label>Compressed air as fuel</Label>
        </Node>
        <Node style={{ gridArea: 'engine' }}>
          <IconCircle>
            <img src="/images/engine.svg" alt="Powers Compressed Air Engine" style={{ width: 60, height: 60, filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(102%) contrast(90%)' }} />
          </IconCircle>
          <Label>Powers Compressed Air Engine</Label>
        </Node>
        <Node style={{ gridArea: 'generator', gridColumn: '1 / span 2', justifySelf: 'center' }}>
          <IconCircle>
            <img src="/images/generator.svg" alt="Air engine drives generator" style={{ width: 60, height: 60, filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(102%) contrast(90%)' }} />
          </IconCircle>
          <Label>Air engine drives generator</Label>
        </Node>
        <Node style={{ gridArea: 'equipment' }}>
          <IconCircle>
            <img src="/images/equipment.svg" alt="Produces electricity to directly power equipment" style={{ width: 60, height: 60, filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(102%) contrast(90%)' }} />
          </IconCircle>
          <Label>Produces electricity to directly power equipment</Label>
        </Node>
        <Node style={{ gridArea: 'bess' }}>
          <IconCircle>
            <img src="/images/bess.svg" alt="Or store power in the BESS" style={{ width: 60, height: 60, filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(102%) contrast(90%)' }} />
          </IconCircle>
          <Label>Or store power in the BESS (Battery Energy Storage System)</Label>
        </Node>
      </Grid>
    </ChartWrapper>
  );
};

export default CssFlowchart; 