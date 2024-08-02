export const iconPhBoldFirstAid = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,84H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V84H40a20,20,0,0,0-20,20v48a20,20,0,0,0,20,20H84v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V172h44a20,20,0,0,0,20-20V104A20,20,0,0,0,216,84Zm-4,64H160a12,12,0,0,0-12,12v52H108V160a12,12,0,0,0-12-12H44V108H96a12,12,0,0,0,12-12V44h40V96a12,12,0,0,0,12,12h52Z"/></svg>`;
}
