export const iconPhBoldLastfmLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252,160a44.05,44.05,0,0,1-44,44H190.57a60.2,60.2,0,0,1-54.37-34.63l-30.15-64.59A36.13,36.13,0,0,0,73.43,84H64a36,36,0,0,0-36,36v24a36,36,0,0,0,36,36h8a28,28,0,0,0,25.68-16.8,12,12,0,1,1,22,9.6A52,52,0,0,1,72,204H64A60.07,60.07,0,0,1,4,144V120A60.07,60.07,0,0,1,64,60h9.43A60.2,60.2,0,0,1,127.8,94.63L158,159.22A36.13,36.13,0,0,0,190.57,180H208a20,20,0,0,0,0-40H188a40,40,0,0,1,0-80h20a36,36,0,0,1,36,36,12,12,0,0,1-24,0,12,12,0,0,0-12-12H188a16,16,0,0,0,0,32h20A44.05,44.05,0,0,1,252,160Z"/></svg>`;
}
