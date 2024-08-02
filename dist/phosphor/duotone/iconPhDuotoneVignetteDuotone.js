export const iconPhDuotoneVignetteDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM128,176c-35.35,0-64-21.49-64-48s28.65-48,64-48,64,21.49,64,48S163.35,176,128,176Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM178.05,87.66C164.59,77.56,146.81,72,128,72S91.41,77.56,78,87.66C63.79,98.27,56,112.6,56,128s7.79,29.73,22,40.34C91.41,178.44,109.19,184,128,184s36.59-5.56,50.05-15.66C192.21,157.73,200,143.4,200,128S192.21,98.27,178.05,87.66ZM128,168c-30.88,0-56-17.94-56-40s25.12-40,56-40,56,17.94,56,40S158.88,168,128,168Z"/></svg>`;
}
