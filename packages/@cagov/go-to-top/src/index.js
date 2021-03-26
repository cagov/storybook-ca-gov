export class CaGovGoToTop extends window.HTMLElement {
  constructor() {
    super();
    console.log("go to top1");
    // @TODO We will move these to data attributes after we finish finding elements in code.
    this.options = {
      callback: ({domain = "covid19.ca.gov"}) => {
          // Hiding go-to-top button on the homepage
          if (document.title !== undefined && document.title.indexOf(domain) !== -1) {
            var returnTopButton = document.querySelector(".return-top");
            returnTopButton.style.display = "none";
            window.addEventListener("scroll", function () {
              var returnTopButton = document.querySelector(".return-top");
              returnTopButton.style.display = "none";
            });
          }
      },
      parentSelector: "#main",
      onLoadSelector: "body",
      styles: "button-blue",
      label: "Top",
      scrollAfter: 400, // Height re: start showing button
      removeAfter: 2000,
    };
    this.state = {
      lastScrollTop: 0,
      timer: null
    }
  }

  connectedCallback() {
    console.log("go to top");
    
    // Load go-to-top button
    document.querySelector(
      this.options.onLoadSelector
    ).onload = this.addGoToTopButton(this.options);

    // If an user scrolls down the page for more than 400px activate back to top button.
    // Otherwise, keep it invisible.
    window.addEventListener("scroll",
      () => this.scrollToTopHandler(this.options, this.state),
      false
    );

    // Hittin' rock bottom
    window.onscroll = function (ev) {
      var returnTopButton = document.querySelector(".return-top");
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        returnTopButton.classList.add("is-visible");
        clearTimeout(this.state.timer);
      }
    };

    if (typeof callback === "function") {
      this.options.callback();
    }
  }

  scrollToTopHandler(options, state) {
      let container = document.querySelector(this.options.parentSelector);
      let { lastScrollTop } = state;
      var returnTopButton = document.querySelector(".return-top");

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log("scrollTop", scrollTop, lastScrollTop);
      if (scrollTop > lastScrollTop) {
        // Downscroll code
        returnTopButton.classList.remove("is-visible");
      } else {
        // Upscroll code
        if (
          container.scrollTop >= options.scrollAfter ||
          document.documentElement.scrollTop >= options.scrollAfter
        ) {
          if (this.state.timer !== null) {
            clearTimeout(this.state.timer);
          }
          returnTopButton.classList.add("is-visible");

          this.state.timer = setTimeout(function () {
            returnTopButton.classList.remove("is-visible");
          }, options.removeAfter); // Back to top removes itself after 2 sec of inactivity
        } else {
          // Bottom of the page
          returnTopButton.classList.remove("is-visible");
        }
      }
      state.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }

  addStyle(element) {
    const style = document.createElement('style');
    style.textContent = `
    .return-top {
      position: fixed;
      z-index: 99999;
      right: 15px;
      bottom: -50px;
      opacity: 0;
      visibility: hidden;
      text-decoration: none;
      cursor: pointer;
      transition:all .5s linear;
    }
    
    .return-top:before {
      content: "\\e9f6";
      font-family: "CaGov";
      padding-right: 5px;
    }
    
    .return-top.is-visible {
      opacity: 1;
      visibility: visible;
      display: inline;
      bottom:50px;
    }
    `;
    element.appendChild(style);
  }

  // Create go-to-top button
  addGoToTopButton(options) {
    // Create a new go-to-top span element with class "return-top"
    let container = document.querySelector(options.parentSelector);

    const returnTop = document.createElement("span");
    returnTop.classList.add("return-top");
    returnTop.classList.add(options.styles);
    // Does not need to be accessible. 
    // Screen Reader users have other options to get to the top.
    returnTop.setAttribute("aria-hidden", "true");

    // Add some text to the go-to-top button
    const returnContent = document.createTextNode(options.label);

    // Append text to the go-to-top span
    returnTop.appendChild(returnContent);
    this.addStyle(returnTop);
    // Add the newly created element and its content into main tag
    container.append(returnTop);

    // Add on-click event
    returnTop.addEventListener("click", (options) => this.goToTopFunction(options));
  }

  goToTopFunction(options) {
    document.querySelector(this.options.onLoadSelector).scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
window.customElements.define("cagov-go-to-top", CaGovGoToTop);
