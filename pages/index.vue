<template>
  <div class="flex items-center justify-center" style="height:90vh;">
    <div>
      <h1 class="font-black text-2xl sm:text-6xl text-center">Welcome, please login.</h1>
      <div class="mt-10 flex items-center justify-center">
        <button type="button" class="inline-flex items-center px-14 py-2 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ease-in-out duration-300">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'unauthed'
}
</script>

<style>
h1 {
  font-family: 'Montserrat', sans-serif;
}
</style>