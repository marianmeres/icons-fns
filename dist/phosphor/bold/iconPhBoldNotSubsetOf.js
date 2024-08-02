export const iconPhBoldNotSubsetOf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216.07,31.12a12,12,0,0,0-16.95.81L195.42,36H128A91.95,91.95,0,0,0,57.8,187.39L39.12,207.93a12,12,0,1,0,17.76,16.14l18.67-20.53A91.48,91.48,0,0,0,128,220h72a12,12,0,0,0,0-24H128a67.51,67.51,0,0,1-36.12-10.43l125-137.5A12,12,0,0,0,216.07,31.12ZM60,128a68.07,68.07,0,0,1,68-68h45.6L74.13,169.42A67.62,67.62,0,0,1,60,128Z"/></svg>`;
}
