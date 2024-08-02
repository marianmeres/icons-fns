export const iconPhLightRadioLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M102,104a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H96A6,6,0,0,1,102,104Zm-6,26H64a6,6,0,0,0,0,12H96a6,6,0,0,0,0-12Zm0,32H64a6,6,0,0,0,0,12H96a6,6,0,0,0,0-12ZM230,80V192a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72a6,6,0,0,1,4.28-5.75l160-48a6,6,0,0,1,3.44,11.5L72.88,66H216A14,14,0,0,1,230,80Zm-12,0a2,2,0,0,0-2-2H38V192a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Zm-20,56a38,38,0,1,1-38-38A38,38,0,0,1,198,136Zm-12,0a26,26,0,1,0-26,26A26,26,0,0,0,186,136Z"/></svg>`;
}
