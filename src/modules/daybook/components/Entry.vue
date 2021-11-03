<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex gap-2">
      <span class="text-primary fw-bold">{{ day }}</span>
      <span class="">{{ month }}</span>
      <span class="fw-bold">{{ yearDay }}</span>
    </div>

    <div class="entry-description">
      <p class="pt-2">
        {{ shortText }}
      </p>
    </div>
  </div>
</template>

<script>
import getDayMonthYear from '../helpers/getDayMonthYear';

export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },

  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + '...'
        : this.entry.text;
    },

    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 0.5px solid #42b983;
  transition-property: background-color;
  transition-duration: 200ms;
  /* transition: 1s all ease-in; */

  &:hover {
    background-color: lighten($color: grey, $amount: 45);

    transition-duration: 200ms;
    /* transition: 1s all ease-in; */
  }
}

.entry-description {
  text-align: justify;

  p {
    font-size: 15px;
  }
}
</style>
