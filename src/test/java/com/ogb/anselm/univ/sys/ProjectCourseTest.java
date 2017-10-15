package com.ogb.anselm.univ.sys;

import java.io.IOException;
import junit.framework.TestCase;

public class ProjectCourseTest extends TestCase {
	
	public void testProjectCourseShouldReturnWeightOfProject() throws CourseException, IOException {
		ProjectCourse projectCourse = new ProjectCourse(true, 2, 5, false, 26, "Applied Chemistry", 123245, 30);
		assertEquals("Weight of project is different from the one provided.", 30, projectCourse.weightOfProject());
	}
	
	public void testProjectCourseShouldThrowExceptionOnEmptyProjectWeight() throws CourseException, IOException {
		try {
			ProjectCourse projectCourse = new ProjectCourse(true, 2, 5, false, 26, "Applied Chemistry", 123245);
			fail("Creating ProjectCourse without project weight does not throw exception");
		} catch (CourseException e) {
			assertEquals(9, e.getErrorCode());
			assertEquals(e.getMessage(), "ProjectCourse needs the weight to be set.");
		}
	}
	
	public void testProjectCourseShouldThrowExceptionOnInvalidWeight() throws CourseException, IOException {
		try {
			ProjectCourse projectCourse = new ProjectCourse(true, 2, 5, false, 26, "Applied Chemistry", 123245, -30);
			fail("Creating ProjectCourse with an invalid project weight does not throw exception");
		} catch (CourseException e) {
			assertEquals(10, e.getErrorCode());
			assertEquals(e.getMessage(), "ProjectCourse needs the weight to be between 1 to 100.");
		}
		
		try {
			ProjectCourse projectCourse = new ProjectCourse(true, 2, 5, false, 26, "Applied Chemistry", 123245, 101);
			fail("Creating ProjectCourse with an invalid project weight does not throw exception");
		} catch (CourseException e) {
			assertEquals(10, e.getErrorCode());
			assertEquals(e.getMessage(), "ProjectCourse needs the weight to be between 1 to 100.");
		}
	}
}
