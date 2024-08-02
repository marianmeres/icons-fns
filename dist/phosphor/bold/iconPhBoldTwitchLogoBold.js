export const iconPhBoldTwitchLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H48A20,20,0,0,0,28,48V192a20,20,0,0,0,20,20H60v28a12,12,0,0,0,19.68,9.22L124.34,212H165.1a20.06,20.06,0,0,0,12.81-4.64l42.89-35.74a19.93,19.93,0,0,0,7.2-15.37V48A20,20,0,0,0,208,28Zm-4,126.38L163.66,188H120a12,12,0,0,0-7.68,2.78L84,214.38V200a12,12,0,0,0-12-12H52V52H204ZM156,136V88a12,12,0,0,1,24,0v48a12,12,0,0,1-24,0Zm-48,0V88a12,12,0,0,1,24,0v48a12,12,0,0,1-24,0Z"/></svg>`;
}
