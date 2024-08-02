export const iconPhBoldSecurityCamera = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,132a12,12,0,0,0-12,12v12H197l-14.35-14.34,47.52-47.52a20,20,0,0,0,0-28.28l-56-56a20,20,0,0,0-28.32,0L6.42,150.47A22,22,0,0,0,22,188h33.7l26.14,26.14a20,20,0,0,0,28.29,0l55.51-55.51,15.52,15.51A19.86,19.86,0,0,0,195.31,180H232v12a12,12,0,0,0,24,0V144A12,12,0,0,0,244,132ZM160,29.67l15,15L55.71,164H26.81ZM96,194.34,77.65,176,192,61.66,210.34,80l-53.17,53.17h0Z"/></svg>`;
}
