export const iconPhLightFolderUserLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M211.28,199a30,30,0,1,0-38.56,0,38.09,38.09,0,0,0-18.52,23.5,6,6,0,0,0,4.26,7.34,6.26,6.26,0,0,0,1.54.2,6,6,0,0,0,5.8-4.46C168.86,214,179.63,206,192,206s23.14,8,26.2,19.54a6,6,0,0,0,11.6-3.09A38.09,38.09,0,0,0,211.28,199ZM192,158a18,18,0,1,1-18,18A18,18,0,0,1,192,158Zm24-84H130.48L102.59,46.1a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.61A13.4,13.4,0,0,0,39.38,214h81.18a6,6,0,0,0,0-12H39.38A1.4,1.4,0,0,1,38,200.61V86H216a2,2,0,0,1,2,2v32a6,6,0,0,0,12,0V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54Z"/></svg>`;
}
