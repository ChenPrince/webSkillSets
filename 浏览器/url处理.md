获取Url的代码如下：window.location.href;

方法一：原生js（假设已经获得了Url地址）
var url = 'https://gitbook.cn/gitchat/geekbooks?tag=JavaScript&name=pwwu&age=24';
        var temp1 = url.split('?');
        var pram = temp1[1];
        var keyValue = pram.split('&');
        var obj = {};
        for (var i = 0; i<keyValue.length; i++){
            var item = keyValue[i].split('=');
            var key = item[0];
            var value = item[1];
            obj[key] = value;
        }
        console.log(url);
        console.log(temp1);    //  ['https://gitbook.cn/gitchat/geekbooks','tag=JavaScript&name=pwwu&age=24']
        console.log(pram);     //  tag=JavaScript&name=pwwu&age=24
        console.log(keyValue); //  ['tag=JavaScript','name=pwwu','age=24']
        console.log(obj);      //  {tag:'JavaScript',name:'pwwu',age:'24'}
总结：主要思路就是将Url用split()分割成不同的块，返回值为一个数组，一直分割到为 [‘tag=JavaScript’,‘name=pwwu’,‘age=24’]为止，
然后将该数组中的每一项以键值对的形式传进一个空对象obj（这里需要遍历数组），最后利用obj.name“点”的方式获取相应参数。

方法二 URLSearchParams()函数（记不住函数名的可以直接在浏览器里面打印）
 
     var url2 = 'https://gitbook.cn/gitchat/geekbooks?tag=%E5%A4%A7%E6%95%B0%E6%8D%AE&name=gy&age=22';
        var temp2 = url2.split('?')[1];
        var pram2 = new URLSearchParams('?'+temp2);
        console.log(pram2.get('tag')); // 大数据
        console.log(pram2.get('name'));// gy
        console.log(pram2.get('age')); // 22
        console.log(temp2);   //tag=%E5%A4%A7%E6%95%B0%E6%8D%AE&name=gy&age=22
 
方法三 使用正则表达式
//获取url中的参数方法
        function getUrlParam(name) {
            //构造一个含有目标参数的正则表达式对象
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            //匹配目标参数
            var r = window.location.search.substr(1).match(reg);
            //返回参数
            if (r != null) {
                return unescape(r[2]);
            } else {
                return null;
            }
        }
        var ABC = getUrlParam();
        console.log(ABC);
 
 

本次暂时介绍以上3种，后续会不断补充。