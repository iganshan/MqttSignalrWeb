
// my-component.js
import { ref } from 'vue'
export default {
    setup() {
        const count = ref(0)
        return {
            count,
            dynamicId: 'btn0',
            isButtonDisabled: false,
            objectOfAttrs : {
                id: 'container',
                class: 'wrapper',
                style: 'background-color:green'
            },
            date: ref("12.12.2024"),
            attributeName: "href",
            url:'http://www.ru'
        }   
    },
    methods: {
        increment() {
            this.count++
        },
        formatDate(d) {
            return d;
        },
        toTitleDate(d) {
            return d;
        }

    },

    template:
        `<button v-bind="objectOfAttrs" :disabled="isButtonDisabled" :id="dynamicId" @click="increment">
        Count <span v-html="count + 1"></span>  </button>
        <br/>
        <time :title="toTitleDate(date)" :datetime="date">
                {{ formatDate(date) }}
        </time>
        <br/>
        <a :[attributeName]="url"> link</a>
        `
}