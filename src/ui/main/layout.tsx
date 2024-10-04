const MainLayout = ({ children }: { children: any }) => {
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-row items-center justify-between w-full bg-[#00bbdc] p-[10px]">
                <div className="flex flex-row items-center justify-center">
                    <img src="https://repont.hu/storage-mohu_repont//svg/repont.svg" alt="Logo" className="h-[30px] pt-[4px] pl-[5px]" />
                    <h1 className="text-[#444444] text-2xl font-bold ml-[10px] pb-[2px] italic">Advanced</h1>
                </div>
            </div>
            {children}
        </div>
    );
}

export default MainLayout;