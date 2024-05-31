import Image from "next/image";

interface Props {
  text: string;
}

export default function SocialLoginButton({ text }: Props) {
  const getLogoSrc = () => {
    if (text.toLowerCase().includes("google")) {
      return "https://developers.google.com/identity/images/g-logo.png";
    } else if (text.toLowerCase().includes("facebook")) {
      return "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg";
    }
    return "";
  };

  return (
    <div className="flex items-center w-[335px] h-9 rounded-[3px] bg-white px-2">
      <Image src={getLogoSrc()} alt={text} width={16} height={16} />
      <p className="text-xs font-bold text-center text-black flex-grow ml-2">
        {text}
      </p>
    </div>
  );
}
