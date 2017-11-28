Feature: Invalid paths for the University System

	Scenario: Ti1 Remove non-existent student
		Given that the pre semester event has started
    And I login as a clerk
		And before "start registration" event occurs
		And I attempt to remove student "101010" who was not created
		Then I receive an error message for "non-existent student"

	Scenario: Ti2 Remove student too late
		Given that the pre semester event has started
    And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I verify that student s1 has been created
		And after "start registration" event occurs
		And I attempt to remove student "892453" s1
		Then I receive an error message for "removing student too late"
		
  Scenario: Ti3 Creating student too late
		Given that the pre semester event has started
    And I login as a clerk 
		And after "start registration" event occurs
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		Then I receive an error message for "creating student too late"
		
	Scenario: Ti4 Remove non-existent course
		Given that the pre semester event has started
    And I login as a clerk
		And before "start registration" event occurs
		And I attempt to remove course "101010" which was not created
		Then I receive an error message for "non-existent course"
		
	Scenario: Ti5 Remove course too late
		Given that the pre semester event has started
    And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I verify that course c1 has been created
		And after "start registration" event occurs
		And I attempt to remove course "231453" c1
		Then I receive an error message for "removing course too late"
		
	Scenario: Ti6 Creating course too late
		Given that the pre semester event has started
    And I login as a clerk 
		And after "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		Then I receive an error message for "creating course too late"
	
	Scenario: Ti7 Creating redundant student
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to create student s2 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		Then I receive an error message for "creating redundant student"
		
	Scenario: Ti8 Creating redundant course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create course c2 with parameters:
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		Then I receive an error message for "creating redundant course"
		
	Scenario: Ti9 Registering in a course too late
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And after "end registration" event occurs
		And I attempt to register student s1 to course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive an error message for "registering too late"
		
	Scenario: Ti10 Registering to a non-existent course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to register student s1 to course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive an error message for "registering to non-existent course"
		
	Scenario: Ti11 Registering non-existent student to a course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to register non-existent student s1 to course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive an error message for "registering non-existent student to course"
		
	Scenario: Ti12 De-Register non-existent student from a course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And after "end registration" event occurs
		And I attempt to de-register non-existent student s1 to course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive an error message for "de-registering non-existent student to course"
		
	Scenario: Ti13 De-Register student from a non-existent course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And after "end registration" event occurs
		And I attempt to de-register student s1 from non-existent course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive an error message for "de-registering from non-existent course"
		
	Scenario: Ti14 Dropping non-existent student from a course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And after "end course de-registration" event occurs
		And I attempt to drop student s1 from course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive an error message for "dropping non-existent student from course"
		
	Scenario: Ti15 Dropping student from non-existent course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And after "end course de-registration" event occurs
		And I attempt to drop student s1 from course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive an error message for "dropping student from non-existent course"
	
	