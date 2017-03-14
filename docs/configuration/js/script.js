function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}


$("#wifiDownload").click(function(evt){
    evt.preventDefault();

    var text = $("#essid").val() + "\n" + $("#password").val();
    download("wifi.txt",text);
})

$("#configDownload").click(function(evt){
    evt.preventDefault();

    var config = {};
    config.horaInicio = $("#horaInicio").val(); 
    config.horaFin = $("#horaFin").val(); 
    config.umbrales = [];
    config.soundMinWaitMins = $("#soundMinWaitMins").val(); 
    config.soundMaxWaitMins = $("#soundMaxWaitMins").val(); 
    config.tiempoReleEncendidoSegs = $("#tiempoReleEncendidoSegs").val(); 
    config.tiempoReleDescansosSegs = $("#tiempoReleDescansosSegs").val();

    for(var i=0;i<=23;i++){
        config.umbrales.push( $("#hora"+i).val() );
    } 
    download("config.json",JSON.stringify(config,null,4));
    //var tiempoModoInfoMins = $("#tiempoModoInfoMins").val(); 
})


$("#umbralsetdef").click(function(evt){
    evt.preventDefault();
    var value = $("#umbraldef").val();
    for(var i=0;i<=23;i++){
        $("#hora"+i).val(value);
    } 

})