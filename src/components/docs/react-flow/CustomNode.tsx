"use client";

import { memo } from "react";
import MapComponent from "@/components/map";
import { Handle, NodeProps, Position } from "reactflow";

const CustomNode = ({
  data,
  isConnectable,
}: NodeProps) => {
  return (
    <>
      <div style={{ width: "500px", height: "500px" }}>
        <div className='max-h-[500px] overflow-hidden'>
          <MapComponent />
        </div>
      </div>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ bottom: 'auto', top: 100}}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ bottom: 'auto', top: 175}}
        isConnectable={isConnectable}
      />
    </>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
