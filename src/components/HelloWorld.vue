<template>
<!--    <ul>-->
<!--      <li v-bind:key="item.id" v-for="item in fileInfos" @click="selectFile(item)">{{item.name}}</li>-->
<!--    </ul>-->
  <el-input v-model="dirPath" placeholder="Please input" />
  <el-button type="primary" @click="searchDir">Primary</el-button>
  <el-table :data="fileInfos" style="width: 100%"  @row-click="selectFile" >
    <el-table-column prop="name" label="文件名" />
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data(){
    return {
      dirPath: "",
      fileInfos: []
    }
  },
  methods: {
    searchDir(){
      console.log(this.dirPath)
      if(this.dirPath == "" || this.dirPath == null){
        return;
      }
      this.searchDirApi(this.dirPath)
    },
    searchDirApi(dirPath){
      axios.postForm("/getDirFiles",{
        dirPath: dirPath
      }).then((res) => {
        console.log(res)
        // eslint-disable-next-line vue/no-mutating-props
        this.fileInfos = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    selectFile(file){
      console.log(file.path)
      console.log(file.file)
      if(file.file){ //下载文件
        axios.postForm("/downFile",{
          filePath: file.path
        },{
          responseType: "blob"
        }).then((res) => {
          console.log(res);
          let blob = new Blob([res.data]);
          let url = window.URL.createObjectURL(blob); // 创建 url 并指向 blob
          let a = document.createElement('a');
          a.href = url;
          a.download = file.name;
          a.click();
          window.URL.revokeObjectURL(url); // 释放该 url
        }).catch((err) => {
          console.log(err)
        })
      }else { //获取目录下的文件
       this.searchDirApi(file.path)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
