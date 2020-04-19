<template>
    <div id="app">
        <Navbar></Navbar>
        <router-view/>
        <Footer></Footer>
    </div>
</template>
<script>
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
export default {
    name: 'App',
    components: {
        Navbar,
        Footer

    }
}

</script>
<style>
body {
    padding: 0;
    margin: 0;
}

</style>
