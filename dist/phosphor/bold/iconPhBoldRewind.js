export const iconPhBoldRewind = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.7,54.46a20,20,0,0,0-20.33.66L132,101.85v-30a19.91,19.91,0,0,0-30.63-16.72L13.19,111.29a19.79,19.79,0,0,0,0,33.42l88.18,56.17A19.91,19.91,0,0,0,132,184.16v-30l73.37,46.73A19.91,19.91,0,0,0,236,184.16V71.84A19.84,19.84,0,0,0,225.7,54.46ZM108,176.64,31.63,128,108,79.36Zm104,0L135.63,128,212,79.36Z"/></svg>`;
}
