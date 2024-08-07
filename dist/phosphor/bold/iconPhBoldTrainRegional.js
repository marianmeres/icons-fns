export const iconPhBoldTrainRegional = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.58,116.84l-22.4-82.1A20,20,0,0,0,185.89,20H70.11A20,20,0,0,0,50.82,34.74l-22.4,82.1a12.1,12.1,0,0,0,0,6.32l22.4,82.1A20,20,0,0,0,70.11,220H72l-9.6,12.8a12,12,0,1,0,19.2,14.4L102,220h52l20.4,27.2a12,12,0,0,0,19.2-14.4L184,220h1.89a20,20,0,0,0,19.29-14.74l22.4-82.1A12.1,12.1,0,0,0,227.58,116.84ZM73.17,44H182.83L201,110.53,128,123.8,55,110.53ZM56.59,135.21,116,146v50H73.17ZM182.83,196H140V146l59.41-10.8ZM84,88A12,12,0,0,1,96,76h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,88Z"/></svg>`;
}
