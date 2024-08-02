export const iconPhLightShuffleAngular = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236.24,179.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L217.52,190H168a6,6,0,0,1-4.88-2.51L84.91,78H32a6,6,0,0,1,0-12H88a6,6,0,0,1,4.88,2.51L171.09,178h46.43l-13.76-13.76a6,6,0,0,1,8.48-8.48Zm-92.07-74.4a6,6,0,0,0,8.37-1.4l18.55-26h46.43L203.76,91.76a6,6,0,1,0,8.48,8.48l24-24a6,6,0,0,0,0-8.48l-24-24a6,6,0,0,0-8.48,8.48L217.52,66H168a6,6,0,0,0-4.88,2.51L142.78,97A6,6,0,0,0,144.17,105.36Zm-32.34,45.28a6,6,0,0,0-8.37,1.4L84.91,178H32a6,6,0,0,0,0,12H88a6,6,0,0,0,4.88-2.51L113.22,159A6,6,0,0,0,111.83,150.64Z"/></svg>`;
}
