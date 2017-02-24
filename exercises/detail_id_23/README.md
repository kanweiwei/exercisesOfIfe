# 自定义checkbox， radio样式

## 实现方式
1. 背景图
2. 伪元素

## 总结
1. 背景图
  优点
  + 兼容性好，不涉及css3的一些用法
  缺点
  + 冗余的标签
  + 受背景图的影响，无法调整大小
2. 伪元素
  优点
  + 结构清晰，没有冗余的标签
  + 方便调整大小
  缺点
  + 用到了一些css3的内容，兼容性不高。ie需要做相应的polyfill

## 参考资料
1. [MDN label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label): 了解html中label的基本知识
2. [MDN background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position): 了解背景图片定位相关知识
3. [MDN :checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked): 了解input的:checked伪类的基本知识以及应用场景
4. [MDN :before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before):了解input的:before伪元素的基本知识
5. [MDN :after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after):了解input的:after伪元素的基本知识
