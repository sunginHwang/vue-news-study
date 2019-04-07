<template>
    <div>
        <canvas ref="barChart" width="400" height="400"></canvas>
    </div>
</template>

<script>

export default {
props: {
    chartData: {
    type: Object,
    required: true,
    },
},
mounted(){
        const barChart = new this.$_Chart(this.$refs.barChart, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.chartData
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style>

</style>
