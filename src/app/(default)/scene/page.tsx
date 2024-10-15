"use client";
import MaxWindthWrapper from "@/components/MaxWidathWrapper";
import { SceneThemeGrouproup, SceneThemeItem } from "@/model/theme-item";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
export default function ScenePage() {
  //当前学习的场景主题列表
  const studySceneThemeList: SceneThemeItem[] = [
    {
      id: "1",
      title: "旅行",
      description: "谈一谈你的旅行",
      image:
        "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      progress: 0.5,
    },
    {
      id: "2",
      title: "美食",
      description: "谈一谈你的美食",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      progress: 0,
    },
    {
      id: "3",
      title: "美食",
      description: "谈一谈你的美食",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      progress: 0,
    },
    {
      id: "4",
      title: "美食",
      description: "谈一谈你的美食",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      progress: 0,
    },
  ];

  //其他各主题列表
  const SceneThemeGroupList: SceneThemeGrouproup[] = [
    {
      id: "1",
      title: "旅行",
      items: studySceneThemeList,
    },
    {
      id: "2",
      title: "美食",
      items: studySceneThemeList,
    },
    {
      id: "3",
      title: "生活",
      items: studySceneThemeList,
    },
  ];

  return (
    <MaxWindthWrapper>
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-full mx-auto">
        <div className="">
          {titleDiv("当前学习")}
          <div className="flex overflow-x-auto whitespace-nowrap">
            {studySceneThemeList.map((item) => sceneThemeItemFunction(item))}
          </div>
        </div>
        <div className="pt-10">
          {titleDiv("其他主题")}
          {SceneThemeGroupList.map((group) => (
            <div className="pt-5" key={group.id}>
              <div className="text-xl font-bold">{group.title}</div>
              <div className="flex max-w-screen overflow-x-auto whitespace-nowrap">
                {group.items.map((item) => sceneThemeItemFunction(item,true))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWindthWrapper>
  );

  //显示主题
  function sceneThemeItemFunction(item: SceneThemeItem, isNotStudy?: boolean) {
    return (
      <div
        className="flex shadow-md flex-none justify-between w-96 m-5 bg-themeItemBac rounded-lg items-center hover:bg-hoverThemeItemBac hover:text-white cursor-pointer"
        key={item.id}
      >
        <div className="p-5 flex flex-col gap-3 w-full">
          <div className="text-lg font-bold">{item.title}</div>
          <div>{item.description}</div>
          {isNotStudy ?? (
            <Progress className="w-full " value={item.progress * 100} />
          )}
        </div>
        <Image
          className="rounded-l-full"
          width={100}
          height={100}
          src={item.image}
          alt={""}
        ></Image>
      </div>
    );
  }
  //显示头部标题
  function titleDiv(title: string) {
    return <div className="text-3xl font-bold">{title}</div>;
  }
}
