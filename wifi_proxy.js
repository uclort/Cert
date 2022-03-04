/*
WiFi_Proxy = script-path=https://cdn.jsdelivr.net/gh/uclort/Rules@master/wifi_proxy.js,type=event,event-name=network-changed,control-api=true
*/ 

var wifiname = $network.wifi.ssid;
var proxyWifi = ["GWM"];
if (proxyWifi.includes(wifiname)) {
  $surge.setSelectGroupPolicy("GW", "ProxyMan")
} else {
  $surge.setSelectGroupPolicy("GW", "Direct")
}
$done();
