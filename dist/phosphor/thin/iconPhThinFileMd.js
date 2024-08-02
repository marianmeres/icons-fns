export const iconPhThinFileMd = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V224a4,4,0,0,0,8,0V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM144,148H128a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4h16a32,32,0,0,0,0-64Zm0,56H132V156h12a24,24,0,0,1,0,48Zm-44-52v56a4,4,0,0,1-8,0V164.69l-20.72,29.6a4,4,0,0,1-6.56,0L44,164.69V208a4,4,0,0,1-8,0V152a4,4,0,0,1,7.28-2.29L68,185l24.72-35.31A4,4,0,0,1,100,152Z"/></svg>`;
}
