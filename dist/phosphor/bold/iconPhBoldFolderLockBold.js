export const iconPhBoldFolderLockBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,152h-4v-4a32,32,0,0,0-64,0v4h-4a12,12,0,0,0-12,12v44a12,12,0,0,0,12,12h72a12,12,0,0,0,12-12V164A12,12,0,0,0,224,152Zm-44-4a8,8,0,0,1,16,0v4H180Zm32,48H164V176h48Zm4-128H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220h65.18a12,12,0,0,0,0-24H44V92H212a12,12,0,0,0,24,0V88A20,20,0,0,0,216,68ZM44,68V56H90.61l10.67,12Z"/></svg>`;
}
