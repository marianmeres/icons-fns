export const iconPhLightSolarPanel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M34,104a6,6,0,0,1,6-6H56a6,6,0,0,1,0,12H40A6,6,0,0,1,34,104ZM72.84,57.33a6,6,0,1,0,8.49-8.48L70,37.53A6,6,0,0,0,61.53,46ZM128,38a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V32A6,6,0,0,0,128,38Zm50.91,21.09a6,6,0,0,0,4.25-1.76L194.47,46A6,6,0,0,0,186,37.53L174.67,48.85a6,6,0,0,0,4.24,10.24ZM194,104a6,6,0,0,0,6,6h16a6,6,0,0,0,0-12H200A6,6,0,0,0,194,104ZM88,110a6,6,0,0,0,6-6,34,34,0,0,1,68,0,6,6,0,0,0,12,0,46,46,0,0,0-92,0A6,6,0,0,0,88,110ZM237.18,219a6,6,0,0,1-5.18,3H24a6,6,0,0,1-5.22-8.95l40.69-72A6,6,0,0,1,64.7,138H191.3a6,6,0,0,1,5.23,3.05l40.69,72A6,6,0,0,1,237.18,219ZM187.8,150h-28l4.35,20h35Zm-35.94,20-4.35-20h-39l-4.35,20Zm-50.33,12-6.09,28h65.12l-6.09-28ZM56.89,170h35l4.35-20h-28ZM34.28,210H83.16l6.09-28H50.11Zm187.44,0-15.83-28H166.75l6.09,28Z"/></svg>`;
}
