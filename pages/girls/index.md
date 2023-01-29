---
title: 我的小伙伴们
keywords: 链接
description: 云游的小伙伴们
links:
  - url: https://www.yunyoujun.cn
    avatar: https://www.yunyoujun.cn/images/avatar.jpg
    name: 云游君
    blog: 云游君的小站
    desc: 希望能成为一个有趣的人。
    email: me@yunyoujun.cn
    color: "#0078e7"
  - url: https://valaxy.site
    avatar: https://valaxy.site/favicon.svg
    name: Valaxy Org
    blog: Valaxy Site
    desc: 下一代静态博客框架
    email: i@valaxy.site
    color: "#6058d9"
    - name: 宵宫
    avatar: https://s3.bmp.ovh/imgs/2022/09/24/04f91746c367b36a.jpg
    from: 原神
  - name: 琴·古恩希尔德
    avatar: https://s3.bmp.ovh/imgs/2022/09/24/029f1356b3f5fe97.jpg
    from: 原神
  - name: 刻晴
    avatar: https://s3.bmp.ovh/imgs/2022/09/24/04b1c13c5d077b0b.jpg
    from: 原神
# 也可以是一个 JSON 链接
# links: https://friends.yunyoujun.cn/links.json
random: true
---

<YunLinks :links="frontmatter.links" :random="frontmatter.random" />