export const iconPhBoldNotEquals = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,160a12,12,0,0,1-12,12H104.22L56.88,224.07a12,12,0,0,1-17.76-16.14L71.78,172H40a12,12,0,0,1,0-24H93.6L130,108H40a12,12,0,0,1,0-24H151.78l47.34-52.07a12,12,0,0,1,17.76,16.14L184.22,84H216a12,12,0,0,1,0,24H162.4L126,148h90A12,12,0,0,1,228,160Z"/></svg>`;
}
