(function(){var en2bnMap={'1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯','0':'০'};function replacemap(input,digitMap){var replacechars=function(c){return digitMap[c]||c;};return(''+input).split('').map(replacechars).join('');}
function een2bnDigit(input)
{return replacemap(input,en2bnMap);}
var $tree=$('#tree-container');if($tree.length>0&&$tree.jstree){var treeObject=$tree.jstree({'core':{'data':{'url':function(node){return $tree.data('url');},'data':function(node){var type=(node.original&&node.original.location_type)?node.original.location_type:0;return{'id':node.id,'type':type,"_":$.now(),translate:$('.lang-bn').length>0};}}},});treeObject.on('ready.jstree',function(e,data){treeObject.jstree(true).open_node("1_0");});}
var $summaryContainer=$("#all-summary-container");var $metroContainer=$("#metropoliton-status-details");function printThanaNames($containner,thanas){if($containner.length===0){return;}
var html=[];for(var i in thanas){if(thanas.hasOwnProperty(i)){html.push('<div><i class="fa fa-minus" aria-hidden="true"></i> '+thanas[i]+'</div>');}}
$containner.html(html.join(''));}
function renderLocationSummary(data){var $container=$summaryContainer.find('.summary-data');if($container.length===0){return;}
for(var i=0;i<3;i++){for(var j=0;j<3;j++){$container.find('.lock_down_type_'+i+' .location_type_'+j).html(data[i][j])}}}
function renderMetroSummary(data){var translate=$('.container.lang-bn').length>0;for(var j=0;j<3;j++){let upazilaCount=translate?een2bnDigit(data[j].length):data[j].length;$metroContainer.find('.count_lock_down_type_'+j).html(upazilaCount);printThanaNames($metroContainer.find('.div_lock_down_type_'+j),data[j]);}}
$.get($summaryContainer.data('url'),{"_":$.now(),translate:$('.lang-bn').length>0},function(data){renderLocationSummary(data['summary']);renderMetroSummary(data['metro']);});}());