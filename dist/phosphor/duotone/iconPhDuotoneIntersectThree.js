export const iconPhDuotoneIntersectThree = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M104.64,147.28a60,60,0,0,1-36-46.56A60.06,60.06,0,0,1,128,108,59.94,59.94,0,0,0,104.64,147.28Zm0,0A60,60,0,0,0,128,204a60,60,0,0,0,23.36-56.72,60.17,60.17,0,0,1-46.72,0Zm82.72-46.56A60.06,60.06,0,0,0,128,108a59.94,59.94,0,0,1,23.36,39.28A60,60,0,0,0,187.36,100.72Z" opacity="0.2"/><path d="M195.88,96c.07-1.31.12-2.63.12-4A68,68,0,0,0,60,92c0,1.33,0,2.65.12,4A68,68,0,1,0,128,213.65,68,68,0,1,0,195.88,96ZM128,193.47a51.89,51.89,0,0,1-16-35.38,67.55,67.55,0,0,0,31.9,0A51.89,51.89,0,0,1,128,193.47ZM128,144a51.93,51.93,0,0,1-14.08-1.95A52.06,52.06,0,0,1,128,118.53a52.06,52.06,0,0,1,14.08,23.52A51.93,51.93,0,0,1,128,144Zm-28.77-8.71A52.19,52.19,0,0,1,77.92,106a51.88,51.88,0,0,1,36.79,3.28A68.17,68.17,0,0,0,99.23,135.29Zm42.06-26.06A51.88,51.88,0,0,1,178.08,106a52.19,52.19,0,0,1-21.31,29.34A68.17,68.17,0,0,0,141.29,109.23ZM128,40A52.06,52.06,0,0,1,180,89.91,67.72,67.72,0,0,0,128,98.35a67.72,67.72,0,0,0-51.95-8.44A52.06,52.06,0,0,1,128,40ZM40,156a52,52,0,0,1,23.23-43.29A68.36,68.36,0,0,0,96.12,152c-.07,1.31-.12,2.63-.12,4a67.74,67.74,0,0,0,18.71,46.77A52,52,0,0,1,40,156Zm124,52a51.65,51.65,0,0,1-22.71-5.23A67.74,67.74,0,0,0,160,156c0-1.33-.05-2.65-.12-4a68.36,68.36,0,0,0,32.89-39.33A52,52,0,0,1,164,208Z"/></svg>`;
}
