export const iconPhBoldChargingStationBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M137.94,121.27a12,12,0,0,1,1.2,11.19l-16,40A12,12,0,0,1,112,180a11.86,11.86,0,0,1-4.46-.86,12,12,0,0,1-6.68-15.6L110.28,140H96a12,12,0,0,1-11.14-16.46l16-40a12,12,0,0,1,22.28,8.92L113.72,116H128A12,12,0,0,1,137.94,121.27ZM256,86.63V166a30,30,0,0,1-60,0V128a4,4,0,0,0-4-4H180v80h12a12,12,0,0,1,0,24H32a12,12,0,0,1,0-24H44V56A28,28,0,0,1,72,28h80a28,28,0,0,1,28,28v44h12a28,28,0,0,1,28,28v38a6,6,0,0,0,12,0V86.63a4,4,0,0,0-1.17-2.83L211.51,64.49a12,12,0,0,1,17-17L247.8,66.83A27.81,27.81,0,0,1,256,86.63ZM156,204V56a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4V204Z"/></svg>`;
}
