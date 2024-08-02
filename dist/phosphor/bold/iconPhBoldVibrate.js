export const iconPhBoldVibrate = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,28H92A28,28,0,0,0,64,56V200a28,28,0,0,0,28,28h72a28,28,0,0,0,28-28V56A28,28,0,0,0,164,28Zm4,172a4,4,0,0,1-4,4H92a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h72a4,4,0,0,1,4,4Zm64-100v56a12,12,0,0,1-24,0V100a12,12,0,0,1,24,0ZM48,100v56a12,12,0,0,1-24,0V100a12,12,0,0,1,24,0Z"/></svg>`;
}
