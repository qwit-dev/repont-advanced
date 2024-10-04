import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MainLayout = ({ children }: { children: any }) => {
    return (
        <div className="w-screen h-screen select-none">
            <div className="flex flex-row items-center justify-between w-[calc(100%-20px)] bg-reblue p-[10px] fixed z-[9999] top-[10px] left-[10px] right-[10px] rounded-2xl">
                <div className="flex flex-row items-center justify-center">
                    <img src="https://repont.hu/storage-mohu_repont//svg/repont.svg" alt="Logo" className="h-[30px] pt-[4px] pl-[5px]" />
                    <h1 className="text-regray text-2xl font-bold ml-[10px] pb-[2px] italic">Advanced</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-[10px]">
                    <Link to={"https://repont.hu/hu/fogyasztoi-visszavaltas"} target="_blank">
                        <div className="bg-transparent text-white font-bold px-[5px] py-[5px] rounded-lg flex flex-row items-center justify-center gap-[2px]">
                            <p>Visszaváltási GYIK</p>
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-[5px]" />
                        </div>
                    </Link>
                    <Link to={"https://repont.hu/hu"} target="_blank">
                        <div className="bg-transparent text-white font-bold px-[5px] py-[5px] rounded-lg flex flex-row items-center justify-center gap-[2px]">
                            <p>Hivatalos REpont weboldal</p>
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-[5px]" />
                        </div>
                    </Link>
                    <Link to={"https://repont.hu/hu/dokumentumtar"} target="_blank">
                        <div className="bg-transparent text-white font-bold px-[5px] py-[5px] rounded-lg flex flex-row items-center justify-center gap-[2px]">
                            <p>REpont dokumentumtár</p>
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-[5px]" />
                        </div>
                    </Link>
                    <div className="border-l-2 border-white pl-[15px]">
                        <div className="bg-[#f5f5f5] text-regray font-bold px-[10px] py-[5px] rounded-lg cursor-pointer">Bejelentkezés</div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}

export default MainLayout;