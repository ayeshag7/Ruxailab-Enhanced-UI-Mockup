<template>
    <button id="create-test" class="action-button">
        <span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M21 14v5c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h5v2H5v14h14v-5h2z"></path> <path d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4"></path> </g> </g></svg></span>
        {{ text }}
    </button>
  </template>
  
  <script>
  import tour from '@/shepherd/tour.js';

  export default {
    name: "ActionButton",
    props: {
      text: {
        type: String,
        required: true,
      },
    },
    mounted() {
    tour.start();
    }
  };
  </script>
  
  <style scoped>
  .action-button {
    display: flex;
    align-items: center;
    gap: 40px;
    border-radius: 16px;
    background-color: rgba(255, 105, 5, 1);
    margin-top: 44px;
    padding: 10px 35px;
    font-family:
      Rowdies,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    font-weight: bolder;
    border: none;
    cursor: pointer;
  }

.icon {
  width: 30px;
  height: 30px;
  display: block;
}
  
  @media (max-width: 991px) {
    .action-button {
      margin-top: 40px;
      gap: 20px;
    }
  }
  </style>
  