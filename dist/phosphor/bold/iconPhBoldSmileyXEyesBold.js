export const iconPhBoldSmileyXEyesBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm56.49-92.49a12,12,0,0,1-17,17L162,131l-5.51,5.52a12,12,0,0,1-17-17L145,114l-5.52-5.51a12,12,0,0,1,17-17L162,97l5.51-5.52a12,12,0,0,1,17,17L179,114Zm-68,17a12,12,0,0,1-17,0L94,131l-5.51,5.52a12,12,0,0,1-17-17L77,114l-5.52-5.51a12,12,0,0,1,17-17L94,97l5.51-5.52a12,12,0,0,1,17,17L111,114l5.52,5.51A12,12,0,0,1,116.49,136.49ZM144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Z"/></svg>`;
}
