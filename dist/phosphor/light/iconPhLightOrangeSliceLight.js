export const iconPhLightOrangeSliceLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,82H8a6,6,0,0,0-6,6,126,126,0,0,0,252,0A6,6,0,0,0,248,82ZM74.46,150,122,102.48v67.28A81.66,81.66,0,0,1,74.46,150ZM66,141.54A81.66,81.66,0,0,1,46.24,94h67.28Zm68-39.06L181.54,150A81.66,81.66,0,0,1,134,169.76Zm56,39.06L142.48,94h67.28A81.66,81.66,0,0,1,190,141.54ZM128,202A114.14,114.14,0,0,1,14.16,94h20a94,94,0,0,0,187.6,0h20A114.14,114.14,0,0,1,128,202Z"/></svg>`;
}
