const Circles = ({ CircleHeading = "Circle Heading" , CircleCount = "Circle Count" }) => {
    return (
        <div className="flex flex-col justify-center items-center w-[114px] h-[114px] rounded-full bg-[#FFE2E8]">
        <div className="flex flex-col items-center">
          <p className="text-center font-extralight text-[40px]">{CircleCount}</p>
          <CountsHeading typo={CircleHeading} />
        </div>
      </div>
    );
  };
  
  export { Circles };