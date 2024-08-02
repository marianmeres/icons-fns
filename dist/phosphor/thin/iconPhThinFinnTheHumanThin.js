export const iconPhThinFinnTheHumanThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,108H88a36,36,0,0,0-36,36v8a36,36,0,0,0,36,36h80a36,36,0,0,0,36-36v-8A36,36,0,0,0,168,108Zm28,44a28,28,0,0,1-28,28H88a28,28,0,0,1-28-28v-8a28,28,0,0,1,28-28h80a28,28,0,0,1,28,28ZM208,44a28,28,0,0,0-27.71,24H75.71A28,28,0,0,0,20,72v80a68.07,68.07,0,0,0,68,68h80a68.07,68.07,0,0,0,68-68V72A28,28,0,0,0,208,44Zm20,108a60.07,60.07,0,0,1-60,60H88a60.07,60.07,0,0,1-60-60V72a20,20,0,0,1,40,0,4,4,0,0,0,4,4H184a4,4,0,0,0,4-4,20,20,0,0,1,40,0Zm-128-4a8,8,0,1,1-8-8A8,8,0,0,1,100,148Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,148Z"/></svg>`;
}
