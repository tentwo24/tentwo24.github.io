var posts=["2024/07/12/uniapp-测试环境实现域名切换/","2024/06/03/关于VueRouter/","2024/06/03/webpack的基本用法/","2024/08/20/关于微信小程序码/","2024/06/03/关于pinia和vuex的简单应用/","2024/06/03/webpack的高级应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };