export const iconPhThinScrollThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,104a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H104A4,4,0,0,1,100,104Zm4,36h64a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8Zm124,52a28,28,0,0,1-28,28H88a28,28,0,0,1-28-28V64a20,20,0,0,0-40,0c0,7.78,6.34,12.75,6.4,12.8a4,4,0,1,1-4.8,6.4C21.21,82.91,12,75.86,12,64A28,28,0,0,1,40,36H176a28,28,0,0,1,28,28V172h12a4,4,0,0,1,2.4.8C218.79,173.09,228,180.14,228,192Zm-120,0c0-7.78-6.34-12.75-6.4-12.8A4,4,0,0,1,104,172h92V64a20,20,0,0,0-20-20H59.57A27.9,27.9,0,0,1,68,64V192a20,20,0,0,0,40,0Zm112,0c0-6-3.74-10.3-5.5-12H112.61A23.31,23.31,0,0,1,116,192a27.94,27.94,0,0,1-8.42,20H200A20,20,0,0,0,220,192Z"/></svg>`;
}
