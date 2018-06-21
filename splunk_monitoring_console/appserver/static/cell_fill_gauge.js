require(["jquery","underscore","splunkjs/mvc","splunkjs/mvc/tableview","splunkjs/mvc/simplexml/ready!"],function(__WEBPACK_EXTERNAL_MODULE_1__,__WEBPACK_EXTERNAL_MODULE_2__,__WEBPACK_EXTERNAL_MODULE_3__,__WEBPACK_EXTERNAL_MODULE_4__,__WEBPACK_EXTERNAL_MODULE_5__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(1),__webpack_require__(2),__webpack_require__(3),__webpack_require__(4),__webpack_require__(5)],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,mvc,TableView){var SINGLE_FIELD_NAMES=["Index Usage (GB)","Home Path Usage (GB)","Cold Path Usage (GB)","Data Age vs Frozen Age (days)","Volume Usage (GB)","Disk Usage (GB)"],DOUBLE_FIELD_NAMES=[],COLORS={GREEN:"#53a051",BLUE:"#006d9c",RED:"#dc4e41",GRAY:"#c3cbd4"},MAX_BAR_WIDTH_PX="200px",PERC_PATTERN=/^\d+\.?\d*\??$/,CRT_MAX_PATTERN=/^\d+\.?\d*\s*\w*\s*\/{1}\s*\d+\.?\d*\s*\w*$/,template_single_bar_with_txt=_.template('<div style="width: <%= current_width_px %>; position: absolute; overflow: hidden;"><div style="width: <%= max_width_px %>; background-color: <%= fgColor %>; color: white; border: 1px solid black; text-align: center;"><%= data %></div></div><div style="width: <%= max_width_px %>; background-color: <%= bgColor %>; color: black; border: 1px solid black; text-align: center;"><%= data %></div>'),template_double_bar=_.template('<div class="tooltip-link" rel="tooltip" data-title="<%= tooltip_current %>" style="width: 100%; background-color: #ccc; margin-bottom: 2px;"><span style="position: absolute; padding-left: 10px; color: white;"><%= tooltip_current %></span><div style="width:<%= width_current %>%; height: 16px; background-color: <%= COLOR %>;"></div></div><div class="tooltip-link" rel="tooltip" data-title="<%= tooltip_max %>" style="height: 16px; width: 100%; background-color: #5379af; color: white; text-align: center;"><%= tooltip_max %></div>'),SingleDataBarCellRenderer=TableView.BaseCellRenderer.extend({canRender:function(cell){return _.contains(SINGLE_FIELD_NAMES,cell.field)},render:function($td,cell){$td.html(template_single_bar_with_txt({current_width_px:Math.round(parseInt(MAX_BAR_WIDTH_PX,10)*this._getPercent(cell.value)/100+2)+"px",max_width_px:MAX_BAR_WIDTH_PX,fgColor:this._getPercent(cell.value)>=100?COLORS.BLUE:COLORS.GREEN,bgColor:this._isUnlimited(cell.value)?COLORS.GRAY:"white",data:cell.value})),$td.find(".tooltip-link").tooltip({container:"body",delay:{show:0,hide:0}})},_getPercent:function(v){var perc=0;if(v=v||"",v.match(PERC_PATTERN))perc=parseFloat(v);else if(v.match(CRT_MAX_PATTERN)){var _crt=v.split("/")[0],_max=v.split("/")[1];perc=parseFloat(_max)>0?parseFloat(_crt)/parseFloat(_max)*100:0}else perc=0;return Math.min(Math.max(perc,0),100)},_isUnlimited:function(v){v=v||"";var limit=parseFloat(v.split("/")[1]);return _.isNaN(limit)||limit<=0}}),table1=(TableView.BaseCellRenderer.extend({canRender:function(cell){return _.contains(DOUBLE_FIELD_NAMES,cell.field)},render:function($td,cell){$td.html(template_double_bar({tooltip_current:this._getTooltipCurrent(cell.value),tooltip_max:this._getTooltipMax(cell.value),width_current:this._getWidthCurrent(cell.value),width_max:this._getWidthMax(cell.value),COLOR:this._getColor(cell.value)})),$td.find(".tooltip-link").tooltip({container:"body",delay:{show:0,hide:0}})},_getTooltipCurrent:function(v){v=v||"";var tooltip="0";return _.isArray(v)?tooltip=v[0]||tooltip:v.match(CRT_MAX_PATTERN)&&(tooltip=v.split("/")[0]||tooltip),tooltip},_getTooltipMax:function(v){v=v||"";var tooltip="0";return _.isArray(v)?tooltip=v[1]||tooltip:v.match(CRT_MAX_PATTERN)&&(tooltip=v.split("/")[1]||tooltip),tooltip},_getWidthCurrent:function(v){v=v||"";var width=0,_crt=0,_max=0;return _.isArray(v)?(_crt=parseFloat(v[0]),_max=parseFloat(v[1])):v.match(CRT_MAX_PATTERN)&&(_crt=parseFloat(v.split("/")[0]),_max=parseFloat(v.split("/")[1])),width=_max>0?_crt/_max*100||width:100},_getWidthMax:function(v){v=v||"";var width=0,_max=0;return _.isArray(v)?_max=parseFloat(v[1]):v.match(CRT_MAX_PATTERN)&&(_max=parseFloat(v.split("/")[1])),width=_max>0?100:0},_getColor:function(v){var color=COLORS.GREEN,_crtWidth=this._getWidthCurrent(v),_maxWidth=this._getWidthMax(v);return _crtWidth>=_maxWidth&&_maxWidth>0&&(color=COLORS.RED),color}}),mvc.Components.get("table1"));table1&&table1.getVisualization(function(tableView){tableView.table.addCellRenderer(new SingleDataBarCellRenderer),tableView.table.render()});var table2=mvc.Components.get("table2");table2&&table2.getVisualization(function(tableView){tableView.table.addCellRenderer(new SingleDataBarCellRenderer),tableView.table.render()})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_1__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_2__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_3__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_4__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_5__}])});