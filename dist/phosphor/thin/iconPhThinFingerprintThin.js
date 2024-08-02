export const iconPhThinFingerprintThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M68,128A130.71,130.71,0,0,1,54.27,186.7a4,4,0,0,1-3.58,2.22,3.91,3.91,0,0,1-1.78-.42,4,4,0,0,1-1.8-5.36A122.71,122.71,0,0,0,60,128,67.74,67.74,0,0,1,85.5,74.92a4,4,0,0,1,5,6.25A59.74,59.74,0,0,0,68,128Zm60-4a4,4,0,0,0-4,4,188.1,188.1,0,0,1-23.48,91,4,4,0,0,0,7,3.88A196.22,196.22,0,0,0,132,128,4,4,0,0,0,128,124Zm0-32a36,36,0,0,0-36,36,4,4,0,0,0,8,0,28,28,0,0,1,56,0,218,218,0,0,1-20.9,93.7,4,4,0,1,0,7.24,3.41A226,226,0,0,0,164,128,36,36,0,0,0,128,92Zm0-64A100.11,100.11,0,0,0,28,128a91.66,91.66,0,0,1-5.24,30.67,4,4,0,1,0,7.54,2.66A99.66,99.66,0,0,0,36,128a92,92,0,0,1,184,0,286.37,286.37,0,0,1-5.37,55.23,4,4,0,0,0,3.15,4.69,4.13,4.13,0,0,0,.78.08,4,4,0,0,0,3.92-3.23A294.25,294.25,0,0,0,228,128,100.11,100.11,0,0,0,128,28ZM93.6,156.09a4,4,0,0,0-4.71,3.12,155,155,0,0,1-17.66,46.64,4,4,0,0,0,6.93,4,163.13,163.13,0,0,0,18.57-49A4,4,0,0,0,93.6,156.09ZM128,60a68.79,68.79,0,0,0-8.5.53,4,4,0,0,0,1,7.93A62.57,62.57,0,0,1,128,68a60.07,60.07,0,0,1,60,60,256.15,256.15,0,0,1-1.95,31.5,4,4,0,0,0,3.47,4.47l.5,0a4,4,0,0,0,4-3.51A264.37,264.37,0,0,0,196,128,68.08,68.08,0,0,0,128,60Zm56.93,128.12a4,4,0,0,0-4.87,2.88c-1.49,5.78-3.21,11.58-5.1,17.23a4,4,0,1,0,7.58,2.54c2-5.83,3.73-11.81,5.27-17.77A4,4,0,0,0,184.94,188.13Z"/></svg>`;
}
