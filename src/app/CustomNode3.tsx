import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const CustomNode3 = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
}: NodeProps) => {
  const { label, position } = data;

  return (
    <>
    
    <div className="custom-node__header3">
       <strong>Dataset Information</strong>
      </div>
      
      <div className="custom-node__body3">
        <div>Time start: 2014-06-15T03:44:44.000Z</div>
        <div>Time end: 2014-06-15T03:45:12.000Z</div>    
        <div>Data Center: ASF</div>             
      </div>
      
      <Handle
        type="source"
        position={Position.Right}
        style={{ bottom: 55, top: 'auto'}}
        isConnectable={isConnectable}
      />
    </>
  );
};

CustomNode3.displayName = "CustomNode3";

export default memo(CustomNode3);
