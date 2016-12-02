<?php
// $num=$_POST['num'];
// $name=$_POST['name'];
// $url =  "http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&n=".$num."&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=".$name;
$url=$_POST['urlString'];
$res = file_get_contents($url);
echo $res;
?>
