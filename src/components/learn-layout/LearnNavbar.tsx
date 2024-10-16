"use client";
import NavbarDataApi from "@/api/navbar-data-api";
import { LearnParameterModel } from "@/model/learn-parameter-model";
import { NavbarLinkModel } from "@/model/navbar-link-model";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LearnNavbar() {
  const router = useRouter();
  const [learnHandlerData, setLearnHandlerData] = useState<LearnParameterModel>(
    {}
  );
  const [navbarList, setNavbarList] = useState<NavbarLinkModel[]>([]);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const storedData = sessionStorage.getItem("learnHandlerData");
        if (storedData) {
          setLearnHandlerData(JSON.parse(storedData));
        }
      }
      //获取所有菜单
      const navbarList = await NavbarDataApi();
      setNavbarList(navbarList);
    })();
  }, []);

  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-5 items-center">
        <div className="text-white">
          {navbarList[learnHandlerData.navbarIndex ?? 1] ? (
            navbarList[learnHandlerData.navbarIndex ?? 1].icon
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex gap-8 text-3xl font-bold">
          {learnHandlerData.sceneTitle ?? ""}-
          {learnHandlerData.sceneDescription ?? ""}
        </div>
      </div>
      <div>
        <X className="size-10 cursor-pointer" onClick={()=>{router.back()}}/>
      </div>
    </div>
  );
}
