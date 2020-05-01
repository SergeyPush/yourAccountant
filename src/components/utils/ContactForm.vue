<template>
  <div class="contact-form">
    <form @submit.prevent="sendEmail(formdata)">
      <input type="text" :placeholder="$t('contactForm.name')" class="name" v-model="formdata.name" />
      <input
        type="text"
        :placeholder="$t('contactForm.phone')"
        class="phone"
        v-model="formdata.phone"
      />
      <textarea
        name
        id
        cols="30"
        rows="10"
        :placeholder="$t('contactForm.question')"
        class="question"
        v-model="formdata.question"
      ></textarea>
      <button class="submit">{{$t('contactForm.submitButton')}}</button>
      <p class="data">{{$t('contactForm.yourData')}}</p>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      formdata: {
        name: "",
        phone: "",
        question: ""
      }
    };
  },
  methods: {
    sendEmail: data => {
      emailjs
        .send("gmail", "template_sbRg0J0U", data, "user_5p0b4IT3bwkF3nOhn3S5L")
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  width: 350px;
  padding: 30px 30px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.name,
.phone,
.question,
.submit {
  display: block;
  width: 100%;
  margin-bottom: 25px;
}
.name,
.phone {
  padding: 15px;
  font-weight: 300;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.5);
}

.question {
  padding: 10px;
  font-weight: 300;
  font-size: 15px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.5);
}
.submit {
  padding: 15px;
  background: #eaa76c;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
}
.data {
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.6);
}
</style>