<template>
  <transition-group
    :css="false"
  >
    <slot/>
  </transition-group>
</template>
<script>
  export default {
    name: 'VelocityGroup'
  }
</script>
