var longitude;
var latitude;

//检测是否支持地理定位
function testLocation()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(getPosition,showError);
	}
	else
	{
		alert("您的设备不支持地理定位");
	}
}

//获取坐标
function getPosition(position)
{
	longitude = position.coords.longitude;//经度
	latitude = position.coords.latitude;//维度
	//返回经纬度
	return longitude,latitude;
}

//错误处理
function showError(error)
{
    switch(error.code) 
    {
        case error.PERMISSION_DENIED:
            x.innerHTML="用户拒绝对获取地理位置的请求。"
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML="位置信息是不可用的。"
            break;
        case error.TIMEOUT:
            x.innerHTML="请求用户地理位置超时。"
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="未知错误。"
            break;
    }
}