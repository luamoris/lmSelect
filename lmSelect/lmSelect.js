// Polyphil

if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
         callback.call(thisArg, this[i], i, this);
      }
   };
}


// LM SELECT

const lmSclasses = {
   button: "dropdown-btn",
   list: "dropdown-list",
   item: "dropdown-item",
   input: "dropdown-input",
   addVisible: "_visible",
   addFocus: "_focus",
}

const lmShotKeys = {
   tab: "Tab",
   enter: "Enter",
   escape: "Escape",
}

class LmSelect {
   constructor(selectorId) {
      const wrapper = document.getElementById(selectorId);

      this.visible = false;
      this.dropdown = {
         button: wrapper.querySelector(`.${lmSclasses.button}`),
         list: wrapper.querySelector(`.${lmSclasses.list}`),
         items: wrapper.querySelectorAll(`.${lmSclasses.item}`),
         input: wrapper.querySelector(`.${lmSclasses.input}`),
      };
   }

   // function fun(data) {}
   init(fun) {
      // Click on the Button
      this.dropdown.button.addEventListener("click", event => {
         this.toggleDropdown();
      });

      // Click on the Items
      this.dropdown.items.forEach(item => {
         item.addEventListener("click", event => {
            event.stopPropagation();
            const el = event.target;
            this.dropdown.button.innerText = el.innerText;
            this.addValueToInput(el.dataset.value);
            this.toggleDropdown();
            this.dropdown.button.focus();
         });
      })

      // Close
      document.addEventListener("click", event => {
         if (event.target !== this.dropdown.button) {
            this.closeDropdown();
         }
      })

      // Close with keys
      document.addEventListener("keydown", event => {
         if (event.key === lmShotKeys.escape || event.key === lmShotKeys.tab) {
            this.closeDropdown();
         }
      });

      // Change value
      this.dropdown.input.addEventListener("change", event => {
         const data = {
            value: event.target.value,
         };
         fun(data);
      });
   }

   toggleDropdown() {
      this.visible = !this.visible;
      this.dropdown.list.classList.toggle(lmSclasses.addVisible);
      this.dropdown.button.classList.toggle(lmSclasses.addFocus);
   }

   closeDropdown() {
      if (this.visible) {
         this.toggleDropdown();
      }
   }

   addValueToInput(value) {
      this.dropdown.input.value = value;
      this.dropdown.input.dispatchEvent(new Event("change"));
   }
}