export const iconPhThinGoogleCardboardLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H96a4,4,0,0,0,2.83-1.17l26.34-26.34a4.08,4.08,0,0,1,5.66,0l26.34,26.34A4,4,0,0,0,160,204h64a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,140a4,4,0,0,1-4,4H161.66l-25.17-25.17a12,12,0,0,0-17,0L94.34,196H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM80,100a28,28,0,1,0,28,28A28,28,0,0,0,80,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,80,148Zm96-48a28,28,0,1,0,28,28A28,28,0,0,0,176,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,176,148Z"/></svg>`;
}
