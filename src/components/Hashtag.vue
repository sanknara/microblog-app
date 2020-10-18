<template>
  <div class="hashtag" @click="onHashClick">
    <span> #{{ hashtag }}</span>
  </div>
</template>
<script>
import { store } from "../store";
export default {
  props: {
    hashtag: {
      type: String,
    },
  },
  setup(props) {
    function onHashClick() {
      store.onHashClick(props.hashtag);
    }

    return {
      onHashClick,
    };
  },
};
</script>
<style scoped>
.hashtag {
  text-decoration: underline;
}

.hashtag:hover {
  color: cornflowerblue;
}
</style>