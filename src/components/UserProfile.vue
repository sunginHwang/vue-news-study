<template>
     <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <slot name="userName"></slot>
                    <div class="time">
                        <slot name="time"></slot>
                        <slot name="karma"></slot>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.user-container{
    display:flex;
    align-items:center;
    padding:0.5rem
}

.fa-user{
    font-size: 2.5rem;
}

.user-description{
    padding-left:8px;

}

.time{
    font-size: 0.7rem;
}
</style>
