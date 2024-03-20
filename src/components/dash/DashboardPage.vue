<template>
    <div class="dash">
        <div class="firstsquare">
            <h1 class="title">Weekly Work</h1>
            <WeeklyWork class="chart"></WeeklyWork>
        </div>
        <div class="secondsquare">
            <GamificationPoints></GamificationPoints>
        </div>
        <div class="thirdsquare">
            <ProjectsSquare></ProjectsSquare>
        </div>
        <div class="forthsquare">
            <InandOutGraph></InandOutGraph>
        </div>
    </div>
</template>

<script>
import WeeklyWork from './WeeklyWork.vue';
import ProjectsSquare from './ProjectsSquare.vue';
import GamificationPoints from './GamificationPoints.vue';
import InandOutGraph from './InandOutGraph.vue';

export default {
    name: 'DasboardPage',
    components: {
        WeeklyWork,
        ProjectsSquare,
        GamificationPoints,
        InandOutGraph
    }
}
</script>

<style scoped>

.dash {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
}

.firstsquare {
    grid-row: 1;
    grid-column: 1;
    margin-left: 3.75rem;
    background-color: white;
    width: 28.125rem;
    border-radius: 5%;
    text-align: left;
    color: black;
    margin-top: 0.625rem;
}

.title {
    font-size: large; 
    margin-left: 1.875em; 
    margin-top: 0.9375em;
    color: black;
}

.chart {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    margin-bottom: 0.625rem;
}

.secondsquare {
    grid-row: 2;
    grid-column: 1;
    margin-left: 3.4375rem;
    margin-top: 1.875rem;
    width: 21.875rem;
    height: 7.5rem;
    border-radius: 5%;
}

.thirdsquare {
    grid-row: 1;
    grid-column: 2;
}

.forthsquare {
    grid-row: 2;
    grid-column: 2;
}

</style>