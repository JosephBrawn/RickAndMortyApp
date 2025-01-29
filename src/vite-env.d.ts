declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

// Дополнительно, если используете plain CSS
declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}