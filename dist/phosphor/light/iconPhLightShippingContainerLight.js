export const iconPhLightShippingContainerLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.85,72.57,129.65,42.23a6,6,0,0,0-2.5-.17L22,57.08A14.07,14.07,0,0,0,10,70.94V185.06a14.07,14.07,0,0,0,12,13.86l105.13,15a6.07,6.07,0,0,0,.85.06,6.14,6.14,0,0,0,1.65-.23l106.2-30.34A14.06,14.06,0,0,0,246,170V86A14.06,14.06,0,0,0,235.85,72.57ZM96,122H78V61.2l44-6.28V201.08L78,194.8V134H96a6,6,0,0,0,0-12ZM22,185.06V70.94a2,2,0,0,1,1.72-2l42.28-6V122H48a6,6,0,0,0,0,12H66v59.08l-42.28-6A2,2,0,0,1,22,185.06ZM234,170a2,2,0,0,1-1.45,1.92L134,200.05V56l98.55,28.16A2,2,0,0,1,234,86Z"/></svg>`;
}
