// https://mihomo.party/docs/guide/override/javascript
//覆写 全局有效 避开Adobe联网查询许可
function main(config, profileName) {
if (!config || typeof config !== 'object') {
config = {};
}

if (!Array.isArray(config.rules)) {
config.rules = [];
}

config?.rules.unshift(
"DOMAIN-SUFFIX,ic.adobe.io,REJECT-DROP",
"DOMAIN-SUFFIX,cc-api-data.adobe.io,REJECT-DROP",
"DOMAIN-REGEX,^(?i)[a-z0-9]{10}\\.adobe\\.io$,REJECT-DROP",
"DOMAIN-REGEX,^(?i)[a-z0-9]{10}\\.adobestats\\.io$,REJECT-DROP",
"DOMAIN-REGEX,^(?i)[a-z0-9]{8,12}\\.[a-z0-9]{5}\\.adobestats\\.io$,REJECT-DROP"
);

return config;
}
