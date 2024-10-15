import MaxWindthWrapper from "@/components/MaxWidathWrapper";
import { SceneThemeItem } from "@/model/theme-item";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { getSceneThemeList } from "@/api/scene-theme-api";
export default async function ScenePage() {
  //其他各主题列表
  const SceneThemeGroupList = await getSceneThemeList();

  //当前学习的场景主题列表
  const studySceneThemeList = SceneThemeGroupList[0].items;

  return (
    <MaxWindthWrapper>
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-full mx-auto">
        <div className="">
          {titleDiv("当前学习")}
          <div className="flex overflow-x-auto whitespace-nowrap">
            {studySceneThemeList.map((item) => sceneThemeItemFunction(item, true))}
          </div>
        </div>
        <div className="pt-10">
          {titleDiv("其他主题")}
          {SceneThemeGroupList.map((group) => (
            <div className="pt-5" key={group.id}>
              <div className="text-xl font-bold">{group.title}</div>
              <div className="flex max-w-screen overflow-x-auto whitespace-nowrap">
                {group.items.map((item) => sceneThemeItemFunction(item))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWindthWrapper>
  );

  //显示主题
  function sceneThemeItemFunction(item: SceneThemeItem, isStudy?: boolean) {
    return (
      <div
        className="flex shadow-md flex-none justify-between w-96 m-5 bg-themeItemBac rounded-lg items-center hover:bg-hoverThemeItemBac hover:text-white cursor-pointer"
        key={item.id}
      >
        <div className="p-5 flex flex-col gap-3 w-full">
          <div className="text-lg font-bold">{item.title}</div>
          <div>{item.description}</div>
          {isStudy ? (
            <Progress className="w-full " value={item.progress * 100} />
          ): (<div></div>)}
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
