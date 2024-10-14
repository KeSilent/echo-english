// 场景主题列表项
export interface SceneThemeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  //进度
  progress: number;
}

// 场景主题分组
export interface SceneThemeGrouproup {
  id: string;
  title: string;
  items: SceneThemeItem[];
}
