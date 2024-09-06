module.exports = {
    title : 'DreamCraft Docs',
    description : 'DreamCraft Docs',
    evergreen : true,
    base : '/',
    locales: {
        '/':{
            lang : 'zh-CN',
            title : 'DreamCraft 用户手册',
        },
        '/en/':{
            lang : 'en-US',
            title : 'DreamCraft Docs'
        }
    },
    themeConfig :{
        repo : 'DreamCraft-Tech/DreamCraft-Docs',
        docsBranch : 'master',
        docsDir : 'src',
        editLinks : true,
        locales :{
            '/':{
                selectText : '选择语言',
                label : '简体中文',
                docsDir : 'src',
                editLinkText : '在 Github 上提交更改',
                lastUpdated : '最后更新',
                sidebar:{
                    'mirrors': [
                        '/mirrors/introduction',
                    ],
                    'launcher': [
                        '/launcher/introduction',
                    ],
                    '/': [
                        '/introduction',
                    ]
                },
                nav:[
                    {
                        text:'Services',
                        ariaLabel:'Services Menu',
                        items:[
                            { text:'Web Service',link:'/'},
                            { text:'Launcher',link:'/launcher/'},
                            { text:'Mirrors',link:'/mirrors/'},
                            { text:'Heritane-Project',link:'/heritane-project/'},
                        ]
                    }
                ]
            },
            '/en/':{
                selectText : 'Language',
                label : 'English',
                docsDir : 'src/en',
                editLinkText : 'Commit Changes on Github',
                lastUpdated : 'Last updated on'
            }
        }
    }
  }