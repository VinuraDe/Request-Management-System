const PrimaryHeading = ({ typo }) => {
    return (
      <h1 className="text-[60px] font-bold text-[#880a0a55] h-full capitalize xl:min-w-[576px] min-w-[335px] sm:min-h-[192px]">
        {typo}
      </h1>
    );
  };
  
  const SecondaryHeading = ({ typo }) => {
    return <div className=" text-[#101B33] font-semibold text-[32px] leading-[33px] text-center sm:text-left">{typo}</div>;
  };

  const CountsHeading = ({ typo }) => {
    return <div className=" text-[#38393A] font-[400] text-[14px] mr-[]">{typo}</div>;
  };

  const CountsNumbers = ({ typo }) => {
    return <div className=" text-[#38393A] font-[400] text-[14px] mr-[]">{typo}</div>;
  };

  const TableHeading = ({typo}) =>{
    return <div className="flex flex-row bg-[#C0A03A] text-white pt-[21.5px] pb-[12.5px] rounded-t-1.25 text-xs font-medium">
      <div className="flex-[0.5] pl-2">{typo}</div>
    </div>
  }
  
  export { PrimaryHeading, SecondaryHeading, CountsHeading, CountsNumbers ,TableHeading};