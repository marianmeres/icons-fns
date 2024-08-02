export const iconPhThinSpeakerHifiThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,28H64A12,12,0,0,0,52,40V216a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V40A12,12,0,0,0,192,28Zm4,188a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM120,76a8,8,0,1,1,8,8A8,8,0,0,1,120,76Zm8,40a36,36,0,1,0,36,36A36,36,0,0,0,128,116Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,180Z"/></svg>`;
}
