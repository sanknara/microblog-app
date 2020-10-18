import { reactive, computed } from 'vue';
import { testPosts } from './vuePosts.js'

class Store {
    constructor() {
        this.state = reactive({
            posts: testPosts,
            currentHashtag: null
        })
    }

    get filteredPosts() {
        return computed(() => {
            if (!this.state.currentHashtag) {
                return store.state.posts;
            }
            return this.state.posts.filter((post) =>
                post.hashtags.some((hashtag) =>
                    hashtag.toLowerCase()
                        .includes(this.state.currentHashtag.toLowerCase())
                )
            );
        });
    }

    onHashClick(tag) {
        this.state.currentHashtag = tag;
    }

    incrementLikes(post) {
        const thePost = this.state.posts.find(x => x.id === post.id)

        if (!thePost) {
            return
        }
        thePost.likes++;
    }
}

export const store = new Store();