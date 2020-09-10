export function test() {
    console.log('好好学习');
}
/**
 *  功能:去掉字符串前后空格
 * @param {} str 
 */
export function trim(str) {
    // 如果不是字符串传递是什么就返回什么
    if (typeof str !== 'string') {
        return str;
    }
    // 优先使用内置的trim方法
    if (str.trim) {
        return str.trim();
    }
    // 把首尾空白字符串替换为空,染回返回
    return str.replace(/^\s+|\s+$/g, '');  //  /^\s*|\s*$/g
}


/**
 * 
 * @param {*} obj DOM节点
 * @param {*} attr 属性名
 */
export function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        // ie9 获取  谷歌(因为ie9有该属性)
        return getComputedStyle(obj, null)[attr];
    } else {
        // ie8(含)以下
        return obj.currentStyle[attr];
    }
}

/**
 * 
 * @param {*} ele DOM节点
 * @param {*} attr 对象
 * @param {*} fn 回调函数
 */
export function animate(ele, attr, fn) {
    //先清定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var flag = true;
        // 遍历attr
        for (var k in attr) {
            // k -> 属性
            // attr[k] -> target
            // 四部
            var leader = parseInt(getStyle(ele, k)) || 0;
            //  求出剩余距离
            // var distance = attr[k] - leader;
            //1.获取步长
            var step = (attr[k] - leader) / 10;
            //2.二次加工步长
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            //3.赋值
            ele.style[k] = leader + "px";
            console.log(1);
            // 或者如下进行判断更加简单(不考虑目标值是小数,eg:400.5)
            // 而且本身 step就进行取整了,小数值目标也达不到
            //  4.判断条件:两个值不相等,就说明该属性还没达到目标值,
            // 那么,此时就不能清除定时器
            if (attr[k] !== leader) {
                flag = false;
            }
        }
        // 5.清除定时器
        if (flag) {
            clearInterval(ele.timer);
            // 需要判断是否传递了fn
            if (fn) {
                fn();
            }
        }
    }, 25);
}