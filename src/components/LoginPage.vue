<template>
    <div>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model.trim="email"/>
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model.trim="password"/>
                </div>
                <p v-if="!formIsValid">Please enter a valid email and password (must be longer than 6 characters)</p>
                <button>{{ submitButtonCaption }}</button>
                <button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</button>
            </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null,
        };
    },
    computed: {
        submitButtonCaption() {
            if (this.mode === 'login') {
                return 'Login';
            } else {
                return 'Signup';
            }
        },
        switchModeButtonCaption() {
            if (this.mode === 'login') {
                return 'Signup instead';
            } else {
                return 'Login instead';
            }
        },
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;

            const actionPayload = {
                    email: this.email,
                    password: this.password,
                };

            try {
            if (this.mode === 'login') {
                await this.$store.dispatch('login', actionPayload);
            } else {
                await this.$store.dispatch('signup', actionPayload);
            }
            const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
            this.$router.replace(redirectUrl);
        } catch (err) {
            this.error = err.message || 'Failed to authenticate, try again later!';
            }

            this.isLoading = false;
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup';
            } else {
                this.mode = 'login';
            }
        },
        handleError() {
            this.error = null;
        },
    }
}
</script>

<style scoped>
.logo {
  width: 300px;
  padding-bottom: 40px;
}

.login input {
  width: 300px;
  height: 40px;
  padding-left: 40px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.label1 label1 {
  text-align: left;
  margin-left: auto;
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
