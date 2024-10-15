import { SceneThemeGrouproupModel, SceneThemeItemModel } from "@/model/theme-item-model";

// 获取主题列表
export async function getSceneThemeList() {
  const studySceneThemeList: SceneThemeItemModel[] = [
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

  const SceneThemeGroupList: SceneThemeGrouproupModel[] = [
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
  return SceneThemeGroupList;
}
