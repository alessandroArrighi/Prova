<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { User } from "../types"

export default defineComponent({
    data() {
        return {
        usernameDaRegistrare: "",
        passwordDaRegistrare: "",
        ruoloDaRegistrare: "",
        usernameEsistente: "",
        passwordEsistente: "",
        }
    },
    props: {
        user: Object as PropType<User>,
    },
    methods: {
        async signup() {
            await axios.post("/api/auth/signin", {
                username: this.usernameDaRegistrare,
                password: this.passwordDaRegistrare,
                role: this.ruoloDaRegistrare
            })
            window.location.href ="/accesso/areaPersonale"
        },
        async login() {
            await axios.post("/api/auth/login", {
                username: this.usernameEsistente,
                password: this.passwordEsistente
            })
            window.location.href ="/accesso/areaPersonale"
        }
    },
    mounted() {
        if(this.$route.params.permesso == "admin") {
            this.ruoloDaRegistrare = "admin"
        }
        if(this.$route.params.permesso == "user") {
            this.ruoloDaRegistrare = "user"
        }
    }
})


</script>

<template>
    <div class="flex-container-agr">
        <div class="flex-item">
            <h2>Sign-In</h2>
            <form v-if="!user" @submit.prevent="signup">
                <label>Username</label>
                <input v-model="usernameDaRegistrare" type="text" />
                <label>Password</label>
                <input v-model="passwordDaRegistrare" type="password" />
                <button type="submit">Registrati</button>
            </form>
        </div>
        <div class="flex-item">
            <h2>Log-In</h2>
            <form v-if="!user" @submit.prevent="login">
                <label>Username</label>
                <input v-model="usernameEsistente" type="text" />
                <label>Password</label>
                <input v-model="passwordEsistente" type="password" />
                <button type="submit">Accedi</button>
            </form>
        </div>
    </div>
</template>