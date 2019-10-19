<template>
    <div class="panel panel-default">
      <template v-for="item of blogData">
         <div class="blog panel-body" :key="item.id">
        <h4 class="blog-title" @click="$router.push({name: 'details-id', params: { id: item.id }})">
          <!-- <nuxt-link :to="{name: 'details-id', params: {id: item.id}}">{{item.title}}</nuxt-link> -->
          {{item.title}}
        </h4>
        <p class="blog-desc">{{item.desc_text}}</p>
        <div class="blog-author">
          作者：<span>{{item.author}}</span>
        </div>
      </div>
    </template>
  </div> 
</template>

<script>
import { getList } from '~/api/blog'
export default {
  async asyncData() {
    let data = await getList()
    return { blogData: data.data }
  },
  methods: {
   
  },
  mounted() {
    console.log(this.blogData)
  },
}
</script>

<style scoped>
.blog {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #fff;
  opacity: .8;
  cursor: pointer;
}
.blog-title {
  white-space:normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

</style>
