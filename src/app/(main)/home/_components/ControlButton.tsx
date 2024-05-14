interface ControlButtonProps {
  text: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ text }) => {
  return <button className="px-10 py-4 bg-blue-300 rounded-xl">{text}</button>;
};

export default ControlButton;
