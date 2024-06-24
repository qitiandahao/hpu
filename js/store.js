//从localstorage中读取数据
function getData() { 
    //如果本地localstore中不存在数据
    if (!localStorage.getItem('geojson')) { 
        //写入一个空数组
        localStorage.setItem('geojson','[]')
    }
    return JSON.parse(localStorage.getItem('geojson'))
}
//将数据保存到localstorage中
function saveData(data) { 
    localStorage.setItem('geojson', JSON.stringify(data))
}
function removeData(data) { 
    localStorage.setItem('geojson','[]')
}