export const iconPhBoldShirtFolded = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,36H177L164.49,23.51h0A12,12,0,0,0,156,20H100a12,12,0,0,0-8.49,3.51h0L79,36H56A20,20,0,0,0,36,56V208a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36ZM96,53l7.33-7.33L118.82,72.2,96,94.48ZM137.18,72.2l15.49-26.56L160,53V94.48ZM60,60H72v44a20,20,0,0,0,34.08,14.21L116,108.5V204H60ZM196,204H140V108.5l9.92,9.69A20,20,0,0,0,184,104V60h12Z"/></svg>`;
}
