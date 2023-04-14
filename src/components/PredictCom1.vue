<template>
  <div class="predictcom1">
    <el-form :label-position="labelPosition" :model="form" status-icon :rules="rules" ref="form" label-width="120px" class="demo-form">
      <iframe :src="src" id='myiframe' ref="iframe" width=700px height=600px
              frameborder=”0” border=”0″ marginwidth=”0″ marginheight=”0″ scrolling="no" prop="demo"
              v-if="hackReset == true"
      ></iframe>
      <!--smiles-->
      <el-form-item label="smiles" prop="smiles" >
        <el-input  :disabled=!noEditSmiles v-model="form.smiles" placeholder="Please enter the smiles"></el-input>&nbsp;
        <el-button :disabled=!noEditSmiles type="primary"  @click="getSmiles()">smiles</el-button>
      </el-form-item>
      <!--file_type-->
      <el-form-item label="file_type" prop="file_type">
        <el-radio-group v-model="form.file_type" @click="clearSmiles()">
          <el-radio label="smiles" >smiles</el-radio>
          <el-radio label="sdf">sdf</el-radio>
        </el-radio-group>
      </el-form-item>
      <!--upload sdf file-->
      <el-form-item v-show=!noEditSmiles label="Upload sdf" prop="sdfpath">
        <UploadCom :isData="false"
                   tipmsg="Upload the SDF file to generate molecular configuration"
                   @func="getSDF"
                   v-if="hackReset == true" :disabled=noEditSmiles
        ></UploadCom>
      </el-form-item>
      <!--email-->
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" autocomplete="True" placeholder="Please enter your email address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">submit</el-button>
        <el-button @click="resetForm('form')">reset</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import {getListen} from '@/api/Post'

import UploadCom from "@/components/UploadCom";
import {ref, watch} from 'vue'
export default {
  name: "PredictCom1",
  components: {
    UploadCom,
  },

  data() {
    var check = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Could not be empty'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please enter a numeric value'));
        } else {
          callback();
        }
      }, 500);
    };
    return {
      src: './static/demo.html',
      iframeWin: {},
      labelPosition:'left',
      ifrun:false,//ifrun==true,show pid
      hackReset: true,
      noEditSmiles: true,
      form:{
        smiles:'',
        sdfPath:'',
        file_type: 'smiles',
        email:''
      },
      rules:{
        email:[
          {required: true, message: 'Please enter your email address', trigger: 'blur' },
          { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
        ],

      }
    }
  },
  props: {
    url: String,
  },
  methods: {
    getSmiles() {
      if(this.$refs.iframe.contentWindow.new_smiles){
        this.form.smiles = this.$refs.iframe.contentWindow.new_smiles
        this.$refs.iframe.contentWindow.jsmeApplet.reset()
      }
    },
    getSDF(data){
      this.form.sdfPath=data
    },
    clearSmiles(){
      this.form.smiles=''
    },
    submitForm(formName) {
      var checkS = this.checkSubmit()
      this.$refs[formName].validate((valid) => {
        if (valid && checkS) {
          // 发送请求
          getListen(this.url,this.form).then(res=>{
            this.ifrun = true
            this.$notify({
              title: 'AlphaMX Successfully submitted',
              message: 'Please check the results email',
              type: 'success'
            });
          }).catch(err=>{
            // console.log(err);
            this.$alert(err, 'Run failed', {
              confirmButtonText: 'confirm',})
          })
        }else{
          this.$alert('Input information is incomplete or incorrect','Submit failed', {
            confirmButtonText: 'confirm',
            type: 'warning'})
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.hackReset = false
      this.$nextTick(() => {
        this.hackReset = true;
      });
    },
    checkSubmit() {
      if (this.form.file_type=='sdf' && this.form.sdfPath==''){
        return false
      }else {
        return true
      }
    },
  },
  watch:{
    'form.file_type': function (newValue, oldValue){
      if(newValue=='sdf'){
        this.noEditSmiles = false
      }else {
        this.noEditSmiles = true
      }
    },
  }
}

</script>

<style scoped>
.el-button{
  width:120px;
  height:40px;

}
.el-input{
  width:410px;
}
.el-card {
  width: 48%;
}
.contitle {
  font-size: 20px;
  text-shadow: 5px 5px 5px black, 0px 0px 2px #535C64, 2px 2px 3px #535C64;
  text-indent: 1em;
}
</style>
