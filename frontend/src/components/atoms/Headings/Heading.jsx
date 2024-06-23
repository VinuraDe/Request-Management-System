const PrimaryHeading = ({ typo }) => {
    return (
      <h1 className="sm:text-5xl text-3xl font-bold text-white h-full capitalize xl:min-w-[576px] min-w-[335px] sm:min-h-[192px]">
        {typo}
      </h1>
    );
  };
  
  const SecondaryHeading = ({ typo }) => {
    return <div className="Ciutadella text-[#101B33] font-semibold text-[32px] leading-[33px] text-center sm:text-left">{typo}</div>;
  };
  
  export { PrimaryHeading, SecondaryHeading };