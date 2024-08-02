export const iconPhThinFlag = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M45.39,53.06a4,4,0,0,0-1.39,3V224a4,4,0,0,0,8,0V177.87c29.41-24.39,55.08-11.69,82.23,1.73,16.5,8.17,33.33,16.5,51.13,16.5,13.14,0,26.81-4.55,41.26-17.06a4,4,0,0,0,1.38-3v-120a4,4,0,0,0-6.62-3c-30,26-56,13.07-83.61-.57C109.07,38.28,79.4,23.62,45.39,53.06ZM220,174.17c-29.41,24.4-55.08,11.7-82.23-1.73-26.82-13.27-54.5-27-85.77-4.66V57.92c29.41-24.4,55.08-11.7,82.23,1.73,26.82,13.27,54.5,27,85.77,4.66Z"/></svg>`;
}
