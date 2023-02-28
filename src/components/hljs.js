import Hljs from 'highlight.js'
import CopyButtonPlugin from 'highlightjs-copy'

let Highlight = {}
Highlight.install = function (Vue) {
    Vue.directive('highlight', function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block) => {
            Hljs.highlightElement(block)
            console.log(CopyButtonPlugin)
           
        })
    })
  
}
export default Highlight