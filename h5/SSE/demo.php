<?php
// 设置报头  
header('Content-Type:text/event-stream');
header('Cache-Control:no-cache');

$time = date('r');
echo "data:{$time}\n\n";
flush();
?>