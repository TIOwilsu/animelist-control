<template>
  <div
    id="app"
    class="app"
  >
    <b-container>
      <ListControl />
    </b-container>
  </div>
</template>

<script>
import ListControl from './components/ListControl';

export default {
  name: 'App',
  components: {
    ListControl,
  },
};
</script>
<style lang="scss">
.app {
  padding-top: 60px;
}
</style>
