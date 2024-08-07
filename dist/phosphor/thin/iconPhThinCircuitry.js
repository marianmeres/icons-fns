export const iconPhThinCircuitry = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM88,156a12,12,0,1,1-12,12A12,12,0,0,1,88,156ZM44,208V48a4,4,0,0,1,4-4H84V148.4a20,20,0,1,0,8,0V105.66l56,56V212H48A4,4,0,0,1,44,208Zm168,0a4,4,0,0,1-4,4H156V160a4,4,0,0,0-1.17-2.83L92,94.34V44h40V72a4,4,0,0,0,1.17,2.83L151.33,93A20,20,0,1,0,157,87.33l-17-17V44h68a4,4,0,0,1,4,4ZM168,92a12,12,0,1,1-12,12A12,12,0,0,1,168,92Z"/></svg>`;
}
