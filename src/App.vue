<template>
    <div class="layout">
      <Sidebar />
      <div class="main-content">
          <TestsDashboard/>
      </div>
    </div>
</template>

<script>
import Sidebar from './components/SidebarSide.vue';
import TestsDashboard from './components/TestsDashboard.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    TestsDashboard
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
  padding: 0px;
  text-align: left;
}
</style>
