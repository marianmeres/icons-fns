export const iconPhThinPersonSimpleSkiThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,84a24,24,0,1,0-24-24A24,24,0,0,0,172,84Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,172,44ZM38.88,83.84l112,32.65,6.33,6.33A4,4,0,0,0,160,124h40a4,4,0,0,0,0-8H161.66L130.83,85.17a4,4,0,0,0-5.66,0l-12,12-72.05-21a4,4,0,0,0-2.24,7.68ZM128,93.65l11.07,11.08-17.14-5ZM234.22,200.92a65.8,65.8,0,0,1-55,8.43L22.88,163.83a4,4,0,1,1,2.24-7.68l78.27,22.79,33-33L86.9,131.84a4,4,0,1,1,2.2-7.69l56,16a4,4,0,0,1,1.73,6.67L112.15,181.5l69.28,20.17a57.81,57.81,0,0,0,48.35-7.41,4,4,0,0,1,4.44,6.66Z"/></svg>`;
}
