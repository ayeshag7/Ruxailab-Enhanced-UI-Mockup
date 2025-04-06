<template>
    <button
      :class="['nav-item']"
      :style="{ backgroundColor }"
    >
        <!-- but this is not rendering images why! -->
      <img :src="require(`@/assets/${icon}`)" class="nav-icon" alt="Navigation icon" />
      <span class="nav-text">{{ text }}</span>
    </button>
  </template>
  
  <script>
  export default {
    name: "NavigationItem",
    props: {
      text: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      backgroundColor: {
        type: String,
        default: "rgba(79, 177, 42, 0.1)",
      }
    },
  };
  </script>
  
  <style scoped>
  .nav-item {
    border-radius: 12px;
    display: flex;
    margin-top: 7px;
    padding: 10px 28px;
    align-items: center;
    gap: 30px;
    font-family:
      Rubik,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    text-align: center;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  @media (max-width: 991px) {
    .nav-item {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  
  .nav-icon {
    aspect-ratio: 1.03;
    object-fit: contain;
    object-position: center;
    width: 24px;
    flex-shrink: 0;
  }
  
  .nav-text {
    margin-top: auto;
    margin-bottom: auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    text-align: left;
  }
  </style>
  