class YoutubeComponent extends HTMLElement {

    constructor() {
        super();
        this.idOfVideo = null;
        this.widthOfFrame = null;
        this.heightOfFrame = null;
        const shadow = this.attachShadow({mode: 'open'});

        this.getParameters();
        this.getVideoTemplate()
            .then(r => {
                shadow.appendChild(this.setParameters(r))
            })
    };

    getParameters() {
        const ytComponent = document.querySelectorAll('yt-video')[0];
        this.idOfVideo = ytComponent.getAttribute('data-video-id');
        this.widthOfFrame = ytComponent.getAttribute('data-width');
        this.heightOfFrame = ytComponent.getAttribute('data-height');
    }

    setParameters() {
        const wrapper = document.createElement('div');

        this.getVideoTemplate()
            .then(r => {
                wrapper.innerHTML = r;
                wrapper.firstElementChild.setAttribute('width', this.widthOfFrame)
                wrapper.firstElementChild.setAttribute('height', this.heightOfFrame)
                wrapper.firstElementChild.setAttribute('src', `https://www.youtube.com/embed/${this.idOfVideo}`)
            })

        return wrapper
    }

    async getVideoTemplate() {
        let template = await fetch('components/yt-video/iframe.html')
        return template.text();

    };
}

customElements.define('yt-video', YoutubeComponent);




