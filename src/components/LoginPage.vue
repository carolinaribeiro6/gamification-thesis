<template>
    <section>
        <h1>Welcome to </h1>
        <img class="logo" src="../assets/logo.png" alt="" />
        <div class="login">
            <label for="email">Email </label>
            <input type="email" placeholder="Enter Email" />

            <label for="password">Password </label>
            <input type="password" placeholder="Enter Password" />
        </div>
        <button class="button">Login</button>
    </section>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>

<style scoped>
.logo{
    width: 300px;    
}

.login input{
    width: 300px;
    height: 40px;
    padding-left: 40px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>