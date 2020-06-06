<template>
<div>
    <app-toolbar></app-toolbar>
    <router-view></router-view>
    <app-footer></app-footer>
</div>
</template>

<script>
import AppToolbar from './AppToolbar.vue';
import AppFooter from './AppFooter.vue';
import AppLogin from './login/AppLogin.vue';
export default {
    components:{AppToolbar,AppFooter,AppLogin}
}
</script>
