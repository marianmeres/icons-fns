export const iconPhThinGooglePodcastsLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,16V48a4,4,0,0,1-8,0V16a4,4,0,0,1,8,0Zm44,44a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V64A4,4,0,0,0,176,60ZM128,204a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V208A4,4,0,0,0,128,204Zm0-120a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,128,84ZM80,60a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V64A4,4,0,0,0,80,60Zm96,72a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V136A4,4,0,0,0,176,132ZM32,108a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,32,108Zm48,48a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V160A4,4,0,0,0,80,156Zm144-48a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,224,108Z"/></svg>`;
}
