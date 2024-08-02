export const iconPhThinLastfmLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,160a36,36,0,0,1-36,36H190.57a52.19,52.19,0,0,1-47.12-30l-30.15-64.6A44.17,44.17,0,0,0,73.43,76H64a44.05,44.05,0,0,0-44,44v24a44.05,44.05,0,0,0,44,44h8a36,36,0,0,0,33-21.6,4,4,0,1,1,7.33,3.2A44,44,0,0,1,72,196H64a52.06,52.06,0,0,1-52-52V120A52.06,52.06,0,0,1,64,68h9.43a52.19,52.19,0,0,1,47.12,30l30.15,64.6A44.17,44.17,0,0,0,190.57,188H208a28,28,0,0,0,0-56H188a32,32,0,0,1,0-64h20a28,28,0,0,1,28,28,4,4,0,0,1-8,0,20,20,0,0,0-20-20H188a24,24,0,0,0,0,48h20A36,36,0,0,1,244,160Z"/></svg>`;
}
