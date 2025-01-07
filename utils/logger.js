const colors = {
    log: '\x1b[37m', // Белый
    warn: '\x1b[33m', // Желтый
    error: '\x1b[31m', // Красный
    info: '\x1b[36m', // Голубой
    success: '\x1b[32m', // Зеленый
    reset: '\x1b[0m'   // Сброс цвета
};

/**
 * Logs message to console with color and timestamp.
 * @param {string} type - Type of log (log, warn, error, info, success).
 * @param {string|object} message - Log message.
 */
export function logger(type, message) {
    const color = colors[type] || colors.log;
    const date = new Date().toISOString();
    const formattedDate = `\x1b[2m${date}\x1b[0m`;
    
    const header = `${color}[${type.toUpperCase()}]${colors.reset} ${formattedDate}`;
    
    if (typeof message === 'object') {
        console.log(`${header} :`);
        console.dir(message, { depth: null, colors: true });
    } else {
        console.log(`${header} : ${message}`);
    }
}