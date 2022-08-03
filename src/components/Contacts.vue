<template>
  <section
    class="contact"
    id="contacts"
    v-scroll-reveal.reset="{ duration: 1000 }"
  >
    <div class="container">
      <h2 class="section_title">{{ $t('contacts.title') }}</h2>

      <div class="section_content">
        <div class="contacts">
          <div class="contacts_list">
            <div class="contacts_inner">
              <p class="inner_subtitle">{{ $t('contacts.subtitle') }}</p>
              <ul class="list">
                <li class="list_item">
                  <i class="fas fa-map-marker-alt item_icon"></i>
                  <span class="item_text">{{
                    $t('contacts.items.address')
                  }}</span>
                </li>
                <li class="list_item">
                  <a
                    :href="`tel:${getContacts.phone.content}`"
                    class="item_text"
                  >
                    <i class="fas fa-phone item_icon"></i>
                    {{ getContacts.phone.title }}</a
                  >
                </li>
                <li class="list_item">
                  <span class="item_text">
                    <a
                      class="item_link"
                      :href="`mailto:${getContacts.email.content}`"
                    >
                      <i class="far fa-envelope item_icon"></i>
                      {{ getContacts.email.title }}</a
                    >
                  </span>
                </li>
                <li class="list_item">
                  <span class="item_text">
                    <a
                      class="item_link"
                      href="https://facebook.com/wisexpert"
                      target="_blank"
                      rel="noopener"
                    >
                      <i class="fab fa-facebook-f item_icon"></i>
                      {{ $t('contacts.items.facebook') }}</a
                    >
                  </span>
                </li>
                <li class="list_item">
                  <span class="item_text">
                    <a
                      class="item_link"
                      href="https://www.instagram.com/wisexpert_buh/"
                      target="_blank"
                      rel="noopener"
                    >
                      <i class="fab fa-instagram item_icon"></i>
                      {{ $t('contacts.items.instagram') }}</a
                    >
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="contacts_map">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GoogleMap from './utils/GoogleMap';
import contacts from '../assets/contacts';

export default {
  components: {
    GoogleMap,
  },
  computed: {
    getContacts() {
      return contacts;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.contact {
  padding-top: 30px;
  padding-bottom: 70px;
  background-color: #fafbfc;
}
.section_title {
  font-family: $titleFont;
  font-size: calc(20px + 1.5vmax);
  text-align: center;
  letter-spacing: 0.02em;
  color: $mainFontColor;
  margin-top: 6%;
  margin-bottom: 8%;
}

.contacts {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
}
.contacts_list {
  width: 33%;
  height: 600px;
}
.contacts_inner {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 100px;
}
.inner_subtitle {
  color: $mainFontColor;
  font-size: 30px;
  margin-bottom: 40px;
  padding-left: 10px;
}

.list_item {
  padding: 20px 10px 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.list_item:first-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 30px;
}
.list_item:nth-child(4) {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 30px;
}
.list_item:nth-child(2) {
  padding-top: 30px;
}
.list_item:nth-child(3) {
  padding-bottom: 30px;
}

.item_icon {
  color: $accentColor;
  margin-right: 20px;
  font-size: 22px;
}
.item_text {
  color: $mainFontColor;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
.item_link {
  color: $mainFontColor;
}

.contacts_map {
  width: 66%;
  height: 600px;
}

@media screen and (max-width: 768px) {
  .contacts_map {
    width: 100%;
  }
  .contacts_list {
    width: 100%;
    height: auto;
  }
  .contacts_inner {
    padding-top: 40px;
    padding-bottom: 10px;
  }
  .inner_subtitle {
    margin-bottom: 20px;
    padding-left: 10px;
    text-align: center;
  }

  .contacts {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
  }
}
</style>
