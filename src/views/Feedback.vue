<template>
  <div class="feedback">
   <p>
    <span class="title">意见反馈</span>
    <span class="back" @click="back">返回</span>
   </p>
   <div class="content">
     <el-input
      class="feedback-textarea"
      type="textarea"
      :maxlength="200"
      :minlength="1"
      :clearable="true"
      :show-word-limit="true"
      :autosize="{ minRows: 8, maxRows: 10}"
      placeholder="请简述要描述反馈的问题或意见。。。"
      @blur="checkFeedbackVal"
      v-model="feedbackVal"/>
    <el-input
      class="feedback-phone"
      clearable
      v-model.trim="phoneNumber"
      @blur="checkoutPhoneNumber"
      placeholder="联系电话：选填，方便我们与您联系"/>
    <div class="feddback-time">
      <p>请选择问题发生的时间</p>
      <el-date-picker
        class="pick-date"
        v-model="date"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerDate"/>
      <el-time-select
        class="pick-time"
        v-model="time"
        :picker-options="pickTime"
        placeholder="选择时间"/>
    </div>
     <el-button class="submit-btn" type="primary" round @click="submitMsg">提 交</el-button>
   </div>
  </div>
</template>

<script>
export default {
  name: 'feedback',
  data () {
    return {
      time: '',
      date: '',
      feedbackVal: '',
      phoneNumber: '',
      pickTime: {
        start: '00:00',
        step: '00:30',
        end: '24:00'
      },
      pickerDate: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.emit('pick', date)
          }
        }]
      }
    }
  },
  methods: {
    // 提交意见反馈信息
    submitMsg () {
      this.checkFeedbackVal() && this.checkoutPhoneNumber() && this.$message.success('您的反馈意见，提交成功')
    },
    // 反馈意见必填
    checkFeedbackVal () {
      if (this.feedbackVal.trim() === '' || !this.feedbackVal) {
        this.$message.error('请填写您要反馈的意见')
        return false
      } else {
        return true
      }
    },
    // 校验输入的手机是否正确
    checkoutPhoneNumber () {
      if (this.phoneNumber.trim() === '') return true
      if (/^1[3456789]\d{9}$/.test(this.phoneNumber)) {
        this.$message({ message: '手机号正确', type: 'success' })
        return true
      } else {
        this.$message({ message: '输入的手机号无效或格式不正确', type: 'error' })
        return false
      }
    },
    back () { this.$router.go(-1) }
  }
}
</script>

<style scoped>
.submit-btn {
  width: 15vw;
  position: absolute;
  bottom: 25%;
  transform: translate(-50%, -50%);
  left: 50%;
}
.pick-time {
  float: right;
  margin-top: 20px;
}
.pick-date {
  margin-top: 20px;
  float: left;
}
.feddback-time {
  text-align: left;
  margin: 20px 10px;
  padding: 15px 0;
  width: 50vw;
  position: absolute;
  top: 57%;
  transform: translate(-50%, -50%);
  left: 50%;
}
.feedback-phone {
  margin: 20px 10px;
  width: 50vw;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.feedback-textarea {
  margin: 20px 10px 10px;
  width: 50vw;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.back:hover {
  color: #409eff;
}
.back {
  float: right;
  margin: 10px 15px 0 0;
  cursor: pointer;
}
.title {
  font-size: 24px;
}
.feedback{
  position: relative;
  height: 100vh;
  color: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
