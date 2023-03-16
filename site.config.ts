import { defineSiteConfig } from 'valaxy'
// _config.yun.yml
export default defineSiteConfig({
  author: {
    avatar: 'https://pic4.zhimg.com/80/v2-03e772dccaaca9b0657e26f96df58dd9_720w.webp',
    name: '王先生',
  },
  description: '直到我不爱你.',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/ricardowangyf?tab=repositories',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/6484697834',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=558925982',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/peng-yu-yan-44-15',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/474868654?spm_id_from=333.1007.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Ricardowang0721',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'E-Mail',
      link: 'mailto:wangyufei0909@gamil.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: false,
  },
})
