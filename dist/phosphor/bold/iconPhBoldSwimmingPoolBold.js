export const iconPhBoldSwimmingPoolBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,149.39a12,12,0,0,0,12-12V136h56v3.29a12,12,0,0,0,24,0V32a12,12,0,0,0-24,0v8H100V32a12,12,0,0,0-24,0V137.39A12,12,0,0,0,88,149.39ZM100,112V100h56v12Zm56-48V76H100V64ZM20,164a12,12,0,0,1,12-12c15.63,0,24,5.55,30.66,10,5.4,3.6,9,6,17.34,6s11.93-2.38,17.34-6c6.69-4.47,15-10,30.65-10s24,5.55,30.66,10c5.41,3.6,9,6,17.35,6s11.94-2.38,17.34-6c6.7-4.47,15-10,30.66-10a12,12,0,0,1,0,24c-8.37,0-11.94,2.38-17.35,6-6.69,4.47-15,10-30.65,10s-24-5.55-30.66-10c-5.41-3.6-9-6-17.35-6s-11.93,2.38-17.34,6c-6.69,4.47-15,10-30.65,10s-24-5.55-30.66-10c-5.4-3.6-9-6-17.34-6A12,12,0,0,1,20,164Zm216,44a12,12,0,0,1-12,12c-8.37,0-11.94,2.38-17.35,6-6.69,4.47-15,10-30.65,10s-24-5.55-30.66-10c-5.41-3.6-9-6-17.35-6s-11.93,2.38-17.34,6c-6.69,4.47-15,10-30.65,10s-24-5.55-30.66-10c-5.4-3.6-9-6-17.34-6a12,12,0,0,1,0-24c15.63,0,24,5.55,30.66,10,5.4,3.6,9,6,17.34,6s11.93-2.38,17.34-6c6.69-4.47,15-10,30.65-10s24,5.55,30.66,10c5.41,3.6,9,6,17.35,6s11.94-2.38,17.34-6c6.7-4.47,15-10,30.66-10A12,12,0,0,1,236,208Z"/></svg>`;
}
