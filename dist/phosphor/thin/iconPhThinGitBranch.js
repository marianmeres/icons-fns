export const iconPhThinGitBranch = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,64a28,28,0,1,0-32,27.71V112a12,12,0,0,1-12,12H96a19.91,19.91,0,0,0-12,4V91.71a28,28,0,1,0-8,0v72.58a28,28,0,1,0,8,0V144a12,12,0,0,1,12-12h88a20,20,0,0,0,20-20V91.71A28,28,0,0,0,228,64ZM60,64A20,20,0,1,1,80,84,20,20,0,0,1,60,64Zm40,128a20,20,0,1,1-20-20A20,20,0,0,1,100,192ZM200,84a20,20,0,1,1,20-20A20,20,0,0,1,200,84Z"/></svg>`;
}
