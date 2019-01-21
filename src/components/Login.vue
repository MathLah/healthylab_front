<template>
  <div id="login">
    <div class="logo-form">
      <div>
        <div>
          <img src="../assets/img/logo.svg" alt="">
        </div>
      </div>
    </div>
    <h1>Bienvenue !</h1>
    <form class="login_form" @submit.prevent="login()">
      <div>
        <label class="hidden" for="username">Email</label>
        <input placeholder="Votre email" id="username" name="username" type="text" v-model="credentials.username">
      </div>

      <div>
        <label class="hidden" for="password">Mot de passe</label>
        <input placeholder="Votre mot de passe" id="password" name="password" type="password" v-model="credentials.password">
      </div>

      <button class="btn-login" type="submit">Entrer</button>

    </form>
  </div>
</template>

<script>
  export default {
    name : 'login',
    data() {
      return {
        credentials : {
          username : null,
          password : null,
        },
      }
    },
    methods : {
      async login() {
        try {
          const reponse = await this.$store.dispatch('login', this.credentials)
          console.log(reponse)
          this.$router.replace({ name : 'Accueil' })
        } catch (error) {
          //  Something went wrong. What the heck?
          if (error.response) {
            if (error.response.status === 400) {
              console.log(error.response.data)
            }
          } else {
            // une erreur dans le front ?
          }
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../scss/main.scss';
  #login {
    text-align: center;
    margin: 0; // 1
    font-family: $main-font;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: $global_color;
    background-color: #fff; // 2
  }
  .logo-form{
    background: url("../assets/img/login/login-form.jpg") scroll no-repeat 50% 50% /cover;
    height: 34vh;
    text-align: center;
    margin-bottom: 15vh;
    > div {
      background-color: rgba(#fff, .68);
      border-radius: 100%;
      width: 64vw;
      height: 64vw;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      transform: translate(0, 10vh);
      box-shadow: 0 0 30px 0 rgba(203, 203, 203, 0.5);
      > div{
        background-color: #fff;
        border-radius: 100%;
        width: 52vw;
        height: 52vw;
        box-shadow: 0 0 30px 0 rgba(203, 203, 203, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        > img{
          max-width: 70%;
          height: auto;
        }
      }
    }
  }

  .login_form{
    input{
      text-align: center;
      border: 0 none;
      height: 120px;
      line-height: 120px;
      font-size: 1.75rem;
      width: 100%;
      border-bottom: 1px solid rgba($global_color, .4);
      &:focus{
        color: $primary-color;
        border-color: $primary-color;
      }
    }
  }


  .btn-login{
    margin-top: 40px;
    width: 75%;
    color: #fff;
    font-size: 1.75rem;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
    border: 0 none;
    border-radius: 60px;
    background: linear-gradient(to right, #6fd1bb 0%,$primary-color 100%);
    height: 90px;
    line-height: 90px;
    font-weight: 700;
    box-shadow: 0 0 30px 0 rgba(203, 203, 203, 0.5);

  }
</style>
