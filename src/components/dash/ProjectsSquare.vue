<template>
    <div class="projects">
            <div class="thirdsquare1">
                <button class="projsquare">
                    <img class="img" src="../../assets/sidebar_black/projects.png" />
                    <h1 class="textproj">Project X</h1>
                </button>
            </div>
            <div class="thirdsquare2">
                <button class="projsquare">
                    <img class="img" src="../../assets/sidebar_black/projects.png" />
                    <h1 class="textproj">Project X</h1>
                </button>
            </div>
            <div class="thirdsquare3">
                <button class="projsquare">
                    <img class="img" src="../../assets/sidebar_black/projects.png" />
                    <h1 class="textproj">Project X</h1>
                </button>
            </div>
            <div class="thirdsquare4">
                <button class="projsquare">
                    <img class="img" src="../../assets/sidebar_black/projects.png" />
                    <h1 class="textproj">Project X</h1>
                </button>
            </div>
        </div>
</template>

<style scoped>
.projects {
    display: grid;
    grid-template-rows: 7.5rem 7.5rem;
    grid-template-columns: 8.4375rem 7.5rem;
    justify-content: center;
    margin-top: 0.625rem;
}

.thirdsquare1 {
    grid-row: 1;
    grid-column: 1;
}

.thirdsquare2 {
    grid-row: 2;
    grid-column: 1;
}

.thirdsquare3 {
    grid-row: 1;
    grid-column: 2;
}

.thirdsquare4 {
    grid-row: 2;
    grid-column: 2;
}
.projsquare {
    background-color: white;
    color: black;
    border-color:transparent;
    border-radius: 10%;
    width: 7.5rem;
    height: 6.875rem;
}

.img {
    border-radius: 100%;
    width: 3.125rem;
    margin-top: 0.9375rem;
}

.textproj {
    font-size: large;
    margin-top: 0.625rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-bottom: 1.25rem;
}
</style>