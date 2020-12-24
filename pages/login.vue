<template>
  <div class="px-3 pt-10 max-w-xl grid grid-cols-1 place-content-center mx-auto">
    <div class="pb-20">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">Log in</h3>
          <p class="mt-1 text-gray-700">Sign in with Google or Amazon, or do it the old fashion way.</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="w-full">
          <div>
            <div>
              <div>
                <p class="text-sm leading-5 font-medium text-gray-700">
                  Sign in with
                </p>

                <div class="mt-1 grid grid-cols-2 gap-3">
                  <div>
                    <span class="w-full inline-flex rounded-md shadow-sm">
                      <button @click="socialSignin('Google')" type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 hover:border-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Google">
                        <svg class="w-5 h-5" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z" fill="#EA4335"></path></svg>
                      </button>
                    </span>
                  </div>

                  <div>
                    <span class="w-full inline-flex rounded-md shadow-sm">
                      <button @click="socialSignin('LoginWithAmazon')" type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 hover:border-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Twitter">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="2.167 .438 251.038 259.969"><g fill="none" fill-rule="evenodd"><path d="m221.503 210.324c-105.235 50.083-170.545 8.18-212.352-17.271-2.587-1.604-6.984.375-3.169 4.757 13.928 16.888 59.573 57.593 119.153 57.593 59.621 0 95.09-32.532 99.527-38.207 4.407-5.627 1.294-8.731-3.16-6.872zm29.555-16.322c-2.826-3.68-17.184-4.366-26.22-3.256-9.05 1.078-22.634 6.609-21.453 9.93.606 1.244 1.843.686 8.06.127 6.234-.622 23.698-2.826 27.337 1.931 3.656 4.79-5.57 27.608-7.255 31.288-1.628 3.68.622 4.629 3.68 2.178 3.016-2.45 8.476-8.795 12.14-17.774 3.639-9.028 5.858-21.622 3.71-24.424z" fill="#f90" fill-rule="nonzero"/><path d="m150.744 108.13c0 13.141.332 24.1-6.31 35.77-5.361 9.489-13.853 15.324-23.341 15.324-12.952 0-20.495-9.868-20.495-24.432 0-28.75 25.76-33.968 50.146-33.968zm34.015 82.216c-2.23 1.992-5.456 2.135-7.97.806-11.196-9.298-13.189-13.615-19.356-22.487-18.502 18.882-31.596 24.527-55.601 24.527-28.37 0-50.478-17.506-50.478-52.565 0-27.373 14.85-46.018 35.96-55.126 18.313-8.066 43.884-9.489 63.43-11.718v-4.365c0-8.018.616-17.506-4.08-24.432-4.128-6.215-12.003-8.777-18.93-8.777-12.856 0-24.337 6.594-27.136 20.257-.57 3.037-2.799 6.026-5.835 6.168l-32.735-3.51c-2.751-.618-5.787-2.847-5.028-7.07 7.543-39.66 43.36-51.616 75.43-51.616 16.415 0 37.858 4.365 50.81 16.795 16.415 15.323 14.849 35.77 14.849 58.02v52.565c0 15.798 6.547 22.724 12.714 31.264 2.182 3.036 2.657 6.69-.095 8.966-6.879 5.74-19.119 16.415-25.855 22.393l-.095-.095" fill="#000"/><path d="m221.503 210.324c-105.235 50.083-170.545 8.18-212.352-17.271-2.587-1.604-6.984.375-3.169 4.757 13.928 16.888 59.573 57.593 119.153 57.593 59.621 0 95.09-32.532 99.527-38.207 4.407-5.627 1.294-8.731-3.16-6.872zm29.555-16.322c-2.826-3.68-17.184-4.366-26.22-3.256-9.05 1.078-22.634 6.609-21.453 9.93.606 1.244 1.843.686 8.06.127 6.234-.622 23.698-2.826 27.337 1.931 3.656 4.79-5.57 27.608-7.255 31.288-1.628 3.68.622 4.629 3.68 2.178 3.016-2.45 8.476-8.795 12.14-17.774 3.639-9.028 5.858-21.622 3.71-24.424z" fill="#f90" fill-rule="nonzero"/><path d="m150.744 108.13c0 13.141.332 24.1-6.31 35.77-5.361 9.489-13.853 15.324-23.341 15.324-12.952 0-20.495-9.868-20.495-24.432 0-28.75 25.76-33.968 50.146-33.968zm34.015 82.216c-2.23 1.992-5.456 2.135-7.97.806-11.196-9.298-13.189-13.615-19.356-22.487-18.502 18.882-31.596 24.527-55.601 24.527-28.37 0-50.478-17.506-50.478-52.565 0-27.373 14.85-46.018 35.96-55.126 18.313-8.066 43.884-9.489 63.43-11.718v-4.365c0-8.018.616-17.506-4.08-24.432-4.128-6.215-12.003-8.777-18.93-8.777-12.856 0-24.337 6.594-27.136 20.257-.57 3.037-2.799 6.026-5.835 6.168l-32.735-3.51c-2.751-.618-5.787-2.847-5.028-7.07 7.543-39.66 43.36-51.616 75.43-51.616 16.415 0 37.858 4.365 50.81 16.795 16.415 15.323 14.849 35.77 14.849 58.02v52.565c0 15.798 6.547 22.724 12.714 31.264 2.182 3.036 2.657 6.69-.095 8.966-6.879 5.74-19.119 16.415-25.855 22.393l-.095-.095" fill="#000"/></g></svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-6 relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm leading-5">
                  <span class="px-2 bg-white text-gray-500">
                    Or sign in with
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">
                <div>
                  <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                    Email address
                  </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <input v-model="signInForm.username" id="email" type="email" required :class="!validEmail && signInForm.username ? 'focus:shadow-outline-red focus:border-red-300 border-red-300':'focus:shadow-outline-blue focus:border-blue-300 border-gray-300'" class="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                  </div>
                </div>

                <div>
                  <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                    Password
                  </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <input v-model="signInForm.password" id="password" type="password" required class="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 border-gray-300 focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                  </div>
                </div>

                <div>
                  <span v-if="signInFieldsValidated" class="block w-full rounded-md shadow-sm">
                    <button @click="signIn()" type="button" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-wallygreen-600 hover:bg-wallygreen-500 focus:outline-none focus:border-wallygreen-700 focus:shadow-outline-wallygreen active:bg-wallygreen-700 transition duration-150 ease-in-out">
                      Login
                    </button>
                  </span>
                  <span v-if="!signInFieldsValidated" class="block w-full rounded-md shadow-sm">
                    <button disabled type="button" class="cursor-default w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-300 bg-wallygreen-500">
                      Login
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';
export default {
    layout: 'unauthed',
    data() {
      return {
        signInForm: {
          username: null,
          password: null,
        },
      }
    },
    computed: {
      signInFieldsValidated() {
        if(this.validEmail && this.signInForm.username && this.signInForm.password) {
          return true
        } else {
          return false
        }
      },
      validEmail() {
        if(this.signInForm.username) {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(this.signInForm.username).toLowerCase());
        } else {
          return true
        }
      },
    },
    methods: {
      async signIn() {
        this.$store.dispatch("user/login", this.signInForm)
        .then(response => {
          this.$router.push("/home") 
        })
        .catch(error => {
          console.log(error)
          this.errorPost = true
        });
      },
      async socialSignin(providerName) {
      console.log('Social Signup Pressed')
      try {
        Auth.federatedSignIn({provider: providerName})
      } catch(error) {
        console.log(error)
      }
    },
    }
}
</script>

<style>
</style>

