const PrimaryHeading = ({ typo }) => {
    return (
      <h1 className="text-[32px] font-bold text-[#830823] h-full capitalize xl:min-w-[576px] min-w-[335px] sm:min-h-[192px]">
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
  
  export { PrimaryHeading, SecondaryHeading, CountsHeading, CountsNumbers};