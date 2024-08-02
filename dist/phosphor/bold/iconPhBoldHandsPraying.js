export const iconPhBoldHandsPraying = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238.15,177.18l-35.53-35.53L166.45,22.3A25.75,25.75,0,0,0,128,8,25.75,25.75,0,0,0,89.55,22.3L53.38,141.65,17.85,177.18a20,20,0,0,0,0,28.28l32.69,32.69a20,20,0,0,0,28.28,0l48.29-48.28c.31-.31.6-.62.89-.94.29.32.58.63.89.94l48.29,48.28a20,20,0,0,0,28.28,0l32.69-32.69A20,20,0,0,0,238.15,177.18ZM64.68,218.35l-27-27,11-11,27,27ZM116,158.75a19.85,19.85,0,0,1-5.86,14.14L92.68,190.35l-27-27,6.83-6.83a11.94,11.94,0,0,0,3-5l37-122.23a1.78,1.78,0,0,1,3.48.52Zm47.5,31.78-17.64-17.64A19.85,19.85,0,0,1,140,158.75v-129a1.78,1.78,0,0,1,3.48-.52l37,122.23a11.94,11.94,0,0,0,3,5l7.6,7.6Zm27.82,27.82-10.85-10.84,27.63-26.44,10.25,10.25Z"/></svg>`;
}
