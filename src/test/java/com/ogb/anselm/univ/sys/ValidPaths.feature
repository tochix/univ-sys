Feature: Valid Paths of University System

	Scenario: Tv1 Create a student
		Given that the pre semester event has started
    And I login as a clerk
		And before "start registration" event occurs
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| James | 892453 | 12 | true |
		Then I receive a success message for "creating student"
	
	Scenario: Tv2 Delete a student
		Given that the pre semester event has started
    And I login as a clerk
		And before "start registration" event occurs
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| James | 892453 | 12 | true |
		And I attempt to remove student "892453" s1
		Then I receive a success message for "deleting student"
		
	Scenario: Tv3 Create a course
		Given that the pre semester event has started
    And I login as a clerk
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		Then I receive a success message for "creating course"
		
	Scenario Outline: Create Courses
		Given that the pre semester event has started
    And I login as a clerk
    And course <title> is not in the list of courses
    And I create course <title> <code> <capacity> <numMidterms> <numAssignments> <hasFinal>
    Then I can verify that the course <title> is in the list of courses

    Examples:
    | title | code | capacity | numMidterms | numAssignments | hasFinal |
    | Ecology | 122334 | 26 | 0 | 1 | true |
    | Advanced Algo | 123213 | 27 | 1 | 2 | false |
		
	Scenario: Tv4 Delete a course
		Given that the pre semester event has started
    And I login as a clerk
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to remove course "231453" c1
		Then I receive a success message for "deleting course"
		
	Scenario: Tv5 Registering student to a course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| James | 892453 | 12 | true |
		And I attempt to register student s1 to course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive a success message for "registering student to course"
		
	Scenario: Tv6 De-Registering student from course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| James | 892453 | 12 | true |
		And I attempt to register student s1 to course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		And after "end registration" event occurs
		And I attempt to de-register student s1 to course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive a success message for "de-registering student from course"
		
	Scenario: Tv7 Dropping a course
		Given that the pre semester event has started
    And I login as a clerk 
		And before "start registration" event occurs
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| James | 892453 | 12 | true |
		And I attempt to register student s1 to course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		And after "end course de-registration" event occurs
		And I attempt to drop student s1 from course c1 with parameters:
		| studentNumber | courseCode |
		| 892453 | 231453 |
		Then I receive a success message for "dropping student from course"