<template>
    <div class="profile-wrapper">
        <img src="../assets/profile-picture.png" class="avatar-image" alt="Profile avatar" />
        <p class="workspace-name">Ayesha's Workspace</p>
        <div class="">
            <span class="icon"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.7214 5.00346L11.2549 5.00002C7.91139 4.99217 5.00832 7.70878 4.98528 11.0009V14.7894C4.98528 15.5791 4.88469 16.351 4.45381 17.0081L4.16685 17.4456C3.73107 18.1101 4.19966 19.0002 4.98528 19.0002H19.0147C19.8003 19.0002 20.2689 18.1101 19.8331 17.4456L19.5462 17.0081C19.1153 16.351 19.0147 15.5791 19.0147 14.7894V11.0009C18.9758 7.70863 16.0649 5.0113 12.7214 5.00346Z" stroke="#4FB12A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19" stroke="#4FB12A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 2C13.1046 2 14 2.89543 14 4V5H10V4C10 2.89543 10.8954 2 12 2Z" stroke="#4FB12A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfileSection",
  };
  </script>
  
  <style scoped>
  
  .profile-wrapper {
    width: 300px;
    gap: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
  }
  
  @media (max-width: 991px) {
    .profile-wrapper {
      flex-direction: column;
      align-items: flex-start;
      gap: 0px;
    }
  }
  
  .avatar-image {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 70px;
    border-radius: 100px;
    flex-shrink: 0;
    max-width: 100%;
    margin-top: 5px;
  }
  
  @media (max-width: 991px) {
    .avatar-image {
      margin-top: 18px;
    }
  }
  
  .workspace-name {
    color: rgba(0, 0, 0, 1);
    font-size: 18px;
    font-family:
      Rubik,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-weight: 400;
    text-align: center;
    margin-top: 22px;
    margin-left: 2px;
  }

  @media (max-width: 991px) {
    .workspace-name {
      margin-top: 12px;
      font-size: 20px;
    }
  }

  .icon {
  width: 25px;
  height: 25px;
  margin-left: 15px;
  margin-top: 20px;
  display: block;
    }
  
  @media (max-width: 991px) {
    .icon {
    margin-left: 0px;
    margin-top: 20px;
    display: block;
    }
  }
  </style>
  