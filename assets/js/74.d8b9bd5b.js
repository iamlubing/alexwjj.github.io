(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{604:function(t,a,e){"use strict";e.r(a);var n=e(6),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",{attrs:{align:"center"}},[e("img",{attrs:{width:"500",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2aaff2ce26cb44f0999d60a3224df82b~tplv-k3u1fbpfcp-zoom-1.image"}})]),t._v(" "),e("blockquote",[e("p",[t._v("对很多中后台的业务来讲，打印场景还是很常见的。针对个人遇到的，以及现有的一些方案对比，总结一波😎（文末有PPT版本，需要留言），希望能帮助同样头疼的你。废话不多说，开讲。")])]),t._v(" "),e("h2",{attrs:{id:"一、浏览器打印"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、浏览器打印"}},[t._v("#")]),t._v(" 一、浏览器打印")]),t._v(" "),e("h3",{attrs:{id:"_1、优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、优缺点"}},[t._v("#")]),t._v(" 1、优缺点")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("window.print() 、document.execCommand('print’)")]),t._v(" 调用浏览器打印")]),t._v(" "),e("p",[t._v("不同浏览器的区别：在Safari和Chrome都会弹起打印预览的窗口，FireFox（老版本）和 IE 没有预览而是直接让你选择打印机")]),t._v(" "),e("p",[t._v("但是直接使用浏览器打印虽然省事，但是存在很多问题，"),e("code",[t._v("无法满足")]),t._v("我们的打印需求：")]),t._v(" "),e("ul",[e("li",[t._v("1、打印的是整个网页，不能打印"),e("code",[t._v("局部内容")]),t._v("；")]),t._v(" "),e("li",[t._v("2、打印不支持自定义"),e("code",[t._v("分页行为")]),t._v("，默认不支持"),e("code",[t._v("批量打印")]),t._v("；")]),t._v(" "),e("li",[t._v("3、打印的时候"),e("code",[t._v("样式有问题")]),t._v("，所见非所得；")]),t._v(" "),e("li",[t._v("4、打印可以准确识别的"),e("code",[t._v("样式单位")]),t._v("是绝对单位（如pt、mm、cm），对相对单位识别不同打印机可能会得到意想不到的结果；")])]),t._v(" "),e("h3",{attrs:{id:"_2、问题来了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、问题来了"}},[t._v("#")]),t._v(" 2、问题来了")]),t._v(" "),e("p",[t._v("如何实现局部打印？🤔")]),t._v(" "),e("h4",{attrs:{id:"_1-innerhtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-innerhtml"}},[t._v("#")]),t._v(" （1）innerHtml")]),t._v(" "),e("p",[t._v("简单粗暴，在你不需要考虑体验，项目里面用的也比较少时，可以试试看😆")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('function innerHtmlPrint(){\n    // 缓存页面内容\n    const bodyHtml = window.document.body.innerHTML;\n    // 获取要打印的dom\n    const printContentHtml = document.getElementById("print").innerHTML;\n    // 替换页面内容\n    window.document.body.innerHTML = printContentHtml;\n    // 全局打印\n    window.print();\n    // 还原页面内容\n    window.document.body.innerHTML = bodyHtml;\n    // 页面事件会丢失，需要刷新\n    window.location.reload();\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h4",{attrs:{id:"_2-iframe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-iframe"}},[t._v("#")]),t._v(" （2）iframe")]),t._v(" "),e("p",[t._v("稍微复杂点，需要将打印的内容添加到iframe里，然后打印整个iframe，需要注意：往iframe里写一些样式的时候，一些checkbox，radio要特殊处理。")]),t._v(" "),e("blockquote",[e("p",[t._v("这里我把项目中用到的iframe局部打印抽出来了，各位可以直接npm使用 "),e("a",{attrs:{href:"https://github.com/alexwjj/vue-iframe-print",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-iframe-print"),e("OutboundLink")],1),t._v("😎😎😎 "),e("a",{attrs:{href:"https://alexwjj.github.io/vue-iframe-print/",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件使用demo"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/699eb29434a748a2aae1fc6cbb293359~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n如果你是vue项目，只需要安装后，在需要打印的dom上加上 v-print即可，主要实现原理如下（样式部分省略）：")]),t._v(" "),e("ul",[e("li",[t._v("创建iframe")]),t._v(" "),e("li",[t._v("构建iframe docTyp、 head信息")]),t._v(" "),e("li",[t._v("获取局部dom，插入iframe")]),t._v(" "),e("li",[t._v("window.print()")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('   function onIframePrint(printId) {\n      const printContentHtml = document.getElementById("printId").innerHTML;\n      const iframe = document.createElement("iframe");\n      iframe.setAttribute(\n        "style",\n        "position:absolute;width:0px;height:0px;left:-500px;top:-500px;"\n      );\n      document.body.appendChild(iframe);\n      iframe.contentDocument.write(printContentHtml);\n      iframe.contentDocument.close();\n      iframe.contentWindow.print();\n      document.body.removeChild(iframe);\n    },\n\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h4",{attrs:{id:"_3-canvas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-canvas"}},[t._v("#")]),t._v(" （3）canvas")]),t._v(" "),e("p",[t._v("将打印内容转为图片，一倍清晰度模糊，可以用2倍canvas。缺点：pdf需要下载，有的产品需求需要一键打印。html2canvas不支持ie，兼容性也是个问题")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function print() {\n  var target = document.getElementsByClassName(\"right-aside\")[0];\n  target.style.background = \"#FFFFFF\";\n\n  html2canvas(target, {\n    onrendered:function(canvas) {\n        var contentWidth = canvas.width;\n        var contentHeight = canvas.height;\n\n    //一页pdf显示html页面生成的canvas高度;\n    var pageHeight = contentWidth / 592.28 * 841.89;\n    //未生成pdf的html页面高度\n    var leftHeight = contentHeight;\n    //页面偏移\n    var position = 0;\n    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高\n    var imgWidth = 595.28;\n    var imgHeight = 592.28/contentWidth * contentHeight;\n\n    var pageData = canvas.toDataURL('image/jpeg', 1.0);\n\n    var pdf = new jsPDF('', 'pt', 'a4');\n\n    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)\n    //当内容未超过pdf一页显示的范围，无需分页\n    if (leftHeight < pageHeight) {\n    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );\n    } else {\n        while(leftHeight > 0) {\n            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)\n            leftHeight -= pageHeight;\n            position -= 841.89;\n            //避免添加空白页\n            if(leftHeight > 0) {\n              pdf.addPage();\n            }\n        }\n    }\n\n    pdf.save(\"content.pdf\");\n}\n  })\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br")])]),e("blockquote",[e("p",[t._v("pdf转成图片，会失真，打印一定程度上会模糊，如果用的是针式打印机，打出来的东西基本不能看。👿\n也是想了很久找的的解决办法（完美还原）：😬😬😬")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('  <object\n    type="application/pdf"\n    data="./滴滴出行行程报销单A.pdf"\n    width="100%"\n    height="700"\n  ></object>\n  \n  <embed \n     type="application/pdf" \n     src="./滴滴出行行程报销单A.pdf" \n     width="100%" \n     height="700px"\n  />\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cfc29a3f12e478cbb4c7dec90c6ff38~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"二、插件打印"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、插件打印"}},[t._v("#")]),t._v(" 二、插件打印")]),t._v(" "),e("p",[t._v("一般是通过项目里面嵌入脚本，或者安装本地插件来完成，优缺点也都很明显")]),t._v(" "),e("h3",{attrs:{id:"_1、优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、优点"}},[t._v("#")]),t._v(" 1、优点")]),t._v(" "),e("ul",[e("li",[t._v("功能强大，可以调用到系统底层的东西，比如获取系统打印机列表，设置默认打印机等")]),t._v(" "),e("li",[t._v("可以实现无预览打印")])]),t._v(" "),e("h3",{attrs:{id:"_2、缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、缺点"}},[t._v("#")]),t._v(" 2、缺点")]),t._v(" "),e("ul",[e("li",[t._v("需要安装客户端，大多收费")]),t._v(" "),e("li",[t._v("第三方插件，无技术支持，出现问题难以解决（版本问题，chrome84升级导致的证书问题）")]),t._v(" "),e("li",[t._v("本地插件的方式基本只有window系统版本")])]),t._v(" "),e("p",[t._v("我们项目目前在使用的插件是"),e("code",[t._v("C-lodop")]),t._v("，收费，现在用的"),e("strong",[t._v("注册码")]),t._v("也不知道是"),e("strong",[t._v("谁")]),t._v("在"),e("strong",[t._v("那")]),t._v("搞得 🌚。")]),t._v(" "),e("p",[t._v("如果失效，意味着我们项目的所有打印基本废了。目前来看，好像是一次购买永久有效的，"),e("strong",[t._v("先不慌")]),t._v(" 🌚")]),t._v(" "),e("h3",{attrs:{id:"_3、一些插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、一些插件"}},[t._v("#")]),t._v(" 3、一些插件")]),t._v(" "),e("p",[t._v("这里列出几个插，仅供参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.c-lodop.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("C-lodop"),e("OutboundLink")],1),t._v("：功能强大，兼容性不是很好，你想在保证清晰度的情况下，没办法写css3，画个圆角边框都不行🤧🤧🤧，依赖于系统IE版本，IE9以下，打出来的东西乱七八糟。。。建议使用之前，仔细研究下官网给的demo，这个插件的原理是，在页面嵌入一段js，和本地客户端通过webscoket进行通信")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.httpprinter.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HttpPrinter"),e("OutboundLink")],1),t._v("：和C-lodop差不多，可以去了解下")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://hiprint.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HiPrint"),e("OutboundLink")],1),t._v("：不需要安装客户端，但是没有npm包，依赖于jQuery")])]),t._v(" "),e("h3",{attrs:{id:"_4、打个嘴炮-😈😈😈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、打个嘴炮-😈😈😈"}},[t._v("#")]),t._v(" 4、打个嘴炮 😈😈😈")]),t._v(" "),e("p",[t._v("其实，大家要是有时间，可以自己用nw.js和electron.js自己撸一个，这位大佬自己就搞了一个："),e("a",{attrs:{href:"https://juejin.im/post/6844903778827649032",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何通过Nw.js纯前端实现调用热敏打印机打印小票？"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"三、打印样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、打印样式"}},[t._v("#")]),t._v(" 三、打印样式")]),t._v(" "),e("h3",{attrs:{id:"_1、先看下基本的页面模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、先看下基本的页面模型"}},[t._v("#")]),t._v(" 1、先看下基本的页面模型")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09c968a4098141a5a6e31db165667971~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2、-media-print"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、-media-print"}},[t._v("#")]),t._v(" 2、@media print")]),t._v(" "),e("p",[e("code",[t._v("可以控制打印时的样式，仅在打印生效，可以实现一些特殊需求。")]),t._v(" "),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fbe1b531f734ebaafc07133cc9e6e00~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_3、-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、-page"}},[t._v("#")]),t._v(" 3、@page")]),t._v(" "),e("p",[e("code",[t._v("设置页面大小（A3，A4，A5）、边距（margin）、方向（ auto、landscape、portrait）等。")]),t._v(" "),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/830b907d14694d419ba79c0ab0147844~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v(" "),e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0150e4841c2f4d059b8cf9abec53b4e4~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_4、page-break-xxx-划重点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、page-break-xxx-划重点"}},[t._v("#")]),t._v(" 4、page-break-xxx（划重点）")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8bc91383478441b9904f5b4683ba8acb~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("page-break-before( after ) 用于设置元素前( 后 )的分页行为,可取值:\n\n   * auto默认值。如果必要则在元素前插入分页符。\n   * always在元素前插入分页符。\n   * avoid避免在元素前插入分页符。\n   * left在元素之前足够的分页符，一直到一张空白的左页为止。\n   * right在元素之前足够的分页符，一直到一张空白的右页为止。\n   * inherit规定应该从父元素继承 page-break-before 属性的设置。\n\npage-break-inside设置元素内部的分页行为。取值如下:\n\n   * auto默认。如果必要则在元素内部插入分页符。\n   * avoid避免在元素内部插入分页符。\n   * inherit规定应该从父元素继承 page-break-inside 属性的设置。\n \norphans设置当元素内部发生分页时必须在页面底部保留的最少行数。\n\nwidows设置当元素内部发生分页时必须在页面顶部保留的最少行数。\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])]),e("h2",{attrs:{id:"四、云打印-node-ipp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、云打印-node-ipp"}},[t._v("#")]),t._v(" 四、云打印（node + ipp）")]),t._v(" "),e("h3",{attrs:{id:"_1、先科普下打印机类型-🤔🤔🤔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、先科普下打印机类型-🤔🤔🤔"}},[t._v("#")]),t._v(" 1、先科普下打印机类型 🤔🤔🤔")]),t._v(" "),e("h4",{attrs:{id:"_1-激光打印机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-激光打印机"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（1）激光打印机")])]),t._v(" "),e("p",[t._v("办公室常见的打印机，一般用打印普通文档材料。利用激光加热将墨粉固定在纸上，从而实现打印功能。平常的耗材是墨粉，使用的纸张是普通纸，一般是打印黑白色。打印速度快 后期耗材便宜\n"),e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53fbb27706954d09b24c2f4041c7b9b1~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"_2-针式打印机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-针式打印机"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（2）针式打印机")])]),t._v(" "),e("p",[t._v("一般用于打印票据，或者需要按压打印的纸张。将色带上的墨水压在纸上，从而实现打印功能。平常的耗材是色带，使用的纸张是多联纸，比起其他两个分类针式打印机可以说是元老级别的，它是是市场上较早出现的种类。主要有9针、24针、72针、144针等多种针式打印机。其特点比较鲜明结构简单、技术成熟、性能价格比好、消耗费用低。\n"),e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3444427bf38f418a8dd2bae70c3fdd2f~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"_3-热敏打印机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-热敏打印机"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（3）热敏打印机")])]),t._v(" "),e("p",[t._v("使用专用纸张,靠高温显示需要打印的信息.主要用于打印小票.\n"),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b6911600862494bbbe084af53c3aab2~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"_4-喷墨打印机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-喷墨打印机"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（4）喷墨打印机")])]),t._v(" "),e("p",[t._v("一般用于打印彩色材料。将墨水喷射在纸上，从而实现打印功能。平常的耗材是墨水，使用的纸张是普通纸，一般可以打印彩色。（另外也有一个耗材是墨盒，有些机型不必频繁更换）\n"),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24f08ca94c244fffbefc96b04fefd96d~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2、node-ipp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、node-ipp"}},[t._v("#")]),t._v(" 2、node + ipp")]),t._v(" "),e("p",[t._v("先了解下两个前缀概念：🤔🤔🤔")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("互联网打印协议")]),t._v(" （IPP；Internet Printing Protocol）是一个在互联网上打印的标准网络协议，它容许用户可以透过互联网作遥距打印及管理打印工作等工作。用户可以透过相关界面来控制打印品所使用的纸张种类、分辨率等各种参数。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("无头浏览器")]),t._v(" 指的是我们使用脚本来执行以上过程的浏览器，能模拟真实的浏览器使用场景。")])])]),t._v(" "),e("blockquote",[e("p",[t._v("不了解Puppeteer的可以看看这篇文章: "),e("a",{attrs:{href:"https://juejin.im/post/6844903504276881422",target:"_blank",rel:"noopener noreferrer"}},[t._v("无头浏览器 Puppeteer 初探 - 蚂蚁金服"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_3、云打印流程图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、云打印流程图"}},[t._v("#")]),t._v(" 3、云打印流程图")]),t._v(" "),e("p",[t._v("目前我们组的云打印已经落地，但是存在诸多限制，使用的还不多，感兴趣的可以参考另外一篇文章 "),e("a",{attrs:{href:"https://juejin.cn/post/6907500437134376974",target:"_blank",rel:"noopener noreferrer"}},[t._v("Egg + Puppeteer 实现Html转PDF(已开源)"),e("OutboundLink")],1),t._v(" "),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00a7035e0ea8479fabdcda93b0cfc7f3~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"五、一些思考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、一些思考"}},[t._v("#")]),t._v(" 五、一些思考")]),t._v(" "),e("p",[t._v("1、无特殊要求的还是建议使用window.print()   局部打印可以使用我写的插件 "),e("a",{attrs:{href:"https://github.com/alexwjj/vue-iframe-print",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-iframe-print"),e("OutboundLink")],1),t._v(" https://github.com/alexwjj/vue-iframe-print  😎😎😎")]),t._v(" "),e("p",[t._v("2、看业务需求，如果是网络打印机，需要无痕打印，可以采用node+ipp的云打印，实现起来也不难。🕵")]),t._v(" "),e("p",[t._v("3、后端给的源文件，要求不高可以用pdfjs转canvas，要求比较高用"),e("code",[t._v("<object>、<embed>")]),t._v("标签加载后端给的文件流，完美还原源文件清晰度")]),t._v(" "),e("p",[t._v("4、"),e("a",{attrs:{href:"https://github.com/coolwanglu/pdf2htmlEX",target:"_blank",rel:"noopener noreferrer"}},[t._v("pdf2htmlEX插件"),e("OutboundLink")],1),t._v("，pdf转html，4年前最后一次维护，可以尝试")]),t._v(" "),e("p",[t._v("也查了很多资料，目前web打印这块感觉还是"),e("code",[t._v("window.print")]),t._v("比较实用，也没找到什么开源项目。哪位大佬有没有的，推荐一下的")]),t._v(" "),e("h2",{attrs:{id:"六、参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、参考资料"}},[t._v("#")]),t._v(" 六、参考资料：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/6844903893038546957",target:"_blank",rel:"noopener noreferrer"}},[t._v("由打印机TCP协议引起的网络通讯协议深入研究：从TCP到万能打印、云打印"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/6844903504276881422",target:"_blank",rel:"noopener noreferrer"}},[t._v("无头浏览器 Puppeteer 初探"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/6844904164938498055",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器打印方案调研"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/83068956",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端一键打印解决方案"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.zhihu.com/question/20249686",target:"_blank",rel:"noopener noreferrer"}},[t._v("PDF 能转成 HTML 吗？如何转换？"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"七、ppt-如有需要-可发邮箱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、ppt-如有需要-可发邮箱"}},[t._v("#")]),t._v(" 七、PPT，如有需要，可发邮箱")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/82889f7336c94a42b7e388a3e9ca6d42~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v(" "),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c917e05af46e46da93451eb3614a72a5~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"八、往期回顾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、往期回顾"}},[t._v("#")]),t._v(" 八、往期回顾")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.cn/editor/drafts/6979800157164404767",target:"_blank",rel:"noopener noreferrer"}},[t._v("🔥一篇够用的TypeScript总结"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6960556335092269063",target:"_blank",rel:"noopener noreferrer"}},[t._v("一名 vueCoder 总结的 React 基础"),e("OutboundLink")],1),t._v(" 180+ 👍🏿")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6953482028188860424",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 转 React不完全指北"),e("OutboundLink")],1),t._v(" 600+ 👍🏿")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6942988170208215076",target:"_blank",rel:"noopener noreferrer"}},[t._v("跳槽人速来，面经&资源分享"),e("OutboundLink")],1),t._v(" 1100+ 👍🏿")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6940058373534515237",target:"_blank",rel:"noopener noreferrer"}},[t._v("一年半前端人的求职路"),e("OutboundLink")],1),t._v(" 300+ 👍🏿")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6921911974611664903",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue2.x高阶问题，你能答多少"),e("OutboundLink")],1),t._v(" 400+ 👍🏿")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6921911974611664903",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊一聊前端性能优化"),e("OutboundLink")],1),t._v(" 1300+ 👍🏿")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6907500437134376974",target:"_blank",rel:"noopener noreferrer"}},[t._v("Egg + Puppeteer 实现Html转PDF(已开源)"),e("OutboundLink")],1),t._v(" 50+ 👍🏿")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6865957891988258823",target:"_blank",rel:"noopener noreferrer"}},[t._v("web打印，一篇搞定"),e("OutboundLink")],1),t._v(" 15+ 👍🏿")])])])}),[],!1,null,null,null);a.default=s.exports}}]);