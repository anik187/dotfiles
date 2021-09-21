#! /bin/bash
bgf=`xbacklight -get`
bg=${bgf%.*}
echo "$bg%"
