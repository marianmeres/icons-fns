export const iconPhBoldAlignCenterHorizontalBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,136H140V120h44a20,20,0,0,0,20-20V60a20,20,0,0,0-20-20H140V32a12,12,0,0,0-24,0v8H72A20,20,0,0,0,52,60v40a20,20,0,0,0,20,20h44v16H48a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20h68v8a12,12,0,0,0,24,0v-8h68a20,20,0,0,0,20-20V156A20,20,0,0,0,208,136ZM76,64H180V96H76ZM204,192H52V160H204Z"/></svg>`;
}
