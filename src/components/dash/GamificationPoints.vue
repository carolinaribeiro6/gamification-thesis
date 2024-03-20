<template>
    <div class="secondsquare">
            <h1 class="title">Congrats NOME</h1>
            <p> X Gamification Points</p>
            <button class="button">See Awards</button>
    </div>
</template>

<style scoped>
.secondsquare {
    grid-row: 2;
    grid-column: 1;
    margin-top: 1.875rem;
    margin-left: 3.125rem;
    background-color: white;
    width: 21.875rem;
    height: 7.5rem;
    border-radius: 5%;
}
.title {
    font-size: large; 
    margin-left: 1.875em; 
    padding-top: 0.9375em;
    color: black;
}
.button {
    background-color: rgba(28,62,112);
    border-color: rgba(28,62,112);
    color: white;
    width: 9.375rem;
    border-radius: 40%;
    margin-left: 5.625rem;
    margin-bottom: 3.75rem;
    align-content: center;
    padding: 0.3125rem;
}
</style>