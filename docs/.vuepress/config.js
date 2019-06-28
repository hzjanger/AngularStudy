module.exports = {
    base: '/AngularStudy/',
    title: 'Angular学习',
    description: 'Angular学习笔记',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    markdown: {
        //显示行号
        // lineNumbers: true
    },
    themeConfig: {
        // 将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
        //假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'hzjanger/AngularStudy',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        //每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '上次更新',
        sidebar: [
            {
                title: '准备',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: '组件与模板',
                collapsable: false,
                children: [
                    ['组件与模板/', 'introduction'],
                    '组件与模板/显示数据',
                    '组件与模板/pipe',
                    '组件与模板/directive'
                ]

            },
            {
                title: 'Rxjs',
                collapsable: false,
                children: [
                    ['Rxjs学习/', 'introduction'],
                    'Rxjs学习/入门基础',
                    'Rxjs学习/创建数据流'
                ]
            },
            {
                title: '表单',
                collapsable: false,
                children: [
                    '表单/文件上传',
                    '表单/文件下载',
                    '表单/响应式表单'
                ]
            },
            {
                title: 'HttpClient',
                collapsable: false,
                children: [
                    ['HttpClient/', '准备'],
                    'HttpClient/发送post请求'
                ]
            },
            {
                title: '模块',
                collapsable: false,
                children: [
                    ['模块/', 'introduction'],
                    '模块/惰性加载特性模块'
                ]
            },
            {
                title: '第三方插件',
                collapsable: false,
                children: [
                    ['第三方插件/', 'introduction'],
                    '第三方插件/bootstrap',
                    '第三方插件/腾讯防水墙插件的使用',
                    '第三方插件/angular7使用d3'
                ]
            },
            {
                title: '问题',
                collapsable: false,
                children: [
                    ['问题/', 'introduction'],
                    '问题/项目不更新问题'
                ]
            }
        ]
    }
};
