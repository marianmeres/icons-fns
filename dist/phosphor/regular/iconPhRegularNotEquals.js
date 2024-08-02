export const iconPhRegularNotEquals = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,160a8,8,0,0,1-8,8H102.45L53.92,221.38a8,8,0,0,1-11.84-10.76L80.82,168H40a8,8,0,0,1,0-16H95.37L139,104H40a8,8,0,0,1,0-16H153.55l48.53-53.38a8,8,0,0,1,11.84,10.76L175.18,88H216a8,8,0,0,1,0,16H160.63L117,152h99A8,8,0,0,1,224,160Z"/></svg>`;
}
