"use client";

import { memo } from "react";
import MapComponent from "@/components/map";
import { Handle, NodeProps, Position } from "reactflow";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"; // Import Google Map components


const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Left,
}: NodeProps) => {
  const { label, position } = data;

  return (
    <>
      <Handle type="target" position={targetPosition} isConnectable={isConnectable} />
      <div style={{ width: "500px", height: "500px" }}>
        <LoadScript googleMapsApiKey="AIzaSyASO95vCcQNQrzr0lERusMhR62QUjEMxB0">
          <GoogleMap
            // mapContainerStyle={{ width: "200px", height: "200px" }}
            center={position}
            zoom={2}
          >
            <Marker position={position} />
          </GoogleMap>
          <div className='max-h-[500px] overflow-hidden'>
          <MapComponent />
          </div>
        </LoadScript>
      </div>
    </>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
