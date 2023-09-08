
<template>
    <div class="contact-us">
        <div class="container">
            <div class="left-column">
                <div>
                    <h1>
                        Contact Us
                    </h1>
                    <p>
                        We mix it for you.
                    </p>
                </div>
                <img src="https://www.degustibuss.it/wp-content/uploads/2023/01/barlady-professionista.jpg" alt="Barman">
                <h3>
                    For your perfect event our services.
                </h3>
            </div>
            <div class="right-column">
                <form action="">
                    <label for="Name" class="block">Insert your name</label>
                    <input type="text" id="Name">

                    <label for="email" class="block">Insert your email</label>
                    <input type="email" name="email" id="email">
                    
                    <label for="city" class="block">Find your city</label>
                    <select name="city" id="city">
                        <option value="" v-for="city in cities">
                            {{ city }}
                        </option>
                    </select>

                    <label for="service" class="block">Select the catering type</label>
                    <select name="service" id="service">
                        <option value="" v-for="service in services">
                            {{ service }}
                        </option>
                    </select>

                    <label for="request" class="block">Give us your personal request</label>
                    <textarea name="request" id="request"  rows="10"></textarea>
                
                    <button type="submit" class="btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import AppFooter from '../components/AppFooter.vue';
export default {
  name: 'Contacts',
    
  data() {
    return {
      cities: [
        'Minervino Murge', 'Modugno', 'Mola di Bari', 'Molfetta', 'Monopoli', 'Monte Sant Angelo', 'Monteiasi', 'Monteleone di Puglia', 'Montemesola', 'Monteparano', 'Monteroni di Lecce', 'Montesano Salentino', 'Morciano di Leuca', 'Motta Montecorvino', 'Mottola'
      ],

      services:['All-Inclusive', 'Bring Your Own Booze', 'Cash Bar', 'Consumption', 'Open Bar'],
    }
  }
}
</script>

<style lang="scss" scoped>
    div.contact-us{
    height: 100vh;
    background-image: url('https://images.pexels.com/photos/4667030/pexels-photo-4667030.jpeg?cs=srgb&dl=pexels-cottonbro-studio-4667030.jpg&fm=jpg');
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    div.container{
        display: flex;
        width: 80%;
        background-color:  rgba(0,0,0,.7);
        border-radius: 1rem;
            div.left-column{
            width: 50%;
            padding: 2rem;
                h1{
                    font-size: 3.5rem;
                    color: white;
                }
                p{
                    color: white;
                }
                img{
                    width: 100%;
                    object-fit: cover;
                    margin-top: 1rem;
                    border-radius: 10%;
                }
                h3{
                    margin-top: .5rem;
                    color: white;
                }
            }

            div.right-column{
                width: 50%;
                padding: 2rem;

                form{

                    label{
                        margin-top: .5rem;
                        font-size: 1.3rem;
                        color: white;
                        font-weight: bold;
                    }
                    input,
                    select,
                    textarea
                    {
                        margin-top: .5rem;
                        padding: .5rem;
                        width: 100%;
                        border:1px solid grey;
                        box-sizing: border-box;
                        border: 4px solid white;
                        border-radius: 5px;
                        -webkit-transition: 0.5s;
                        transition: 0.5s;
                        outline: none;
                    }
                }
                .block{
                    display: block;
                }

                .btn{
                    padding: .7rem;
                    font-size: 1rem;
                    font-weight: bolder;
                    background-color: white;
                    border-radius: 10px;
                    margin-top: .5rem;
                    color:#e1655b;
                    border: 0;
                }
            }
    }
</style>