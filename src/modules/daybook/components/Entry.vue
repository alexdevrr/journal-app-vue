<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex gap-2">
      <span class="text-primary fw-bold">{{ day }}</span>
      <span class="">{{ mouth }}</span>
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
const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const days = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

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
      const date = new Date(this.entry.date);
      console.log(this.entry.date);
      return date.getDate();
    },
    mouth() {
      const date = new Date(this.entry.date);
      return months[date.getMonth()];
    },
    yearDay() {
      const date = new Date(this.entry.date);
      return ` ${date.getFullYear()}, ${days[date.getDay()]} `;
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
