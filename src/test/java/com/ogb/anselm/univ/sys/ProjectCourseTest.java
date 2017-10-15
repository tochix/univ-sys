package com.ogb.anselm.univ.sys;

import java.io.IOException;
import junit.framework.TestCase;

public class ProjectCourseTest extends TestCase {
	
	public void testProjectCourseShouldReturnWeightOfProject() throws CourseException, IOException {
		ProjectCourse projectCourse = new ProjectCourse(true, 2, 5, false, 26, "Applied Chemistry", 123245, 30);
		assertEquals("Weight of project is different from the one provided.", 30, projectCourse.weightOfProject());
	}
	
	public void testProjectCourseShouldThrowExceptionOnInvalidWeight() throws CourseException, IOException {
		try {
			ProjectCourse projectCourse = new ProjectCourse(true, 2, 5, false, 26, "Applied Chemistry", 123245, -30);
			fail("Creating ProjectCourse with an invalid project weight does not throw exception");
		} catch (CourseException e) {
			assertEquals(9, e.getErrorCode());
			assertEquals(e.getMessage(), "ProjectCourse needs the weight to be set between 0 to 100");
		}
		
		try {
			ProjectCourse projectCourse = new ProjectCourse(true, 2, 5, false, 26, "Applied Chemistry", 123245, 101);
			fail("Creating ProjectCourse with an invalid project weight does not throw exception");
		} catch (CourseException e) {
			assertEquals(9, e.getErrorCode());
			assertEquals(e.getMessage(), "ProjectCourse needs the weight to be set between 0 to 100");
		}
	}
	
	public void testProjectCourseShouldThrowExceptionWhenGradeWeightExceedsHundred() throws CourseException, IOException {
		ProjectCourse projectCourse = new ProjectCourse(true, 2, 5, false, 26, "Applied Chemistry", 123245, 25);
		
		projectCourse.addFinalExam(60);
		projectCourse.addMiterm(12324302, 15);
		
	    try {
	    		projectCourse.addAssignment(12324301, 20);
	    		fail("Exceeding grade weight of 100 doesn't throw an exception");
		} catch (CourseException e) {
			assertEquals(5, e.getErrorCode());
			assertEquals(e.getMessage(), "The total weight for all course task has exceeded 100");
		}
	}
}
