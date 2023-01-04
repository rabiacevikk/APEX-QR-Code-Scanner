function registerForBarcodeScanResults() {
    if (typeof Android != 'undefined') {
       //tell KB to return results via JS function
       Android.useJavaScriptCallbackGenericScanner(true);
    }
 }
 
 function barcodeScanResult(data) {
    alert(data);
 }