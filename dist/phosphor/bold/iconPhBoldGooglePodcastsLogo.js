export const iconPhBoldGooglePodcastsLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,16V48a12,12,0,0,1-24,0V16a12,12,0,0,1,24,0Zm36,36a12,12,0,0,0-12,12V96a12,12,0,0,0,24,0V64A12,12,0,0,0,176,52ZM128,196a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V208A12,12,0,0,0,128,196Zm0-120a12,12,0,0,0-12,12v80a12,12,0,0,0,24,0V88A12,12,0,0,0,128,76ZM80,52A12,12,0,0,0,68,64v56a12,12,0,0,0,24,0V64A12,12,0,0,0,80,52Zm96,72a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0V136A12,12,0,0,0,176,124ZM32,100a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,32,100Zm48,48a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V160A12,12,0,0,0,80,148Zm144-48a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,224,100Z"/></svg>`;
}
