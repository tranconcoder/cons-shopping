(()=>{"use strict";const t=(t,s=document)=>s.querySelector(t);class s{static getCartList(){return JSON.parse(localStorage.getItem(this.CART_STORAGE_KEY)||"{}")}static addToCart(t){const s=this.getCartList();s.hasOwnProperty(t)?s[t]++:s[t]=1,this.setStorage(s)}static removeFromCart(t){const s=this.getCartList();s.hasOwnProperty(t)&&s[t]>=1&&s[t]--,0===s[t]&&delete s[t],this.setStorage(s)}static getCartCount(){const t=this.getCartList();return Object.keys(t).reduce(((s,e)=>s+t[e]),0)}static setProductCount(t,s){const e=this.getCartList();s<=0?delete e[t]:e[t]=s,this.setStorage(e)}static setStorage(t){localStorage.setItem(this.CART_STORAGE_KEY,JSON.stringify(t))}}s.CART_STORAGE_KEY="cons_shopping_cart";const e=s,i=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}),n=new Event("cart-change");new class{constructor(){this.productIdList=[],this.productList=[],this.cartListCtn=document.createElement("ul"),this.cartItemList=[],this.cartList={},this.initData()}initData(){return t=this,s=void 0,n=function*(){this.cartList=e.getCartList(),this.productIdList=Object.keys(this.cartList);const t=[...new Set(this.productIdList)],s=yield Promise.all(t.map((t=>fetch(`/api/get-product?productId=${t}`))));this.productList=yield Promise.all(s.map((t=>t.json()))),this.initElm(),this.initView(),this.initEvent()},new((i=void 0)||(i=Promise))((function(e,a){function c(t){try{o(n.next(t))}catch(t){a(t)}}function r(t){try{o(n.throw(t))}catch(t){a(t)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(t){t(s)}))).then(c,r)}o((n=n.apply(t,s||[])).next())}));var t,s,i,n}initElm(){this.cartListCtn=t(".cart-list-wrapper .cart-list")}initView(){this.cartItemList=this.productList.map((t=>{const s=document.createElement("li");return s.classList.add("cart-item"),s.innerHTML=`\n                <input type="checkbox">\n\n                <img src="${t.thumb}" alt="" class="thumb">\n\n                <span class="name">${t.label}</span>\n\n                <span class="count">\n                    <button class="sub">-</button>\n                    <input type="number" min="1" id="" value="${this.cartList[t.productId]}">\n                    <button class="add">+</button>\n                </span>\n\n                <span class="price">${i.format(t.cost)}</span>\n\n                <span class="cost">${i.format(t.cost*this.cartList[t.productId])}</span>\n            `,s})),this.cartItemList.forEach((t=>this.cartListCtn.appendChild(t)))}initEvent(){this.cartItemList.forEach(((s,a)=>{const c=t(".sub",s),r=t(".add",s),o=t("input[type=number]",s),u=t(".cost",s),h=this.productList[a].productId,l=()=>{const t=+o.value*this.productList[a].cost,s=+o.value;e.setProductCount(h,s),u.textContent=i.format(t),document.dispatchEvent(n)};r.addEventListener("click",(()=>{o.value=+o.value+1+"",l()})),c.addEventListener("click",(()=>{"1"===o.value&&confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?")&&(s.remove(),o.value="0"),o.value="1"!=o.value?+o.value-1+"":"1",l()})),o.addEventListener("change",(()=>{+o.value<1&&(o.value="1"),l()}))}))}}})();