/**
 * Created by lvchao on 2016/1/28.
 */
function $(aaa){
    //2.���ݴ��ݲ����Ĳ�ͬ��ѡ���ȡ��ǩ�ķ�����
    var bbb = aaa.charAt(0);
    var ccc = aaa.slice(1);
    if(bbb == "#"){
        //3.�ѻ�ȡ�ı�ǩreturn��ȥ��
        return document.getElementById(ccc);
    }else if(bbb == "."){
        //3.�ѻ�ȡ�ı�ǩreturn��ȥ��
        return fn(ccc);
    }else{
        //3.�ѻ�ȡ�ı�ǩreturn��ȥ��
        return document.getElementsByTagName(aaa);
    }
}

function fn(str){
    if(document.getElementsByClassName){
        return document.getElementsByClassName(str);
    }else{
        var allNodes = document.getElementsByTagName("*");
        var arr = [];
        for(var i=0;i<allNodes.length;i++){
            var arrClassName = allNodes[i].className.split(" ");
            for(var j=0;j<arrClassName.length;j++){
                if(arrClassName[j] == str){
                    arr.push(allNodes[i]);
                }
            }
        }
        return arr;
    }
}