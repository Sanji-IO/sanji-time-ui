var sjTime =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _sanjiCoreUi = __webpack_require__(13);
	
	var _sanjiCoreUi2 = _interopRequireDefault(_sanjiCoreUi);
	
	__webpack_require__(12);
	
	__webpack_require__(1);
	
	var _componentI18n = __webpack_require__(10);
	
	var _componentI18n2 = _interopRequireDefault(_componentI18n);
	
	var _componentService = __webpack_require__(11);
	
	var _componentService2 = _interopRequireDefault(_componentService);
	
	var _componentContainerController = __webpack_require__(5);
	
	var _componentContainerController2 = _interopRequireDefault(_componentContainerController);
	
	var _componentController = __webpack_require__(8);
	
	var _componentController2 = _interopRequireDefault(_componentController);
	
	var _componentContainerDirective = __webpack_require__(6);
	
	var _componentContainerDirective2 = _interopRequireDefault(_componentContainerDirective);
	
	var _componentDirective = __webpack_require__(9);
	
	var _componentDirective2 = _interopRequireDefault(_componentDirective);
	
	var _componentWindowDirective = __webpack_require__(7);
	
	var _componentWindowDirective2 = _interopRequireDefault(_componentWindowDirective);
	
	var app = angular.module('sanji.time', [_sanjiCoreUi2['default']]);
	app.config(_componentI18n2['default']);
	app.service('timeService', _componentService2['default']);
	app.controller('TimeContainerController', _componentContainerController2['default']);
	app.controller('TimeController', _componentController2['default']);
	app.directive('sanjiTimeContainer', _componentContainerDirective2['default'].directiveFactory);
	app.directive('sanjiTime', _componentDirective2['default'].directiveFactory);
	app.directive('sanjiTimeWindow', _componentWindowDirective2['default'].directiveFactory);
	exports['default'] = app = app.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"get": {
			"url": "/system/time",
			"type": "model"
		},
		"put": {
			"url": "/system/time",
			"type": "model"
		},
		"fields": [
			{
				"key": "timezone",
				"type": "select",
				"templateOptions": {
					"label": "TIME_FORM_LABEL_TIMEZONE",
					"options": [
						{
							"label": "INTERNATIONAL_DATE_LINE_WEST",
							"value": "-12:00,0"
						},
						{
							"label": "MIDWAY_ISLAND_SAMOA",
							"value": "-11:00,0"
						},
						{
							"label": "HAWAII",
							"value": "-10:00,0"
						},
						{
							"label": "ALASKA",
							"value": "-09:00,1"
						},
						{
							"label": "PACIFIC_TIME_US_AND_CANADA",
							"value": "-08:00,1"
						},
						{
							"label": "ARIZONA",
							"value": "-07:00,0"
						},
						{
							"label": "MOUNTAIN_TIME_US_AND_CANADA",
							"value": "-07:00,1"
						},
						{
							"label": "CENTRAL_AMERICA_SASKATCHEWAN",
							"value": "-06:00,0"
						},
						{
							"label": "CENTRAL_TIME_US_AND_CANADA_GUADALOJARA_MEXICO_CITY",
							"value": "-06:00,1"
						},
						{
							"label": "INDIANA_BOGOTA_LIMA_QUITO_RIO_BRANCO",
							"value": "-05:00,0"
						},
						{
							"label": "EASTERN_TIME_US_AND_CANADA",
							"value": "-05:00,1"
						},
						{
							"label": "ATLANTIC_TIME_CANADA_MANAUS_SANTIAGO",
							"value": "-04:00,1"
						},
						{
							"label": "CARACAS_LA_PAZ",
							"value": "-04:00,0"
						},
						{
							"label": "NEWFOUNDLAND",
							"value": "-03:30,1"
						},
						{
							"label": "GREENLAND_BRASILIA_MONTEVIDEO",
							"value": "-03:00,1"
						},
						{
							"label": "BUENOS_AIRES_GEORGETOWN",
							"value": "-03:00,0"
						},
						{
							"label": "MID_ATLANTIC",
							"value": "-02:00,1"
						},
						{
							"label": "AZORES",
							"value": "-01:00,1"
						},
						{
							"label": "CAPE_VERDE_IS",
							"value": "-01:00,0"
						},
						{
							"label": "CASABLANCA_MONROVIA_REYKJAVIK",
							"value": "-00:00,0"
						},
						{
							"label": "GMT_DUBLIN_EDINBURGH_LISBON_LONDON",
							"value": "-00:00,1"
						},
						{
							"label": "AMSTERDAM_BERLIN_ROME_VIENNA_PRAGUE_BRUSSELS",
							"value": "+01:00,1"
						},
						{
							"label": "WEST_CENTRAL_AFRICA",
							"value": "+01:00,0"
						},
						{
							"label": "AMMAN_ATHENS_ISTANBUL_BEIRUT_CAIRO_JERUSALEM",
							"value": "+02:00,1"
						},
						{
							"label": "HARARE_PRETORIA",
							"value": "+02:00,0"
						},
						{
							"label": "BAGHDAD_MOSCOW_ST_PETERSBURG_VOLGOGRAD",
							"value": "+03:00,1"
						},
						{
							"label": "KUWAIT_RIYADH_NAIROBI_TBILISI",
							"value": "+03:00,0"
						},
						{
							"label": "TEHRAN",
							"value": "+03:30,0"
						},
						{
							"label": "ABU_DHADI_MUSCAT",
							"value": "+04:00,0"
						},
						{
							"label": "BAKU_YEREVAN",
							"value": "+04:00,1"
						},
						{
							"label": "KABUL",
							"value": "+04:30,0"
						},
						{
							"label": "EKATERINBURG",
							"value": "+05:00,1"
						},
						{
							"label": "ISLAMABAD_KARACHI_TASHKENT",
							"value": "+05:00,0"
						},
						{
							"label": "CHENNAI_KOLKATA_MUMBAI_NEW_DELHI_SRI_JAYAWARDENEPURA",
							"value": "+05:30,0"
						},
						{
							"label": "KATHMANDU",
							"value": "+05:45,0"
						},
						{
							"label": "ASTANA_DHAKA",
							"value": "+06:00,0"
						},
						{
							"label": "ALMATY_NONOSIBIRSK",
							"value": "+06:00,1"
						},
						{
							"label": "YANGON_RANGOON",
							"value": "+06:30,0"
						},
						{
							"label": "KRASNOYARSK",
							"value": "+07:00,1"
						},
						{
							"label": "BANGKOK_HANOI_JAKARTA",
							"value": "+07:00,0"
						},
						{
							"label": "BEIJING_HONG_KONG_SINGAPORE_TAIPEI",
							"value": "+08:00,0"
						},
						{
							"label": "IRKUTSK_ULAANBAATAR_PERTH",
							"value": "+08:00,1"
						},
						{
							"label": "YAKUTSK",
							"value": "+09:00,1"
						},
						{
							"label": "SEOUL_OSAKA_SAPPORO_TOKYO",
							"value": "+09:00,0"
						},
						{
							"label": "DARWIN",
							"value": "+09:30,0"
						},
						{
							"label": "ADELAIDE",
							"value": "+09:30,1"
						},
						{
							"label": "BRISBANE_GUAM_PORT_MORESBY",
							"value": "+10:00,0"
						},
						{
							"label": "CANBERRA_MELBOURNE_SYDNEY_HOBART_VLADIVOSTOK",
							"value": "+10:00,1"
						},
						{
							"label": "MAGADAN_SOLOMON_IS_NEW_CALEDONIA",
							"value": "+11:00,0"
						},
						{
							"label": "AUCKLAND_WELLINGTON",
							"value": "+12:00,1"
						},
						{
							"label": "FIJI_KAMCHATKA_MARSHALL_IS",
							"value": "+12:00,0"
						},
						{
							"label": "NUKUALOFA",
							"value": "+13:00,0"
						}
					]
				}
			},
			{
				"key": "ntp.enable",
				"type": "radio",
				"templateOptions": {
					"options": [
						{
							"label": "TIME_FORM_LABEL_TIME_MANUAL",
							"value": 0
						},
						{
							"label": "TIME_FORM_LABEL_TIME_AUTO",
							"value": 1
						}
					]
				}
			},
			{
				"key": "time",
				"type": "datetimepicker",
				"hideExpression": "!!model.ntp.enable"
			},
			{
				"key": "ntp.server",
				"type": "input",
				"templateOptions": {
					"label": "TIME_FORM_LABEL_TIME_SERVER",
					"required": true
				},
				"hideExpression": "!model.ntp.enable"
			},
			{
				"key": "ntp.interval",
				"type": "number",
				"templateOptions": {
					"label": "TIME_FORM_LABEL_TIME_INTERVAL",
					"required": true,
					"min": 0,
					"max": null
				},
				"hideExpression": "!model.ntp.enable"
			}
		]
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"TIME": "Time",
		"TIME_FORM_SETTING": "Setting",
		"TIME_FORM_LABEL_TIMEZONE": "Timezone",
		"INTERNATIONAL_DATE_LINE_WEST": "(-12:00) Internation Date Line West",
		"MIDWAY_ISLAND_SAMOA": "(-11:00) Midway Island, Samoa",
		"HAWAII": "(-10:00) Hawaii",
		"ALASKA": "(-09:00) Alaska",
		"PACIFIC_TIME_US_AND_CANADA": "(-08:00) Pacific Time (US &amp; Canada)",
		"ARIZONA": "(-07:00) Arizona",
		"MOUNTAIN_TIME_US_AND_CANADA": "(-07:00) Mountain Time (US &amp; Canada)",
		"CENTRAL_AMERICA_SASKATCHEWAN": "(-06:00) Central America, Saskatchewan",
		"CENTRAL_TIME_US_AND_CANADA_GUADALOJARA_MEXICO_CITY": "(-06:00) Central Time (US &amp; Canada), Guadalajara, Mexico city",
		"INDIANA_BOGOTA_LIMA_QUITO_RIO_BRANCO": "(-05:00) Indiana, Bogota, Lima, Quito, Rio Branco",
		"EASTERN_TIME_US_AND_CANADA": "(-05:00) Eastern time (US &amp; Canada)",
		"ATLANTIC_TIME_CANADA_MANAUS_SANTIAGO": "(-04:00) Atlantic time (Canada), Manaus, Santiago",
		"CARACAS_LA_PAZ": "(-04:00) Caracas, La Paz",
		"NEWFOUNDLAND": "(-03:30) Newfoundland",
		"GREENLAND_BRASILIA_MONTEVIDEO": "(-03:00) Greenland, Brasilia, Montevideo",
		"BUENOS_AIRES_GEORGETOWN": "(-03:00) Buenos Aires, Georgetown",
		"MID_ATLANTIC": "(-02:00) Mid-Atlantic",
		"AZORES": "(-01:00) Azores",
		"CAPE_VERDE_IS": "(-01:00) Cape Verde Is.",
		"CASABLANCA_MONROVIA_REYKJAVIK": "(00:00) Casablanca, Monrovia, Reykjavik",
		"GMT_DUBLIN_EDINBURGH_LISBON_LONDON": "(00:00) GMT: Dublin, Edinburgh, Lisbon, London",
		"AMSTERDAM_BERLIN_ROME_VIENNA_PRAGUE_BRUSSELS": "(+01:00) Amsterdam, Berlin, Rome, Vienna, Prague, Brussels",
		"WEST_CENTRAL_AFRICA": "(+01:00) West Central Africa",
		"AMMAN_ATHENS_ISTANBUL_BEIRUT_CAIRO_JERUSALEM": "(+02:00) Amman, Athens, Istanbul, Beirut, Cairo, Jerusalem",
		"HARARE_PRETORIA": "(+02:00) Harare, Pretoria",
		"BAGHDAD_MOSCOW_ST_PETERSBURG_VOLGOGRAD": "(+03:00) Baghdad, Moscow, St. Petersburg, Volgograd",
		"KUWAIT_RIYADH_NAIROBI_TBILISI": "(+03:00) Kuwait, Riyadh, Nairobi, Tbilisi",
		"TEHRAN": "(+03:30) Tehran",
		"ABU_DHADI_MUSCAT": "(+04:00) Abu Dhabi, Muscat",
		"BAKU_YEREVAN": "(+04:00) Baku, Yerevan",
		"KABUL": "(+04:30) Kabul",
		"EKATERINBURG": "(+05:00) Ekaterinburg",
		"ISLAMABAD_KARACHI_TASHKENT": "(+05:00) Islamabad, Karachi, Tashkent",
		"CHENNAI_KOLKATA_MUMBAI_NEW_DELHI_SRI_JAYAWARDENEPURA": "(+05:30) Chennai, Kolkata, Mumbai, New Delhi, Sri Jayawardenepura",
		"KATHMANDU": "(+05:45) Kathmandu",
		"ASTANA_DHAKA": "(+06:00) Astana, Dhaka",
		"ALMATY_NONOSIBIRSK": "(+06:00) Almaty, Nonosibirsk",
		"YANGON_RANGOON": "(+06:30) Yangon (Rangoon)",
		"KRASNOYARSK": "(+07:00) Krasnoyarsk",
		"BANGKOK_HANOI_JAKARTA": "(+07:00) Bangkok, Hanoi, Jakarta",
		"BEIJING_HONG_KONG_SINGAPORE_TAIPEI": "(+08:00) Beijing, Hong Kong, Singapore, Taipei",
		"IRKUTSK_ULAANBAATAR_PERTH": "(+08:00) Irkutsk, Ulaanbaatar, Perth",
		"YAKUTSK": "(+09:00) Yakutsk",
		"SEOUL_OSAKA_SAPPORO_TOKYO": "(+09:00) Seoul, Osaka, Sapporo, Tokyo",
		"DARWIN": "(+09:30) Darwin",
		"ADELAIDE": "(+09:30) Adelaide",
		"BRISBANE_GUAM_PORT_MORESBY": "(+10:00) Brisbane, Guam, Port Moresby",
		"CANBERRA_MELBOURNE_SYDNEY_HOBART_VLADIVOSTOK": "(+10:00) Canberra, Melbourne, Sydney, Hobart, Vladivostok",
		"MAGADAN_SOLOMON_IS_NEW_CALEDONIA": "(+11:00) Magadan, Solomon Is., New Caledonia",
		"AUCKLAND_WELLINGTON": "(+12:00) Auckland, Wellington",
		"FIJI_KAMCHATKA_MARSHALL_IS": "(+12:00) Fiji, Kamchatka, Marshall Is.",
		"NUKUALOFA": "(+13:00) Nuku'alofa",
		"TIME_FORM_LABEL_TIME_MANUAL": "Manual",
		"TIME_FORM_LABEL_TIME_AUTO": "Auto",
		"TIME_FORM_LABEL_TIME_SERVER": "Time Server",
		"TIME_FORM_LABEL_TIME_INTERVAL": "Time Interval",
		"TIME_FORM_SAVE": "Save"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"TIME": "時間",
		"TIME_FORM_SETTING": "設定",
		"TIME_FORM_LABEL_TIMEZONE": "時區",
		"INTERNATIONAL_DATE_LINE_WEST": "(-12:00) 國際日期變更線以西",
		"MIDWAY_ISLAND_SAMOA": "(-11:00) 中途島，薩摩亞群島",
		"HAWAII": "(-10:00) 夏威夷",
		"ALASKA": "(-09:00) 阿拉斯加",
		"PACIFIC_TIME_US_AND_CANADA": "(-08:00) 太平洋時間 ( 美國與加拿大 )",
		"ARIZONA": "(-07:00) 亞利桑那州",
		"MOUNTAIN_TIME_US_AND_CANADA": "(-07:00) 山地時間 ( 美國與加拿大 )",
		"CENTRAL_AMERICA_SASKATCHEWAN": "(-06:00) 中美洲，薩斯喀徹溫省",
		"CENTRAL_TIME_US_AND_CANADA_GUADALOJARA_MEXICO_CITY": "(-06:00) 中部時間 ( 美國與加拿大 ), 墨西哥瓜達拉哈拉市",
		"INDIANA_BOGOTA_LIMA_QUITO_RIO_BRANCO": "(-05:00) 印第安納州，波哥大，利馬，基多，里奧布朗庫",
		"EASTERN_TIME_US_AND_CANADA": "(-05:00) 東部時間 ( 美國與加拿大 )",
		"ATLANTIC_TIME_CANADA_MANAUS_SANTIAGO": "(-04:00) 大西洋時間（加拿大），馬瑙斯，聖地亞哥",
		"CARACAS_LA_PAZ": "(-04:00) 加拉加斯，拉巴斯",
		"NEWFOUNDLAND": "(-03:30) 紐芬蘭",
		"GREENLAND_BRASILIA_MONTEVIDEO": "(-03:00) 格陵蘭島，巴西利亞，蒙得維的亞",
		"BUENOS_AIRES_GEORGETOWN": "(-03:00) 布宜諾斯艾利斯，喬治敦",
		"MID_ATLANTIC": "(-02:00) 中大西洋",
		"AZORES": "(-01:00) 亞速爾群島",
		"CAPE_VERDE_IS": "(-01:00) 佛得角是",
		"CASABLANCA_MONROVIA_REYKJAVIK": "(00:00) 卡薩布蘭卡，蒙羅維亞，雷克雅未克",
		"GMT_DUBLIN_EDINBURGH_LISBON_LONDON": "(00:00) GMT: 都柏林，愛丁堡，里斯本，倫敦",
		"AMSTERDAM_BERLIN_ROME_VIENNA_PRAGUE_BRUSSELS": "(+01:00) 阿姆斯特丹，柏林，羅馬，維也納，布拉格，布魯塞爾",
		"WEST_CENTRAL_AFRICA": "(+01:00) 西中非",
		"AMMAN_ATHENS_ISTANBUL_BEIRUT_CAIRO_JERUSALEM": "(+02:00) 安曼，雅典，伊斯坦布爾，貝魯特，開羅，耶路撒冷",
		"HARARE_PRETORIA": "(+02:00) 哈拉雷，比勒陀利亞",
		"BAGHDAD_MOSCOW_ST_PETERSBURG_VOLGOGRAD": "(+03:00) 巴格達，莫斯科，聖彼得堡，伏爾加格勒",
		"KUWAIT_RIYADH_NAIROBI_TBILISI": "(+03:00) 科威特，利雅得，內羅畢，第比利斯",
		"TEHRAN": "(+03:30) 德黑蘭",
		"ABU_DHADI_MUSCAT": "(+04:00) 阿布扎比，馬斯喀特",
		"BAKU_YEREVAN": "(+04:00) 巴庫，埃里溫",
		"KABUL": "(+04:30) 喀布爾",
		"EKATERINBURG": "(+05:00) 葉卡捷琳堡",
		"ISLAMABAD_KARACHI_TASHKENT": "(+05:00) 伊斯蘭堡，卡拉奇，塔什幹",
		"CHENNAI_KOLKATA_MUMBAI_NEW_DELHI_SRI_JAYAWARDENEPURA": "(+05:30) 金奈，加爾各答，孟買，新德里，斯里蘭卡 科特",
		"KATHMANDU": "(+05:45) 加德滿都",
		"ASTANA_DHAKA": "(+06:00) 阿斯塔納，達卡",
		"ALMATY_NONOSIBIRSK": "(+06:00) 阿拉木圖，新西伯利亞",
		"YANGON_RANGOON": "(+06:30) 仰光",
		"KRASNOYARSK": "(+07:00) 克拉斯諾亞爾斯克",
		"BANGKOK_HANOI_JAKARTA": "(+07:00) 曼谷，河內，雅加達",
		"BEIJING_HONG_KONG_SINGAPORE_TAIPEI": "(+08:00) 北京，香港，新加坡，台北",
		"IRKUTSK_ULAANBAATAR_PERTH": "(+08:00) 伊爾庫次克，烏蘭巴托，珀斯",
		"YAKUTSK": "(+09:00) 雅庫茨克",
		"SEOUL_OSAKA_SAPPORO_TOKYO": "(+09:00) 首爾，大阪，札幌，東京",
		"DARWIN": "(+09:30) 達爾文",
		"ADELAIDE": "(+09:30) 阿德萊德",
		"BRISBANE_GUAM_PORT_MORESBY": "(+10:00) 布里斯班，關島，莫爾茲比港",
		"CANBERRA_MELBOURNE_SYDNEY_HOBART_VLADIVOSTOK": "(+10:00) 堪培拉，墨爾本，悉尼，霍巴特，符拉迪沃斯托克",
		"MAGADAN_SOLOMON_IS_NEW_CALEDONIA": "(+11:00) 馬加丹，所羅門群島，新喀裡多尼亞",
		"AUCKLAND_WELLINGTON": "(+12:00) 奧克蘭，惠靈頓",
		"FIJI_KAMCHATKA_MARSHALL_IS": "(+12:00) 斐濟，堪察加半島，馬紹爾群島",
		"NUKUALOFA": "(+13:00) 努庫阿洛法",
		"TIME_FORM_LABEL_TIME_MANUAL": "自訂",
		"TIME_FORM_LABEL_TIME_AUTO": "自動",
		"TIME_FORM_LABEL_TIME_SERVER": "時間伺服器",
		"TIME_FORM_LABEL_TIME_INTERVAL": "時間間隔",
		"TIME_FORM_SAVE": "儲存"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$scope', 'sanjiWindowService', 'timeService'];
	var WINDOW_ID = 'sanji-time-ui';
	
	var TimeContainerController = (function () {
	  function TimeContainerController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, TimeContainerController);
	
	    TimeContainerController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	
	    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
	    this.data = this.timeService.data;
	
	    this.activate();
	
	    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
	  }
	
	  _createClass(TimeContainerController, [{
	    key: 'activate',
	    value: function activate() {
	      var _this2 = this;
	
	      this.sanjiWindowMgr.promise = this.timeService.get().then(function () {
	        _this2.data = _this2.timeService.data;
	      });
	    }
	  }, {
	    key: 'onRefresh',
	    value: function onRefresh(event, args) {
	      if (args.id === WINDOW_ID) {
	        this.activate();
	      }
	    }
	  }, {
	    key: 'onSave',
	    value: function onSave(data) {
	      this.sanjiWindowMgr.promise = this.timeService.update(data);
	    }
	  }]);
	
	  return TimeContainerController;
	})();
	
	TimeContainerController.$inject = $inject;
	exports['default'] = TimeContainerController;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var TimeContainerDirective = (function () {
	  function TimeContainerDirective(injects) {
	    _classCallCheck(this, TimeContainerDirective);
	
	    TimeContainerDirective.directiveFactory.$inject.forEach(function (item, index) {
	      TimeContainerDirective[item] = injects[index];
	      injectMap.set(TimeContainerDirective[item], injects[index]);
	    });
	    this.restrict = 'EA';
	    this.controller = 'TimeContainerController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = true;
	    this.template = '<sanji-time data="vm.data" on-submit="vm.onSave(data)"></sanji-time>';
	  }
	
	  _createClass(TimeContainerDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      TimeContainerDirective.instance = new TimeContainerDirective(injects);
	      return TimeContainerDirective.instance;
	    }
	  }]);
	
	  return TimeContainerDirective;
	})();
	
	TimeContainerDirective.directiveFactory.$inject = $inject;
	exports['default'] = TimeContainerDirective;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var TimeWindowDirective = (function () {
	  function TimeWindowDirective(injects) {
	    _classCallCheck(this, TimeWindowDirective);
	
	    TimeWindowDirective.directiveFactory.$inject.forEach(function (item, index) {
	      TimeWindowDirective[item] = injects[index];
	      injectMap.set(TimeWindowDirective[item], injects[index]);
	    });
	    this.restrict = 'E';
	    this.template = '<sanji-window window-id="sanji-time-ui"\n                      window-name="{{\'TIME\' | translate}}" show-loading-btn>\n                      <sanji-window-state default-state\n                        state-name="sanji-form"\n                        link-name="{{\'TIME_FORM_SETTING\' | translate}}"\n                        icon="settings">\n                        <sanji-time-container></sanji-time-container>\n                      </sanji-window-state>\n                    </sanji-window>';
	  }
	
	  _createClass(TimeWindowDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      TimeWindowDirective.instance = new TimeWindowDirective(injects);
	      return TimeWindowDirective.instance;
	    }
	  }]);
	
	  return TimeWindowDirective;
	})();
	
	TimeWindowDirective.directiveFactory.$inject = $inject;
	exports['default'] = TimeWindowDirective;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $inject = [];
	
	var TimeController = (function () {
	  function TimeController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, TimeController);
	
	    TimeController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	  }
	
	  _createClass(TimeController, [{
	    key: "save",
	    value: function save(data) {
	      this.submitCallback({ data: data });
	    }
	  }]);
	
	  return TimeController;
	})();
	
	TimeController.$inject = $inject;
	exports["default"] = TimeController;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var TimeDirective = (function () {
	  function TimeDirective(injects) {
	    _classCallCheck(this, TimeDirective);
	
	    TimeDirective.directiveFactory.$inject.forEach(function (item, index) {
	      TimeDirective[item] = injects[index];
	      injectMap.set(TimeDirective[item], injects[index]);
	    });
	    this.templateUrl = 'sanji-time-edit.tpl.html';
	    this.restrict = 'EA';
	    this.controller = 'TimeController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = {
	
	      data: '=',
	
	      submitCallback: '&onSubmit'
	    };
	  }
	
	  _createClass(TimeDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      TimeDirective.instance = new TimeDirective(injects);
	      return TimeDirective.instance;
	    }
	  }]);
	
	  return TimeDirective;
	})();
	
	TimeDirective.directiveFactory.$inject = $inject;
	exports['default'] = TimeDirective;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function ($translateProvider) {
	  $translateProvider.translations('en', __webpack_require__(3));
	  $translateProvider.translations('zh-tw', __webpack_require__(4));
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp'];
	var config = __webpack_require__(2);
	
	var TimeService = (function () {
	  function TimeService() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, TimeService);
	
	    TimeService.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	    switch (config.get.type) {
	      case 'collection':
	        this.data = [];
	        break;
	      case 'model':
	        this.data = {};
	        break;
	      default:
	        this.data = [];
	    }
	  }
	
	  _createClass(TimeService, [{
	    key: '_transform',
	    value: function _transform(data) {
	      switch (config.get.type) {
	        case 'collection':
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	        case 'model':
	          return {
	            content: data,
	            formOptions: {},
	            fields: config.fields
	          };
	        default:
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _this2 = this;
	
	      var toPath = this.pathToRegexp.compile(config.get.url);
	      return this.rest.get(toPath(),  false ? 'http://private-d8e84-sanjigeneric.apiary-mock.com' : undefined).then(function (res) {
	        _this2.data = _this2._transform(res.data);
	      })['catch'](function (err) {
	        _this2.exception.catcher('[TimeService] Get data error.')(err);
	        return _this2.$q.reject();
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var _this3 = this;
	
	      var toPath = this.pathToRegexp.compile(config.put.url);
	      var path = undefined !== data.content.id ? toPath({ id: data.content.id }) : toPath();
	      return this.rest.put(path, data.content, data.formOptions.files,  false ? 'http://private-d8e84-sanjigeneric.apiary-mock.com' : undefined)['catch'](function (err) {
	        _this3.exception.catcher('[TimeService] Update data error.')(err);
	        return _this3.$q.reject();
	      });
	    }
	  }]);
	
	  return TimeService;
	})();
	
	TimeService.$inject = $inject;
	exports['default'] = TimeService;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	var v1="<md-content>\n    <form ng-submit=\"vm.save(vm.data)\" role=\"form\" layout=\"column\" layout-padding novalidate>\n      <formly-form\n        model=\"vm.data.content\"\n        fields=\"vm.data.fields\"\n        options=\"vm.data.formOptions\"\n        form=\"vm.form\">\n        <div layout layout-align=\"end center\">\n          <md-button type=\"submit\" class=\"md-raised md-primary\" ng-disabled=\"vm.form.$invalid\">\n            <sapn translate=\"TIME_FORM_SAVE\"></span>\n          </md-button>\n        </div>\n      </formly-form>\n    </form>\n  </md-content>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("sanji-time-edit.tpl.html", v1)}]);
	module.exports=v1;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = sjCore;

/***/ }
/******/ ]);
//# sourceMappingURL=sanji-time-ui.js.map