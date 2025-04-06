<template>
    <section class="test-card">
      <div class="card-content">

        <div class="card-left-column">
          <div class="card-info">
            <div class="test-identifier">{{ testId }}</div>
            <div class="test-details">
              <h2 class="test-name">{{ testName }}</h2>
              <p class="test-creator">{{ creator }}</p>
            </div>
          </div>
        </div>

        <div class="card-metadata">
            <div class="tag-container">
              <TagBadge
                v-for="(tag, index) in tags"
                :key="index"
                :name="tag.name"
                :color="tag.color"
              />
            </div>

            <div class="update-info">
              <div class="count-container">
                <span class="count-number">{{ count }}</span>
                <img src="../assets/contributors.svg" class="count-icon" />
              </div>
              <p class="update-date">Last Updated on {{ updateDate }}</p>
            </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import TagBadge from "./TagBadge.vue";
  
  export default {
    name: "TestCard",
    components: {
      TagBadge,
    },
    props: {
      testId: {
        type: String,
        required: true,
      },
      testName: {
        type: String,
        required: true,
      },
      creator: {
        type: String,
        required: true,
      },
      tags: {
        type: Array,
        default: () => [],
      },
      updateDate: {
        type: String,
        required: true,
      },
      count: {
        type: String,
        required: true,
      },
      space: {
        type: Number,
        default: 0,
      },
    },
  };
  </script>
  
  <style scoped>
  .test-card {
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid rgba(255, 105, 5, 1);
    width: 800px;
    max-width: 100%;
    padding: 7px 10px;
  }
  
  @media (max-width: 991px) {
    .test-card {
      margin-top: 40px;
    }
  }
  
  .card-content {
    gap: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  @media (max-width: 991px) {
    .card-content {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  
  .card-left-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: normal;
    width: fit-content;
    margin-left: 0px;
  }
  
  @media (max-width: 991px) {
    .card-left-column {
      width: 100%;
    }
  }
  
  .card-info {
    display: flex;
    flex-grow: 1;
    align-items: center;
    gap: 10px;
    font-family:
      Rubik,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    justify-content: space-between;
  }
  
  @media (max-width: 991px) {
    .card-info {
      margin-top: 40px;
    }
  }
  
  .test-identifier {
    border-radius: 10px;
    background-color: rgba(79, 177, 42, 0.1);
    border: 1px solid rgba(79, 177, 42, 1);
    padding: 0 28px;
    font-size: 18px;
    font-weight: 400;
    white-space: nowrap;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 991px) {
    .test-identifier {
      padding: 0 20px;
      white-space: initial;
    }
  }
  
  .test-details {
    align-self: start;
    display: flex;
    margin-top: 6px;
    flex-direction: column;
    align-items: stretch;
  }
  
  .test-name {
    font-size: 20px;
    font-weight: 700;
    align-self: start;
    margin: 0;
  }
  
  .test-creator {
    font-size: 14px;
    font-weight: 400;
    margin-top: 7px;
    margin-bottom: 0;
  }
  
  .card-metadata {
    display: flex;
    align-items: flex-start;
    gap: 40px 100px;
    align-self: stretch;
    font-family:
      Rubik,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    text-align: center;
  }
  
  @media (max-width: 991px) {
    .card-metadata {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  
  .tag-container {
    display: flex;
    flex-direction: row;
    gap: 9px;
    align-items: flex-start;
    margin-top: 5px;
  }
  
  .update-info {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    color: rgba(0, 0, 0, 1);
  }
  
  .count-container {
    align-self: end;
    display: flex;
    align-items: stretch;
    gap: 12px;
    font-size: 22px;
    font-weight: 500;
    white-space: nowrap;
  }
  
  @media (max-width: 991px) {
    .count-container {
      white-space: initial;
    }
  }
  
  .count-number {
    font-size: 16px;
    font-weight: 500;
  }
  
  .count-icon {
    object-fit: contain;
    object-position: center;
    width:24px;
    flex-shrink: 0;
  }
  
  .update-date {
    font-size: 14px;
    font-weight: 400;
    margin-top: 7px;
    margin-bottom: 0;
  }
  </style>
  