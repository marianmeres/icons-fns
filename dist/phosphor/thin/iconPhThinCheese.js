export const iconPhThinCheese = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,36a4.05,4.05,0,0,0-1.15.17l-160,48v0A4,4,0,0,0,20,88v24a4,4,0,0,0,4,4h8a20.11,20.11,0,0,1,20,19.61,19.59,19.59,0,0,1-5.72,14.14A20.92,20.92,0,0,1,31.46,156H24a4,4,0,0,0-4,4v32a4,4,0,0,0,4,4H224a12,12,0,0,0,12-12V88A52.06,52.06,0,0,0,184,36Zm.57,8a44.06,44.06,0,0,1,43.24,40H51.25ZM196,104a28,28,0,1,1-53.29-12h50.58A28,28,0,0,1,196,104Zm-56,84H84v-4a28,28,0,0,1,56,0Zm88-4a4,4,0,0,1-4,4H148v-4a36,36,0,0,0-72,0v4H28V164h3.46A29,29,0,0,0,52,155.35a27.52,27.52,0,0,0,8-19.89A28.14,28.14,0,0,0,32,108H28V92H134.07a36,36,0,1,0,67.86,0H228Z"/></svg>`;
}
