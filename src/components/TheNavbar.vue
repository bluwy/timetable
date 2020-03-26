<template>
  <div :class="{ 'w-full fixed': $route.name === 'Home' }">
    <div class="container flex flex-row-reverse">
      <template v-if="$route.name === 'Home'">
        <router-link class="p-3" to="/settings">
          <fa-icon :icon="['fas', 'cog']" />
        </router-link>
        <router-link class="p-3" to="/help">
          <fa-icon :icon="['fas', 'question']" />
        </router-link>
      </template>
      <template v-if="$route.name === 'Settings' || $route.name === 'Help'">
        <router-link class="p-3" to="/">
          <fa-icon :icon="['fas', 'times']" />
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>
