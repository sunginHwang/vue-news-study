<template>
    <div>
        <canvas ref="lineChart" width="400" height="400"></canvas>
    </div>
</template>

<script>

    export default {
        props: {
            chartData: {
                type: Array,
                required: true,
            },
        },
        mounted() {
            new this.$_Chart(this.$refs.lineChart, {
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
