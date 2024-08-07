export const iconPhThinMeteor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M96,124a36,36,0,1,0,36,36A36,36,0,0,0,96,124Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,96,188Zm122.83-62.83a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66-5.66l48-48A4,4,0,0,1,218.83,125.17Zm-32-18.34-24,24a4,4,0,0,1-5.66-5.66l24-24a4,4,0,1,1,5.66,5.66Zm40-40-16,16a4,4,0,0,1-5.66-5.66l16-16a4,4,0,1,1,5.66,5.66ZM125.17,93.17l72-72a4,4,0,1,1,5.66,5.66l-72,72a4,4,0,1,1-5.66-5.66Zm18.91,109.26a4,4,0,0,1,0,5.65,68,68,0,1,1-96.16-96.16l82.74-82.75a4,4,0,1,1,5.66,5.66L53.57,117.57a60,60,0,0,0,84.86,84.86A4,4,0,0,1,144.08,202.43Z"/></svg>`;
}
