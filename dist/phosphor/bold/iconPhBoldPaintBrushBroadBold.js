export const iconPhBoldPaintBrushBroadBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,20H72A44.05,44.05,0,0,0,28,64v72a28,28,0,0,0,28,28H95.64L92,207c0,.33,0,.67,0,1a36,36,0,0,0,72,0c0-.33,0-.67,0-1l-3.6-43H200a28,28,0,0,0,28-28V32A12,12,0,0,0,216,20ZM72,44h88V68a12,12,0,0,0,24,0V44h20V96H52V64A20,20,0,0,1,72,44Zm128,96H156a20,20,0,0,0-19.85,22.4l3.84,46a12,12,0,0,1-24,0l3.84-46A20,20,0,0,0,100,140H56a4,4,0,0,1-4-4V120H204v16A4,4,0,0,1,200,140Z"/></svg>`;
}
