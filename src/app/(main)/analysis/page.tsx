import Chart from "./_components/chart";
import Lists from "./_components/Lists";

export default function page() {
  return (
    <div className="w-[414px] h-[736px] relative overflow-hidden bg-white">
      <div className="w-[414px] h-[896px] absolute left-[-1px] top-[-1px] bg-[#d6d7ef]" />
      <div className="w-[414px] h-[736px] absolute left-[322px] top-[737px]" />
      <div className="w-[414px] h-[736px] absolute left-0 top-[828px] overflow-hidden"></div>
      <div className="w-[356.68px] h-[39px]">{/* <daypicker/> */}</div>
      <div
        className="w-[346px] h-[417px]"
        style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.25))" }}
      >
        <div className="w-[260.95px] h-[285.11px]">{/* <Chart /> */}</div>
        <Lists />
      </div>
    </div>
  );
}
