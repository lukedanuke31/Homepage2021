//CLOCK SCRIPT
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
   }

   _openfas_faheadphones: function() {

    var fas_faheadphones,sbc;

    var widgetCfg = this._getWidgetConfig('Draw');

    if (widgetCfg) {

        sbc = WidgetManager.getInstance().getWidgetsByName("musicwidget")[0];

        sbc._resizeToMax();

        sbc.setOpenedIds([widgetCfg.id]);

    }

}