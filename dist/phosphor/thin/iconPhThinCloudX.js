export const iconPhThinCloudX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,44A84.11,84.11,0,0,0,83.59,93.12,60.71,60.71,0,0,0,72,92a60,60,0,0,0,0,120h88a84,84,0,0,0,0-168Zm0,160H72a52,52,0,1,1,8.55-103.3A83.66,83.66,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,76,76Zm26.83-89.17L165.66,136l21.17,21.17a4,4,0,0,1-5.66,5.66L160,141.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L154.34,136l-21.17-21.17a4,4,0,0,1,5.66-5.66L160,130.34l21.17-21.17a4,4,0,1,1,5.66,5.66Z"/></svg>`;
}
