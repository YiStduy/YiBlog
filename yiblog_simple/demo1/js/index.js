$(function(){


    var app = new Vue({
        el: "#app",
        data: {
            message: 'Hello Vue !',
            isShow: false,
            age:18,
            number:0,
            booklist:['vue 入门到精通','vue入门到放弃','vue入门到了解']
        }
    })

    hljs.initHighlightingOnLoad();
})

