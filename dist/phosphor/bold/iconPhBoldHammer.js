export const iconPhBoldHammer = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M250.18,105.17,186.71,41.25a100.11,100.11,0,0,0-141.43,0l-.13.14L31.37,55.61a12,12,0,1,0,17.24,16.7L62.32,58.16A75.68,75.68,0,0,1,77.49,46.43L119,88,25.85,181.16a20,20,0,0,0,0,28.29l20.69,20.69a20,20,0,0,0,28.28,0L168,137l1.51,1.51h0l23.65,23.66a20,20,0,0,0,28.29,0l28.69-28.7A20,20,0,0,0,250.18,105.17ZM60.68,210.34l-15-15L108,133l15,15ZM140,131l-15-15,19.51-19.51a12,12,0,0,0,0-17L102.24,37.24a75.94,75.94,0,0,1,67.47,20.95l31.44,31.67L178,113l-1.51-1.51a12,12,0,0,0-17,0Zm67.32,11.31L195,130l23.09-23.09,12.3,12.39Z"/></svg>`;
}
