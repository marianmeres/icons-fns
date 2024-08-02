export const iconPhDuotoneSock = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,112v33.37a16,16,0,0,1-4.69,11.32l-33,33A48,48,0,0,1,200,112Zm-8-88H104a8,8,0,0,0-8,8V56H200V32A8,8,0,0,0,192,24Z" opacity="0.2"/><path d="M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V48H104V32ZM121.25,219.43a42.91,42.91,0,1,1-60.68-60.68l41.09-41.09A8,8,0,0,0,104,112V64h88v40.58A56.09,56.09,0,0,0,144,160a55.4,55.4,0,0,0,7.93,28.76ZM189.66,151l-25.91,25.91A39.6,39.6,0,0,1,160,160a40.05,40.05,0,0,1,32-39.19v24.56A8,8,0,0,1,189.66,151Z"/></svg>`;
}
