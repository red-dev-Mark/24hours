interface Props {
  text: string;
}

export default function SocialLoginButton({ text }: Props) {
  return (
    <div className="flex-grow-0 flex-shrink-0 w-[335px] h-9 relative rounded-[3px] bg-white">
      <div className="w-[147px] h-4">
        {/* <img
                src="image-2.png"
                className="w-4 h-4 absolute left-[93.5px] top-[9.5px] object-cover"
              /> */}
        <p className="absolute left-[120px] top-2.5 text-xs font-bold text-center text-black">
          {text}
        </p>
      </div>
    </div>
  );
}
