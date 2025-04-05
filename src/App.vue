<template>
    <div class="layout">
      <Sidebar />
      <div class="main-content">
        
      </div>
    </div>
</template>

<script>
import Sidebar from './components/SidebarSide.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>

.layout {
  display: flex;
  margin: 0px;
}

.main-content {
  flex: 1;
  padding: 20px;
  text-align: left;
}
</style>
