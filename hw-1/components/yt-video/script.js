class YoutubeComponent extends HTMLElement {

    constructor() {
        super();
        this.idOfVideo = null;
        this.widthOfFrame = null;
        this.heightOfFrame = null;
        this.shadow = this.attachShadow({mode: 'open'});

        this.init();
    };

    getParameters() {
        const ytComponent = document.querySelectorAll('yt-video')[0];
        this.idOfVideo = ytComponent.getAttribute('data-video-id');
        this.widthOfFrame = ytComponent.getAttribute('data-width');
        this.heightOfFrame = ytComponent.getAttribute('data-height');
    };

    setParameters() {
        const wrapper = document.createElement('div');

        this.getVideoTemplate()
            .then(r => {
                wrapper.innerHTML = r;
                wrapper.firstElementChild.setAttribute('width', this.widthOfFrame)
                wrapper.firstElementChild.setAttribute('height', this.heightOfFrame)
                wrapper.firstElementChild.setAttribute('src', `https://www.youtube.com/embed/${this.idOfVideo}`)
            })
        this.shadow.appendChild(wrapper)
    };

    async getVideoTemplate() {
        let template = await fetch('components/yt-video/iframe.html')
        return template.text();
    };

    init() {
        this.getParameters();
        this.setParameters();
    };
}

customElements.define('yt-video', YoutubeComponent);




