export const iconPhThinFolderDashedThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,208a4,4,0,0,1-4,4H39.38A11.4,11.4,0,0,1,28,200.62V192a4,4,0,0,1,8,0v8.62A3.39,3.39,0,0,0,39.38,204H88A4,4,0,0,1,92,208Zm68-4H128a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm64-56a4,4,0,0,0-4,4v48.89a3.12,3.12,0,0,1-3.11,3.11H200a4,4,0,0,0,0,8h16.89A11.12,11.12,0,0,0,228,200.89V152A4,4,0,0,0,224,148Zm-8-72H168a4,4,0,0,0,0,8h48a4,4,0,0,1,4,4v24a4,4,0,0,0,8,0V88A12,12,0,0,0,216,76ZM28,80V56A12,12,0,0,1,40,44H92.69a11.9,11.9,0,0,1,8.48,3.52l29.66,29.65A4,4,0,0,1,128,84H32A4,4,0,0,1,28,80Zm8-4h82.34L95.51,53.17A4,4,0,0,0,92.69,52H40a4,4,0,0,0-4,4Zm-4,80a4,4,0,0,0,4-4V120a4,4,0,0,0-8,0v32A4,4,0,0,0,32,156Z"/></svg>`;
}
