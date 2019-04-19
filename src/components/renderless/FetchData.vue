<script>
import axios from 'axios';

export default {
    props:['url'],
    data(){
        return{
            response: null,
            loading: true
        }
    },
    created(){
        axios.get(this.url)
            .then(res => {
                this.response = res.data;
                this.loading = false;
            })
            .catch(e=>{
                console.log(e);
                this.loading = false;
            });
    },
    render(){
        return this.$scopedSlots.default({
            response: this.response,
            loading: this.loading,
        });
    },
}
</script>
