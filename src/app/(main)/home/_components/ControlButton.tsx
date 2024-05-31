import React from 'react';

interface ControlButtonProps {
  className: string;
  text: string;
  onClick: () => void;
}

const ControlButton: React.FC<ControlButtonProps> = ({ className, text, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ControlButton;
