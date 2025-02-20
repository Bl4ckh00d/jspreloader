if(!window.initVar){
  window.initVar = {
    apiUrl: "https://cartbite-app-api.staqlab.com/grow",
    serviceWorkerUrl: "/apps/grow/grow/api/p/js/sw.js",
    subscriberNewUniqueIdUrl: "https://cartbite-app-api.staqlab.com/grow/api/subscribers/uniqueId",
    clientStatusUrl: "https://cartbite-app-api.staqlab.com/grow/api/clientStatus",
    clickNotificationUrl: "https://cartbite-app-api.staqlab.com/grow/api/workflows/event",
    subscribeUrl: "https://cartbite-app-api.staqlab.com/grow/api/subscriber",
    meta: {},
    vapidKey: "BO_o4CSbI86z7hzLoDvS4_fpWQPitP2JocR_JdueUKb193p8qEMJ2sCVSh1WHarE2yxa_zUFxuZc1d5VYuYqMWo",
    clientId: "8543V8T32MGM2L8BHYLWQCDK",
    pushOptInSetting: {"delay":86400,"message":{"body":"We will notify you about new products and exclusive promotions","title":"Never miss a sale","buttons":[{"label":"Later","order":1},{"label":"Allow","order":2}],"iconUrl":"stq/bell_oprzpo.png"},"isEnabled":false,"showModal":true,"initialDelay":10},
    subscriberId: '',
    stockFulFilledPushCampaign: {
      isActive: true,
      uniqueId: '72BK1IV2PERUWF68IXE9P6HM'
    },
    stockFulFilledEmailCampaign: {
      isActive: true,
      uniqueId: '4LHU9NVJHBNLFX3NE45RP4DA'
    },
    stockFulFilledSmsCampaign: {
      isActive: true,
      uniqueId: 'A3BNWR3ICAJ9B53K7WBSJJBL'
    },
    priceDropPushCampaign: {
      isActive: true,
      uniqueId: 'C2PN2F6NG4EF8QWSFFPXWAC1',
    },
    priceDropEmailCampaign: {
      isActive: true,
      uniqueId: 'HY8LZ8LASSDY8KXF6X4YTXLA',
    },
    priceDropSmsCampaign: {
      isActive: true,
      uniqueId: '8ZYB4RPU3VWP2KA35EQ4TVIV',
    },
    stockWidget: {
      selector: "gw-stock-fulfilled",
      isEnabled: true,
      popupSelector: "gw-stock-fulfilled-iframe",
      buttonType: "inline",
      inlineButtonParentSelector: ``,
      backgroundColor: "#000000",
      textColor: "#ffffff",
      subscriptionText: "Notify me when available",
      subscribedText: "We will notify you when the item is available",
      modalHtml: `<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue-tel-input@5.14.0"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-tel-input@5.14.0/dist/vue-tel-input.css"/>
  <script src="https://cdn.jsdelivr.net/npm/vue-select@3.0.0"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-select@3.0.0/dist/vue-select.css">

  <style>
    * {
      color: #353f4d;
    }

    .fade-in {
      background: rgba(0, 0, 0, 0.65)
    }

    .email-input {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      font: inherit;
      margin: 0 0 10px 0;
      font-family: inherit;
      display: block;
      width: 100%;
      color: #555555;
      /*background-color: #ffffff;*/
      background-image: none;
      /*box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%);*/
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
      height: 46px;
      padding: 10px 16px;
      line-height: 1.3333333;
      border-radius: 4px;
      background-color: #eee !important;
      border-color: #eee !important;
      border-style: solid;
      border-width: 1px;
      font-size: 15px;
    }

    .vue-tel-input input {
      font-size: 15px;

    }

    .vue-tel-input, .vue-tel-input:focus-within {
      box-shadow: none;
      height: 46px;
      border-style: solid;
      border-width: 1px;
      border-radius: 4px;
      font-size: 17px;
      margin: 0 0 10px 0;
    }

    .vue-tel-input:focus-within input {
      background-color: #eee !important;
    }

    .vti__dropdown-list.below {
      top: 45px;
    }

    .vue-tel-input:focus-within {
      outline: -webkit-focus-ring-color auto 1px;
      background-color: #eee !important;
    }

    .vti__dropdown.open {
      outline: none;
      background: transparent;
    }

    .modal-container {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      font-size: 14px;
      line-height: 1.42857143;
      -webkit-font-smoothing: antialiased;
      color: #333333;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 30px 40px 20px 40px;
      position: fixed;
      width: 460px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
      font-family: Helvetica, sans-serif;
      background: #ffffff;
      border-color: #000000;
      border-width: 1px;
      border-style: solid;
    }

    @media only screen and (max-width: 480px) {
      .modal-container {
        width: 370px;
      }
    }

    .modal-title {
      margin: 0;
      font-size: 22px;
      font-weight: 500;
      margin: 0;
      line-height: 1.42857143;
    }

    .notify-button {
      font-weight: bold;
      font-size: 15px;
      padding: 14px;
      color: #ffffff;
      background-color: #000000;
      border-color: #000000;
      border-radius: 25px;
      width: 100%;
      margin-top: 15px;
      cursor: pointer;
    }

    .notification-message {
      margin-top: 3px;
    }

    .close-icon {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      font: inherit;
      margin: 0;
      overflow: visible;
      text-transform: none;
      font-family: inherit;
      float: right;
      font-size: 15px;
      font-weight: bold;
      line-height: 1;
      text-shadow: 0 1px 0 #ffffff;
      opacity: 0.5;
      color: #cccccc;
      padding: 0;
      cursor: pointer;
      background: transparent;
      border: 0;
      appearance: none;
      margin-right: -25px;
      margin-top: -20px;
    }

    .close-icon:hover {
      color: #0b0d0f;
      cursor: pointer;
    }

    .privacy-text {
      font-size: 11px;
      margin-bottom: 0;
    }

    /*input[type=checkbox] {*/
    /*  height: 0;*/
    /*  width: 0;*/
    /*  visibility: hidden;*/
    /*}*/

    /*label {*/
    /*  cursor: pointer;*/
    /*  text-indent: -9999px;*/
    /*  width: 40px;*/
    /*  height: 20px;*/
    /*  background: grey;*/
    /*  display: block;*/
    /*  border-radius: 100px;*/
    /*  position: relative;*/
    /*}*/

    /*label:after {*/
    /*  content: '';*/
    /*  position: absolute;*/
    /*  top: 0px;*/
    /*  left: 0px;*/
    /*  width: 20px;*/
    /*  height: 20px;*/
    /*  background: #fff;*/
    /*  border-radius: 90px;*/
    /*  transition: 0.3s;*/
    /*}*/

    /*input:checked + label {*/
    /*  background: #e3f3fc;*/
    /*}*/

    /*input:checked + label:after {*/
    /*  left: calc(100% - 0.5px);*/
    /*  transform: translateX(-100%);*/
    /*  background: #48b0f7*/
    /*}*/

    [v-cloak] {
      display: none;
    }

    .gw-success-message.complete {
      display: block;
    }

    .alert-success {
      background-color: #dff0d8;
      border-color: #dff0d8;
      color: #3c763d;
    }

    .gw-success-message {
      display: none;
    }

    .alert {
      padding: 6px 10px;
      font-size: 13px;
      margin: 15px 0;
    }

    .marketing-container {
      margin-top: 30px;
      display: flex;
    }

    .marketing-container-label {
      margin-left: 5px;
    }

    .gw-branding-powered-by {
      margin-bottom: -10px;
      float: right;
      display: flex;
      align-items: center;
      margin-top: 30px;
      justify-content: center;
      margin-right: -24px;
    }

    .gw-branding-powered-by span img {
      margin-left: 6px;
      width: 100px;
    }

    .channel-selector {
      display: flex;
    }

    .channel-selector .btn-group {
      width: 50%;
    }

    .channel-selector .btn-group button {
      width: 100%;
      font-size: 14px;
      padding: 9px;
      margin-bottom: 30px;
      margin-top: 15px;
      letter-spacing: 0.8px;
      border: none;
    }

    .channel-selector .btn-group button.active {
      background-color: #0b2e13;
      color: white;
    }

    #email-tab {
      border-radius: 4px 0px 0px 4px;
      border-color: transparent;
    }

    #sms-tab {
      border-radius: 0px 4px 4px 0px;
      border-color: transparent;
    }

    #variant-container {
      margin-bottom: 30px;
      margin-top: 25px;
      font-size: 17px;
    }

    .channel-variant-gap {
      margin-top: -15px;
    }

    @media only screen and (max-width: 480px) {
      .modal-title {
        font-size: 18px;
      }
    }

    .hide-block {
        position: absolute;
        visibility: hidden;
        opacity: 0;
    }
    .show-block {
        position: relative;
        visibility: visible;
        opacity: 1;
    }
  </style>

  <style>
    .modal-title{
}
.notification-message{
}
.email-input{
}
.notify-button{
}
.privacy-text{
}
.close-icon{
}
.channel-selector .btn-group button.active {
}

  </style>
</head>
<body class="fade-in pop-up-container">
<div class="modal" v-cloak id="el">
  <div class="modal-container">
    <button type="button" class="close-icon action-close"
            data-dismiss="modal"
            @click.prevent="closeModal">X
    </button>
    <h3 class="modal-title">NOTIFY ME WHEN AVAILABLE</h3>
    <p class="notification-message">We will notify you when the product is back in stock</p>

    <div id="variant-container" v-if="showVariantSelectorInput()">
      <div :key="variantKey">
        <v-select
          @input="variantChanged()"
          :options="variants" label="text" :reduce="item => item.value"
          v-model="selectedVariant"
          style="margin-top: 5px"></v-select>
      </div>
    </div>

    <div :class="{'channel-selector':true,'channel-variant-gap':showVariantSelector}" v-if="showChannelSelector()">
      <div class="btn-group">
        <button type="button" :class="'btn btn-default '+ (selectedChannel==='email'?'active':'')" id="email-tab"
                @click="()=>{selectedChannel='email'}"
        >Email
        </button>
      </div>
      <div class="btn-group">
        <button type="button" :class="'btn btn-default '+ (selectedChannel==='sms'?'active':'')" id="sms-tab"
                @click="()=>{selectedChannel='sms';changePhoneNumberPlaceholder()}"
        >SMS
        </button>
      </div>
    </div>
    <template v-if="selectedChannel==='email'">
      <input class="email-input" :placeholder="emailPlaceholder"
             v-model="email" @change="emailChanged()">
      <small style="color: red" v-if="!isEmailValid">Please Provide Valid Email</small>
    </template>
    <template v-if="selectedChannel==='sms'">
      <vue-tel-input v-model="phoneNumber"
                     :default-country="getDefaultCountry()"
                     @input="phoneNumberChanged()"
                     @open="onDropdownOpen(true)"
                     v-on:country-changed="countryChanged"
                     @close="onDropdownOpen(false)">
        <template v-slot:arrow-icon>
          <span v-if="phoneNumberDropDown">▲</span>
          <span v-else>▼</span>
        </template>
      </vue-tel-input>
      <small style="color: red" v-if="!isPhoneNumberValid">Please Provide Valid Contact Number</small>
      <small style="color: red" v-if="!isCountryCodeValid">Please Select Country</small>
    </template>

    <!--    <input type="checkbox" id="switch" /><label for="switch">Toggle</label>-->
    <div style="display: flex;width: 100%;justify-content: center">
      <button class="notify-button"
              @click="notifyButtonClicked">
        Notify Me
      </button>
    </div>
    <div  :class="'gw-success-message alert alert-success complete '+(!this.dataEntered?'hide-block':'show-block')">
        <span class="success-text">Your notification has been registered.</span>
      <a href="#"
         class="action-close close-text"
         @click.p.prevent="closeModal">Close</a>
    </div>

    <div class="marketing-container" v-if="shopifyMailingListEnabled">
      <input type="checkbox" class="marketing-container-input" name="accepts_marketing"
             id="accepts_marketing" v-model="optInToMarketing">
      <label class="marketing-container-label" for="accepts_marketing">Signup for newsletter?</label>
    </div>
    <p class="privacy-text">We respect your privacy and do not share your email with anyone.</p>

    <p class="gw-branding-powered-by" v-if="showBranding()">Powered By <span>
      </span>
    </p>
  </div>
</div>
</body>
<script>
  Vue.component('v-select', VueSelect.VueSelect);
  window.onload = function () {
    window.growCampaignPopUp = new Vue({
      el: "#el",
      data: {
        iFrameId: "gw-stock-fulfilled-iframe",
        heading: "heading",
        subheading: "We will notify you when the product is back in stock",
        notifyButtonTitle: "Notify Me",
        privacyText: "We respect your privacy and do not share your email with anyone.",
        emailWorkflowUniqueId: "4LHU9NVJHBNLFX3NE45RP4DA",
        smsWorkflowUniqueId: "A3BNWR3ICAJ9B53K7WBSJJBL",
        successText: "Your notification has been registered.",
        successCloseText: "Close",
        optInMarketingText: "Signup for newsletter?",
        email: "",
        phoneNumber: '',
        phoneNumberCountryDetails: {},
        phoneNumberDropDown: false,
        dataEntered: false,
        isEmailValid: true,
        isPhoneNumberValid: true,
        isCountryCodeValid: true,
        optInToMarketing: true,
        shopifyMailingListEnabled: false,
        brandingEnabled: false,
        emailInputEnabled: true,
        smsInputEnabled: false,
        selectedChannel: 'email',
        variants: [],
        variantKey: "vk-",
        selectedVariant: '',
        showVariantSelector: false,
        emailPlaceholder: 'Email Address',
        phoneNumberPlaceholder: 'Enter a phone number'
      },
      methods: {
        closeModal() {
          parent.initVar.closePopUp(this.iFrameId)
        },
        emailChanged() {
          this.isEmailValid = true
        },
        phoneNumberChanged() {
          this.isPhoneNumberValid = true
        },
        checkEmail(email) {
          return parent.initVar.checkEmail(email)
        },
        checkPhoneNumber(phoneNumber) {
          return parent.initVar.checkPhoneNumber(phoneNumber)
        },
        notifyButtonClicked() {
          if (this.selectedChannel === 'email' && !this.checkEmail(this.email)) {
            this.isEmailValid = false;
            return;
          }
          let countryCode = this.phoneNumberCountryDetails.dialCode
          if (this.selectedChannel === 'sms') {
            if (!this.checkPhoneNumber(this.phoneNumber)) {
              this.isPhoneNumberValid = false;
              return
            }
            if (!countryCode) {
              console.error("Invalid Country Data", this.phoneNumberCountryDetails)
              this.isCountryCodeValid = false;
              return
            }
          }
          if (this.successText && this.successCloseText) {
            this.dataEntered = true;
            setTimeout(() => {
              this.closeModal()
            }, 2900);
          } else {
            this.closeModal()
          }
          if (this.selectedChannel === 'email') {
            parent.initVar.campaignPopUpNotifyButtonClicked(this.iFrameId, this.emailWorkflowUniqueId,
              this.email, this.optInToMarketing)
          }
          if (this.selectedChannel === 'sms') {
            parent.initVar.campaignPopUpNotifyButtonClicked(this.iFrameId, this.smsWorkflowUniqueId,
              {
                smsTarget: this.phoneNumber,
                smsDialCode: countryCode,
              }, this.optInToMarketing)
          }
        },
        onDropdownOpen(value) {
          this.phoneNumberDropDown = value
        },
        changePhoneNumberPlaceholder() {
          let count = 0;
          let interval = setInterval(() => {
            console.log("Changing SMS Placeholder")
            if (count === 100) {
              clearInterval(interval)
            }
            count++;
            if (document.querySelector('[name=telephone]')) {
              document.querySelector('[name=telephone]').placeholder = this.phoneNumberPlaceholder;
              clearInterval(interval)
            }
          }, 50)
        },
        showChannelSelector() {
          if (this.emailInputEnabled && this.smsInputEnabled) {
            return true
          }
          return false
        },
        countryChanged(country) {
          this.phoneNumberCountryDetails = country;
          this.isCountryCodeValid = true;
          console.log(country)
        },
        variantChanged() {
          parent.initVar.variantChangedFromModal(this.selectedVariant)
        },
        showVariantSelectorInput() {
          if (!this.showVariantSelector) {
            return false
          }
          if (this.variants.length === 1 && this.variants[0].text.toLowerCase() === "default title") {
            return false
          }
          if (this.variants.length === 0) {
            return false
          }
          return true
        },
        getDefaultCountry() {
          return parent.initVar.defaultCountry;
        },
        showBranding(){
          if(!window.parent.initVar.isStore()){
            return false;
          }
          return this.brandingEnabled;
        }
      }
    });
    parent.growCampaignPopUps = parent.parent.growCampaignPopUps || {};
    parent.growCampaignPopUps[window.growCampaignPopUp.iFrameId] = window.growCampaignPopUp;
    if (window.growCampaignPopUp.selectedChannel === 'sms') {
      window.growCampaignPopUp.changePhoneNumberPlaceholder();
    }
  };
  window.addEventListener('click', function (e) {
    if ((e && e.path && !e.path.some(x => x.className && x.className.includes && x.className.includes('modal-container'))) ||
      (e && !e.path && e.target.tagName === "HTML")) {
      if (parent.initVar.closeCampaignPopUpOnOutSideClick)
        window.growCampaignPopUp.closeModal()
    }
  }, true)
</script>
</html>
`,
      showIfAnyVariantIsOutOfStock: false,
      showOnPreorderProduct:false,
      showOnCollectionPage:false
    },
    priceDropWidget: {
      selector: "gw-price-drop",
      isEnabled: false,
      popupSelector: "gw-price-drop-iframe",
      buttonType: "float",
      inlineButtonParentSelector: ``,
      backgroundColor: "#000000",
      textColor: "#ffffff",
      subscriptionText: "Notify me when price drops",
      subscribedText: "We will notify you when price drops",
      modalHtml: `{priceDropModalHtml}`
    },
    customJs: `initVar.addStockFulfilledButtonV2Enabled = true;`,
    customCss: `null`,
    translationJson: {},
    dataVariantId: "data-variant-id",
    dataProductId: "data-product-id",
    dataProductHandle: "data-product-handle",
    clickedProductId: null,
    clickedProductHandle: null,
    clickedVariantId: null,
    defaultCountry:'',
    skipAddingCookies:false,
    checkForCookies:false,

    addFloatWidget: function (text, dataAttribute, onClickFunction, productId, variantId, productHandle) {
      let button = document.createElement("button");
      button.setAttribute(dataAttribute, '')
      button.classList = "btn button Button gw-float-widget"
      button.type = "button";
      button.innerText = text;
      button.setAttribute(initVar.dataProductId, productId)
      button.setAttribute(initVar.dataVariantId, variantId)
      button.setAttribute(initVar.dataProductHandle, productHandle)
      button.onclick = (e) => onClickFunction(e);
      document.body.appendChild(button);
    },
    setStockFulFilledVariantOptions: async function () {
      let modalData = window.growCampaignPopUps[initVar.stockWidget.popupSelector].$data;
      if (!initVar.clickedProductId) {
        return -1
      } else {
        let product = await this.getProduct(initVar.clickedProductHandle);
        modalData.variants = product.variants.filter(x => !initVar.checkIfInStock(x, product)).map(x => {
          return {
            text: x.title,
            value: x.id
          }
        });
        let isSelectedVariantIsOutOfStock = modalData.variants.find(x => x.value === initVar.clickedVariantId)
        if (!isSelectedVariantIsOutOfStock) {
          let firstOutOfStockVariant = initVar.getValueIfExist(() => modalData.variants[0].value);
          if (firstOutOfStockVariant) {
            initVar.clickedVariantId = firstOutOfStockVariant;
          }
        }
        modalData.selectedVariant = initVar.clickedVariantId;
        modalData.variantKey = "vk-" + (new Date().valueOf())
      }
    },
    setPriceDropVariantOptions: async function () {
      let modalData = window.growCampaignPopUps[initVar.priceDropWidget.popupSelector].$data;
      if (!initVar.clickedProductId) {
        return -1
      } else {
        let product = await this.getProduct(initVar.clickedProductHandle);
        modalData.variants = product.variants.map(x => {
          return {
            text: x.title,
            value: x.id
          }
        });
        modalData.selectedVariant = initVar.clickedVariantId;
        modalData.variantKey = "vk-" + (new Date().valueOf())
      }
    },
    variantChangedFromModal: function (variantId) {
      initVar.clickedVariantId = variantId
    },
    stockWidgetClicked: async function (event) {
      growConfig.performTranslation();
      initVar.clickedProductId = initVar.getValueIfExist(() => Number(event.target.attributes[initVar.dataProductId].value))
      initVar.clickedProductHandle = initVar.getValueIfExist(() => (event.target.attributes[initVar.dataProductHandle].value))
      initVar.clickedVariantId = initVar.getValueIfExist(() => Number(event.target.attributes[initVar.dataVariantId].value))
      //check if email campaign is enabled
      // if (initVar.stockFulFilledEmailCampaign.isActive)
      document.getElementById(initVar.stockWidget.popupSelector).style.setProperty('display','block')
      initVar.setStockFulFilledVariantOptions();
      if (await growClient.isPushConsentGiven())
        await initVar.sendSubscriptionRequest(initVar.stockFulFilledPushCampaign.uniqueId)
    },
    waitForEvent: async function (ms, conditionCheck, times) {
      let c = 0;
      while (c < times) {
        let isSatsfied = await conditionCheck()
        if (isSatsfied) {
          return isSatsfied;
        }
        await new Promise(res => {
          setTimeout(() => {
            res()
          }, ms)
        })
        c++;
      }
      return false;
    },
    addToCartClicked: async function (event) {
      console.log("cart clicked")
      let cart;
      let isSatisfied = await initVar.waitForEvent(100, async () => {
        cart = await initVar.getCart()
        return cart.items && cart.items.length
      }, 10)
      if (!isSatisfied) {
        return
      }
      const url = `${initVar.apiUrl}/api/subscribers/cartMapping`;
      const mapping = {
        clientId: initVar.clientId,
        cartToken: cart.token,
        subscriberUniqueId: initVar.subscriberId,
        cartJson: {
          token: cart.token,
          items: cart.items.map(item => {
            return {
              product_id: item.product_id,
              product_title: item.product_title,
              image: initVar.getValueIfExist(() => item.image.split("?")[0]),
              variant_id: item.variant_id,
              variant_title: item.variant_title,
              price: item.price
            }
          })
        }
      };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mapping)
      });
    },
    checkEmail: function (email) {
      return /\S+@\S+\.\S+/.test(email)
    },
    checkPhoneNumber: function (phoneNumber) {
      phoneNumber = phoneNumber.replace(/-/g, "").replace(/ /g, "")
        .replace(/\(/g, "").replace(/\)/g, "")
      if (Number.isNaN(phoneNumber)) {
        return false
      }
      if (parseInt(phoneNumber) !== Number(phoneNumber)) {
        return false
      }
      if (parseInt(phoneNumber) < 100) {
        return false
      }
      return true
    },
    priceDropClicked: async function (event) {
      growConfig.performTranslation();
      //  if (initVar.priceDropEmailCampaign.isActive)
      // console.log("setting growClickedProduct")
      initVar.clickedProductId = initVar.getValueIfExist(() => Number(event.target.attributes[initVar.dataProductId].value))
      initVar.clickedProductHandle = initVar.getValueIfExist(() => (event.target.attributes[initVar.dataProductHandle].value))
      initVar.clickedVariantId = initVar.getValueIfExist(() => Number(event.target.attributes[initVar.dataVariantId].value))
      document.getElementById(initVar.priceDropWidget.popupSelector).style.setProperty('display','block')
      initVar.setPriceDropVariantOptions();

      if (await growClient.isPushConsentGiven())
        await initVar.sendSubscriptionRequest(initVar.priceDropPushCampaign.uniqueId)
      document.querySelectorAll(`[${initVar.priceDropWidget.selector}]`)[0].innerText =
          initVar.getValueIfExist(()=>initVar.translationJson[Shopify.locale].priceDropWidget.widget.afterSubscribeText)|| initVar.priceDropWidget.subscribedText;
    },

    sendSubscriptionRequest: async function (campaignId, adHocData) {
      let product = null
      let variant = null
      try {
        if (initVar.clickedProductHandle && initVar.clickedProductHandle !== "undefined") {
          let clickedProduct ;
          if(window.location.href.includes("/products/"))
            clickedProduct=(await (await fetch(`${initVar.clickedProductHandle}.js`)).json());
          else
            clickedProduct=await this.getProduct(initVar.clickedProductHandle);
          initVar.processProduct(clickedProduct)
          let clickedVariant = clickedProduct.variants.find(x => x.id === initVar.clickedVariantId)
          if (clickedVariant) {
            console.log("Clicked Variant Found")
            product = clickedProduct;
            variant = clickedVariant;
          }
        }

      } catch (e) {
        console.log(e)
      }
      if (!product || !variant) {
        console.error("Parsing Variant from Url")
        product = await initVar.getProduct()
        variant = await initVar.getSelectedVariant(product)
      }

      let subscriptionEvent = {
        productId: Number(product.id),
        productPrice: Number(variant.price),
        variantId: variant.id,
        variantPrice: Number(variant.price),
        productTitle: product.title,
        variantTitle: variant.title,
        href:window.location.href
      }


      if (product.id !== initVar.clickedProductId) {
        console.error("Error in check product id attribute")
      }

      if (variant.id !== initVar.clickedVariantId) {
        console.error("Error in check variant id attribute")
      }


      const mapping = {
        campaignUniqueId: campaignId,
        subscriberUniqueId: initVar.subscriberId,
        email: adHocData && adHocData.email,
        smsTarget: adHocData && adHocData.smsTarget,
        smsDialCode: adHocData && adHocData.smsDialCode,
        optInToMarketing: adHocData && adHocData.optInToMarketing,
        subscriptionEvent: subscriptionEvent,
        locale: initVar.getValueIfExist(()=>Shopify.locale)
      };


      const url = `${initVar.apiUrl}/api/subscribers/campaignMapping`;
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mapping)
      });
    },


    getSubscriptionEvent: async function (campaignId, variantId) {
      const url = `${initVar.apiUrl}/api/subscribers/campaignMapping?campaignUniqueId=${campaignId}&subscriberUniqueId=${initVar.subscriberId}&variantId=${variantId}`;
      return (await (await fetch(url)).json())
    },


    getProduct: async function (handle) {
      //if(window.product)
      if (!window.gwProduct || window.gwProduct.id !== gwProduct.id || !window.gwProduct.variants || !window.gwProduct.length) {
        let product;
        try {
          handle = handle || window.location.href.split("?")[0].split("#")[0]
          if(window.location.href.includes("/products/"))
            product = (await (await fetch(`${handle}.js`)).json())
          else
            product = (await (await fetch(`${window.location.origin}/products/${handle}.js`)).json())
        } catch (e) {
          console.log("Error in fetching product", e)
        }
        window.gwProduct = product;
        initVar.processProduct(window.gwProduct)
      }
      return window.gwProduct;
    },
    processProduct: function (product) {
      product.variants.forEach(x => {
        x.price = x.price / 100
      })
      return product;
    },
    getCart: async function () {
      let cart;
      try {
        cart = (await (await fetch(`/cart.js`)).json())
        cart.items.forEach(x => {
          x.price = x.price / 100
        })
        return cart;
      } catch (e) {
        console.log("Error in fetching product", e)
      }
    },
    getQueryParam: function (name) {
      let queryStringToJSON = (qs) => {
        qs = qs || location.search.slice(1);

        let pairs = qs.split('&');
        let result = {};
        pairs.forEach(function (p) {
          let pair = p.split('=');
          let key = pair[0];
          let value = decodeURIComponent(pair[1] || '');

          if (result[key]) {
            if (Object.prototype.toString.call(result[key]) === '[object Array]') {
              result[key].push(value);
            } else {
              result[key] = [result[key], value];
            }
          } else {
            result[key] = value;
          }
        });

        return JSON.parse(JSON.stringify(result));
      }

      let queryJson = queryStringToJSON(location.search.slice(1))
      return queryJson[name];
    },
    getOptionValue: async function (index) {
      let value = this.getValueIfExist(() => initVar.getVariantSelector(index).find(x => {
        return (x.type === "radio" && x.checked === true) || x.type !== "radio"
      }).value)
      if (!value) {
        value = this.getValueIfExist(() => {
          let item = initVar.getVariantSelector(index).find(x => {
            if (x.tagName === "LI") {
              return x.className.includes("is-selected")
            }
          })
          if (item) {
            //add or condition here in future
            return item.getAttribute("data-escape")
          }
        })
      }

      return value;
    },
    getSelectedVariant: async function (product) {
      let variantId = ""
      if (!variantId) {
        let op1 = await initVar.getOptionValue(1) || null
        let op2 = await initVar.getOptionValue(2) || null
        let op3 = await initVar.getOptionValue(3) || null
        console.log(op1, op2, op3)
        let variant = product.variants.find(x => x.option1 === op1 && x.option2 === op2 && x.option3 === op3)
        if (variant) {
          variantId = variant.id
        }
      }
      console.log(variantId, "by options")
      if (!variantId)
        variantId = parseInt(initVar.getQueryParam('variant'))

      if(!variantId){
        if(initVar.variantIdFormSelector){
          variantId =  initVar.getValueIfExist(()=>document.querySelector( initVar.variantIdFormSelector).getAttribute("value"));
        }
      }

      if (!variantId) {
        variantId = parseInt(window.ShopifyAnalytics && window.ShopifyAnalytics.meta && window.ShopifyAnalytics.meta.selectedVariantId)
        let variant = product.variants.find(x => Number(x.id) === Number(variantId))
        if (!variant)
          variantId = null
      }

      if (!variantId && product.variants.length === 1)
        variantId = product.variants[0].id

      if (!variantId) {
        if (!(initVar.selectFirstVariant === false)) {
          variantId = (product.variants.find(x=>x.available) || product.variants[0]).id
        }
      }

      let variant = product.variants.find(x => Number(x.id) === Number(variantId))
      // if(!variantFromUrl){
      //   variantFromUrl=product.
      // }


      return variant;
    },
    getValueIfExist: function (fn) {
      try {
        return fn();
      } catch (e) {
        return;
      }
    },
    closePopUp: function (id) {
      document.getElementById(id).style.setProperty('display','none','important')
    },
    campaignPopUpNotifyButtonClicked: async function (id, workFlowId, inptData, optInToMarketing) {
      if ([initVar.stockFulFilledEmailCampaign.uniqueId, initVar.priceDropEmailCampaign.uniqueId].some(x => x === workFlowId)) {
        await initVar.sendSubscriptionRequest(workFlowId, {
          email: inptData,
          optInToMarketing: optInToMarketing
        })
      }
      if ([initVar.stockFulFilledSmsCampaign.uniqueId, initVar.priceDropSmsCampaign.uniqueId].some(x => x === workFlowId)) {
        await initVar.sendSubscriptionRequest(workFlowId, {
          smsTarget: inptData.smsTarget,
          smsDialCode: inptData.smsDialCode,
          optInToMarketing: optInToMarketing
        })
      }
      if ([initVar.stockFulFilledEmailCampaign.uniqueId, initVar.stockFulFilledSmsCampaign.uniqueId].some(x => x === workFlowId))
        document.querySelectorAll(`[${initVar.stockWidget.selector}]`)[0].innerText = initVar.getValueIfExist(()=>initVar.translationJson[Shopify.locale].stockWidget.widget.afterSubscribeText) || initVar.stockWidget.subscribedText;
      console.log(id, inptData, workFlowId)
    },
    getStockFulfilledWidgetBeforeSubscribeText: function (){
      return initVar.getValueIfExist(()=>initVar.translationJson[Shopify.locale].stockWidget.widget.beforeSubscribeText) || initVar.stockWidget.subscriptionText;
    },
    getPriceDropWidgetBeforeSubscribeText: function (){
      return initVar.getValueIfExist(()=>initVar.translationJson[Shopify.locale].priceDropWidget.widget.beforeSubscribeText) || initVar.priceDropWidget.subscriptionText;
    },
    addPopUp: function (idSelector, html) {
      console.log("addPopup")
      if (!document.getElementById(idSelector)) {
        let iframe = document.createElement('iframe');
        iframe.style.setProperty('display','none','important')
        iframe.id = idSelector;
        iframe.className = "gw-modal"
        iframe.srcdoc = html
        document.body.appendChild(iframe);
      }
    },

    renderStockWidget: async function (product, variant) {
      this.addPopUp(initVar.stockWidget.popupSelector, initVar.stockWidget.modalHtml)
      while (document.querySelectorAll(`[${initVar.stockWidget.selector}]`).length > 0) {
        document.querySelectorAll(`[${initVar.stockWidget.selector}]`)[0].parentNode
          .removeChild(document.querySelectorAll(`[${initVar.stockWidget.selector}]`)[0])
      }
      if (!initVar.stockWidget.isEnabled) {
        return;
      }
        if(initVar.stockWidgetDoNotShowTag){
            let doNotShowTagExist=product.tags && product.tags.some(x=>x.toLowerCase()===initVar.stockWidgetDoNotShowTag);
            console.log("Stock Widget DoNotShowTag exist",doNotShowTagExist);
            if(doNotShowTagExist){
                return true;
            }
        }
        if(initVar.stockWidgetShowTag) {
            let showTagExist = product.tags && product.tags.some(x => x.toLowerCase() === initVar.stockWidgetShowTag);
            console.log("Stock Widget showTagExist exist", showTagExist);
            if (!showTagExist) {
                return true;
            }
        }
      let showWidgetEvenIfCurrentVariantIsInStock = false
      if (initVar.stockWidget.showIfAnyVariantIsOutOfStock) {
        showWidgetEvenIfCurrentVariantIsInStock = product.variants.some(x => !initVar.checkIfInStock(x, product))
      }

      if (!initVar.checkIfInStock(variant, product) || showWidgetEvenIfCurrentVariantIsInStock) {
        let text=initVar.getStockFulfilledWidgetBeforeSubscribeText();
        if (initVar.stockWidget.buttonType === 'float') {
          initVar.addFloatWidget(text,
            initVar.stockWidget.selector, initVar.stockWidgetClicked, product && product.id, variant && variant.id,
            product && product.handle)
        }

        if (window["addStockFulfilledButton"]) {
          window["addStockFulfilledButton"]()
        } else {
          initVar.addStockFulfilledButton(product && product.id, variant && variant.id,
            product && product.handle)
        }
      }

    },

    renderPriceDropWidget: async function (product, variant) {
      this.addPopUp(initVar.priceDropWidget.popupSelector, initVar.priceDropWidget.modalHtml)

      while (document.querySelectorAll(`[${initVar.priceDropWidget.selector}]`).length > 0) {
        document.querySelectorAll(`[${initVar.priceDropWidget.selector}]`)[0].parentNode
          .removeChild(document.querySelectorAll(`[${initVar.priceDropWidget.selector}]`)[0])
      }
      if (!initVar.priceDropWidget.isEnabled) {
        return;
      }
      if(initVar.priceDropDoNotShowTag){
          let doNotShowTagExist=product.tags && product.tags.some(x=>x.toLowerCase()===initVar.priceDropDoNotShowTag);
          console.log("Price Drop DoNotShowTag exist",doNotShowTagExist);
          if(doNotShowTagExist){
              return true;
          }
      }
        if(initVar.priceDropShowTag) {
            let showTagExist = product.tags && product.tags.some(x => x.toLowerCase() === initVar.priceDropShowTag);
            console.log("Price Drop showTagExist exist", showTagExist);
            if (!showTagExist) {
                return true;
            }
        }

      if (initVar.checkIfInStock(variant, product)) {
        let text =initVar.getPriceDropWidgetBeforeSubscribeText();
        if (initVar.priceDropWidget.buttonType === 'float') {
          initVar.addFloatWidget(text,
            initVar.priceDropWidget.selector, initVar.priceDropClicked, product && product.id,
            variant && variant.id, product && product.handle)
        }
        if (window["addPriceDropButton"]) {
          window["addPriceDropButton"]()
        } else {
          initVar.addPriceDropButton(product && product.id, variant && variant.id, product && product.handle)
        }
      }
    },

    checkIfInStock: function (variant, product) {
      if((initVar.stockWidget.showOnPreorderProduct===true) &&
        window.gwProductInventoryPolicy && window.gwProductInventoryPolicy[variant.id]==="continue" && window.gwProductInventoryQuantity && parseInt(window.gwProductInventoryQuantity[variant.id])<=0){
        return false;
      }
      if (variant.available) {
        return true;
      }
      return false;
    },
    afterVariantChangeFn:function (){
    },
    onVariantChange: async function () {
      try {
        if (!initVar.processingOnVariantChange) {
          initVar.processingOnVariantChange = true;
          let product = await initVar.getProduct()
          let variant = await initVar.getSelectedVariant(product)
          await initVar.renderStockWidget(product, variant)
          await initVar.renderPriceDropWidget(product, variant)
          initVar.processingOnVariantChange = false;
          console.log("Grow Variant Change title", variant.title)
          initVar.getValueIfExist(()=>initVar.afterVariantChangeFn())
          //alert("variant"+variant.id)
        }
      } catch (e) {
        console.log(e)
        initVar.processingOnVariantChange = false;
      }

    },
    performTranslation: function () {
      if (growConfig.translateContent) {
        growConfig.translateContent()
      }else
      {
        initVar.translateStockWidget();
        initVar.translateProceDropWidget();
      }
    },
    registerOnVariantChange: function () {
      let firstTimeUrl = document.URL;
      document.addEventListener('change', function () {
        let currentPageUrl = document.URL;
        let url = new URL(currentPageUrl);
        let isVariantUrl = url.searchParams.get("variant");
        currentPageUrl = isVariantUrl ? currentPageUrl : isVariantUrl;
        if (currentPageUrl && firstTimeUrl !== currentPageUrl) {
          firstTimeUrl = currentPageUrl;
          console.log('Grow Url Variant change variant_id: ' + isVariantUrl + '');
          window.growConfig.onVariantChange();
        }
      });
      [1, 2, 3].forEach(index => {

        initVar.getValueIfExist(() => {
          initVar.getVariantSelector(index).forEach(x => {
            x.addEventListener('change', window.growConfig.onVariantChange)
            if (x.tagName === "LI") {
              x.addEventListener('click', () => {
                setTimeout(() => {
                  window.growConfig.onVariantChange()
                }, 500)
              })
            }
          })
        })
      })
    },

    getVariantSelector: function (index) {
      let ele = document.querySelectorAll(`[data-index=\"option${index}\"]`) ||
        document.querySelectorAll(`#Option-product-${index - 1}`)
      if (!ele || !ele.length || ele.length === 0)
        ele = document.querySelectorAll(`#Option-product-${index - 1}`)
      if (!ele || !ele.length || ele.length === 0)
        ele = document.querySelectorAll(`#nt_select_ppr_${index - 1} li`)
      return [...ele]
    },


    registerAddToCartChange: function () {
      initVar.getValueIfExist(() => {
        let ele = document.querySelector("[name=\"add\"]") ||
          document.querySelector("[data-action=\"add-to-cart\"]") ||
          document.querySelector("[data-add-to-cart]")
        ele.addEventListener('click', window.growConfig.addToCartClicked)
      })

    },
    isPostPurchasePage: function () {
      return ( Shopify && (Shopify.Checkout) && (Shopify.Checkout.page === "thank_you" || Shopify.Checkout.isOrderStatusPage)) ||(window.location.href.includes("checkout")) || (window.location.href.includes("thank_you"))
    },
    isCartPage: function () {
      return (window.location.href.includes("cart"))
    },
    sendOrderPurchaseEvent: async function (client) {
      let json = await client.getNotificationsClicked()
      if (json.length) {
        const url = `${initVar.apiUrl}/api/workflows/event`;
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientUniqueId: initVar.clientId,
            notificationWorkFlowUniqueId: null,
            subscriberUniqueId: initVar.subscriberId,
            eventData: {
              amount: Number(Shopify.checkout.subtotal_price),
              name: "purchase",
              notificationsClicked: json,
              checkoutToken: Shopify && Shopify.Checkout && Shopify.Checkout.token,
              orderStatusUrl: window.location.href,
              orderId: Shopify.checkout && Shopify.checkout.order_id
            },
          })
        });
      }

    },
    registerUtmParameter: async function () {
      if (this.getQueryParam("cbn_campaign")) {
        await growClient.registerNotificationClick(this.getQueryParam("message_process_id"),
          this.getQueryParam("cbn_campaign"), this.getQueryParam("cbn_medium"))
      }
    },

    addPriceDropButton: function (productId, variantId, productHandle) {
      if (initVar.addPriceDropButtonV2Enabled === true) {
        return initVar.addPriceDropButtonV2(productId, variantId, productHandle);
      }
      let parentElement = window.priceDropButtonParent
      if (initVar.priceDropWidget.buttonType !== 'inline') {
        return
      }
      if (!parentElement) {
        if (initVar.priceDropWidget.inlineButtonParentSelector) {
          parentElement = document.querySelector(initVar.priceDropWidget.inlineButtonParentSelector)
          if (!parentElement) {
            return
          }
        }
      }

      let btn = document.createElement("button");
      btn.innerHTML = initVar.getPriceDropWidgetBeforeSubscribeText();
      btn.className = 'btn btn-success gw-button-widget'
      btn.setAttribute('gw-price-drop', '')
      btn.setAttribute(initVar.dataProductId, productId)
      btn.setAttribute(initVar.dataVariantId, variantId)
      btn.setAttribute(initVar.dataProductHandle, productHandle)
      btn.style.backgroundColor = growConfig.priceDropWidget.backgroundColor
      btn.style.color = growConfig.priceDropWidget.textColor
      btn.onclick = (e) => {
        e.preventDefault();
        growConfig.priceDropClicked(e)
      }
      parentElement.appendChild(btn)
    },

    addStockFulfilledButton: function (productId, variantId, productHandle) {
      if (initVar.addStockFulfilledButtonV2Enabled === true) {
        return initVar.addStockFulfilledButtonV2(productId, variantId, productHandle);
      }
      let parentElement = window.stockWidgetButtonParent;
      if (initVar.stockWidget.buttonType !== 'inline') {
        return
      }
      if (!parentElement) {
        if (initVar.stockWidget.inlineButtonParentSelector) {
          parentElement = document.querySelector(initVar.stockWidget.inlineButtonParentSelector)
          if (!parentElement) {
            return
          }
        }
      }
      let btn = document.createElement("button");
      btn.innerHTML = initVar.getStockFulfilledWidgetBeforeSubscribeText();
      btn.className = 'btn btn-success gw-button-widget'
      btn.setAttribute('gw-stock-fulfilled', '')
      btn.setAttribute(initVar.dataProductId, productId)
      btn.setAttribute(initVar.dataVariantId, variantId)
      btn.setAttribute(initVar.dataProductHandle, productHandle)
      btn.style.backgroundColor = growConfig.stockWidget.backgroundColor
      btn.style.color = growConfig.stockWidget.textColor
      btn.onclick = (e) => {
        e.preventDefault();
        growConfig.stockWidgetClicked(e)
      }
      parentElement.appendChild(btn)
      this.campaignInlineButtonAddedEvent('gw-stock-fulfilled')
    },

    addStockFulfilledButtonV2: async function (productId, variantId, productHandle) {
      console.log("Placing Inline Button")
      if (initVar.stockWidget.buttonType !== 'inline') {
        return
      }
      // let addToCartButtonClasses;
      if (initVar.addToCartSelector === undefined)
        initVar.addToCartSelector = "[name=add]"
      if (initVar.addAddToCartClasses === undefined)
        initVar.addAddToCartClasses = true;
      if (initVar.addToCartButtonClasses === undefined)
        initVar.addToCartButtonClasses = "btn btn-success"
      if (initVar.addAddToCartClassesIgnoreList === undefined) {
        initVar.addAddToCartClassesIgnoreList = "disabled"
      }

      let addToCartButton = document.querySelector(initVar.addToCartSelector)
      let parentElement = window.stockWidgetButtonParent;
      if (addToCartButton && initVar.addAddToCartClasses) {
        initVar.addToCartButtonClasses = addToCartButton.className.split(" ")
          .filter(x => !initVar.addAddToCartClassesIgnoreList.split(" ").some(y => y == x)).join(" ")
      }
      if (!parentElement) {
        if (initVar.stockWidget.inlineButtonParentSelector) {
          parentElement = document.querySelector(initVar.stockWidget.inlineButtonParentSelector)
        } else {
          if (addToCartButton)
            parentElement = addToCartButton.parentNode
        }
      }
      let btn = document.createElement("button");
      btn.innerHTML = initVar.getStockFulfilledWidgetBeforeSubscribeText();
      btn.className = 'gw-button-widget gw-button-widget-v2' + " " + initVar.addToCartButtonClasses
      btn.setAttribute('gw-stock-fulfilled', '')
      btn.setAttribute(initVar.dataProductId, productId)
      btn.setAttribute(initVar.dataVariantId, variantId)
      btn.setAttribute(initVar.dataProductHandle, productHandle)
      btn.style.backgroundColor = growConfig.stockWidget.backgroundColor
      btn.style.color = growConfig.stockWidget.textColor
      btn.onclick = (e) => {
        e.preventDefault();
        growConfig.stockWidgetClicked(e)
      }

      if (!parentElement) {
        await initVar.waitForEvent(200, async () => {
          console.log("Waiting for rendering of parent element of Inline button")
          return parentElement
        }, 10)
      }
      parentElement.appendChild(btn)
      this.campaignInlineButtonAddedEvent('gw-stock-fulfilled')
    },
    campaignInlineButtonAddedEvent:function (buttonAttribute){

    },
    addPriceDropButtonV2: function (productId, variantId, productHandle) {
      console.log("Placing Inline Button")
      if (initVar.priceDropWidget.buttonType !== 'inline') {
        return
      }
      // let addToCartButtonClasses;
      if (initVar.addToCartSelector === undefined)
        initVar.addToCartSelector = "[name=add]"
      if (initVar.addAddToCartClasses === undefined)
        initVar.addAddToCartClasses = true;
      if (initVar.addToCartButtonClasses === undefined)
        initVar.addToCartButtonClasses = "btn btn-success"
      if (initVar.addAddToCartClassesIgnoreList === undefined) {
        initVar.addAddToCartClassesIgnoreList = "disabled"
      }

      let addToCartButton = document.querySelector(initVar.addToCartSelector)
      let parentElement = window.priceDropButtonParent
      if (addToCartButton && initVar.addAddToCartClasses) {
        initVar.addToCartButtonClasses = addToCartButton.className.split(" ")
          .filter(x => !initVar.addAddToCartClassesIgnoreList.split(" ").some(y => y == x)).join(" ")
      }
      if (!parentElement) {
        if (initVar.priceDropWidget.inlineButtonParentSelector) {
          parentElement = document.querySelector(initVar.priceDropWidget.inlineButtonParentSelector)
        } else {
          if (addToCartButton)
            parentElement = addToCartButton.parentNode
        }
      }
      let btn = document.createElement("button");
      btn.innerHTML = initVar.getPriceDropWidgetBeforeSubscribeText();
      btn.className = 'gw-button-widget gw-button-widget-v2' + " " + initVar.addToCartButtonClasses
      btn.setAttribute('gw-price-drop', '')
      btn.setAttribute(initVar.dataProductId, productId)
      btn.setAttribute(initVar.dataVariantId, variantId)
      btn.setAttribute(initVar.dataProductHandle, productHandle)
      btn.style.backgroundColor = growConfig.priceDropWidget.backgroundColor
      btn.style.color = growConfig.priceDropWidget.textColor
      btn.onclick = (e) => {
        e.preventDefault();
        growConfig.priceDropClicked(e)
      }
      parentElement.appendChild(btn)
    },
    translateStockWidget: function (){
        let locale=Shopify.locale
        let gwLocaleJson=initVar.translationJson && initVar.translationJson[locale]
    if(!gwLocaleJson || !gwLocaleJson.stockWidget || !gwLocaleJson.stockWidget.modal.heading ){
      return;
    }

    if(gwLocaleJson){
      let stockWidgetModal=document.querySelector("#gw-stock-fulfilled-iframe").contentDocument
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".modal-title").innerText=gwLocaleJson.stockWidget.modal.heading;})
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".notification-message").innerText=gwLocaleJson.stockWidget.modal.subheading;})
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".notify-button").innerText=gwLocaleJson.stockWidget.modal.notifyButtonTitle;})
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".marketing-container-label").innerText=gwLocaleJson.stockWidget.modal.optInMarketingText;})
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".marketing-container-label").innerText=gwLocaleJson.stockWidget.modal.optInMarketingText;})
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".privacy-text").innerText=gwLocaleJson.stockWidget.modal.privacyText;})
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".email-input").placeholder=gwLocaleJson.stockWidget.modal.emailPlaceholder;})
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".gw-success-message .success-text").innerText=gwLocaleJson.stockWidget.modal.successText;})
        initVar.getValueIfExist(()=>{stockWidgetModal.querySelector(".gw-success-message .close-text").innerText=gwLocaleJson.stockWidget.modal.successCloseText;})
    }
  },
    translateProceDropWidget: function (){
      let locale=Shopify.locale
      let gwLocaleJson=initVar.translationJson && initVar.translationJson[locale]
      if(!gwLocaleJson || !gwLocaleJson.priceDropWidget || !gwLocaleJson.priceDropWidget.modal.heading ){
        return;
      }

      if(gwLocaleJson){
        let priceDropModal=document.querySelector("#gw-price-drop-iframe").contentDocument
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".modal-title").innerText=gwLocaleJson.priceDropWidget.modal.heading;})
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".notification-message").innerText=gwLocaleJson.priceDropWidget.modal.subheading;})
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".notify-button").innerText=gwLocaleJson.priceDropWidget.modal.notifyButtonTitle;})
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".marketing-container-label").innerText=gwLocaleJson.priceDropWidget.modal.optInMarketingText;})
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".marketing-container-label").innerText=gwLocaleJson.priceDropWidget.modal.optInMarketingText;})
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".privacy-text").innerText=gwLocaleJson.priceDropWidget.modal.privacyText;})
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".email-input").placeholder=gwLocaleJson.priceDropWidget.modal.emailPlaceholder;})
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".gw-success-message .success-text").innerText=gwLocaleJson.priceDropWidget.modal.successText;})
        initVar.getValueIfExist(()=>{priceDropModal.querySelector(".gw-success-message .close-text").innerText=gwLocaleJson.priceDropWidget.modal.successCloseText;})
      }
    },
    isStore:function (){
      if(!window["Shopify"] || (window["Shopify"] && window["Shopify"].designMode)){
        return false;
    }
      return true;
  }
  }
  if (!window.growClient) {
    window.GrowClient=function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.DbKeys=t.DbManager=void 0;class o{constructor(){this.cookiePeriod=31104e3}static Instance(){return n(this,void 0,void 0,(function*(){return o.instance||(o.instance=new o),o.instance}))}save(e,t){return n(this,void 0,void 0,(function*(){let i=!1;window.initVar.checkForCookies&&window.Shopify.customerPrivacy&&(window.Shopify.customerPrivacy.analyticsProcessingAllowed()&&window.Shopify.customerPrivacy.preferencesProcessingAllowed()||[r.LastOptInAt].some(t=>t===e)||(i=!0)),window.initVar.skipAddingCookies&&(i=!0),i?o.cookies.push({key:e,value:t}):document.cookie=`${e}=${t};max-age=${this.cookiePeriod};path=/`}))}find(e){return n(this,void 0,void 0,(function*(){return o.cookies.find(t=>t.key===e)?o.cookies.find(t=>t.key===e).value:this.getcookie(e)}))}findValue(e){return n(this,void 0,void 0,(function*(){let t=yield this.getcookie(e);return t||null}))}clear(e){return n(this,void 0,void 0,(function*(){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}))}getcookie(e=""){let t=document.cookie,i={};if(t=t.split(";"),""!==t[0]||void 0!==t[0][0])return t.forEach((function(e){" "===(e=e.split(/=(.+)/))[0].substr(0,1)&&(e[0]=e[0].substr(1)),i[e[0]]=e[1]})),""!==e?i[e]:i}}t.DbManager=o,o.cookies=[];class r{}t.DbKeys=r,r.SubscriberId="gw-subId",r.ClientId="gw-clientId",r.NotificationsClicked="gw-notifications-clicked",r.PushData="gw-push",r.VapidPublicKey="gw-vapid-public",r.IsActive="gw-isActive-"+parseInt((new Date).valueOf()-(new Date).valueOf()%6e5),r.LastOptInAt="gw-lastOptInAt"},function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.GrowClient=void 0;const o=i(0),r=i(2);class s{constructor(){}init(e){return n(this,void 0,void 0,(function*(){if(this.initVars=e,yield this.getClientStatus()){if(this.db=yield o.DbManager.Instance(),yield this.db.save(o.DbKeys.ClientId,this.initVars.clientId),!(yield this.db.findValue(o.DbKeys.SubscriberId))){let e=yield this.getUniqueId();yield this.db.save(o.DbKeys.SubscriberId,e)}if(this.swRegistration=yield this.registerServiceWorker(),this.pushManager=new r.GrowPushManager(this.initVars,this.swRegistration),this.db.save(o.DbKeys.VapidPublicKey,e.vapidKey),!(yield this.checkNotificationSupport()))return Promise.reject("Notification Not Supported");if(!(yield this.checkServiceWorkerSupport()))return Promise.reject("Service Worker Not Supported");yield this.pushManager.init(),this.onInit&&(yield this.processOnInit())}}))}processOnInit(){return n(this,void 0,void 0,(function*(){let e=yield this.db.find(o.DbKeys.SubscriberId);e&&(yield this.onInit(e))}))}registerServiceWorker(){return n(this,void 0,void 0,(function*(){return yield navigator.serviceWorker.register(this.initVars.serviceWorkerUrl||"/sw.js").catch(e=>(console.error("Grow",e),Promise.reject(e)))}))}checkServiceWorkerSupport(){return n(this,void 0,void 0,(function*(){return"serviceWorker"in navigator?Promise.resolve(!0):Promise.resolve(!1)}))}checkNotificationSupport(){return n(this,void 0,void 0,(function*(){return"Notification"in window?Promise.resolve(!0):Promise.resolve(!1)}))}getNotificationsClicked(){return n(this,void 0,void 0,(function*(){this.db||(this.db=yield o.DbManager.Instance());let e=yield this.db.find(o.DbKeys.NotificationsClicked);return e?JSON.parse(e):[]}))}getUniqueId(){return n(this,void 0,void 0,(function*(){return yield fetch(this.initVars.subscriberNewUniqueIdUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then(e=>n(this,void 0,void 0,(function*(){return(yield e.json()).uniqueId})))}))}getClientStatus(){return n(this,void 0,void 0,(function*(){this.db||(this.db=yield o.DbManager.Instance());let e=yield this.db.findValue(o.DbKeys.IsActive);return!e||"true"===e}))}registerNotificationClick(e,t,i){return n(this,void 0,void 0,(function*(){this.db||(this.db=yield o.DbManager.Instance());let n=yield this.getSubscriberId(),r=yield this.db.find(o.DbKeys.NotificationsClicked),s=[];r&&(s=JSON.parse(r)||[]);let a={notificationWorkFlowUniqueId:t,notificationType:i,subscriberId:n,timestamp:(new Date).valueOf()};s.push(a),yield this.db.save(o.DbKeys.NotificationsClicked,JSON.stringify(s)),yield fetch(this.initVars.clickNotificationUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uniqueId:e+"-"+n,clientUniqueId:this.initVars.clientId,notificationWorkFlowUniqueId:t,subscriberUniqueId:n,eventData:{name:"click",notificationType:i}})}).catch(e=>{console.error("error in sending click notification url",e)})}))}getSubscriberId(){return n(this,void 0,void 0,(function*(){return this.db||(this.db=yield o.DbManager.Instance()),yield this.db.findValue(o.DbKeys.SubscriberId)}))}saveDbValue(e,t){return n(this,void 0,void 0,(function*(){this.db||(this.db=yield o.DbManager.Instance());yield this.db.save(e,t);return this.db.findValue(e)}))}getDbValue(e){return n(this,void 0,void 0,(function*(){return this.db||(this.db=yield o.DbManager.Instance()),yield this.db.findValue(e)}))}isPushConsentGiven(){return n(this,void 0,void 0,(function*(){return this.db||(this.db=yield o.DbManager.Instance()),yield this.db.findValue(o.DbKeys.PushData)}))}}t.GrowClient=s;let a=new s;t.default=a},function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.GrowPushManager=void 0;const o=i(0),r=i(3),s=i(4),a=i(11);t.GrowPushManager=class{constructor(e,t){this.initVars=e,this.swRegistration=t,this.initVars=e}init(){return n(this,void 0,void 0,(function*(){if(this.db=yield o.DbManager.Instance(),!this.initVars.pushOptInSetting.isEnabled)return;if((yield this.showConsentPopup())&&this.initVars.pushOptInSetting.isEnabled){const e=new s.PopupManager(this.initVars),t=yield e.show(this.initVars.pushOptInSetting.showModal);if(yield this.db.save(o.DbKeys.LastOptInAt,(new Date).getTime()/1e3),!t)return void(yield this.db.save(o.DbKeys.LastOptInAt,(new Date).getTime()/1e3));if(console.log("requesting prompt"),this.notificationStatus=yield this.requestNotificationPermission(),!this.notificationStatus)return;yield this.saveSubscription()}}))}saveSubscription(){return n(this,void 0,void 0,(function*(){const e=yield this.createPushSubscription(),t=yield this.saveToServer(e);if(200===t.status){const i=yield t.json().then(e=>e.uniqueId),n=yield o.DbManager.Instance();return yield n.save(o.DbKeys.SubscriberId,i),yield n.save(o.DbKeys.ClientId,this.initVars.clientId),yield n.save(o.DbKeys.PushData,JSON.stringify(e.toJSON())),e}return null}))}requestNotificationPermission(){return n(this,void 0,void 0,(function*(){return"granted"===(yield Notification.requestPermission().catch(e=>(console.error(e,"Grow Notification Prompt"),Promise.reject(e))))}))}showConsentPopup(){return n(this,void 0,void 0,(function*(){if(void 0!==window.safari)return!1;const e=yield this.db.find(o.DbKeys.LastOptInAt),t=Number.parseInt(e||"0");if(!Number.isNaN(t)&&(new Date).getTime()/1e3<t+(this.initVars.pushOptInSetting.delay||r.Constants.DefaultOptinTimeout))return!1;let i="granted"!==Notification.permission&&"denied"!==Notification.permission;if(!i){let e=yield this.swRegistration.pushManager.getSubscription(),t=e?e.toJSON():{},n=yield this.db.findValue(o.DbKeys.PushData),r=yield a.HelperUtils.getValueIfExist(()=>JSON.parse(n));if(!r||!a.HelperUtils.isPushSimilar(r,t)){(yield this.tryReSubscribingToGrow())||(yield this.removeSubscription(),i=!0)}}return i&&(console.log("subscriptionDoesNotExist"),yield a.HelperUtils.sleep(1e3*this.initVars.pushOptInSetting.initialDelay||0)),i}))}tryReSubscribingToGrow(){return n(this,void 0,void 0,(function*(){try{return yield this.saveSubscription(),!0}catch(e){return console.error(e.message),!1}}))}removeSubscription(){return n(this,void 0,void 0,(function*(){let e=yield this.swRegistration.pushManager.getSubscription();if(e){const t=yield o.DbManager.Instance();return yield t.clear(o.DbKeys.ClientId),yield t.clear(o.DbKeys.SubscriberId),yield e.unsubscribe()}return!1}))}createPushSubscription(){return n(this,void 0,void 0,(function*(){const e={userVisibleOnly:!0,applicationServerKey:a.HelperUtils.urlBase64ToUint8Array(this.initVars.vapidKey)};return yield this.swRegistration.pushManager.subscribe(e)}))}saveToServer(e){return n(this,void 0,void 0,(function*(){const t=Object.assign({userAgent:navigator.userAgent},this.initVars.meta),i={push:e,clientId:this.initVars.clientId,subscriberUniqueId:yield this.db.findValue(o.DbKeys.SubscriberId),meta:t};return yield fetch(this.initVars.subscribeUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}))}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Constants=void 0;class n{}t.Constants=n,n.DefaultOptinTimeout=86400},function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PopupManager=void 0,i(5);const o=i(9),r=i(10);t.PopupManager=class{constructor(e){this.modalId="grow-consent-modal";const t={modalId:this.modalId,iconUrl:e.pushOptInSetting.message.iconUrl||"",title:e.pushOptInSetting.message.title||"Subscribe to Notifications",body:e.pushOptInSetting.message.body||"",closeText:e.pushOptInSetting.message.buttons.find(e=>1===e.order).label||"Later",subscribeText:e.pushOptInSetting.message.buttons.find(e=>2===e.order).label||"Subscribe"};let i='<div class="grow_modal micromodal-slide" id="{{modalId}}" aria-hidden="true"><div class="grow_modal__overlay" tabindex="-1"><div class="grow_modal__container" role="dialog" aria-modal="true"> <main class="grow_modal__content"> <img class="grow_modal__icon" src="{{iconUrl}}"><div class="grow_modal__content_text"><h4 class="grow_modal_title">{{title}}</h4><p class="grow_modal_para"> {{body}}</p></div></main> <footer class="grow_modal__footer"> <a class="grow_modal__btn grow_modal__btn-cancel" aria-label="Close this dialog window">{{closeText}}</a> <button class="grow_modal__btn grow_modal__btn-primary">{{subscribeText}}</button> </footer></div></div></div>';i=i.replace(/{{modalId}}/g,this.modalId),i=i.replace(/{{iconUrl}}/g,t.iconUrl),i=i.replace(/{{title}}/g,t.title),i=i.replace(/{{body}}/g,t.body),i=i.replace(/{{closeText}}/g,t.closeText),i=i.replace(/{{subscribeText}}/g,t.subscribeText);const n=r.render(i,t);let s=document.createElement("div");s.innerHTML=n,s=s.firstChild||s;const a=s.querySelector(".grow_modal__btn-primary"),c=s.querySelector(".grow_modal__btn-cancel");a&&a.addEventListener("click",()=>this.subscribeClick(!0)),c&&c.addEventListener("click",()=>this.subscribeClick(!1)),document.body.appendChild(s),o.default.init({awaitCloseAnimation:!0})}show(e){return n(this,void 0,void 0,(function*(){return!e||(o.default.show(this.modalId),new Promise(e=>this.confirmationResolve=e))}))}subscribeClick(e){return o.default.close(this.modalId),this.confirmationResolve(e)}}},function(e,t,i){var n=i(6),o=i(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(o,r);e.exports=o.locals||{}},function(e,t,i){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),s=[];function a(e){for(var t=-1,i=0;i<s.length;i++)if(s[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},n=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var u=a(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:m(f,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function h(e,t,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,g=0;function m(e,t){var i,n,o;if(t.singleton){var r=g++;i=p||(p=l(t)),n=f.bind(null,i,r,!1),o=f.bind(null,i,r,!0)}else i=l(t),n=h.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=a(i[n]);s[o].references--}for(var r=c(e,t),l=0;l<i.length;l++){var d=a(i[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}i=r}}}},function(e,t,i){(t=i(8)(!1)).push([e.i,'.grow_modal{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.grow_modal *{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;font-size:0.875rem;opacity:1}.grow_modal__overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:flex-start;z-index:10000}.grow_modal__container{background-color:#fff;padding:15px;width:470px;max-height:100vh;border-radius:0 0 4px 4px;overflow-y:auto;box-sizing:border-box;box-shadow:rgba(0,0,0,0.21) 0px 12px 13px !important}.grow_modal__content{margin-bottom:1rem;line-height:1.5;color:rgba(0,0,0,0.8);flex-direction:row;display:flex}.grow_modal__content .grow_modal__icon{height:76px;width:76px;margin-right:5px;border-radius:4px}.grow_modal__content h4{margin:0 0 1rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;font-size:14px;letter-spacing:1.4px;font-weight:bolder}.grow_modal__content p{margin-top:0;font-size:14px;margin-bottom:1rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.grow_modal__content .grow_modal__content_text{display:flex;flex-direction:column;margin-left:1rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.grow_modal__btn,.grow_modal__btn:focus-visible{outline:none;box-shadow:none !important}.grow_modal__btn:focus,.grow_modal__btn:hover{-webkit-transform:scale(1.02)}.grow_modal__btn{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;padding:.5rem 1rem;background:none;color:rgba(0,0,0,0.8);border-radius:.25rem;border-style:none;border-width:0;cursor:pointer;-webkit-appearance:button;text-transform:none;overflow:visible;line-height:1.15;margin:0;will-change:transform;-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;width:auto;height:auto}.grow_modal__footer{display:flex;justify-content:flex-end;margin-top:0;padding-top:0;border:none;background:transparent}.grow_modal__btn-cancel,.grow_modal__btn-cancel:focus{border:none !important;background-color:white !important;font-size:12.8px;margin-right:5px}.grow_modal__btn-primary{background-color:#2e5fdc;color:#fff;font-size:14px;border:none;border-radius:4px;padding:4px 16px}@keyframes mmfadeIn{from{opacity:0}to{opacity:1}}@keyframes mmfadeOut{from{opacity:1}to{opacity:0}}@keyframes mmslideIn{from{transform:translateY(-15%)}to{transform:translateY(0)}}@keyframes mmslideOut{from{transform:translateY(0)}to{transform:translateY(-10%)}}.micromodal-slide{display:none}.micromodal-slide.is-open{display:block}.micromodal-slide[aria-hidden="false"] .grow_modal__overlay{animation:mmfadeIn 0.3s cubic-bezier(0, 0, 0.2, 1)}.micromodal-slide[aria-hidden="false"] .grow_modal__container{animation:mmslideIn 0.3s cubic-bezier(0, 0, 0.2, 1)}.micromodal-slide[aria-hidden="true"] .grow_modal__overlay{animation:mmfadeOut 0.3s cubic-bezier(0, 0, 0.2, 1)}.micromodal-slide[aria-hidden="true"] .grow_modal__container{animation:mmslideOut 0.3s cubic-bezier(0, 0, 0.2, 1)}.micromodal-slide .grow_modal__container,.micromodal-slide .grow_modal__overlay{will-change:transform}\n',""]),e.exports=t},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var o=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[i].concat(r).concat([o]).join("\n")}var s,a,c;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);n&&o[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}},function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}i.r(t);var s,a,c,l,d,u=(s=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],a=function(){function e(t){var i=t.targetModal,n=t.triggers,r=void 0===n?[]:n,s=t.onShow,a=void 0===s?function(){}:s,c=t.onClose,l=void 0===c?function(){}:c,d=t.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=t.closeTrigger,h=void 0===f?"data-micromodal-close":f,p=t.openClass,g=void 0===p?"is-open":p,m=t.disableScroll,v=void 0!==m&&m,b=t.disableFocus,y=void 0!==b&&b,w=t.awaitCloseAnimation,_=void 0!==w&&w,S=t.awaitOpenAnimation,k=void 0!==S&&S,I=t.debugMode,x=void 0!==I&&I;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.getElementById(i),this.config={debugMode:x,disableScroll:v,openTrigger:u,closeTrigger:h,openClass:g,onShow:a,onClose:l,awaitCloseAnimation:_,awaitOpenAnimation:k,disableFocus:y},r.length>0&&this.registerTriggers.apply(this,o(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,i,r;return t=e,(i=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];i.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var i=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",i,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var i=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(i),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(s);return Array.apply(void 0,o(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var i=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));i.length>0&&i[0].focus(),0===i.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var i=t.indexOf(document.activeElement);e.shiftKey&&0===i&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&i===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&n(t.prototype,i),r&&n(t,r),e}(),c=null,l=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},d=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var i in t)l(i);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=o(document.querySelectorAll("[".concat(t.openTrigger,"]"))),n=function(e,t){var i=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===i[n]&&(i[n]=[]),i[n].push(e)})),i}(i,t.openTrigger);if(!0!==t.debugMode||!1!==d(i,n))for(var r in n){var s=n[r];t.targetModal=r,t.triggers=o(s),c=new a(t)}},show:function(e,t){var i=t||{};i.targetModal=e,!0===i.debugMode&&!1===l(e)||(c&&c.removeEventListeners(),(c=new a(i)).showModal())},close:function(e){e?c.closeModalById(e):c.closeModal()}});window.MicroModal=u,t.default=u},function(e,t,i){e.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(e){return"function"==typeof e}function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\'{GrowClientJs}'")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}var r=RegExp.prototype.test,s=/\S/;function a(e){return!function(e,t){return r.call(e,t)}(s,e)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},l=/\s*/,d=/\s+/,u=/\s*=/,f=/\s*\}/,h=/#|\^|\/|>|\{|&|=|!/;function p(e){this.string=e,this.tail=e,this.pos=0}function g(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function m(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.eos=function(){return""===this.tail},p.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var i=t[0];return this.tail=this.tail.substring(i.length),this.pos+=i.length,i},p.prototype.scanUntil=function(e){var t,i=this.tail.search(e);switch(i){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,i),this.tail=this.tail.substring(i)}return this.pos+=t.length,t},g.prototype.push=function(e){return new g(e,this)},g.prototype.lookup=function(e){var t,n,r,s=this.cache;if(s.hasOwnProperty(e))t=s[e];else{for(var a,c,l,d=this,u=!1;d;){if(e.indexOf(".")>0)for(a=d.view,c=e.split("."),l=0;null!=a&&l<c.length;)l===c.length-1&&(u=o(a,c[l])||(n=a,r=c[l],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(r))),a=a[c[l++]];else a=d.view[e],u=o(d.view,e);if(u){t=a;break}d=d.parent}s[e]=t}return i(t)&&(t=t.call(this.view)),t},m.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},m.prototype.parse=function(e,i){var o=this.templateCache,r=e+":"+(i||v.tags).join(":"),s=void 0!==o,c=s?o.get(r):void 0;return null==c&&(c=function(e,i){if(!e)return[];var o,r,s,c=!1,g=[],m=[],b=[],y=!1,w=!1,_="",S=0;function k(){if(y&&!w)for(;b.length;)delete m[b.pop()];else b=[];y=!1,w=!1}function I(e){if("string"==typeof e&&(e=e.split(d,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(n(e[0])+"\\s*"),r=new RegExp("\\s*"+n(e[1])),s=new RegExp("\\s*"+n("}"+e[1]))}I(i||v.tags);for(var x,C,O,M,P,T,D=new p(e);!D.eos();){if(x=D.pos,O=D.scanUntil(o))for(var E=0,N=O.length;E<N;++E)a(M=O.charAt(E))?(b.push(m.length),_+=M):(w=!0,c=!0,_+=" "),m.push(["text",M,x,x+1]),x+=1,"\n"===M&&(k(),_="",S=0,c=!1);if(!D.scan(o))break;if(y=!0,C=D.scan(h)||"name",D.scan(l),"="===C?(O=D.scanUntil(u),D.scan(u),D.scanUntil(r)):"{"===C?(O=D.scanUntil(s),D.scan(f),D.scanUntil(r),C="&"):O=D.scanUntil(r),!D.scan(r))throw new Error("Unclosed tag at "+D.pos);if(P=">"==C?[C,O,x,D.pos,_,S,c]:[C,O,x,D.pos],S++,m.push(P),"#"===C||"^"===C)g.push(P);else if("/"===C){if(!(T=g.pop()))throw new Error('Unopened section "'+O+'" at '+x);if(T[1]!==O)throw new Error('Unclosed section "'+T[1]+'" at '+x)}else"name"===C||"{"===C||"&"===C?w=!0:"="===C&&I(O)}if(k(),T=g.pop())throw new Error('Unclosed section "'+T[1]+'" at '+D.pos);return function(e){for(var t,i=[],n=i,o=[],r=0,s=e.length;r<s;++r)switch((t=e[r])[0]){case"#":case"^":n.push(t),o.push(t),n=t[4]=[];break;case"/":o.pop()[5]=t[2],n=o.length>0?o[o.length-1][4]:i;break;default:n.push(t)}return i}(function(e){for(var t,i,n=[],o=0,r=e.length;o<r;++o)(t=e[o])&&("text"===t[0]&&i&&"text"===i[0]?(i[1]+=t[1],i[3]=t[3]):(n.push(t),i=t));return n}(m))}(e,i),s&&o.set(r,c)),c},m.prototype.render=function(e,t,i,n){var o=this.getConfigTags(n),r=this.parse(e,o),s=t instanceof g?t:new g(t,void 0);return this.renderTokens(r,s,i,e,n)},m.prototype.renderTokens=function(e,t,i,n,o){for(var r,s,a,c="",l=0,d=e.length;l<d;++l)a=void 0,"#"===(s=(r=e[l])[0])?a=this.renderSection(r,t,i,n,o):"^"===s?a=this.renderInverted(r,t,i,n,o):">"===s?a=this.renderPartial(r,t,i,o):"&"===s?a=this.unescapedValue(r,t):"name"===s?a=this.escapedValue(r,t,o):"text"===s&&(a=this.rawValue(r)),void 0!==a&&(c+=a);return c},m.prototype.renderSection=function(e,n,o,r,s){var a=this,c="",l=n.lookup(e[1]);if(l){if(t(l))for(var d=0,u=l.length;d<u;++d)c+=this.renderTokens(e[4],n.push(l[d]),o,r,s);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)c+=this.renderTokens(e[4],n.push(l),o,r,s);else if(i(l)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(n.view,r.slice(e[3],e[5]),(function(e){return a.render(e,n,o,s)})))&&(c+=l)}else c+=this.renderTokens(e[4],n,o,r,s);return c}},m.prototype.renderInverted=function(e,i,n,o,r){var s=i.lookup(e[1]);if(!s||t(s)&&0===s.length)return this.renderTokens(e[4],i,n,o,r)},m.prototype.indentPartial=function(e,t,i){for(var n=t.replace(/[^ \t]/g,""),o=e.split("\n"),r=0;r<o.length;r++)o[r].length&&(r>0||!i)&&(o[r]=n+o[r]);return o.join("\n")},m.prototype.renderPartial=function(e,t,n,o){if(n){var r=this.getConfigTags(o),s=i(n)?n(e[1]):n[e[1]];if(null!=s){var a=e[6],c=e[5],l=e[4],d=s;0==c&&l&&(d=this.indentPartial(s,l,a));var u=this.parse(d,r);return this.renderTokens(u,t,n,d,o)}}},m.prototype.unescapedValue=function(e,t){var i=t.lookup(e[1]);if(null!=i)return i},m.prototype.escapedValue=function(e,t,i){var n=this.getConfigEscape(i)||v.escape,o=t.lookup(e[1]);if(null!=o)return"number"==typeof o&&n===v.escape?String(o):n(o)},m.prototype.rawValue=function(e){return e[1]},m.prototype.getConfigTags=function(e){return t(e)?e:e&&"object"==typeof e?e.tags:void 0},m.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!t(e)?e.escape:void 0};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){b.templateCache=e},get templateCache(){return b.templateCache}},b=new m;return v.clearCache=function(){return b.clearCache()},v.parse=function(e,t){return b.parse(e,t)},v.render=function(e,i,n,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(r=e)?"array":typeof r)+'" was given as the first argument for mustache#render(template, view, partials)');var r;return b.render(e,i,n,o)},v.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return c[e]}))},v.Scanner=p,v.Context=g,v.Writer=m,v}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HelperUtils=void 0;t.HelperUtils=class{static urlBase64ToUint8Array(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),i=window.atob(t),n=new Uint8Array(i.length);for(let e=0;e<i.length;++e)n[e]=i.charCodeAt(e);return n}static sleep(e){return new Promise(t=>{setTimeout(()=>{t()},e)})}static getValueIfExist(e){try{return e()}catch(e){return}}static isPushSimilar(e,t){return e.endpoint===t.endpoint&&e.keys.p256dh===t.keys.p256dh&&e.keys.auth===t.keys.auth}}}]);;

    (async function () {
      let styles = `.gw-float-widget {
  border-radius: 5px 5px 0px 0px;
  top: 50% ;
  position: fixed !important;
  right: 0px ;
  z-index: 1000;
  border: none ;
  padding: 10px 20px;
  font-size: 14px ;
  cursor: pointer ;
  font-weight:  bold ;
  margin-right: 8px;
  transform: translate(45%, -50%) rotate(-90deg);
  -webkit-transform: translate(45%, -50%) rotate(-90deg) ;
  -moz-transform: translate(45%, -50%) rotate(-90deg) ;
  -o-transform: translate(45%, -50%) rotate(-90deg) ;
  -ms-transform: translate(45%, -50%) rotate(-90deg) ;
}

.gw-float-widget[gw-stock-fulfilled] {
  color: #ffffff;
  background-color: #000000;
}

.gw-float-widget[gw-price-drop] {
  color: #ffffff;
  background-color: #000000;
}

.gw-collection-page-button{
  z-index:2;
  width:100%;
  color: #ffffff;
  background-color: #000000;
  padding:10px;
  font-size:12px;
  margin-top:5px;
  border:none;
  cursor:pointer;
  position:relative;
}

.gw-float-widget {
        width: fit-content;
        }
.gw-float-widget[gw-price-drop] {
}
.gw-button-widget[gw-stock-fulfilled] {
        margin-top:15px;
}



.gw-modal,#gw-stock-fulfilled-iframe,#gw-price-drop-iframe {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 99999;
  overflow: hidden;
  display: none;
  border:none;
}
.gw-button-widget{
  width:100%;
}
`
      let styleSheet = document.createElement("style")
      styleSheet.type = "text/css"
      let inlineCode = document.createTextNode(styles);
      styleSheet.appendChild(inlineCode);
      document.head.appendChild(styleSheet)

      let client = GrowClient.default;

      if (initVar.isPostPurchasePage()) {
        initVar.sendOrderPurchaseEvent(client)
      }
      client.onInit = (subId) => {
        console.log("subId" + subId)
        initVar.subscriberId = subId
        // window.growConfig.cartMappingFn()
      }
      client.init(initVar)

      window["growClient"] = client
      if (!(await client.getClientStatus())) {
        console.log("Client is not active")
        return;
      }

      initVar.subscriberId = await client.getSubscriberId()
      //try with subscriber id, it can take time to get subscriber id
      if (initVar.isPostPurchasePage()) {
        initVar.sendOrderPurchaseEvent(client)
      }
      window["growConfig"] = initVar
      window["initVar"] = initVar
      // window.growConfig.cartMappingFn = async function () {
      //   let cartResponse = await fetch('/cart.js')
      //     .then(x => x.json())
      //     .catch(x => console.log(x.status));
      //   if (cartResponse && cartResponse.token) {
      //
      //   }
      // };

      growConfig.registerUtmParameter();

      window.growConfig.addToCartClicked();


      if (initVar.customJs) {
        let scriptElm = document.createElement('script');
        scriptElm.type = "text/javascript"
        let inlineCode = document.createTextNode(initVar.customJs);
        // scriptElm.innerText = initVar.customJs
        scriptElm.appendChild(inlineCode);
        document.head.appendChild(scriptElm)
      }
      if (initVar.customCss) {
        let styleElm = document.createElement('style');
        let inlineCode = document.createTextNode(initVar.customCss);
        styleElm.appendChild(inlineCode);
        document.head.appendChild(styleElm)
      }

      initVar.getValueIfExist(() => {
        fetch('https://www.cloudflare.com/cdn-cgi/trace', {method: "GET"}).then(async (res) => {
          let loc = await res.text();
          initVar.defaultCountry = loc &&loc.split('\n').find(x => x.includes('loc')).split('=')[1].trim();
        })
      })

      lastPage = null;

      window.productChangeIntervalSet = false;
      if (!window.productChangeIntervalSet) {
        setInterval(async () => {
          window.productChangeIntervalSet = true;
          if (window.location.href.includes("/products/") && window.location.href !== lastPage) {
            // console.log("Checking Product Data");
            lastPage = window.location.href
            await initVar.registerOnVariantChange()
            await initVar.registerAddToCartChange()
            await initVar.onVariantChange()
          }
        }, 500)
      }
      let isCollectionPage=window.location.href.includes("/collections/");
      if(initVar.showOnOtherPages){
        isCollectionPage=true
      }
      if (isCollectionPage && !window.location.href.includes("/products/")){
        if(initVar.stockWidget.showOnCollectionPage){
          if (!initVar.stockWidget.isEnabled) {
            return;
          }
          let mainJsScriptTag = document.createElement('script');
          mainJsScriptTag.src = window.cartBiteCollectionJsUrl;
          mainJsScriptTag.async = true;
          document.getElementsByTagName('head')[0].appendChild(mainJsScriptTag);
        }
      }


    })();
  }
}
