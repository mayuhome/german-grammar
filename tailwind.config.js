/** @type {import('tailwindcss').Config} */
module.exports = {
  // 这里给出了一份 taro 通用示例，具体要根据你自己项目的目录结构进行配置
  // 比如你使用 vue3 项目，你就需要把 vue 这个格式也包括进来
  // 不在 content glob 表达式中包括的文件，在里面编写 tailwindcss class，是不会生成对应的 css 工具类的
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#4A90E2',
      secondary: '#67C23A',
      danger: '#FF3333',
      warning: '#FFCC00',
      info: '#3399FF',
      success: '#33CC33',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#F5F5F5',
    },
    borderRadius: {
      'none': '0px',
      'sm': '2px',
      DEFAULT: '4px',
      'md': '8px',
      'lg': '12px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '24px',
      'full': '9999px',
      'button': '4px'
    },
  },
  // 其他配置项 ...
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发多端，你应该使用 process.env.TARO_ENV 环境变量来控制它
    preflight: false,
  },
}