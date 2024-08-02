export const iconPhBoldTaxiBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,100h-9L204.72,54.08A20,20,0,0,0,187.36,44H168.12l-11-27.43A19.9,19.9,0,0,0,138.58,4H117.42A19.9,19.9,0,0,0,98.85,16.57L87.88,44H68.64A20,20,0,0,0,51.28,54.08L25,100H16a12,12,0,0,0,0,24h4v76a20,20,0,0,0,20,20H68a20,20,0,0,0,20-20V180h80v20a20,20,0,0,0,20,20h28a20,20,0,0,0,20-20V124h4a12,12,0,0,0,0-24ZM120.12,28h15.76l6.4,16H113.72ZM71,68H185l18.28,32H52.68ZM64,196H44V180H64Zm148,0H192V180h20Zm0-40H44V124H212Z"/></svg>`;
}
