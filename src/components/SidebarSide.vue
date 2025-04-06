/* eslint-disable */
<template>
    <nav class="sidebar">
      <div class="sidebar-content">
        <ProfileSection />
        <ActionButton text="Create New Test" />
        <h2 class="section-header">Explore</h2>
        <NavigationItem
          text="Your Tests"
          icon="Vector1.png"
          background-color="rgba(255, 105, 5, 0.2)"
        />
        <NavigationItem
          text="Shared With You"
          icon="Vector2.png"
          background-color="rgba(79, 177, 42, 0.1)"
        />
        <NavigationItem
          text="Public Tests"
          icon="Vector3.png"
          background-color="rgba(79, 177, 42, 0.1)"
        />
        <NavigationItem
          text="Sessions"
          icon="Vector4.png"
          background-color="rgba(79, 177, 42, 0.1)"
        />

        <div class="templates-container">
            <div class="icon-text-container">
              <img src="../assets/template.png" class="template-icon" alt="Templates icon" />
              <span class="templates-text">Templates</span>
            </div>
          <img src="../assets/create2.png" class="settings-icon" alt="Settings icon" />
        </div>

      </div>
      <div class="sidebar-divider"></div>
    </nav>
  </template>
  
  <script>
  import ProfileSection from "./ProfileSection.vue";
  import NavigationItem from "./NavigationItem.vue";
  import ActionButton from "./ActionButton.vue";
  
  export default {
    name: "SidebarSide",
    components: {
      ProfileSection,
      NavigationItem,
      ActionButton,
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: row;
    padding-left: 18px;
    padding-right: 44px;
    padding-bottom: 8px;
    align-items: stretch;
    gap: 35px;
    width: 355px;
  }
  
  @media (max-width: 991px) {
    .sidebar {
      display: none;
    }
  }
  
  .sidebar-content {
    align-self: start;
    display: flex;
    margin-top: 24px;
    width: fit-content;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
  }
  
  @media (max-width: 991px) {
    .sidebar-content {
      max-width: 100%;
    }
  }
  
  .section-header {
    color: rgba(0, 0, 0, 1);
    font-size: 20px;
    font-family:
      Rowdies,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-weight: bolder;
    text-align: center;
    align-self: start;
    margin-top: 44px;
    margin-bottom: 10px;
    margin-left: 4px;
  }
  
  @media (max-width: 991px) {
    .section-header {
      margin-top: 40px;
    }
  }
  
  .session-button {
    border-radius: 16px;
    background-color: rgba(79, 177, 42, 0.1);
    margin-top: 26px;
    padding: 30px 70px;
    font-family:
      Rubik,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 28px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    border: none;
    cursor: pointer;
  }
  
  @media (max-width: 991px) {
    .session-button {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      white-space: initial;
    }
  }
  
  .templates-container {
    align-self: center;
    display: flex;
    margin-top: 56px;
    margin-left: 12px;
    width: 95%;
    font-family:
      Rubik,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 22px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    justify-content: space-between;
  }
  
  @media (max-width: 991px) {
    .templates-container {
      max-width: 100%;
      margin-top: 40px;
      white-space: initial;
    }
  }
  
  @media (max-width: 991px) {
    .templates-wrapper {
      white-space: initial;
    }
  }
  
  .template-icon {
    aspect-ratio: 0.95;
    object-fit: contain;
    object-position: center;
    width: 24px;
    flex-shrink: 0;
  }
  
  .templates-text {
    margin-top: auto;
    margin-bottom: auto;
    flex-basis: auto;
  }
  
  .settings-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 16px;
    margin-top: auto;
    margin-bottom: auto;
    flex-shrink: 0;
  }

  .icon-text-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }
  
  .sidebar-divider {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-color: rgba(0, 0, 0, 1);
    border-style: solid;
    border-width: 1px;
    flex-shrink: 0;
    height: 100vh;
  }
  </style>
  