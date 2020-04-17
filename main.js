
        //1.初始化数据
        var keys= {
            '0':{'0':'q','1':'w','2':'e','3':'r','4':'t','5':'y','6':'u','7':'i','8':'o','9':'p','length':10},
            '1':{'0':'a','1':'s','2':'d','3':'f','4':'g','5':'h','6':'j','7':'k','8':'l','length':9},
            '2':{'0':'z','1':'x','2':'c','3':'v','4':'b','5':'n','6':'m','length':7},
            'length':3
        }
        var hash= {

            'a':'alibaba.com',
            'b':'bilibili.com',
            'q': 'qq.com',
            'w': 'weibo.com',
            'e': 'ele.me',
            'r': 'renren.com',
            't': 'twitter.com',
            'g':'github.com'

        }
        var hashInLocalStorage =getFromLocalStorage('zzz');

        if (hashInLocalStorage){
            hash=hashInLocalStorage;
        }
        function getFromLocalStorage(name){
        return JSON.parse(localStorage.getItem(name)|| 'null');
        }
        function tag(tagName){
            
            return document.createElement(tagName);
        }
        //2.生成键盘
        //遍历keys，生成kbd标签
        var index=0;
        while (index<keys['length']){
            var div= tag('div');
            div.className='row';
            main.appendChild(div);
            var row = keys[index];
            var index2=0;
            while (index2<row['length']){
                var kbd=tag('kbd');
                var span=tag('span');
                span.textContent=row[index2];
                span.className='text';
                kbd.className='key';
                var button=tag('button');
                button.textContent= 'E';
                button.id=row[index2];//给每个键加上id
                var img=tag('img');
                if (hash[row[index2]]){
                    img.src=hash[row[index2]]+'/favicon.ico';
                }else{
                    img.src='https://i.loli.net/2017/11/10/5a05afbc5e183.png';
                }
                img.onerror=function(xxx){
                    xxx.target.src='https://i.loli.net/2017/11/10/5a05afbc5e183.png';
                }
                // 对报错的处理
                button.onclick = function(clickSomething){
                    var button2= clickSomething['target'];
                    var img2=button2.previousSibling;
                    var key=button2['id'];
                    var x = prompt('编辑你的网址');
                    hash[key]=x;
                    img2.src ='http://'+x+'/favicon.ico';
                    img2.onerror=function(xxx){
                    xxx.target.src='https://i.loli.net/2017/11/10/5a05afbc5e183.png';
                }
                    localStorage.setItem('zzz',JSON.stringify(hash))
                }
                kbd.appendChild(span);
                kbd.appendChild(img);
                div.appendChild(kbd);
                kbd.appendChild(button);
                index2=index2+1;
            }
            index=index+1;
        }//while循环要点：1.初始声明；2.判断语句真假；3.初始声明是否加/减一
        //3.监听键盘
        document.onkeypress =function(pressSomething){
            var key = pressSomething['key'];
            var website = hash[key];
            console.log(website);
            window.open('http://'+website,'_blank');
        }
