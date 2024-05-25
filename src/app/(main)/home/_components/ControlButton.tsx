export default function ControlButton(className: string, text, onClick) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
