<template>
  <div class="avatar-group">
    <Avatar
      :style="{ position: 'relative', left: `-${i * 20}px` }"
      v-for="(item, i) in data"
      :key="i"
      :data="item"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="css">
.avatar-group {
  width: 100px;
  display: flex;
  position: relative;
}
</style>
