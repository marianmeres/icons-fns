export const iconPhBoldBlueprintBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,48H76V40A12,12,0,0,0,64,28H48A36,36,0,0,0,12,64V176a36,36,0,0,0,36,36H232a12,12,0,0,0,12-12V60A12,12,0,0,0,232,48ZM36,64A12,12,0,0,1,48,52h4v88H48a35.59,35.59,0,0,0-12,2.06ZM220,188H48a12,12,0,0,1,0-24H64a12,12,0,0,0,12-12V72H220ZM104,136a12,12,0,0,0,0,24h12v4a12,12,0,0,0,24,0v-4h16v4a12,12,0,0,0,24,0v-4h12a12,12,0,0,0,0-24H180V124h12a12,12,0,0,0,0-24H180V96a12,12,0,0,0-24,0v4H140V96a12,12,0,0,0-24,0v4H104a12,12,0,0,0,0,24h12v12Zm36-12h16v12H140Z"/></svg>`;
}
