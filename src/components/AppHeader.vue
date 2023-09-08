<template>
    <nav>
        <ul class="logo">
            <li>
                <img src="https://www.thecocktaildb.com/images/logo.png" alt="Nav bar logo">
            </li>
        </ul>
        <ul>
            <li v-for="link in links">
                <router-link :to="link.route">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            links : [
                {
                    route: './',
                    name: 'HomePage'
                },
                {
                    route: './chi-siamo',
                    name: 'About Us'
                },
                {
                    route: './contatti',
                    name: 'Contacts'
                },
            ]
           
        }
    },


}
</script>
<style lang="scss">

nav{
    background-color: #4f4f4f;
    padding: 2rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .logo{
        margin: 0 2rem;
        font-size: 1.5rem;
    }

    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        a{
            text-decoration: none;
            color: white;
            font-size: 1.5rem;
            margin: 0 2rem;
            text-transform: uppercase;
        }

        a:hover{
            color: orange;
        }

      
    }
}
</style>