var moment = require('moment');
moment.locale('zh-cn');
console.log(moment().subtract(1,'M').endOf("M"))