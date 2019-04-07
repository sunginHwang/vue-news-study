<template>
    <div>
        <canvas ref="lineChart" width="400" height="400"></canvas>
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
        console.log(this.chartData);
            const lineChart = new this.$_Chart(this.$refs.lineChart, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: this.chartData,
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
    },
}
</script>

<style>

</style>
