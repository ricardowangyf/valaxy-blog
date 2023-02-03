import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
// _config.yml 配置文件中的内容，迁移至 valaxy.config.ts 文件中。
// add icons what you will need

const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  themeConfig: {
    banner: {
      enable: true,
      title: '王先生',
      cloud: {
        enable: true,
      },
    },

    pages: [
      { 
        name: '喜欢的女孩子', 
        url: '/girls/', 
        icon: 'i-ri-women-line', 
        color: 'hotpink', 
      }, 
    ],

    footer: {
      since: 2016,
    },
  },

  unocss: { safelist },
})
