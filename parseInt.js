parseInt(1/0,19);//1/0->Infinity,第一个参会调用toString,19进制，0-9&a-i,parseInt('Infinity',19)=>'i'=>18

parseInt(0.000008);//0 0.000008
parseInt(0.0000008);//8 8e-7
parseInt(false,16);//250 fa
parseInt(parseInt,16);//15 f function
parseInt('0x10');//16
parseInt('103',2);//2
