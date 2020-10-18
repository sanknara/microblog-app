<template>
  <div>
    <div class="like">
      <button @click="like">❤️</button>
      <div>{{ post.likes }}</div>
    </div>
    <Hashtag v-for="tag in post.hashtags" :key="tag.id" :hashtag="tag" />
  </div>
</template>
<script>
import Hashtag from "./Hashtag";
import { store } from "../store";
export default {
  components: {
    Hashtag,
  },
  props: {
    post: {
      type: Object,
    },
  },
  setup(props) {
    const like = () => {
      store.incrementLikes(props.post);
    };
    return {
      like,
    };
  },
};
</script>
<style scoped>
.like {
  display: flex;
  justify-content: center;
  margin: 10px;
}
button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>