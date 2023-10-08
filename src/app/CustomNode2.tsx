import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const CustomNode2 = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
}: NodeProps) => {
  const { label, position } = data;

  return (
    <>
    
    <div className="custom-node__header2">
       <strong>Title</strong>
      </div>
      
      <div className="custom-node__body2">
        <div className="custom-node__body-text">ECHO granule metadata</div>        
      </div>
      
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 15, top: 'auto'}}
        isConnectable={isConnectable}
      />
    </>
  );
};

CustomNode2.displayName = "CustomNode2";

export default memo(CustomNode2);
