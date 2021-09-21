#! /bin/bash

# A better method; requires the acpi package

# Get percentage
VALUE=`acpi -b | sed s/%.*$// | sed 's/^.*\s//'`

# Get charging status ("C"=charging, "D"=dischaging)
CHARGING=`acpi | tail -c +12 | head -c 1`

# Calculate colour
if [[ "$CHARGING" == "C" ]]
then
	COLOUR="#28ffb9"
	echo "<fc=$COLOUR> $VALUE%</fc>"
else
	if [[ "$VALUE" -ge "90" ]]
	then
		COLOUR="#28ffb9"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	elif [[ "$VALUE" -ge "80" && "$VALUE" -lt "90" ]]
	then
		COLOUR="#28ffb9"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	elif [[ "$VALUE" -ge "70" && "$VALUE" -lt "80" ]]
	then
		COLOUR="#28ffb9"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	elif [[ "$VALUE" -ge "60" && "$VALUE" -lt "70" ]]
	then
		COLOUR="#78dec7"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	elif [[ "$VALUE" -ge "50" && "$VALUE" -lt "60" ]]
	then
		COLOUR="#ff92df"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	elif [[ "$VALUE" -ge "40" && "$VALUE" -lt "50" ]]
	then
		COLOUR="#ff92df"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	elif [[ "$VALUE" -ge "20" && "$VALUE" -lt "40" ]]
	then
		COLOUR="#ff79c6"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	elif [[ "$VALUE" -ge "13" && "$VALUE" -lt "20" ]]
	then
		COLOUR="#ff79c6"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	elif [[ "$VALUE" -ge "3" && "$VALUE" -lt "13" ]]
	then
		COLOUR="#cc241d"
		echo "<fc=$COLOUR> $VALUE%</fc>"
	fi
fi
