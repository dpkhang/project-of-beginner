function imgFileAsUrl(){
    //đọc cái file đã chọn
    var fileSelected = document.getElementById('image').files;
    //xét điều kiện khi không có ảnh
    if(fileSelected.length > 0){
        //lấy phần tử file đầu tiên đọc được
        var fileToLoad =fileSelected[0]
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoaderEvent) {
            let srcData = fileLoaderEvent.target.result;
            let newImg = document.createElement('img');
            newImg.src = srcData;
            document.getElementById(displayImg).innerHTML= newImg.outerHTML;
        }
        fileReader.readAsDataURL(fileToLoad)
    }
}