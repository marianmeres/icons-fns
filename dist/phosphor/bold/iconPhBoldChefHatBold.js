export const iconPhBoldChefHatBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,112a60.07,60.07,0,0,0-60-60c-1,0-1.95,0-2.92.08a60,60,0,0,0-106.16,0C74,52,73,52,72,52A60,60,0,0,0,44,165v43a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V165A60,60,0,0,0,244,112Zm-56,92H68V171.85c1.32.09,2.65.15,4,.15H184c1.35,0,2.68-.06,4-.15Zm-4-56h-8.63l4.27-17.09a12,12,0,0,0-23.28-5.82L150.63,148H140V128a12,12,0,0,0-24,0v20H105.37l-5.73-22.91a12,12,0,1,0-23.28,5.82L80.63,148H72a36,36,0,0,1-3.87-71.79C68.05,77.47,68,78.73,68,80a12,12,0,0,0,24,0,36,36,0,0,1,72,0,12,12,0,0,0,24,0c0-1.27-.05-2.53-.13-3.79A36,36,0,0,1,184,148Z"/></svg>`;
}
