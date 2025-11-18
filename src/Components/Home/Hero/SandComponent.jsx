import styled from "styled-components";
import { useRef } from "react";
import { SandEffect } from "../../Hooks/SandEffect";
export function SandComponent({ isActive }) {
  const canvasRef = useRef(null);
  return (
    <Container isActive={isActive}> 
      <canvas ref={canvasRef}></canvas>
      <SandEffect canvasRef={canvasRef} />
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  bottom: 40vh;
  left: 0;
  z-index: 10;
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
`;