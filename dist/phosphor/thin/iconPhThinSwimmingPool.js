export const iconPhThinSwimmingPool = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,145.39a4,4,0,0,0,4-4V124h72v19.29a4,4,0,0,0,8,0V32a4,4,0,0,0-8,0V52H92V32a4,4,0,0,0-8,0V141.39A4,4,0,0,0,88,145.39ZM92,116V92h72v24Zm72-56V84H92V60ZM28,168a4,4,0,0,1,4-4c13.21,0,20.12,4.61,26.22,8.67,5.9,3.93,11,7.33,21.78,7.33s15.88-3.4,21.78-7.33c6.09-4.06,13-8.67,26.21-8.67s20.13,4.61,26.22,8.67c5.9,3.93,11,7.33,21.79,7.33s15.88-3.4,21.78-7.33c6.1-4.06,13-8.67,26.22-8.67a4,4,0,0,1,0,8c-10.79,0-15.88,3.4-21.78,7.33-6.1,4.06-13,8.67-26.22,8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88,3.4-21.78,7.33c-6.09,4.06-13,8.67-26.21,8.67s-20.12-4.61-26.22-8.67C47.88,175.4,42.79,172,32,172A4,4,0,0,1,28,168Zm200,40a4,4,0,0,1-4,4c-10.79,0-15.88,3.4-21.78,7.33-6.1,4.06-13,8.67-26.22,8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88,3.4-21.78,7.33c-6.09,4.06-13,8.67-26.21,8.67s-20.12-4.61-26.22-8.67C47.88,215.4,42.79,212,32,212a4,4,0,0,1,0-8c13.21,0,20.12,4.61,26.22,8.67,5.9,3.93,11,7.33,21.78,7.33s15.88-3.4,21.78-7.33c6.09-4.06,13-8.67,26.21-8.67s20.13,4.61,26.22,8.67c5.9,3.93,11,7.33,21.79,7.33s15.88-3.4,21.78-7.33c6.1-4.06,13-8.67,26.22-8.67A4,4,0,0,1,228,208Z"/></svg>`;
}
