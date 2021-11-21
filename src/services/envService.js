const { NODE_ENV } = process.env;

/**
 * Is production environment.
 *
 * @return boolean.
 */
export function isProduction() {
    return NODE_ENV === 'production';
}

/**
 * Is development environment.
 *
 * @return boolean.
 */
export function isDevelopment() {
    return NODE_ENV === 'development';
}

/**
 * Is testing environment.
 *
 * @return boolean.
 */
export function isTest() {
    return NODE_ENV === 'test';
}