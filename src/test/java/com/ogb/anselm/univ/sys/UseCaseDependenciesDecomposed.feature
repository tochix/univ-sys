Feature: Run Totem Steps for the decomposed use case dependency
	
	S4: A . B(c1) . D(s8) . D(s2) . B(c7) . C(c7) . D(s7) . 
	B(c6) . D(s6) . B(c4) . D(s1) . E(s8) . E(s6) . B(c2)  . 
	C(c1) . B(c3) . E(s1) . D(s3) . D(s4) .  D(s5) . B(c5) . 
	C(c5) . F . G(s2, c2) . G(s3, c4) . G(s4, c3) . G(s5, c3) . 
	G(s7, c6) . H . I(s7, c6) . I(s2, c2) . I(s3, c4) . 
	I(s4, c3) . I(s5, c3) . J(s4, c3) . L(s5, c3) . M

  Scenario: Run Decomposed S4 Totem Steps
  
    Given that the pre semester event has started
    And I login as a clerk
    And I attempt to create course c1 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Ecology | 122334 | 27 | 1 | 2 | true |
		And I attempt to create student s8 with parameters: 
		| name | number | department | fulltime |
		| Anthony | 132453 | 12 | true |
		And I attempt to create student s2 with parameters: 
		| name | number | department | fulltime |
		| James | 1432124 | 11 | false |
		And I attempt to create course c7 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| InfoTech | 322336 | 28 | 0 | 2 | false |
		And I attempt to remove course "322336" c7
		And I attempt to create student s7 with parameters: 
		| name | number | department | fulltime |
		| Ethan | 581853 | 22 | true |
		And I attempt to create course c6 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Marketing | 198334 | 29 | 2 | 1 | true |
		And I attempt to create student s6 with parameters: 
		| name | number | department | fulltime |
		| Denzel | 781363 | 22 | true |
		And I attempt to create course c4 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Discrete Maths | 148994 | 27 | 2 | 1 | true |
		And I attempt to create student s1 with parameters: 
		| name | number | department | fulltime |
		| Bond | 892453 | 16 | true |
		And I attempt to remove student "132453" s8
		And I attempt to remove student "781363" s6
		And I attempt to create course c2 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Economy | 242334 | 27 | 0 | 0 | false |
		And I attempt to remove course "122334" c1
		And I attempt to create course c3 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Fauna | 241134 | 28 | 1 | 0 | true |
		And I attempt to remove student "892453" s1
		And I attempt to create student s3 with parameters: 
		| name | number | department | fulltime |
		| Wayne | 891253 | 16 | true |
		And I attempt to create student s4 with parameters: 
		| name | number | department | fulltime |
		| Bruce | 761253 | 12 | true |
		And I attempt to create student s5 with parameters: 
		| name | number | department | fulltime |
		| Quinn | 431853 | 17 | true |
		And I attempt to create course c5 with parameters: 
		| title | code | capacity | numMidterms | numAssignments | hasFinal |
		| Bio Chemistry | 262134 | 29 | 1 | 3 | true |
		And I attempt to remove course "262134" c5
		And after "start registration" event occurs
		And I attempt to register student s2 to course c2 with parameters:
		| studentNumber | courseCode |
		| 1432124 | 242334 |
		And I attempt to register student s3 to course c4 with parameters:
		| studentNumber | courseCode |
		| 891253 | 198334 |
		And I attempt to register student s4 to course c3 with parameters:
		| studentNumber | courseCode |
		| 761253 | 241134 |
		And I attempt to register student s5 to course c3 with parameters:
		| studentNumber | courseCode |
		| 431853 | 241134 |
		And I attempt to register student s7 to course c6 with parameters:
		| studentNumber | courseCode |
		| 581853 | 198334 |
		And after "end registration" event occurs
		And I attempt to submit "assignment" for student "581853", course "198334", s7, c6
		And I attempt to de-register student s4 to course c3 with parameters:
		| studentNumber | courseCode |
		| 761253 | 241134 |
		And after "end course de-registration" event occurs
		And I attempt to drop student s5 from course c3 with parameters:
		| studentNumber | courseCode |
		| 431853 | 241134 |
		And after "start midterm" event occurs
		And I attempt to submit "midterm" for student "891253", course "148994", s3, c4
		And after "start finals" event occurs
		And I attempt to submit "finals" for student "761253", course "241134", s4, c3
		And I attempt to submit "project" for student "1432124", course "242334", s2, c2
		And I attempt to submit "finals" for student "431853", course "241134", s5, c3
		
	Scenario: Verify System State is valid
		And after "end semester" event occurs
		Then there should be only "4" courses in the university
		And the list of courses should be c6, c4, c2 and c3:
		| title | code | capacity | numMidterms | numAssignments | hasFinal | numRegisteredStudents |
		| Marketing | 198334 | 29 | 2 | 1 | true | 2 |
		| Discrete Maths | 148994 | 27 | 2 | 1 | true | 0 |
		| Economy | 242334 | 27 | 0 | 0 | false | 1 |
		| Fauna | 241134 | 28 | 1 | 0 | true | 0 |
		Then there should only be "5" students enrolled to the university
		And the list of students should be s2, s7, s3, s4, s5:
		| name | number | numCourses | fulltime |
		| James | 1432124 | 1 | false |
		| Ethan | 581853 | 1 | true |
		| Wayne | 891253 | 1 | true |
		| Bruce | 761253 | 0 | true |
		| Quinn | 431853 | 0 | true |