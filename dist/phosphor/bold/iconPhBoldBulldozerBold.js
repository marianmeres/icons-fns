export const iconPhBoldBulldozerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,196h-8a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4h8a12,12,0,0,0,0-24h-8a28,28,0,0,0-28,28v4h-9.68a44.13,44.13,0,0,0-34-31.2l-35.2-84.49A20,20,0,0,0,110.67,36H24A20,20,0,0,0,4,56V157.7A44,44,0,0,0,44,220H156a44.06,44.06,0,0,0,42.32-32H208v4a28,28,0,0,0,28,28h8a12,12,0,0,0,0-24ZM138,132H68V60h40ZM44,60v72a43.85,43.85,0,0,0-16,3V60ZM156,196H44a20,20,0,0,1,0-40H156a20,20,0,0,1,0,40Z"/></svg>`;
}
