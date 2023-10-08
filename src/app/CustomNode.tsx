import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"; // Import Google Map components

const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeProps) => {
  const { label, position } = data;

  return (
    <>
      <Handle type="target" position={targetPosition} isConnectable={isConnectable} />
      <div style={{ width: "200px", height: "200px" }}>
        <LoadScript googleMapsApiKey="AIzaSyASO95vCcQNQrzr0lERusMhR62QUjEMxB0">
          <GoogleMap
            // mapContainerStyle={{ width: "100%", height: "100%" }}
            center={position}
            zoom={10}
          >
            <Marker position={position} />
          </GoogleMap>
        </LoadScript>
      </div>
      <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
    </>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
