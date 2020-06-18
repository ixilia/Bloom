<template>
  <img
    class="HinaLogo"
    alt="Hina Logo"
    src="https://cdn.discordapp.com/attachments/488810702190936075/721268079451177050/logo.png"
  >
</template>

<style>
  .HinaLogo {
    height: 180px;
    width: 180px;
    transform: rotateY(560deg);
    animation: turn 3.5s ease-out forwards 1s;
  }

  @keyframes turn {
    100% {
      transform: rotateY(0deg);
    }
  }
</style>
