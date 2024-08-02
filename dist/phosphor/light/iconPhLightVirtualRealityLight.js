export const iconPhLightVirtualRealityLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M121.62,98.11l-24,64a6,6,0,0,1-11.24,0l-24-64a6,6,0,0,1,11.24-4.22l18.38,49,18.38-49a6,6,0,1,1,11.24,4.22ZM254,128a78.09,78.09,0,0,1-78,78H80A78,78,0,0,1,80,50h96A78.09,78.09,0,0,1,254,128Zm-12,0a66.08,66.08,0,0,0-66-66H80a66,66,0,0,0,0,132h96A66.08,66.08,0,0,0,242,128Zm-63.8,9.76,11,19.26a6,6,0,0,1-10.42,6l-12.07-21.12A27.06,27.06,0,0,1,164,142H150v18a6,6,0,0,1-12,0V96a6,6,0,0,1,6-6h20a26,26,0,0,1,14.2,47.76ZM164,130a14,14,0,0,0,0-28H150v28Z"/></svg>`;
}
