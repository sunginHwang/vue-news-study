import camelCase from 'lodash/camelCase';

const requireModule = require.context('.', true, /^(?!.\/index).*.js$/);

const modules = {};

requireModule.keys().forEach(filename => {
    const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g, ''));
    modules[moduleName] = {namespaced: true, ...requireModule(filename)};
});

export default modules;
