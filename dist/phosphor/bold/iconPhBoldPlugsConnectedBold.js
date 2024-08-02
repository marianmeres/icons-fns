export const iconPhBoldPlugsConnectedBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240.49,15.51a12,12,0,0,0-17,0L173.94,65.09l-2.54-2.55a36.05,36.05,0,0,0-50.91,0L100,83l-3.51-3.52a12,12,0,0,0-17,17L83,100,62.54,120.49a36,36,0,0,0,0,50.91l2.55,2.54L15.51,223.51a12,12,0,0,0,17,17l49.57-49.58,2.54,2.55a36.06,36.06,0,0,0,50.91,0L156,173l3.51,3.52a12,12,0,0,0,17-17L173,156l20.49-20.49a36,36,0,0,0,0-50.91l-2.55-2.54,49.58-49.57A12,12,0,0,0,240.49,15.51Zm-121.95,161a12,12,0,0,1-17,0L79.51,154.43a12,12,0,0,1,0-17L100,117l39,39Zm58-57.95h0L156,139l-39-39,20.49-20.49a12,12,0,0,1,17,0l22.06,22.06a12,12,0,0,1,0,17ZM85.27,33.37a12,12,0,0,1,21.46-10.74l8,16A12,12,0,1,1,93.27,49.37Zm-68,57.26a12,12,0,0,1,16.1-5.36l16,8a12,12,0,1,1-10.74,21.46l-16-8A12,12,0,0,1,17.27,90.63Zm221.46,74.74a12,12,0,0,1-16.1,5.36l-16-8a12,12,0,0,1,10.74-21.46l16,8A12,12,0,0,1,238.73,165.37Zm-68,57.26a12,12,0,1,1-21.46,10.74l-8-16a12,12,0,0,1,21.46-10.74Z"/></svg>`;
}
