export const iconPhDuotoneHandSwipeLeft = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,140v36c0,24-8,40-8,40H64L34.68,166a20,20,0,0,1,34.64-20L88,176V68a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0Z" opacity="0.2"/><path d="M216,140v36c0,25.59-8.49,42.85-8.85,43.58A8,8,0,0,1,200,224a7.9,7.9,0,0,1-3.57-.85,8,8,0,0,1-3.58-10.73c.06-.12,7.16-14.81,7.16-36.42V140a12,12,0,0,0-24,0v4a8,8,0,0,1-16,0V124a12,12,0,0,0-24,0v12a8,8,0,0,1-16,0V68a12,12,0,0,0-24,0V176a8,8,0,0,1-14.79,4.23l-18.68-30-.14-.23A12,12,0,1,0,41.6,162L70.89,212A8,8,0,1,1,57.08,220l-29.32-50a28,28,0,0,1,48.41-28.17L80,148V68a28,28,0,0,1,56,0V98.7a28,28,0,0,1,38.65,16.69A28,28,0,0,1,216,140Zm32-92H195.31l18.34-18.34a8,8,0,0,0-11.31-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.31-11.32L195.31,64H248a8,8,0,0,0,0-16Z"/></svg>`;
}
