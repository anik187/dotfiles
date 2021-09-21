#!/bin/bash

muted=$(amixer get 'Master' | awk '{if($1 == "Front") print $5 " " $6}' | uniq | awk '{if($2 == "[off]") print "muted"; else print $1}')
if [ "$muted" == "muted" ]; then
	echo "[0db]"
	else
		echo "$(sed 's/\[//' <<< $muted | sed 's/\]//')"
fi
