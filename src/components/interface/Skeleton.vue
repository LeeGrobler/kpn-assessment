<!-- credit: https://codepen.io/chris__sev/pen/mdrzYQE -->

<template>
  <div class="card is-loading">
    <div class="image"></div>
    <div class="content">
      <h2></h2>
      <p></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    background: #fff;
    border-radius: 0.313rem;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.05);

    .content {
      padding: 1.25rem 1.875rem;

      p {
        margin-top: 1.25rem;
      }
    }
  }

  .card.is-loading {
    .image,
    h2,
    p {
      background: #eee;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      border-radius: 0.313rem;
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }

    .image {
      height: 12.5rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    h2 {
      height: 1.875rem;
    }

    p {
      height: 4.375rem;
    }
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
</style>
