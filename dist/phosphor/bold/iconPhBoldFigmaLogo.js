export const iconPhBoldFigmaLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198.15,96A44,44,0,0,0,168,20H96A44,44,0,0,0,65.85,96a43.9,43.9,0,0,0,1.23,65.12A48,48,0,1,0,148,196V167.17A44,44,0,0,0,198.15,96ZM188,64a20,20,0,0,1-20,20H148V44h20A20,20,0,0,1,188,64ZM76,64A20,20,0,0,1,96,44h28V84H96A20,20,0,0,1,76,64Zm20,84a20,20,0,0,1,0-40h28v40H96Zm28,48a24,24,0,1,1-24-24h24Zm44-48a20,20,0,1,1,20-20A20,20,0,0,1,168,148Z"/></svg>`;
}
