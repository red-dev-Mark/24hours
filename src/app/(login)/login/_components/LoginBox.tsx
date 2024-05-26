interface Props {
  text: string;
}

export default function LoginBox({ text }: Props) {
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]">
      <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-center text-white">
        {text}
      </p>
      <div className="flex-grow-0 flex-shrink-0 w-[335px] h-10">
        <div className="w-[335px] h-10 absolute left-[-0.5px] top-[20.5px] rounded-[3px] bg-white"></div>
      </div>
    </div>
  );
}
