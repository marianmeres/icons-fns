export const iconPhDuotoneTextHTwo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,72V208H56a16,16,0,0,1-16-16V56H224A16,16,0,0,1,240,72Z" opacity="0.2"/><path d="M248,208a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.16-57.56a16,16,0,1,0-25.54-19.27,16.28,16.28,0,0,0-2.32,4.3,8,8,0,1,1-15.08-5.34,32,32,0,1,1,55.73,29.93L208,200h32A8,8,0,0,1,248,208ZM144,48a8,8,0,0,0-8,8v52H48V56a8,8,0,0,0-16,0V176a8,8,0,0,0,16,0V124h88v52a8,8,0,0,0,16,0V56A8,8,0,0,0,144,48Z"/></svg>`;
}
