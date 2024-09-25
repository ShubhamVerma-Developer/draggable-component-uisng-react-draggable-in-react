// App.tsx  
import React from 'react';  
import DraggableCard from './components/DraggableCard';  
import CustomDraggableCard from './components/CustomDraggableCard';
  
const App: React.FC = () => {  
  return (  
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">  
      <DraggableCard>  
        <h3 className="text-lg font-semibold">Draggable Card</h3>  
        <p>This card can be dragged around.</p>  
      </DraggableCard>  

      <CustomDraggableCard>
      <h3 className="text-lg font-semibold">Draggable Card</h3>  
      <p>This card can be dragged around.</p> 
        </CustomDraggableCard>
    </div>  
  );  
};  
  
export default App;  
