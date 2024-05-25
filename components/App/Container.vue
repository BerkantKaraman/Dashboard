<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;

  @mixin breakpoints($breakpoint) {
    @if $breakpoint == xxl {
      @media only screen and (min-width: 1600px) {
        @content;
      }
    }

    @if $breakpoint == xl {
      @media only screen and (min-width: 1200px) {
        @content;
      }
    }

    @if $breakpoint == lg {
      @media only screen and (min-width: 992px) {
        @content;
      }
    }

    @if $breakpoint == md {
      @media only screen and (min-width: 768px) {
        @content;
      }
    }

    @if $breakpoint == sm {
      @media only screen and (min-width: 576px) {
        @content;
      }
    }
    @if $breakpoint == xs {
      @media only screen and (min-width: 300px) {
        @content;
      }
    }
  }

  @include breakpoints(xs) {
    max-width: 100%;
  }

  @include breakpoints(sm) {
    max-width: 540px;
  }

  @include breakpoints(md) {
    max-width: 720px;
  }

  @include breakpoints(lg) {
    max-width: 940px;
  }

  @include breakpoints(xl) {
    max-width: 1140px;
  }

  @include breakpoints(xxl) {
    max-width: 1500px;
  }
}
</style>
