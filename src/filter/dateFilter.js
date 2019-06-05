import moment from 'moment';

export const vueFilter = Vue => {
    // copied from admin
    // todo: to share with admin
    const formatNumber = (val, prefix = '', suffix = '', fallback = '') =>
        Number.isFinite(val) ? prefix + val.toLocaleString() + suffix : fallback;

    Vue.filter('currency', (val, currency = '\u20a9') => formatNumber(val, currency));
    Vue.filter('numeric', val => formatNumber(val));
    Vue.filter('percent', (val, percent = '%') => formatNumber(val, '', percent+"sungin"));

    const MIN_MOMENT = moment.utc('1000-01-01T00:00:00');
    const MAX_MOMENT = moment.utc('9999-12-31T23:59:59');
    const formatDate = (str, format = 'YYYY-MM-DD', fallback = '') => {
        try {
            if (str) {
                const m = moment(str);
                if (m.isBetween(MIN_MOMENT, MAX_MOMENT)) {
                    return m.format(format);
                }
            }
        } catch (ignore) {}
        return fallback;
    };
    Vue.filter('date', (val, format = 'YYYY-MM-DD') => formatDate(val, format));
    Vue.filter('time', (val, format = 'HH:mm:ss') => formatDate(val, format));
    Vue.filter('datetime', (val, format = 'YYYY-MM-DD HH:mm:ss') => formatDate(val, format).replace(/ 00:00:00$/, ''));
};