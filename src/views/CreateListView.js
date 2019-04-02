import ListView from './ListView.vue';
import bus from '../utils/bus';


export default function createListView(componentName){

    return {
        name : componentName, // componentName
        created(){
            bus.$emit('start:spinner');

            this.$store.dispatch('FETCH_LIST',this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch(() => {
                    bus.$emit('end:spinner');
                });

        },
        render(createElement){
            return createElement(ListView);
        }
    }    
}