export const iconPhDuotoneHandWithdrawDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,64V202.31L173.32,186a20,20,0,0,0-36.9,14H56V64a8,8,0,0,1,8-8H176A8,8,0,0,1,184,64Z" opacity="0.2"/><path d="M232,198.65V240a8,8,0,0,1-16,0V198.65A74.84,74.84,0,0,0,192,144v58.35a8,8,0,0,1-14.69,4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12,12,0,0,0-20.89,11.83l22.13,33.79a8,8,0,0,1-13.39,8.76l-22.26-34-.24-.38A28,28,0,0,1,176,176.4V64H160a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16v59.62A90.89,90.89,0,0,1,232,198.65ZM88,56a8,8,0,0,0-8-8H64A16,16,0,0,0,48,64V200a8,8,0,0,0,16,0V64H80A8,8,0,0,0,88,56Zm69.66,42.34a8,8,0,0,0-11.32,0L128,116.69V16a8,8,0,0,0-16,0V116.69L93.66,98.34a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,157.66,98.34Z"/></svg>`;
}
