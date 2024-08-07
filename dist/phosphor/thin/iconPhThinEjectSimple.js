export const iconPhThinEjectSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,200a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H224A4,4,0,0,1,228,200ZM29.2,149.12a12,12,0,0,1,1.51-12.83L112.37,35.46a20.1,20.1,0,0,1,31.26,0l81.66,100.83A12.1,12.1,0,0,1,215.92,156H40.08A12,12,0,0,1,29.2,149.12Zm7.22-3.44A4,4,0,0,0,40.08,148H215.92a4,4,0,0,0,3.66-2.32,4,4,0,0,0-.51-4.36L137.41,40.5a12.09,12.09,0,0,0-18.82,0L36.93,141.32A4,4,0,0,0,36.42,145.68Z"/></svg>`;
}
