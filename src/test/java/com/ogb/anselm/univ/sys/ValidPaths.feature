#Author: anselm.emma@gmail.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Valid features of University System
  I want to use this template for my feature file
  
  Scenario Outline: Create Courses
  		Given I login as a clerk
  		And course <title> is not in the list of courses
  		And I create course <title> <code> <capacity> <numMidterms> <numAssignments> <hasFinal>
  		Then I can verify that the course <title> is in the list of courses
  		
  		Examples:
  		  | title | code | capacity | numMidterms | numAssignments | hasFinal |
  		  | Ecology | 122334 | 26 | 0 | 1 | true |
  		  | Advanced Algo | 123213 | 27 | 1 | 2 | false |


