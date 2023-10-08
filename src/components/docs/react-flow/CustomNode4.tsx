import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const CustomNode4 = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
}: NodeProps) => {
  const { label, position } = data;

  return (
    <>

    <div className="custom-node__header4">
       <strong>Download Granule</strong>
      </div>

      <div className="custom-node__body4">
        <div>
          <a href="https://datapool.asf.alaska.edu/GRD_HD/SA/S1A_S3_GRDH_1SDH_20140615T034444_20140615T034512_001055_00107C_8977.zip">Download</a>
          </div>        
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

CustomNode4.displayName = "CustomNode4";

export default memo(CustomNode4);