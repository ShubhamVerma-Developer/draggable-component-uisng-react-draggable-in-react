import React from 'react';  
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable';  
  
interface CustomDraggableCardProps {  
  children: React.ReactNode;  
}  
  
const CustomDraggableCard: React.FC<CustomDraggableCardProps> = ({ children }) => {  
  const handleStart = (e: DraggableEvent, data: DraggableData) => {  
    console.log('Drag started:', data);  
  };  
  
  const handleDrag = (e: DraggableEvent, data: DraggableData) => {  
    console.log('Dragging:', data);  
  };  
  
  const handleStop = (e: DraggableEvent, data: DraggableData) => {  
    console.log('Drag stopped:', data);  
  };  
  
  return (  
    <Draggable  
      defaultPosition={{ x: 0, y: 0 }}  
      bounds="parent"  
      onStart={handleStart}  
      onDrag={handleDrag}  
      onStop={handleStop}  
    >  
      <div className="bg-white shadow-md rounded-lg p-4 cursor-move">  
        {children}  
      </div>  
    </Draggable>  
  );  
};  
  
export default CustomDraggableCard;  
