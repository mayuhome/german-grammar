export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/study/index',
    'pages/exercise/index',
    'pages/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '德语学习',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#1AAD19',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './images/home.png',
        selectedIconPath: './images/home_selected.png'
      },
      {
        pagePath: 'pages/study/index',
        text: '学习',
        iconPath: './images/study.png',
        selectedIconPath: './images/study_selected.png'
      },
      {
        pagePath: 'pages/exercise/index',
        text: '练习',
        iconPath: './images/exercise.png',
        selectedIconPath: './images/exercise_selected.png'  
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: './images/study.png',
        selectedIconPath: './images/study_selected.png'
      }
    ]
  }
})
