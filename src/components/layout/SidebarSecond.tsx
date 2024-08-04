type TSecondsidebarProps = {
  showSecondSidebar: boolean;
};

export const SidebarSecond = ({ showSecondSidebar }: TSecondsidebarProps) => {
  return (
    <div
      className={`${
        showSecondSidebar ? "" : "-ml-[500px]"
      } h-screen w-[300px]  py-8 bg-[#252526] text-[#CCCCCC] font-sans font-semibold transition duration-300`}
    >
      <div className="p-3 pl-6">
        <h3 className="uppercase text-[14px] leading-4">Explorer</h3>
      </div>

      <div>
        <div className="h-screen w-full pt-32 px-4">
          <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
            <div className="p-6">
              <div className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                  What is your refund policy?
                </span>
                {/* <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> */}
              </div>
              <div className="mt-2 text-sm/5 text-white/50">
                If you're unhappy with your purchase, we'll refund you in full.
              </div>
            </div>
            <div className="p-6">
              <div className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                  Do you offer technical support?
                </span>
                {/* <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> */}
              </div>
              <div className="mt-2 text-sm/5 text-white/50">No.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
