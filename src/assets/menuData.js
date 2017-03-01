export default [
    {
        "id": 0,
        "name": "首页",
        "icon": "fa fa-home",
        "router": "home",
        "children": []
    },
    {
        "id": 1,
        "name": "登录",
        "icon": "fa fa-home",
        "router": "login",
        "children": []
    },
    {
        "id": 2,
        "name": "导航 一",
        "icon": "fa fa-home",
        "children": [
            {
                "id": 3,
                "name": "导航 1",
                "icon": "fa fa-home",
                "children": [
                    {
                        "id": 6,
                        "name": "导航 1-1",
                        "icon": "fa fa-home",
                        // "router": "home",
                        "children": []
                    },
                    {
                        "id": 7,
                        "name": "导航 1-2",
                        "icon": "fa fa-home",
                        // "router": "home",
                        "children": [
                            {
                                "id": 8,
                                "name": "导航 1-2-1",
                                "icon": "fa fa-home",
                                // "router": "home",
                                "children": [
                                    {
                                        "id": 9,
                                        "name": "导航 1-2-1-1",
                                        "icon": "fa fa-home",
                                        // "router": "home",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 4,
                "name": "导航 2",
                "icon": "fa fa-home",
                "router": "increse",
                "children": []
            },
            {
                "id": 5,
                "name": "导航 3",
                "icon": "fa fa-home",
                // "router": "home",
                "children": []
            }
        ]
    }
]