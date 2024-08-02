export const iconPhThinHighlighterThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M250.83,109.17a4,4,0,0,0-5.66,0l-50.34,50.34a4,4,0,0,1-5.66,0L104.49,74.83a4,4,0,0,1,0-5.66l50.34-50.34a4,4,0,0,0-5.66-5.66L98.83,63.51A12,12,0,0,0,98.37,80L74.83,103.51a12,12,0,0,0,0,17L82.34,128,21.17,189.17a4,4,0,0,0,1.57,6.62l72,24A3.92,3.92,0,0,0,96,220a4,4,0,0,0,2.83-1.17L136,181.66l7.51,7.51a12,12,0,0,0,17,0L184,165.63a12,12,0,0,0,16.47-.46l50.34-50.34A4,4,0,0,0,250.83,109.17ZM94.92,211.42,31.4,190.25,88,133.66,130.34,176Zm59.91-27.91a4,4,0,0,1-5.66,0L80.49,114.83a4,4,0,0,1,0-5.66L104,85.66,178.34,160Z"/></svg>`;
}
