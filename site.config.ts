export namespace YunTheme {
  export type Config = ThemeConfig
  export type Sidebar = any

  export type Banner = {
    enable: boolean
    /**
     * 标题
     */
    title: string

    /**
     * 首页下方的动态云
     * If you want change color of cloud, please change css var `--yun-c-cloud`
     */
    cloud?: {
      enable: boolean
    }
  }
}

/**
 * Theme Config
 */
export interface ThemeConfig {
  /**
   * toc title
   * @default 'On this page'
   */
  outlineTitle: string

  colors: {
    /**
     * primary color
     * @default '#0078E7'
     */
    primary: string
  }

  /**
   * 首页标语
   */
  banner: YunTheme.Banner

  bg_image: {
    enable: true
    url: `https://s1.ax1x.com/2023/01/28/pSalauD.jpg`
    dark?: `https://s1.ax1x.com/2023/01/28/pSalauD.jpg`
    opacity?: 0.8
  }

  /**
   * say something
   * https://say.elpsy.cn
   */
  say: {
    enable: boolean
    api: string
    hitokoto: {
      enable: boolean
      api: string
    }
  }

  /**
   * 公告
   */
  notice: {
    enable: boolean
    content: string
  }

  pages: {
    name: string
    url: string
    icon: string
    color: string
  }[]

  sidebar: YunTheme.Sidebar

  /**
   * footer
   */
  footer: Partial<{
    /**
     * 建站于
     */
    since: number

    /**
     * Icon between year and copyright info.
     */
    icon: {
      /**
       * icon name, i-xxx
       */
      enable: boolean
      name: string
      animated: boolean
      color: string
      url: string
      title: string
    }

    /**
     * Powered by valaxy & valaxy-theme-${name}, default is yun
     */
    powered: boolean

    /**
     * Chinese Users | 中国用户
     * 备案 ICP
     * 国内用户需要在网站页脚展示备案 ICP 号
     * https://beian.miit.gov.cn/
     */
    beian: {
      enable: boolean
      /**
       * 苏ICP备xxxxxxxx号
       */
      icp: string
    }
  }>

  /**
   * post card types
   */
  types: Record<string, {
    color: string
    icon: string
  }>

  /**
   * 菜单栏
   */
  menu: {
    custom: {
      title: string
      url: string
      icon: string
    }
  }
}

export type UserThemeConfig = Partial<ThemeConfig>