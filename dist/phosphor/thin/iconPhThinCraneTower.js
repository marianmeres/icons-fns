export const iconPhThinCraneTower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,84H106.47L83.58,38.21A4,4,0,0,0,80,36H48a4,4,0,0,0-4,4V84H24a4,4,0,0,0,0,8H44V212H24a4,4,0,0,0,0,8H128a4,4,0,0,0,0-8H108V92H212v92a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4v-8a4,4,0,0,0-8,0v8a12,12,0,0,0,12,12h16a12,12,0,0,0,12-12V92h20a4,4,0,0,0,0-8ZM52,44H77.53l20,40H52Zm0,168V156h48v56Zm48-64H52V92h48Z"/></svg>`;
}
