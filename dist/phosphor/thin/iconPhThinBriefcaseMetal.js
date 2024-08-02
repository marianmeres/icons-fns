export const iconPhThinBriefcaseMetal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,60H172V48a20,20,0,0,0-20-20H104A20,20,0,0,0,84,48V60H40A12,12,0,0,0,28,72V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V72A12,12,0,0,0,216,60ZM36,108H220v56H36ZM92,48a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V60H92ZM40,68H216a4,4,0,0,1,4,4v28H36V72A4,4,0,0,1,40,68ZM216,204H40a4,4,0,0,1-4-4V172H220v28A4,4,0,0,1,216,204Z"/></svg>`;
}
