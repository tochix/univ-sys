package com.ogb.anselm.univ.sys;

import java.io.IOException;

public class ProjectCourse extends Course {

	private int projectWeight;
	private int maxProjectWeight;
	
	public ProjectCourse(boolean enforcePrereqs, int numberOfMidterms, int numberOfAssignments, boolean hasAFinal,
			int capSize, String title, int myCode, int projectWeight) throws CourseException, IOException {
		
		super(enforcePrereqs, numberOfMidterms, numberOfAssignments, hasAFinal, capSize, title, myCode);
		
		this.maxProjectWeight = this.getIntProperty("PROJECT_COURSE_MAX_WEIGHT");
		if (projectWeight > this.maxProjectWeight || projectWeight < 0) {
			throw new CourseException(CourseExceptionCodes.INVALID_PROJECT_WEIGHT);
		}
		
		this.projectWeight = projectWeight;
		
	}

	public int weightOfProject() {
		return this.projectWeight;
	}

}
