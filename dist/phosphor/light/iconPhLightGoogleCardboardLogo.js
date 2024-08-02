export const iconPhLightGoogleCardboardLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H96a6,6,0,0,0,4.24-1.76l26.35-26.34a2,2,0,0,1,2.82,0l26.35,26.34A6,6,0,0,0,160,206h64a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,142a2,2,0,0,1-2,2H162.49L137.9,169.42a14,14,0,0,0-19.8,0L93.51,194H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM80,98a30,30,0,1,0,30,30A30,30,0,0,0,80,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,80,146Zm96-48a30,30,0,1,0,30,30A30,30,0,0,0,176,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,176,146Z"/></svg>`;
}
