<?php  
header('Content-type:text/html;charset:utf-8');  
/** 
* 将数组格式array('id'=> , 'pid'=> , 'name'=> )生成树形数组格式 
* array('id'=> , 'pid'=> , 'name'=> , childrens => array() ) 
*/  
function returnArray($result){  
  
    $newResult = array();  
    if( !empty($result) ){  
          
        foreach ($result as $k => $v) {  
              
            $arrTep = $v;  
            $arrTep['childrens'] = array();  
  
            //父类ID是0时，代表没有父类ID，为根节点  
            if( 0 == $v['pid'] ){  
                $newResult[] = $arrTep;  
                continue;  
            }  
  
            if( 0 != $v['pid']){  
                //添加不入数组中的子节点，可能是没有父类节点，那么将其当成根节点  
                if(false === updateArray($newResult, $arrTep) ){  
                    $arrTep = array('id'=> $arrTep['id'], 'pid'=>0, 'name'=>$arrTep['name'], 'childrens'=>array($arrTep));  
                    $newResult[] = $arrTep;  
                }  
  
            }  
        }  
    }  
    //测试数组是否生成树形数组  
    //return $newResult;  
    echo json_encode($newResult);  
}  
  
/** 
* 将当前节点插入到新的树形数组中 
* @param $newResult 树形数组地址 
* @param $arrTep 当前节点 
*/  
function updateArray( &$newResult, $arrTep ){  
  
    if( !empty($newResult) ){  
        foreach ($newResult as $k => $v) {  
            //查询当前节点的id是否与新的树形数组的id一致，如果是，那么将当前节点存放在树形数组的childrens字段中  
            if( $v['id'] == $arrTep['pid']){  
  
                $newResult[$k]['childrens'][] = $arrTep;  
                return true;  
  
            }elseif( !empty($v['childrens']) ){  
                //递归调用，查询树形数组的子节点与当前节点的关系  
                if(true === updateArray( $newResult[$k]['childrens'], $arrTep )){  
                    return true;  
                }  
  
            }  
  
        }  
    }  
    return false;  
  
}  
  
//测试  
$result = Array  
(  
    0 => Array  
        (  
            'id' => 1,  
            'pid' => 0,  
            'name' => '董事长'  
        ),  
  
    1 => Array  
        (  
            'id' => 2,  
            'pid' => 1,  
            'name' => '总经理'  
        ),  
  
    2 => Array  
        (  
            'id' => 3,  
            'pid' => 1,  
            'name' => '综合管理部'  
        ),  
  
    3 => Array  
        (  
            'id' => 4,  
            'pid' => 2,  
            'name' => '人力行政中心'  
        ),  
  
    4 => Array  
        (  
            'id' => 5,  
            'pid' => 2,  
            'name' => '教练技术培训部'  
        ),  
  
    5 => Array  
        (  
            'id' => 6,  
            'pid' => 2,  
            'name' => '财务部'  
        ),  
  
    6 => Array  
        (  
            'id' => 7,  
            'pid' => 2,  
            'name' => '客服部'  
        ),  
  
    7 => Array  
        (  
            'id' => 8,  
            'pid' => 2,  
            'name' => '业务管理中心'  
        ),  
  
    8 => Array  
        (  
            'id' => 9,  
            'pid' => 4,  
            'name' => '人力资源部'  
        ),  
  
    9 => Array  
        (  
            'id' => 10,  
            'pid' => 4,  
            'name' => '行政部'  
        ),  
  
    10 => Array  
        (  
            'id' => 11,  
            'pid' => 4,  
            'name' => '企划部'  
        ),  
  
    11 => Array  
        (  
            'id' => 12,  
            'pid' => 5,  
            'name' => '培训专员'  
     )
  
    // 12 => Array  
    //     (  
    //         'id' => 13,  
    //         'pid' => 6,  
    //         'name' => '内帐会计'  
    //     ),  
  
    // 13 => Array  
    //     (  
    //         'id' => 14,  
    //         'pid' => 6,  
    //         'name' => '外帐会计'  
    //     ),  
  
    // 14 => Array  
    //     (  
    //         'id' => 15,  
    //         'pid' => 6,  
    //         'name' => '出  纳'  
    //     ),  
  
    // 15 => Array  
    //     (  
    //         'id' => 16,  
    //         'pid' => 7,  
    //         'name' => '客服专员'  
    //     ),  
  
    // 16 => Array  
    //     (  
    //         'id' => 17,  
    //         'pid' => 8,  
    //         'name' => '业务管理部'  
    //     ),  
  
    // 17 => Array  
    //     (  
    //         'id' => 18,  
    //         'pid' => 8,  
    //         'name' => '信息部'  
    //     ),  
  
    // 18 => Array  
    //     (  
    //         'id' => 19,  
    //         'pid' => 8,  
    //         'name' => '一区'  
    //     ),  
  
    // 19 => Array  
    //     (  
    //         'id' => 20,  
    //         'pid' => 8,  
    //         'name' => '二区'  
    //     ),  
  
    // 20 => Array  
    //     (  
    //         'id' => 21,  
    //         'pid' => 9,  
    //         'name' => '人力资源专员'  
    //     ),  
  
    // 21 => Array  
    //     (  
    //         'id' => 22,  
    //         'pid' => 10,  
    //         'name' => '前 台'  
    //     ),  
  
    // 22 => Array  
    //     (  
    //         'id' => 23,  
    //         'pid' => 10,  
    //         'name' => '行政专员'  
    //     ),  
  
    // 23 => Array  
    //     (  
    //         'id' => 24,  
    //         'pid' => 11,  
    //         'name' => '企划专员'  
    //     ),  
  
    // 24 => Array  
    //     (  
    //         'id' => 25,  
    //         'pid' => 17,  
    //         'name' => '业务助理'  
    //     ),  
  
    // 25 => Array  
    //     (  
    //         'id' => 26,  
    //         'pid' => 18,  
    //         'name' => 'IT专员'  
    //     ),  
  
    // 26 => Array  
    //     (  
    //         'id' => 27,  
    //         'pid' => 19,  
    //         'name' => '区域助理'  
    //     ),  
  
    // 27 => Array  
    //     (  
    //         'id' => 28,  
    //         'pid' => 19,  
    //         'name' => '分行经理'  
    //     ),  
  
    // 28 => Array  
    //     (  
    //         'id' => 29,  
    //         'pid' => 28,  
    //         'name' => '经理助理'  
    //     ),  
  
    // 29 => Array  
    //     (  
    //         'id' => 30,  
    //         'pid' => 28,  
    //         'name' => '经纪人'  
    //     )  
  
);  
/*echo "测试结果"; 
echo '<pre>'; 
print_r( returnArray($result) );*/  
if('org_select' == $_POST['action']){  
    returnArray($result);  
}  
  
  
 ?>  