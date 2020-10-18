<template>
  <label for="search">Search Hashtag: #</label>
  <input type="text" :value="currentHashtag" @input="setHashtag" />
  <div class="cards">
    <Card v-for="(post, index) in filteredPosts" :key="index">
      <template v-slot:title> {{ post.title }} </template>
      <template v-slot:content>
        {{ post.content }}
        <a href="https://v3.vuejs.org/guide/introduction.html">Learn More</a>
      </template>
      <template v-slot:description>
        <Controls :post="post" />
      </template>
    </Card>
  </div>
</template>
<script>
import { store } from "../store";
import Card from "./Card.vue";
import Controls from "./Controls.vue";
import { computed } from "vue";
export default {
  components: {
    Card,
    Controls,
  },
  setup() {
    const setHashtag = (event) => {
      store.onHashClick(event.target.value);
    };
    return {
      filteredPosts: store.filteredPosts,
      currentHashtag: computed(() => store.state.currentHashtag),
      setHashtag,
    };
  },
};
</script>
<style scoped>
input {
  height: 30px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
}
.cards {
  margin: 5px 0;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}
.title {
  height: 40px;
}
.content {
  height: 150px;
}
</style>