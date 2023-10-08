import React, { useCallback } from 'react';
import ReactFlow, { 
    Background, 
    BackgroundVariant, 
    useNodesState, 
    useEdgesState, 
    addEdge, 
    Controls,
    removeElements,
    useStoreState
 }  from 'reactflow';
 import CustomNode from "./CustomNode";
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  {
    id: "4",
    type: "custom",
    data: { label: "Custom Node" },
    position: { x: 400, y: 200 }
  },
];

const nodeTypes = {
    custom: CustomNode
  };

const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated: true }];

export default function Flowchart() {

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <ReactFlow 
      nodes={nodes} 
      edges={edges} 
      onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      fitView>
      <Background color="#ccc" variant={BackgroundVariant.Cross} />
      <Controls />  
        </ReactFlow>
    </div>
  );
}