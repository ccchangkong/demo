function showGrace(grace,level,levelForGrace) {
    for(let i=0;i<level.length;i++){
        if(grace>=level[i]){
            return levelForGrace[i];
        }
    }
    //如果不存在，那么就是分数很低，返回最后一个
    return levelForGrace[levelForGrace.length-1];
}
let graceForLevel=[700,650,600,550];
let levelText=['信用极好','信用优秀','信用良好','信用中等','信用较差'];


function formatDate(timeStr){
    //获取当前时间戳
    let _now=+new Date();
    //求与当前的时间差
    let se=_now-timeStr;
    const DATE_LEVEL={
      month:2592000000,
      day:86400000,
      hour:3600000,
      minter:60000,
    }
    let _text='';
    //去年
    if(new Date(timeStr).getFullYear()!==new Date().getFullYear()&&se>DATE_LEVEL.month){
      _text=new Date(timeStr).getFullYear()+'年'+(new Date(timeStr).getMonth()+1)+'月'+new Date(timeStr).getDate()+'日';
    }
    //一个月以上
    else if(se>DATE_LEVEL.month){
      _text=(new Date(timeStr).getMonth()+1)+'月'+new Date(timeStr).getDate()+'日';
    }
    //一天以上
    else if(se>DATE_LEVEL.day){
      _text=Math.floor(se/DATE_LEVEL.day)+'天前';
    }
    //一个小时以上
    else if(se>DATE_LEVEL.hour){
      _text=Math.floor(se/DATE_LEVEL.hour)+'小时前';
    }
    //一个小时以内
    else{
      //如果小于1分钟，就显示1分钟前
      if(se<DATE_LEVEL.minter){se=DATE_LEVEL.minter}
      _text=Math.floor(se/DATE_LEVEL.minter)+'分钟前';
    }
    return _text;
}

作者：守候i
链接：https://juejin.im/post/5b4b73e7f265da0f96287f0a
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
