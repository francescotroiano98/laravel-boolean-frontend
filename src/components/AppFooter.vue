<template>
    <div class="d-flex">
        <div class="left-footer">
            <i class="fa-regular fa-copyright fa-lg" style="color: white;"></i>Copyright 2023 by team 1 | powered by Vue |
        </div>

        <div class="right-footer">
            <span>Follow us</span>
            <i class="fa-brands fa-facebook fa-lg" style="color: white;"></i>
            <i class="fa-brands fa-instagram fa-lg" style="color: white;"></i>
            <i class="fa-brands fa-youtube fa-lg" style="color: white;"></i>
            <i class="fa-brands fa-twitter fa-lg" style="color: white;"></i>
        </div>
    </div>
        
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
    div.d-flex{
        display: flex;
        justify-content: space-between;
        padding: .7rem;
        color: white;
        background-color: grey;
        width: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        div.left-footer{
            font-size: 1.1rem;

            i{
                padding: 0 .3rem;
            }
        }

        div.right-footer{
            span{
                font-weight:550;
            }
            i{
                padding: 0 .3rem;
            }
        }
    }
</style>