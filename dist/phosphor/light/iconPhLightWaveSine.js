export const iconPhLightWaveSine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.43,130.55C215.84,176.57,197,198,178,198c-23.83,0-39.2-32.76-55.47-67.45C109.26,102.17,94.17,70,78,70c-9.18,0-25,10.5-48.53,60.55a6,6,0,0,1-10.86-5.1C40.16,79.43,59,58,78,58c23.83,0,39.2,32.76,55.47,67.45C146.74,153.83,161.83,186,178,186c9.18,0,25.05-10.5,48.53-60.55a6,6,0,0,1,10.86,5.1Z"/></svg>`;
}
