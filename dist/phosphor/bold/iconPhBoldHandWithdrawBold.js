export const iconPhBoldHandWithdrawBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,198.65V240a12,12,0,0,1-24,0V198.65A70.66,70.66,0,0,0,196,154v48.27a12,12,0,0,1-22,6.57l-10.67-16.3c-.13-.19-.25-.38-.36-.58a8,8,0,0,0-14,7.77l22,33.66a12,12,0,1,1-20.08,13.14l-22.26-34c-.12-.19-.24-.38-.35-.58A32,32,0,0,1,172,168.3V68h-8a12,12,0,0,1,0-24h12a20,20,0,0,1,20,20v57.52A94.91,94.91,0,0,1,236,198.65ZM88,56A12,12,0,0,0,76,44H64A20,20,0,0,0,44,64V200a12,12,0,0,0,24,0V68h8A12,12,0,0,0,88,56Zm68.49,60.48a12,12,0,0,0-17-17L132,107V16a12,12,0,0,0-24,0v91l-7.51-7.52a12,12,0,0,0-17,17l28,28a12,12,0,0,0,17,0Z"/></svg>`;
}
