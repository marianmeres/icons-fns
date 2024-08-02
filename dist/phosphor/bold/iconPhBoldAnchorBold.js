export const iconPhBoldAnchorBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,132a12,12,0,0,0-12,12c0,21.86-11.41,25.95-35.16,32.42-9.12,2.49-19.61,5.36-28.84,10.69V132h28a12,12,0,0,0,0-24H140V89.94a36,36,0,1,0-24,0V108H88a12,12,0,0,0,0,24h28v55.11c-9.23-5.33-19.72-8.2-28.84-10.69C63.41,170,52,165.86,52,144a12,12,0,0,0-24,0c0,41.17,30.54,49.5,52.84,55.58C104.59,206.05,116,210.14,116,232a12,12,0,0,0,24,0c0-21.86,11.41-25.95,35.16-32.42C197.46,193.5,228,185.17,228,144A12,12,0,0,0,216,132ZM128,44a12,12,0,1,1-12,12A12,12,0,0,1,128,44Z"/></svg>`;
}
