"use client";

import { memo } from "react";
import MapComponent from "@/components/map";
import { Handle, NodeProps, Position } from "reactflow";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"; // Import Google Map components

const key = process.env.NEXT_PUBLIC_GOOGLEMAP_KEY!;
const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
}: NodeProps) => {
  const { label, position } = data;

  return (
    <>

      <div style={{ width: "500px", height: "500px" }}>
        <LoadScript googleMapsApiKey={key}>
          <GoogleMap
            // mapContainerStyle={{ width: "200px", height: "200px" }}
            center={position}
            zoom={2}
          >
          </GoogleMap>
          <div className='max-h-[500px] overflow-hidden'>
          <MapComponent />
          </div>
        </LoadScript>
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
