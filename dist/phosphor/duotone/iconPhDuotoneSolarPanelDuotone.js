export const iconPhDuotoneSolarPanelDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,216H24l40.7-72H191.3Z" opacity="0.2"/><path d="M32,104a8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40A8,8,0,0,1,32,104ZM71.43,58.75A8,8,0,0,0,82.75,47.43L71.43,36.12A8,8,0,0,0,60.12,47.43ZM128,40a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V32A8,8,0,0,0,128,40Zm50.91,21.09a8,8,0,0,0,5.66-2.34l11.31-11.32a8,8,0,0,0-11.31-11.31L173.25,47.43a8,8,0,0,0,5.66,13.66ZM192,104a8,8,0,0,0,8,8h16a8,8,0,0,0,0-16H200A8,8,0,0,0,192,104ZM88,112a8,8,0,0,0,8-8,32,32,0,0,1,64,0,8,8,0,0,0,16,0,48,48,0,0,0-96,0A8,8,0,0,0,88,112ZM238.91,220a8,8,0,0,1-6.91,4H24a8,8,0,0,1-7-11.94l40.69-72a8,8,0,0,1,7-4.06H191.3a8,8,0,0,1,7,4.06l40.69,72A8,8,0,0,1,238.91,220Zm-52.27-68H162.27l3.48,16h29.93Zm-37.26,16-3.48-16H110.1l-3.48,16Zm-46.24,16-5.21,24h60.14l-5.21-24ZM60.32,168H90.25l3.48-16H69.36ZM37.71,208H81.55l5.22-24H51.28Zm180.58,0-13.57-24H169.23l5.22,24Z"/></svg>`;
}
