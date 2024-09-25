// components/DraggableCard.tsx  
import React from 'react';  
import Draggable from 'react-draggable';  
  
interface DraggableCardProps {  
  children: React.ReactNode;  
}  
  
const DraggableCard: React.FC<DraggableCardProps> = ({ children }) => {  
  return (  
    <Draggable>  
      <div className="bg-white shadow-md rounded-lg p-4 cursor-move">  
        {children}  
      </div>  
    </Draggable>  
  );  
};  
  
export default DraggableCard;  
