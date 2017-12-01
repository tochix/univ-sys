Feature: Invalid paths for the decomposed "student takes courses" and 
	"system offers information" for the University System

	Scenario: Tdi1 Submit assignment for non-existent course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
    And after "end registration" event occurs
		And I attempt to submit "assignment" for student "892453", course "231453"
		Then I receive an error message for "non-existent course"
		
	Scenario: Tdi2 Submit midterm for non-existent course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
    And after "end registration" event occurs
		And I attempt to submit "midterm" for student "892453", course "231453"
		Then I receive an error message for "non-existent course"
	
	Scenario: Tdi3 Submit project for non-existent course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
    And after "end registration" event occurs
		And I attempt to submit "project" for student "892453", course "231453"
		Then I receive an error message for "non-existent course"
	
	Scenario: Tdi4 Submit finals for non-existent course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
    And after "end registration" event occurs
		And I attempt to submit "finals" for student "892453", course "231453"
		Then I receive an error message for "non-existent course"
		
	Scenario: Tdi5 Submit assignment for non-existent student
		Given that the pre semester event has started
		And I login as a clerk 
	  And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
    And after "end registration" event occurs
		And I attempt to submit "assignment" for student "892453", course "231453"
		Then I receive an error message for "submitting non-existent student"
		
	Scenario: Tdi6 Submit midterm for non-existent student
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
    And after "end registration" event occurs
		And I attempt to submit "midterm" for student "892453", course "231453"
		Then I receive an error message for "submitting non-existent student"
	
	Scenario: Tdi7 Submit project for non-existent course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
    And after "end registration" event occurs
		And I attempt to submit "project" for student "892453", course "231453"
		Then I receive an error message for "submitting non-existent student"
	
	Scenario: Tdi8 Submit finals for non-existent course
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
    And after "end registration" event occurs
		And I attempt to submit "finals" for student "892453", course "231453"
		Then I receive an error message for "submitting non-existent student"
	
	Scenario: Tdi9 Submit assignment too late
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
    And after "start finals" event occurs
		And I attempt to submit "assignment" for student "892453", course "231453"
		Then I receive an error message for "submitting assignment too late"
		
	Scenario: Tdi10 Submit midterm too late
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
    And after "start finals" event occurs
		And I attempt to submit "midterm" for student "892453", course "231453"
		Then I receive an error message for "submitting midterm too late"
		
	Scenario: Tdi11 Submit project too late
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
    And after "end semester" event occurs
		And I attempt to submit "project" for student "892453", course "231453"
		Then I receive an error message for "submitting project too late"
	
	Scenario: Tdi12 Submit finals too late
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
    And after "end semester" event occurs
		And I attempt to submit "finals" for student "892453", course "231453"
		Then I receive an error message for "submitting finals too late"
		
	Scenario: Tdi13 Submit assignment for course with no assignment
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 0 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
    And after "end registration" event occurs
		And I attempt to submit "assignment" for student "892453", course "231453"
		Then I receive an error message for "non-existent assignment"
		
	Scenario: Tdi14 Submit midterm for course with no midterm
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 0 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
    And after "start midterm" event occurs
		And I attempt to submit "midterm" for student "892453", course "231453"
		Then I receive an error message for "non-existent midterm"
	
	Scenario: Tdi15 Submit finals course with no finals
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economics | 231453 | 26 | 2 | 1 | false |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to register student s1 to course c1 with parameters:
 		| studentNumber | courseCode |
 		| 892453 | 231453 |
    And after "start finals" event occurs
		And I attempt to submit "finals" for student "892453", course "231453"
		Then I receive an error message for "non-existent finals"
		
	Scenario: Tdi16 Give wrong listing command
		Given that the pre semester event has started
		And I login as a clerk 
    And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| bond | 892453 | 12 | true |
		And I attempt to run the list "etudiant" invalid command 
		Then I receive an error message for "wrong command"	