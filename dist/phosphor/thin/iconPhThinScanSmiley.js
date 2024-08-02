export const iconPhThinScanSmiley = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,40V76a4,4,0,0,1-8,0V44H180a4,4,0,0,1,0-8h36A4,4,0,0,1,220,40Zm-4,136a4,4,0,0,0-4,4v32H180a4,4,0,0,0,0,8h36a4,4,0,0,0,4-4V180A4,4,0,0,0,216,176ZM76,212H44V180a4,4,0,0,0-8,0v36a4,4,0,0,0,4,4H76a4,4,0,0,0,0-8ZM40,80a4,4,0,0,0,4-4V44H76a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4V76A4,4,0,0,0,40,80Zm88,116a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,196Zm60-68a60,60,0,1,0-60,60A60.07,60.07,0,0,0,188,128Zm-76-12a8,8,0,1,0-8,8A8,8,0,0,0,112,116Zm40-8a8,8,0,1,0,8,8A8,8,0,0,0,152,108Zm-2.65,41c-4.52,4-13.7,7-21.35,7s-16.83-3-21.35-7a4,4,0,0,0-5.3,6c6,5.3,17,9,26.65,9s20.64-3.7,26.65-9a4,4,0,1,0-5.3-6Z"/></svg>`;
}
