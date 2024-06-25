const PrimaryButtons = ({ typo }) => {
    return (
      <div>
        <button className="inline-flex bg-[#830823] text-white border-0 py-2 px-6 focus:outline-none w-fit rounded uppercase">
          {typo}
        </button>
      </div>
    );
  };

const NavButtons = ({typo}) => {
    return (
      <div>
        <button className="inline-flex text-[14px] font-normal bg-[#830823] hover:bg-[#882d41] active:bg-white active:text-[#830823] text-white border-0 py-[8px] pr-[12px] pl-[34px] rounded-[6px]">
          {typo}
        </button>
      </div>
    );
  };
  
  export { PrimaryButtons, NavButtons };