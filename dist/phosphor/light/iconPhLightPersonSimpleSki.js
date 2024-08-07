export const iconPhLightPersonSimpleSki = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,86a26,26,0,1,0-26-26A26,26,0,0,0,172,86Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,172,46ZM38.32,85.76l111.47,32.51,6,6A6,6,0,0,0,160,126h40a6,6,0,0,0,0-12H162.49L132.24,83.75a6,6,0,0,0-8.48,0L112.59,94.92,41.68,74.24a6,6,0,1,0-3.36,11.52ZM128,96.48l4.14,4.14-6.41-1.87Zm107.33,106.1a67.79,67.79,0,0,1-56.7,8.69L22.32,165.75a6,6,0,1,1,3.36-11.52l77.13,22.46L132.55,147l-46.2-13.2a6,6,0,0,1,3.3-11.54l56,16a6,6,0,0,1,2.59,10L116,180.52l66,19.23a55.79,55.79,0,0,0,46.68-7.15,6,6,0,1,1,6.66,10Z"/></svg>`;
}
