// customElements.define(
//   "cust-tag",
//   class extends HTMLElement {
//     connectedCallback() {
//       const temp = this.attachShadow({ mode: "open" });
//       temp.innerHTML = `<p>  hello users  </p>`
//     }
//   }
// );

customElements.define(
    "custom-tag",
    class extends HTMLElement {
      connectedCallback() {
        const tempOne = this.attachShadow({ mode: "open" });
        // ! TODO: have class name error ==> not affect
        tempOne.innerHTML = `<p  class='error'>  ${this.getAttribute('data')} </p>`
      }
    }
  );
  