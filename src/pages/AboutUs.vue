<template>
    <div class="contacts">
            <h1  class="head">
                About Us
            </h1>
            <div class="container">
                <div class="left-column">
                    <h2>
                        BAR DUE BICCHIERI is the perfect place for young people looking for fun, good music and delicious drinks. Located in the heart of the city, our bar is a fresh and lively addition to the local nightlife scene. We are excited to welcome you in a friendly and welcoming atmosphere where you can relax with friends or meet new people.
                    </h2>
                    <img src="https://us.123rf.com/450wm/dolgachov/dolgachov1608/dolgachov160804295/61235685-la-gente-svago-amicizia-e-concetto-di-comunicazione-gruppo-di-amici-sorridenti-felici-che-bevono.jpg?ver=6" alt="people at bar">
                </div>
                <div class="right-column">
                    <p>
                        <h2>
                            What makes us unique:
                        </h2>
                        <ul class="column">
                            <li>
                                Creative Cocktails: Our team of expert mixologists is ready to delight you with a wide selection of unique and delicious cocktails. From classics to custom drinks, we have something for everyone.
                            </li>
                            <li>
                                Live Music: Every weekend, we host local bands and DJs to keep you dancing the night away. Our dance floor is the perfect place to let loose and have fun.
                            </li>
                            <li>
                                Gourmet Menu: We not only serve exceptional drinks, but also delicious dishes to satisfy your hunger. From finger food to gourmet dishes, our cuisine will win you over.
                            </li>
                            <li>
                                Special Events: We regularly organize special events, such as theme nights, surprise parties and fun competitions. Stay tuned to our social channels to stay updated.
                            </li>
                            <li>
                                Welcoming Atmosphere: Our bar has been carefully designed to create a trendy and welcoming atmosphere. We are sure you will feel right at home.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="flex">
                <ul>
                    <li>
                        <div>
                            <h1 class="text-hover">
                                Our hours
                            </h1>
                            <ul class="column">
                                <li>
                                    Monday 7:30/23:00
                                </li>
                                <li>
                                    Tuesday 7:30/23:00
                                </li>
                                <li>
                                    Wednesday 7:30/23:00
                                </li>
                                <li>
                                    Thursday 7:30/23:00
                                </li>
                                <li>
                                    Friday 7:30/01:00
                                </li>
                                <li>
                                    Saturday 7:30/01:00
                                </li>
                                <li>
                                    Sunday 7:30/23:00
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h1 class="text-hover">
                            Here we are
                        </h1>
                        <h3>
                            You can find here: <br>
                            <a>
                                Piazza la bomba n. 33
                            </a>
                        </h3>
                    </li>
                    <img src="https://www.oneindia.com/img/2015/02/04-1423022852-paris-map.jpg">
                </ul>
                <ul>
                    <li>
                        <h1 class="text-hover">
                            Contacts
                        </h1>
                        <ul class="column">
                            <li>
                                <h3>
                                    Email:
                                </h3>
                                <h5 class="text-hover">
                                    cocktails.bar@gmail.com 
                                </h5>
                            </li>
                            <li>
                                <h3>
                                    Phone:
                                </h3>
                                <h5 class="text-hover">
                                    065 8895365
                                </h5>
                            </li>
                            <li>
                                <h3>
                                    Cel:
                                </h3>
                                <h5 class="text-hover">
                                    333 6548752
                                </h5>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
    name: 'Contacts'
}
</script>
<style lang="scss" scoped>
div.contacts{
    background-image: url('https://images.pexels.com/photos/4667030/pexels-photo-4667030.jpeg?cs=srgb&dl=pexels-cottonbro-studio-4667030.jpg&fm=jpg');
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
    height: 100%;
    color: white;
    padding-top: 4.5rem;
}
ul{
    margin-right: 4rem;
    margin-left: 4rem;
}
li{
    list-style-type: none;
}
.head{
    margin-bottom: 5rem;
    padding: 0;
    text-align: center;
}
h1:hover{
    color: red;
}
.flex{
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    background-color:  rgba(0,0,0,.7);
    border-radius: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
}
img{
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin-top: 2rem;
}
h1{
    margin-bottom: 1.5rem;
    a{
        margin-top: 1rem;
    }
}
h3{
    text-align: center;
    margin-bottom: 0.5rem;
}
.text-hover{
	text-align: center;
}
    
.column{
        display: flex;
        flex-direction: column;
        li{
            margin: 0.5rem;
        }
    }
div.container{
    margin: 0 auto;
    display: flex;
    width: 80%;
    background-color:  rgba(0,0,0,.7);
    border-radius: 1rem;
    flex-wrap: wrap;
    .left-column{
        width: 50%;
        padding: 2rem;
        img{
            width: 450px;
            height: 400px;
            margin: 3rem;
        }
        
    }
    .right-column{
        width: 50%;
        padding: 2rem;
    }
    ul{
        margin: 0;
        padding: 0;
    };
}
</style>
