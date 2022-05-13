/**
 * Checks if screen is small
 *
 * @param {Object }r
 * @returns {*|boolean}
 */
const checkIfSmallScreen = r =>
{
    const {xs, sm, md, lg, xl} = r;
    return (xs || sm || md || lg) && (!xl);
};

export default checkIfSmallScreen;