export const iconPhLightGooglePodcastsLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M134,16V48a6,6,0,0,1-12,0V16a6,6,0,0,1,12,0Zm42,42a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V64A6,6,0,0,0,176,58ZM128,202a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V208A6,6,0,0,0,128,202Zm0-120a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,128,82ZM80,58a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V64A6,6,0,0,0,80,58Zm96,72a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V136A6,6,0,0,0,176,130ZM32,106a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,32,106Zm48,48a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V160A6,6,0,0,0,80,154Zm144-48a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,224,106Z"/></svg>`;
}
