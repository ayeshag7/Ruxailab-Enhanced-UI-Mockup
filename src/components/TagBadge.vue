<template>
    <div class="tag-badge" :class="colorClass">
      {{ name }}
    </div>
  </template>
  
  <script>
  export default {
    name: "TagBadge",
    props: {
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: "default",
      },
    },
    computed: {
      colorClass() {
        return `tag-${this.color}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .tag-badge {
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 1);
    border-width: 1px;
    border-style: solid;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
    font-family:
      Rubik,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    text-align: center;
  }
  
  .tag-pink {
    border-color: rgba(254, 48, 147, 1);
    color: rgba(254, 48, 147, 1);
  }
  
  .tag-red {
    border-color: rgba(250, 4, 4, 1);
    color: rgba(250, 4, 4, 1);
  }
  
  @media (max-width: 991px) {
    .tag-badge {
      padding: 6px 20px;
      white-space: initial;
    }
  }
  </style>
  