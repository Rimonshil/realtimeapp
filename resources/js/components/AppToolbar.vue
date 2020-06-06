<template>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
            <router-link>
                <v-btn flat to="/">FORUM</v-btn>
            </router-link>
               <v-btn flat>ASK QUESTION</v-btn>
                <v-btn flat>CATEGORY</v-btn>
             <router-link to="/login">
                <v-btn flat>LOGIN</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>