#!/bin/sh
sed -i \
         -e 's/rgb(0%,0%,0%)/#dedede/g' \
         -e 's/rgb(100%,100%,100%)/#333333/g' \
    -e 's/rgb(50%,0%,0%)/#2c2c2c/g' \
     -e 's/rgb(0%,50%,0%)/#169f6f/g' \
 -e 's/rgb(0%,50.196078%,0%)/#169f6f/g' \
     -e 's/rgb(50%,0%,50%)/#ffffff/g' \
 -e 's/rgb(50.196078%,0%,50.196078%)/#ffffff/g' \
     -e 's/rgb(0%,0%,50%)/#2c2c2c/g' \
	*.svg
