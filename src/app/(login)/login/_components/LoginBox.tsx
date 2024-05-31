interface Props {
  text: string;
}

export default function LoginBox({ text }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-bold text-white">{text}</p>
      <input
        type={text.toLowerCase() === "password" ? "password" : "text"}
        className="w-[335px] h-10 rounded-[3px] bg-white px-2"
      />
    </div>
  );
}
