class CaGovDrawer extends window.HTMLElement {
    connectedCallback () {
      this.classList.add('prog-enhanced');
      this.expandTarget = this.querySelector('.drawer-container');
      this.expandButton = this.querySelector('.drawer-header');
      this.expandButton.addEventListener('click', this.listen.bind(this));
      this.activateButton = this.querySelector('.drawer-header');
    }
  
    listen () {
      if (!this.cardBodyHeight) {
        this.cardBodyHeight = this.querySelector('.drawer-body').clientHeight;
      }
      if (this.expandTarget.clientHeight > 0) {
        this.expandTarget.style.height = '0px';
        this.expandTarget.setAttribute('aria-hidden', 'true');
        this.querySelector('.drawer-header').classList.remove('accordion-alpha-open');
        const expando = this.expandTarget;
        this.activateButton.setAttribute('aria-expanded', 'false');
        setTimeout(function () {
          expando.style.display = 'none';
        }, 300);
      } else {
        this.expandTarget.style.display = 'block';
        this.expandTarget.style.height = this.cardBodyHeight + 'px';
        this.expandTarget.setAttribute('aria-hidden', 'false');
        this.querySelector('.drawer-header').classList.add('accordion-alpha-open');
        this.querySelector('.drawer-container').classList.remove('collapsed');
        this.activateButton.setAttribute('aria-expanded', 'true');
      }
    }
  }
  window.customElements.define('cagov-drawer', CaGovDrawer);
  