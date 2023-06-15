(()=>{"use strict";var t={858:(t,e,n)=>{n.d(e,{$:()=>r});const r=(t,e=document)=>e.querySelector(t)}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(858);const e=class{constructor(){this.notify={required:"Không được để trống trường này!",minLength:t=>"Độ dài tối thiểu từ "+t+" ký tự!",maxLength:t=>"Độ dài tối đa là "+t+" ký tự!",equalLength:t=>"Độ dài phải là "+t+"!",secureLevel1:"Phải bao gồm số, ký tự hoa, thường và ký tự đặc biệt",numberOnly:"Chỉ cho phép nhập số!",notSymbolCheck:"Không nhập ký tự đặc biệt vào trường này",isEmail:"Không đúng định dạng Email, vui lòng nhập lại!",requiredSymbol:"Trường này bắt buộc chứa ký tự đặc biệt",requiredUpper:"Trường này bắt buộc chứa ký tự in ho",requiredLower:"Trường này bắt buộc chứa ký tự in thường",requiredNumber:"Trường này bắt buộc chứa chữ số",equalInputValue:t=>"Giá trị vừa nhập không khớp với trường "+t+"!"}}required(t){return 0==t.length&&this.notify.required}lengthCheck(t,e,n){return"min"===e&&t.length<n?this.notify.minLength(n):"max"===e&&t.length>n?this.notify.maxLength(n):"equal"===e&&t.length!==n&&this.notify.equalLength(n)}notSymbolCheck(t){return!new RegExp(/^[A-Za-z0-9]*$/).test(t)&&this.notify.notSymbolCheck}requiredSymbol(t){return!/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(t)&&this.notify.requiredSymbol}requiredLower(t){return!/[a-z]/.test(t)&&this.notify.requiredLower}requiredUpper(t){return!/[A-Z]/.test(t)&&this.notify.requiredUpper}requiredNumber(t){return!/[0-9]/.test(t)&&this.notify.requiredNumber}numberOnly(t){return!/^[0-9]*$/.test(t)&&this.notify.numberOnly}isEmail(t){return!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-za-z\-0-9]+\.)+[a-za-z]{2,}))$/.test(t.toLowerCase())&&this.notify.isEmail}secureLevel1(t){const e=this.lengthCheck(t,"min",8);if(e)return e;const n=this.requiredSymbol(t),r=this.requiredNumber(t),s=this.requiredLower(t),i=this.requiredUpper(t);return!!(n||r||s||i)&&this.notify.secureLevel1}equalInputValue(t,e,n){return t!==e.value&&this.notify.equalInputValue(n)}setError(t,e){var n;const r=null===(n=t.parentElement)||void 0===n?void 0:n.parentElement,s=r.querySelector(".error-message");return r.classList.add("error"),s.textContent=e,!1}removeError(t){var e;const n=null===(e=t.parentElement)||void 0===e?void 0:e.parentElement;n.querySelector(".error-message").textContent="",n.classList.remove("error")}checkInputValues(t,e){const n=t.value;if(e.required){const e=this.required(n);if(e)return this.setError(t,e)}else if(0===n.length)return this.removeError(t),!0;if(e.isEmail){const e=this.isEmail(n);if(e)return this.setError(t,e)}if(e.numberOnly){const e=this.numberOnly(n);if(e)return this.setError(t,e)}if(e.notSymbol){const e=this.notSymbolCheck(n);if(e)return this.setError(t,e)}if(e.secureLevel1){const e=this.secureLevel1(n);if(e)return this.setError(t,e)}if(e.equalLength){const r=this.lengthCheck(n,"equal",e.equalLength);if(r)return this.setError(t,r)}if(e.minLength){const r=this.lengthCheck(n,"min",e.minLength);if(r)return this.setError(t,r)}if(e.maxLength){const r=this.lengthCheck(n,"max",e.maxLength);if(r)return this.setError(t,r)}if(e.equalInputValue){const r=this.equalInputValue(n,e.equalInputValue.inputToCompare,e.equalInputValue.inputLabel);if(r)return this.setError(t,r)}return this.removeError(t),!0}listenAndValidateInput(t,e){t.addEventListener("focusout",(n=>{this.checkInputValues(t,e)}))}resetForm(){const t=Object.getOwnPropertyNames(this);t.filter((t=>this[t]instanceof HTMLFormElement)).map((t=>this[t])).forEach((t=>{t.reset()})),t.filter((t=>this[t]instanceof HTMLInputElement)).map((t=>this[t])).forEach((t=>{this.removeError(t)}))}},r=class extends e{constructor(){super(),this.formElm=(0,t.$)(".authenticate-ctn .form-ctn.login"),this.usernameInput=(0,t.$)("#username-input"),this.passwordInput=(0,t.$)("#password-input")}listenEvent(){const t={required:!0,minLength:6,maxLength:24,notSymbol:!0},e={required:!0,secureLevel1:!0};this.listenAndValidateInput(this.usernameInput,t),this.listenAndValidateInput(this.passwordInput,e),this.formElm.addEventListener("submit",(n=>{const r=this.checkInputValues(this.usernameInput,t),s=this.checkInputValues(this.passwordInput,e);r&&s||n.preventDefault()}))}},s=class extends e{constructor(){super(),this.formElm=(0,t.$)(".authenticate-ctn .form-ctn.register"),this.usernameInput=(0,t.$)("#username-register-input"),this.passwordInput=(0,t.$)("#password-register-input"),this.retypePasswordInput=(0,t.$)("#retype-password-input"),this.firstNameInput=(0,t.$)("#first-name-input"),this.lastNameInput=(0,t.$)("#last-name-input"),this.addressInput=(0,t.$)("#address-input"),this.phoneNumberInput=(0,t.$)("#phone-number-input"),this.gmailInput=(0,t.$)("#gmail-input")}listenEvent(){const t={required:!0,minLength:6,maxLength:16,notSymbol:!0},e={required:!0,minLength:8,maxLength:36,secureLevel1:!0},n=Object.assign(Object.assign({},e),{equalInputValue:{value:this.retypePasswordInput.value,inputLabel:"mật khẩu",inputToCompare:this.passwordInput}}),r={required:!0,minLength:2,maxLength:8,notSymbol:!0},s={required:!0,minLength:2,maxLength:8,notSymbol:!0},i={required:!0,minLength:10,maxLength:120},u={required:!0,numberOnly:!0,equalLength:10},h={isEmail:!0};this.listenAndValidateInput(this.usernameInput,t),this.listenAndValidateInput(this.passwordInput,e),this.listenAndValidateInput(this.retypePasswordInput,n),this.listenAndValidateInput(this.firstNameInput,r),this.listenAndValidateInput(this.lastNameInput,s),this.listenAndValidateInput(this.addressInput,i),this.listenAndValidateInput(this.phoneNumberInput,u),this.listenAndValidateInput(this.gmailInput,h),this.formElm.addEventListener("submit",(a=>{const o=this.checkInputValues(this.usernameInput,t),l=this.checkInputValues(this.passwordInput,e),c=this.checkInputValues(this.retypePasswordInput,n),d=this.checkInputValues(this.firstNameInput,r),p=this.checkInputValues(this.lastNameInput,s),m=this.checkInputValues(this.addressInput,i),g=this.checkInputValues(this.phoneNumberInput,u),I=this.checkInputValues(this.gmailInput,h);o&&l&&c&&d&&p&&m&&g&&I||a.preventDefault()}))}};new class{constructor(){this.focusing=!1,this.searchBox=(0,t.$)("#search-box"),this.searchInput=(0,t.$)(".search-input"),this.submitButton=(0,t.$)(".search-input ~ .submit-button"),this.searchProductListElm=(0,t.$)(".search-products__list",this.searchBox),this.listenAndHandleEvent()}listenAndHandleEvent(){this.listenAndHandleSubmit(),this.listenAndHandleSearch()}listenAndHandleSearch(){this.handleSearchProduct(),this.searchInput.addEventListener("input",this.handleSearchProduct.bind(this))}listenAndHandleSubmit(){this.searchInput.addEventListener("focusin",(()=>{window.addEventListener("keypress",this.handleSubmitByKeyPress.bind(this))})),this.searchInput.addEventListener("focusout",(()=>{window.removeEventListener("keypress",this.handleSubmitByKeyPress.bind(this))})),this.submitButton.addEventListener("click",this.handleSubmit.bind(this))}handleSearchProduct(){clearInterval(this.timeoutIdSubmitAfterStopInputSearch),this.timeoutIdSubmitAfterStopInputSearch=setTimeout((()=>{return t=this,e=void 0,r=function*(){if(!this.searchInput.value)return this.searchProductListElm.innerHTML="";const t=`/api/search-product?q=${this.searchInput.value}`,e=yield fetch(t,{method:"GET"}).then((t=>t.json()));this.renderSearchProducts(e)},new((n=void 0)||(n=Promise))((function(s,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function h(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,h)}a((r=r.apply(t,e||[])).next())}));var t,e,n,r}),500)}handleSubmitByKeyPress(t){"Enter"===t.code&&this.handleSubmit()}handleSubmit(){this.searchInput.value=this.searchInput.value.replace(/[^\w\s]/gi,""),this.searchInput.value.trim().length&&(window.location.href="/search?q="+this.searchInput.value)}renderSearchProducts(t){this.searchProductListElm.innerHTML="",t.forEach((t=>{const e=document.createElement("li");e.innerHTML=`\n                <a href="/product?id=${t.productId}">\n                    <img\n                        src="${t.thumb||""}"\n                        alt="thumb"\n                    >\n                        \n                    <h4>${t.label}</h4>\n                </a>\n            `,this.searchProductListElm.appendChild(e)}))}},(new r).listenEvent(),(new s).listenEvent();const i=new class{constructor(){this.loginForm=new r,this.registerForm=new s,this.checkboxToShowBox=(0,t.$)("#toggle-register-auth-box")}listenChangeFormInput(){this.loginForm.listenEvent(),this.registerForm.listenEvent()}listenEventToShowAndHideBox(){this.checkboxToShowBox.addEventListener("change",(()=>{this.loginForm.resetForm(),this.registerForm.resetForm()}))}};i.listenChangeFormInput(),i.listenEventToShowAndHideBox()})()})();