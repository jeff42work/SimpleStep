// src/components/index.js
import SimpleStep from './SimpleStep.vue'


SimpleStep.install = function (Vue) {
    Vue.component('simple-step', SimpleStep)
}

export default SimpleStep