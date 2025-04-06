<template>
    <main id="welcome" class="dashboard">

      <header class="search-header">
        <div class="search-container">
          <img src="../assets/search-bar.svg" class="search-icon" />
          <span class="search-placeholder"> Search Ayesha's Workspace </span>
        </div>

        <img src="../assets/home.svg" class="icon" alt="">
      </header>

      <h1 class="page-title">Tests</h1>

      <div class="cards-container">
          <TestCard
          testId="T1"
          testName="Test 1"
          creator="Created By You"
          :tags="[{ name: 'Heuristics', color: 'pink' }]"
          updateDate="4/4/2025"
          count="0"
        />
        <TestCard
          testId="T2"
          testName="Test 2"
          creator="Created By Mike"
          :tags="[
            { name: 'Usability', color: 'red' },
            { name: 'Heuristics', color: 'pink' },
          ]"
          updateDate="2/3/2025"
          count="12"
        />
      </div>

    </main>
  </template>
  
  <script>
  import TestCard from "./TestCard.vue";
  
  export default {
    name: "TestsDashboard",
    components: {
      TestCard,
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  padding: 38px 44px;
  align-items: flex-start;
  height: 100vh; 
  box-sizing: border-box;
  width: fit-content;
}

  @media (max-width: 991px) {
    .dashboard {
      display: none;
    }
  }
  
  .search-header {
    width: 100%;
    padding-right: 0px;
    display: flex;
    align-items: stretch;
    gap: 20px;
    font-family:
      Rubik,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 22px;
    color: #000000;
    font-weight: 400;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  @media (max-width: 991px) {
    .search-header {
      max-width: 100%;
    }
  }
  
  .search-container {
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 40px;
    align-items: stretch;
    gap: 16px;
    flex-wrap: wrap;
  }
  
  @media (max-width: 991px) {
    .search-container {
      padding: 20px;
    }
  }
  
  .search-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 20px;
    flex-shrink: 0;
  }
  
  .search-placeholder {
    margin: auto 0;
    flex-grow: 1;
    flex-shrink: 1;
    font-size: 14px;
  }
  
  @media (max-width: 991px) {
    .search-placeholder {
      max-width: 100%;
    }
  }
  
  .page-title {
    color: rgba(0, 0, 0, 1);
    font-size: 32px;
    font-family:
      Rowdies,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-weight: 20px;
    text-align: center;
    margin-top: 64px;
  }
  
  @media (max-width: 991px) {
    .page-title {
      margin-top: 40px;
      font-size: 40px;
    }
  }

  .icon {
  width: 30px;
  height: 30px;
  display: block;
    }

  .cards-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 44px;
  }
  </style>
  