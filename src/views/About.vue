<template>
  <div class="about">
    <a-button  @click="getJson" type="primary">获取json</a-button>
  </div>
</template>
<script>
export default {
  computed: {
    json() {
      return this.data;
    }
  },
  methods: {
    getJson() {

    }
  },
}
</script>
