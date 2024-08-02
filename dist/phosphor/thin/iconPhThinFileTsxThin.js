export const iconPhThinFileTsxThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M211.25,154.33,192.92,180l18.33,25.67a4,4,0,0,1-.93,5.58A3.91,3.91,0,0,1,208,212a4,4,0,0,1-3.26-1.67L188,186.88l-16.75,23.45a4,4,0,0,1-6.51-4.66L183.08,180l-18.34-25.67a4,4,0,0,1,6.51-4.66L188,173.12l16.74-23.45a4,4,0,0,1,6.51,4.66Zm-88.76,20.82c-10.53-3-15.08-4.91-14.42-10.08a8.51,8.51,0,0,1,3.75-6.49c6.25-4.23,18.77-2.24,23.06-1.11a4,4,0,0,0,2.05-7.74,61.33,61.33,0,0,0-10.48-1.61c-8.12-.54-14.54.75-19.1,3.82a16.66,16.66,0,0,0-7.22,12.13c-1.58,12.49,10.46,16,20.14,18.77,11.26,3.25,16.47,5.49,15.64,11.94a8.94,8.94,0,0,1-3.91,6.75c-6.27,4.17-18.61,2.05-22.83.88a4,4,0,1,0-2.15,7.7A57.89,57.89,0,0,0,121.19,212c5.18,0,10.83-.86,15.22-3.77a17,17,0,0,0,7.43-12.41C145.64,181.84,132.26,178,122.49,175.15ZM80,148H40a4,4,0,0,0,0,8H56v52a4,4,0,0,0,8,0V156H80a4,4,0,0,0,0-8ZM212,88v24a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-13.66-4L156,41.65V84Z"/></svg>`;
}
