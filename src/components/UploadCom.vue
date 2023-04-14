<template>
  <div class="uploadcom">
      <el-upload
          class="upload-demo"
          action="http://192.168.108.188:8085/upload"
          method="post"
          :multiple="false"
          name="file"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-success="handleSuccess"
          :on-error="handleError"
          :accept="acceptType"
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList">
        <el-tooltip placement="left" >
          <template #content>{{ tipmsg }}<br/> {{ msg }}</template>
          <el-button type="primary">Click to upload</el-button>
        </el-tooltip>
      </el-upload>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "UploadCom",
  data(){
    return {
      fileList: [],
      filePath:'',
      msg:'Only sdf files can be uploaded',
      acceptType:'.sdf'
    }
  },
  props: {
    isData:Boolean,
    tipmsg:String
  },
  methods: {
    handleRemove() {
    },
    handlePreview() {
    },
    handleExceed(files, fileList) {
      this.$message.warning(`The current limit to choose a file, the chose ${files.length} file，a total of ${files.length + fileList.length} files`);

    },
    beforeRemove(file) {
      return this.$confirm(`Cancel the transfert of ${ file.name }?`);
    },
    handleSuccess(res){
      this.filePath = res.filePath
      this.$message.success('Upload successfully');
      this.$emit('func',res.filePath)

    },
    handleError(){
      this.$alert('Upload failed! Only sdf files can be uploaded!');
    },
  },
  created(){
    if(!this.isData){
      this.msg = 'Only sdf files can be uploaded'
      this.acceptType = '.sdf'
    }
  },
  computed:{
    ...mapState(['sdfPath'])
  }
}
</script>

<style scoped>
.el-button{
  width:120px;
  height:40px;
  font-size:15px
}
.upload-demo {
  width:500px;
}
</style>
