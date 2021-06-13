<template>
  <div class="avatar-group">
    <Avatar :style="{ position: 'relative' }" />
    <Avatar :style="{ position: 'relative', left: '-20px' }" />
    <Avatar :style="{ position: 'relative', left: '-40px' }" />
    <Avatar :style="{ position: 'relative', left: '-60px' }" />
    <Avatar :style="{ position: 'relative', left: '-80px' }" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
.avatar-group {
  width: 100px;
  display: flex;
  position: relative;
}
</style>
