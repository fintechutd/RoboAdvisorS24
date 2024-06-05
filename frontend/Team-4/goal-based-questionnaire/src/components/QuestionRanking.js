// src/components/QuestionRanking.js
import React, { useState } from 'react'; // Correct

function QuestionRanking({ items, setItems }) {
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  
  //drag functionality to make it smoother
  const onDragStart = (event, index) => {
    setDraggedItemIndex(index);
    setTimeout(() => event.target.classList.add("dragging"), 0);
  };
  
  const onDragEnd = (event) => {
    event.target.classList.remove("dragging");
    setDraggedItemIndex(null);
  };
  
  const onDragOver = (event, index) => {
    event.preventDefault();
    
  };
  
  const onDrop = (event, dropIndex) => {
    const reorderedItems = [...items];
    const itemToMove = reorderedItems.splice(draggedItemIndex, 1)[0];
    reorderedItems.splice(dropIndex, 0, itemToMove);
    setItems(reorderedItems);
    setDraggedItemIndex(null); // Clear dragged item index
  };

  return (
    <div className="sortable-list">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          {draggedItemIndex === index && (
            <div className="placeholder" /> // Placeholder for the dragged item
          )}
          <div
            draggable
            onDragStart={(event) => onDragStart(event, index)}
            onDragOver={(event) => onDragOver(event, index)}
            onDrop={(event) => onDrop(event, index)}
            onDragEnd={onDragEnd}
            className={`item ${draggedItemIndex === index ? 'dragging' : ''}`}
          >
            {item}
          </div>
        </React.Fragment>
      ))}
      {draggedItemIndex !== null && <div className="placeholder" />} {/* For last position */}
    </div>
  );
}

export default QuestionRanking;
