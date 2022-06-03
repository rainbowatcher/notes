import { withBase } from '@vuepress/client'
import { useSiteData } from '@vuepress/client';
import { usePageData } from '@vuepress/client';
import { defineClientConfig } from '@vuepress/client'
import { fs } from "@vuepress/utils";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // router.getRoutes().forEach(route => {
    //   console.log("route.path:", route.path)
    // })
    // app.config.globalProperties.$theme.navbar = [{
    //   text: 'Home',
    //   link: '/'
    // },{
    //   text: 'About',
    //   link: '/about/'
    // },{
    //   text: 'Computer',
    //   children: [
    //     {
    //       text: 'Linux',
    //       link: '/system/linux/'
    //     }
    //   ]
    // }]
    // console.log(app.config.globalProperties.$theme)
    // console.log(router.getRoutes())
  },
  setup() {
    // console.log(usePageData())
    // console.log();
    // console.log("setup")
  },
  rootComponents: [],

})