export class CaGovGoToTop extends window.HTMLElement {
  constructor() {
    super();
    // @TODO We will accept these properties as data attributes.
    this.options = {
      parentSelector: "#main",
      onLoadSelector: "body",
      styles: "button-blue",
      label: "Top",
      scrollAfterHeight: 400,
      removeAfter: 3500,
      scrollBottomThreshold: 10,
    };
    this.state = {
      lastScrollTop: 0,
      timer: null,
    };
  }

  connectedCallback() {
    // Load go-to-top button
    document.querySelector(
      this.options.onLoadSelector
    ).onload = this.addGoToTopButton(this.options);

    // If a user scrolls down the page for more than the "scrollAfterHeight" (example: 400px), activate back to top button.
    // Otherwise, keep it invisible.
    window.addEventListener(
      "scroll",
      () => this.scrollToTopHandler(this.options, this.state),
      false
    );

    // Hittin' rock bottom
    window.onscroll = () =>
      function (e, state) {
        let { timer } = state;
        var returnTopButton = document.querySelector(".return-top");
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          returnTopButton.classList.add("is-visible");
          clearTimeout(timer);
        }
      };
  }

  scrollToTopHandler(options, state) {
    let container = document.querySelector(this.options.parentSelector);
    let { lastScrollTop, timer } = state;
    var returnTopButton = document.querySelector(".return-top");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Downscroll code
      returnTopButton.classList.remove("is-visible");
    } else {
      // Upscroll code
      if (
        container.scrollTop >= options.scrollAfterHeight ||
        document.documentElement.scrollTop >= options.scrollAfterHeight
      ) {
        if (timer !== null) {
          clearTimeout(timer);
        }
        returnTopButton.classList.add("is-visible");

        timer = setTimeout(function () {
          returnTopButton.classList.remove("is-visible");
        }, options.removeAfter); // Back to top removes itself after 2 sec of inactivity
      } else {
        // Bottom of the page
        returnTopButton.classList.remove("is-visible");
      }
    }

    state.lastScrollTop =
      scrollTop <= 0
        ? 0
        : scrollTop; // For Mobile or negative scrolling
  }

  addStyle(element) {
    const style = document.createElement("style");
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
    returnTop.addEventListener("click", (options) =>
      this.goToTopFunction(options)
    );
  }

  goToTopFunction(options) {
    document.querySelector(this.options.onLoadSelector).scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
window.customElements.define("cagov-go-to-top", CaGovGoToTop);
