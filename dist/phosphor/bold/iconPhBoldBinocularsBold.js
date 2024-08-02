export const iconPhBoldBinocularsBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M241,150.65s0,0,0-.05a51.33,51.33,0,0,0-2.53-5.9L196.93,50.18a12,12,0,0,0-2.5-3.65,36,36,0,0,0-50.92,0A12,12,0,0,0,140,55V76H116V55a12,12,0,0,0-3.51-8.48,36,36,0,0,0-50.92,0,12,12,0,0,0-2.5,3.65L17.53,144.7A51.33,51.33,0,0,0,15,150.6s0,0,0,.05A52,52,0,1,0,116,168V100h24v68a52,52,0,1,0,101-17.35ZM80,62.28a12,12,0,0,1,12-1.22v63.15a51.9,51.9,0,0,0-35.9-7.62ZM64,196a28,28,0,1,1,28-28A28,28,0,0,1,64,196ZM164,61.06a12.06,12.06,0,0,1,12,1.22l23.87,54.31a51.9,51.9,0,0,0-35.9,7.62ZM192,196a28,28,0,1,1,28-28A28,28,0,0,1,192,196Z"/></svg>`;
}
