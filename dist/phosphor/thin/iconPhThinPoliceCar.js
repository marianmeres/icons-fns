export const iconPhThinPoliceCar = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,108H226.32L197.78,58.05a12,12,0,0,0-10.42-6H68.64a12,12,0,0,0-10.42,6L29.68,108H16a4,4,0,0,0,0,8H28v84a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V180H180v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V116h12a4,4,0,0,0,0-8ZM65.17,62a4,4,0,0,1,3.47-2H187.36a4,4,0,0,1,3.47,2l26.28,46H38.89ZM68,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V180H68Zm148,4H192a4,4,0,0,1-4-4V180h32v20A4,4,0,0,1,216,204Zm4-32H36V116H220ZM60,144a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8H64A4,4,0,0,1,60,144Zm112,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H176A4,4,0,0,1,172,144ZM100,24a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,24Z"/></svg>`;
}
