<template>
  <div class="details">
    <!-- <mavon-editor class="my-editor" v-model="blogData.content"/> -->
    <div class="markdown-content" v-html="blogContent"></div>
  </div>
</template>

<script>
import { detail } from "../../api/blog"
import marked from "marked"
import atob from "atob"
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default {
  async asyncData({params}) {
    let data = await detail(params.id)
    let decode = atob(data.data.content);
    let markdowncontent = decodeURI(decode);
    let markedHtml = marked(markdowncontent)
    return {blogContent: markedHtml}
  }
}
</script>

<style>
@import url("../../assets/css/sspai.css");
.markdown-content {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  opacity: .9;
}

</style>
