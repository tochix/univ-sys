#!/usr/bin/env bash

courses=(Ecology "Advanced Algorithms" OOP "Data Structures" "Ethics in Journalism")
courseCodes=(122334 123213 522321 412323 798325)
courseCapacity=(26 27 28 30 32)
courseMidTerms=(0 1 2 0 1)
courseAssignments=(0 2 4 1 3)
courseFinals=(true false true false true)

students=("Ethan Hawke" "Denzel Washington" "Jay Dun" "Mary Jane" "John Doe" "Rachael Joseph" Anita Winslet Trevor Martins)
studentNumbers=(123 324 532 764 243 645 342 876 932 432)
studentDepartments=(11 23 32 12 11 32 12 14 32 16)
studentFullTimes=(true true false true true true true true true true)

echo "open $1 $2"
sleep 2
echo "login"
echo "clerk"
echo "clrkio"

for ((i = 0; i < ${#courses[@]}; i++)) do
	echo "create course"
	echo "${courses[i]};${courseCodes[i]};${courseCapacity[i]};${courseMidTerms[i]};${courseAssignments[i]};${courseFinals[i]}"
done

for ((i = 0; i < ${#students[@]}; i++)) do
	echo "create student"
	echo "${students[i]};${studentNumbers[i]};${studentDepartments[i]};${studentFullTimes[i]}"
	let "idx = i % 5"
	echo "register student to course"
	echo "${studentNumbers[i]};${courseCodes[idx]}"

	let "idx = $(( RANDOM % 5 ))"
        echo "register student to course"
        echo "${studentNumbers[i]};${courseCodes[idx]}"
done

sleep 2
echo "start pre semester"
sleep 8
echo "drop course"
echo "123;122334"
sleep 2