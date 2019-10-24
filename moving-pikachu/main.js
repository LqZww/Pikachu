!function () {
    var duration = 60

    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 60
                break
            case 'fast':
                duration = 20
                break
            case 'ray':
                duration = 1
                break
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
/*
 * Hello，面试官您好，请看我的表演😊
 /

/* 
 * 我先准备一个背景了哟😁
 */
.preview {
    background: #fee433;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
    
.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
}

/*
 * 现在就开始画皮卡丘的鼻子咯😂
 */
.nose {
    width: 0;
    height: 0;
    border: 11px solid;
    border-color: black transparent transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    /*或者使用transform:translateX(-50%); */
    margin-left: -11px;
}

/*
 * 该画皮卡丘的眼睛了😍
 */ 
.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
}

/*
 * 画眼珠子啦👀
 */
.eye:before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}

/*
 * 画左眼咯😯
 */
.eye.left {
    right: 50%;
    margin-right: 90px;
}

/*
 * 画右眼咯😖
 */
.eye.right {
    left: 50%;
    margin-left: 90px;
}

/*
 * 终于可以开始画红彤彤的脸了😈
 */ 
.face {
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

/*
 * 该摆放下脸的位置呢，不然好丑呢🙄
 */
.face.left {
    right: 50%;
    margin-right: 116px;
}
    
.face.right {
    left: 50%;
    margin-left: 116px;
}

/*
 * 画一下上嘴唇😝
 */
.upperLip {
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #fde348;
}
    
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
    
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}

/*
 * 再画一下下嘴唇😜
 */ 
.lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height: 110px;
    overflow: hidden;
}
    
.lowerLip {
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

/*
 * 最后该画舌头了👅
 */
.lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
}

/*
 * 💖感谢您的观看💖
 */
`
    writeCode('', code)
}.call()