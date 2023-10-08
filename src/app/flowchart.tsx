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
 import CustomNode2 from "./CustomNode2";
 import CustomNode3 from "./CustomNode3";
 import CustomNode4 from "./CustomNode4";
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: "4",
    type: "custom",
    data: { label: "Custom Node" },
    position: { x: 300, y: -200 }
  },
  {
    id: "5",
    type: "custom2",
    data: { label: "Custom Node2" },
    position: { x: -100, y: -200 }
  },
  {
    id: "6",
    type: "custom3",
    data: { label: "Custom Node3" },
    position: { x: -100, y: -50 }
  },
  {
    id: "7",
    type: "custom4",
    data: { label: "Custom Node4" },
    position: { x: -100, y: 150 }
  },
];

const nodeTypes = {
    custom: CustomNode,
    custom2: CustomNode2,
    custom3: CustomNode3,
    custom4: CustomNode4,
  };

const initialEdges = [
    { id: 'e1-5', source: '5', target: '4', animated: true, targetHandle: 'a', },
    { id: 'e1-5', source: '6', target: '4', animated: true, targetHandle: 'b', },
    { id: 'e1-5', source: '7', target: '4', animated: true, },
];

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
        </ReactFlow>
    </div>
  );
}