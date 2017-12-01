Feature: Valid paths for the decomposed "student takes courses" and 
	"system offers information" for the University System

	Scenario: Tdv1 Submit assignment for course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
    And after "end registration" event occurs
		And I attempt to submit "assignment" for student "892453", course "231453", s7, c6
		Then I receive a success message for "submitting assignment"
		
	Scenario: Tdv2 Submit midterm for course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
    And after "start midterm" event occurs
		And I attempt to submit "midterm" for student "892453", course "231453"
		Then I receive a success message for "submitting midterm"
		
	Scenario: Tdv3 Submit project for course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
    And after "start finals" event occurs
		And I attempt to submit "project" for student "892453", course "231453"
		Then I receive a success message for "submitting project"
	
	Scenario: Tdv4 Submit finals for course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
    And after "start finals" event occurs
		And I attempt to submit "finals" for student "892453", course "231453"
		Then I receive a success message for "submitting finals"
		
	Scenario: Tdv5 Run list courses command
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create course c2 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Marketing | 198334 | 29 | 0 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| Bond | 892453 | 12 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| Hawke | 836252 | 16 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
 		And I attempt to register student s2 to course c2 with parameters:
 		| studentNumber | courseCode |
 		| 836252 | 198334 |
 		And I attempt to register student s1 to course c2 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 198334 |
 		Then there should be only "2" courses in the university
		Then the list of courses should be c1 and c2:
 		| title | code | capacity | numMidterms | numAssignments | hasFinal | numRegisteredStudents |
 		| Economics | 231453 | 26 | 2 | 1 | true | 1 |
 		| Marketing | 198334 | 29 | 0 | 1 | true | 2 |
 		
 	Scenario: Tdv6 Run list students command
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create course c2 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Marketing | 198334 | 29 | 0 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| Bond | 892453 | 12 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| Hawke | 836252 | 16 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
 		And I attempt to register student s2 to course c2 with parameters:
 		| studentNumber | courseCode |
 		| 836252 | 198334 |
 		And I attempt to register student s1 to course c2 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 198334 |
 		And after "start registration" event occurs
 		Then there should only be "2" students enrolled to the university
		And the list of students should be s1 and s2:
 		| name | number | numCourses | fulltime |
 		| Bond | 892453 | 2 | true |
 		| Hawke | 836252 | 1 | true |