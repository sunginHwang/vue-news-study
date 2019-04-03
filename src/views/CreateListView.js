import ListView from './ListView.vue';
import bus from '../utils/bus';


export default function createListView(componentName){

    return {
        name : componentName, // componentName
        mounted(){
            bus.$emit('end:spinner');
        },
        render(createElement){
            return createElement(ListView);
        }
    }    
}