
import "./index.scss";

export class CaGovGoToTop extends window.HTMLElement {
  constructor() {
    super();
    console.log("go to top1");
    // @TODO We will move these to data attributes after we finish finding elements in code.
    this.options = {
      callback: ({domain = "covid19.ca.gov"}) => {
          // Hiding go-to-top button on the homepage
          // @TODO The doc title 
          // if (document.title.indexOf(domain) != -1) {
          //   var returnTopButton = document.querySelector(".return-top");
          //   returnTopButton.style.display = "none";
          //   window.addEventListener("scroll", function () {
          //     var returnTopButton = document.querySelector(".return-top");
          //     returnTopButton.style.display = "none";
          //   });
          // }
      },
      parentSelector: "#main",
      onLoadSelector: "body",
      styles: "button-blue",
      label: "Top",
    };
  }

  connectedCallback() {
    console.log("go to top");
    // Load go-to-top button

    document.querySelector(
      this.options.onLoadSelector
    ).onload = this.addGoToTopButton(this.options);

    // If an user scrolls down the page for more than 400px activate back to top button
    // otherwise keep it invisible
    var timer;
    var lastScrollTop = 0;

    window.addEventListener("scroll",
      () => this.scrollToTopHandler(this.options, lastScrollTop),
      false
    );

    // Hittin' rock bottom
    window.onscroll = function (ev) {
      var returnTopButton = document.querySelector(".return-top");
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        returnTopButton.classList.add("is-visible");
        clearTimeout(timer);
      }
    };

    if (typeof callback === "function") {
      this.options.callback();
    }
  }

  scrollToTopHandler(options, lastScrollTop) {
 
      let container = document.querySelector(this.options.parentSelector);

      var returnTopButton = document.querySelector(".return-top");
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // downscroll code
        returnTopButton.classList.remove("is-visible");
      } else {
        // upscroll code
        if (
          container.scrollTop >= 400 ||
          document.documentElement.scrollTop >= 400
        ) {
          // if (timer != "undefined") {
          //   clearTimeout(timer);
          // }
          // returnTopButton.classList.add("is-visible");

          // timer = setTimeout(function () {
          //   returnTopButton.classList.remove("is-visible");
          // }, 2000); //Back to top removes itself after 2 sec of inactivity
        }
        // bottom of the page
        else {
          returnTopButton.classList.remove("is-visible");
        }
      }
      // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

  }

  addGoToTopButton(options) {
    // Create go-to-top button

    // Create a new go-to-top span element with class "return-top"
    
    let container = document.querySelector(options.parentSelector);

    const returnTop = document.createElement("span");
    returnTop.classList.add("return-top");
    returnTop.classList.add(options.styles);
    // this one does't need to be accessible, Screen Reader users have other options to get to the top
    returnTop.setAttribute("aria-hidden", "true");

    // add some text to the go-to-top button
    const returnContent = document.createTextNode(options.label);

    // append text to the go-to-top span
    returnTop.appendChild(returnContent);

    // add the newly created element and its content into main tag
    container.append(returnTop);

    // Add on-click event
    returnTop.addEventListener("click", this.goToTopFunction);
  }

  goToTopFunction() {
    document.querySelector(this.options.onLoadSelector).scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
window.customElements.define("cagov-go-to-top", CaGovGoToTop);
