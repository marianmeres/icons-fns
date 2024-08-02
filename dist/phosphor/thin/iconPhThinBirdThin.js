export const iconPhThinBirdThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,68a8,8,0,1,1-8-8A8,8,0,0,1,172,68Zm64,12a4,4,0,0,1-1.78,3.33L212,98.14V120A100.11,100.11,0,0,1,112,220H24a12,12,0,0,1-9.37-19.5L100,98.08V76.89c0-31.22,25-56.74,55.72-56.89H156a55.94,55.94,0,0,1,53.79,40.39l24.43,16.28A4,4,0,0,1,236,80Zm-11.21,0L204.11,66.22a4.08,4.08,0,0,1-1.65-2.33A48,48,0,0,0,156,28h-.24C129.43,28.13,108,50.06,108,76.89V99.52a4,4,0,0,1-.93,2.56L20.84,205.56A4,4,0,0,0,24,212H52.79l72.14-86.56a4,4,0,0,1,6.14,5.12L63.21,212H112a92.1,92.1,0,0,0,92-92V96a4,4,0,0,1,1.78-3.33Z"/></svg>`;
}
