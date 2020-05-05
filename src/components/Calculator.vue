<template>
  <section class="calculator container" id="calculator">
    <h2 class="section_title">{{$t("calculator.title")}}</h2>
    <p class="section_subtitle">{{$t("calculator.subtitle")}}</p>
    <div class="section_content">
      <ContactForm :buttonText="$t('contactForm.buttonSecond')"></ContactForm>
      <div class="part1 parts">
        <div class="category">
          <p class="category_title">{{$t('calculator.form.title')}}</p>
          <label class="radio" v-for="(item, index) in getForm" :key="index">
            <input type="radio" name="form" :value="item" v-model="formData.form" />
            <span>{{item}}</span>
          </label>
        </div>
        <div class="category">
          <p class="category_title">{{$t('calculator.system.title')}}</p>
          <label class="radio" v-for="(item, index) in getSystem" :key="index">
            <input type="radio" name="system" :value="item" v-model="formData.system" />
            <span>{{item}}</span>
          </label>
        </div>

        <div class="category">
          <p class="category_title">{{$t('calculator.employees.title')}}</p>
          <input type="number" class="input" v-model="formData.employees" />
        </div>
      </div>
      <div class="part2 parts">
        <div class="category">
          <p class="category_title">{{$t('calculator.type.title')}}</p>
          <ul>
            <li v-for="(item, index,id) in getType" :key="index" class="list_item">
              <input
                type="checkbox"
                name="type"
                :value="item"
                v-model="formData.type"
                class="styled-checkbox"
                :id="`type${id}`"
              />
              <label :for="`type${id}`">{{item}}</label>
            </li>
          </ul>
        </div>
        <div class="category">
          <p class="category_title">{{$t('calculator.additionally.title')}}</p>
          <ul>
            <li v-for="(item, index,id) in getAdditionally" :key="index" class="list_item">
              <input
                type="checkbox"
                name="additionally"
                :value="item"
                v-model="formData.additionally"
                class="styled-checkbox"
                :id="`additionally${id}`"
              />
              <label :for="`additionally${id}`">{{item}}</label>
            </li>
          </ul>
        </div>
        <div class="category">
          <p class="category_title">{{$t('calculator.documents.title')}}</p>
          <input type="number" class="input" v-model="formData.documents" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "./utils/ContactForm";
export default {
  components: { ContactForm },
  data() {
    return {
      formData: {
        form: [],
        system: [],
        type: [],
        additionally: [],
        employees: []
      }
    };
  },
  computed: {
    getForm() {
      return this.$t("calculator.form.items");
    },
    getSystem() {
      return this.$t("calculator.system.items");
    },
    getType() {
      return this.$t("calculator.type.items");
    },
    getAdditionally() {
      return this.$t("calculator.additionally.items");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_radio.scss";
.calculator {
  padding-top: 20px;
  padding-bottom: 40px;
}
.section_title {
  font-family: $titleFont;
  font-size: 40px;
  text-align: center;
  letter-spacing: 0.02em;
  color: $mainFontColor;
  margin-top: 8%;
  margin-bottom: 1%;
}
.section_subtitle {
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 5%;
  padding: 0 10%;
}
.section_content {
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: space-around;
}
.parts {
  padding: 30px 20px 0 20px;
}

.category {
  min-height: 120px;
  margin-bottom: 30px;
}
.category_title {
  font-size: 20px;
  line-height: 26px;
  color: $accentColor;
}
.list_item {
  margin-top: 8px;
}
.input {
  padding: 15px;
  font-weight: 300;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 10px;
}
label {
  font-weight: 300;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
}
@media screen and (max-width: 770px) {
  .section_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    & :nth-child(1) {
      order: 3;
    }
  }
}
</style>