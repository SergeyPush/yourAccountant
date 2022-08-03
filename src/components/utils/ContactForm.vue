<template>
  <div class="contact-form" :class="shadow ? 'shadow' : null">
    <form @submit.prevent="sendEmail({ formdata, parent })">
      <div class="input-form">
        <span
          v-if="!validators.formIsValid && !validators.nameIsValid"
          class="validation"
          >{{ $t('contactForm.validatename') }}</span
        >
        <input
          type="text"
          :placeholder="$t('contactForm.name')"
          class="name"
          v-model="formdata.name"
        />
      </div>

      <div class="input-form">
        <span
          v-if="!validators.formIsValid && !validators.phoneIsValid"
          class="validation"
          >{{ $t('contactForm.validatephone') }}</span
        >
        <input
          type="text"
          :placeholder="$t('contactForm.phone')"
          class="phone"
          v-model="formdata.phone"
          v-mask="'+38(###)###-##-##'"
          ref="phone"
        />
      </div>

      <textarea
        cols="30"
        rows="10"
        :placeholder="$t('contactForm.question')"
        class="question"
        v-model="formdata.question"
      ></textarea>
      <button class="submit">{{ buttonText }}</button>
      <p class="data">{{ $t('contactForm.yourData') }}</p>
    </form>
    <app-success v-if="messageIsDisplayed"></app-success>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  props: ['buttonText', 'shadow'],
  data() {
    return {
      formdata: {
        name: '',
        phone: '',
        question: '',
      },
      parent: this.$parent.$data.formData,
      validators: {
        nameIsValid: false,
        phoneIsValid: false,
        formIsValid: true,
      },
      messageIsDisplayed: false,
    };
  },
  methods: {
    validateForm() {
      this.validators.formIsValid = false;
      if (this.formdata.name.length > 0) {
        this.validators.nameIsValid = true;
      }
      if (this.formdata.phone.length === 17) {
        this.validators.phoneIsValid = true;
      }
      this.validators.formIsValid =
        this.validators.nameIsValid && this.validators.phoneIsValid;
    },
    displayMessage() {
      this.messageIsDisplayed = true;
      setTimeout(() => {
        this.messageIsDisplayed = false;
      }, 2000);
    },

    sendEmail(data) {
      this.validateForm();
      if (this.validators.formIsValid === false) {
        return;
      }

      this.displayMessage();

      emailjs
        .send(
          'wegmail',
          'template_sbRg0J0U',
          data,
          'user_5p0b4IT3bwkF3nOhn3S5L'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.formdata.name = '';
            this.formdata.phone = '';
            this.formdata.question = '';
            this.$parent.$data.formData = {
              form: [],
              system: [],
              type: [],
              additionally: [],
              employees: [],
            };
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
.contact-form {
  max-width: 350px;
  padding: 30px 30px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
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
.phone,
.question {
  border-radius: 6px;
  font-family: $mainFont;
  &::placeholder {
    font-family: $mainFont;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.45);
  }
}
.name,
.phone {
  padding: 15px;
  font-weight: 300;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
}

.question {
  padding: 10px;
  font-weight: 300;
  font-size: 15px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
}
.submit {
  border-radius: 6px;
  padding: 15px;
  background: $accentColor;
  font-family: $mainFont;
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  filter: brightness(1);
  &:hover {
    opacity: 1;
    transition: all 0.3s ease-out;
    filter: brightness(0.9);
  }
}
.data {
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.6);
}
.input-form {
  position: relative;
}
.validation {
  color: #ec7063;
  font-weight: bolder;
  font-size: 15px;
  position: absolute;
  top: -16px;
}
.shadow {
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
}
</style>
