var posts=["2024/06/03/webpack的基本用法/","2024/06/03/webpack的高级应用/","2024/06/03/关于VueRouter/","2024/06/03/关于pinia和vuex的简单应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };