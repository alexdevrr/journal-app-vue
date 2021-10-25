<template>
  <nav class="navbar bg-dark">
    <div class="container d-flex flex-column flex-md-row">
      <!-- Container left -->
      <div class="d-flex gap-3 align-items-center">
        <img src="@/assets/logo.png" alt="vue-logo" height="50" />
        <a class="navbar-brand link-primary" href="#">Home</a>
      </div>

      <!-- Container right -->
      <div class="d-flex">
        <button class="btn btn-outline-info my-3 my-md-0" href="#">
          <i class="fa fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  </nav>
</template>
