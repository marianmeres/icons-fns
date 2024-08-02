export const iconPhThinAirplaneThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M233.79,132.42,156,93.53V48a28,28,0,0,0-56,0V93.53L22.21,132.42A4,4,0,0,0,20,136v32a4,4,0,0,0,4.78,3.92l75.22-15v25.46L85.17,197.17A4,4,0,0,0,84,200v32a4,4,0,0,0,5.49,3.71L128,220.31l38.51,15.4A3.87,3.87,0,0,0,168,236a3.94,3.94,0,0,0,2.24-.69A4,4,0,0,0,172,232V200a4,4,0,0,0-1.17-2.83L156,182.34V156.88l75.22,15A4,4,0,0,0,236,168V136A4,4,0,0,0,233.79,132.42ZM228,163.12l-75.22-15A4,4,0,0,0,148,152v32a4,4,0,0,0,1.17,2.83L164,201.66v24.43l-34.51-13.8a4,4,0,0,0-3,0L92,226.09V201.66l14.83-14.83A4,4,0,0,0,108,184V152a4,4,0,0,0-4.78-3.92L28,163.12V138.47l77.79-38.89A4,4,0,0,0,108,96V48a20,20,0,0,1,40,0V96a4,4,0,0,0,2.21,3.58L228,138.47Z"/></svg>`;
}
