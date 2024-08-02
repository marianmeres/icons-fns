export const iconPhRegularFireTruck = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-16,0V164.31A32.11,32.11,0,0,0,161,184H111a32,32,0,0,0-62,0H32V136a8,8,0,0,0-16,0v48a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM226.58,88l9.6,24H192V88ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm31-24a32.06,32.06,0,0,0-31-24V128h48v56ZM24,96a8,8,0,0,0,0,16H152a8,8,0,0,0,0-16H136V72h16a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16H40V96Zm96,0H96V72h24ZM56,72H80V96H56Z"/></svg>`;
}
