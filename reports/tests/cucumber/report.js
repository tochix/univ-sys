$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/ogb/anselm/univ/sys/InvalidPaths.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid paths for the University System",
  "description": "",
  "id": "invalid-paths-for-the-university-system",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16288350,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Ti1 Remove non-existent student",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti1-remove-non-existent-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I attempt to remove student \"101010\" who was not created",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I receive an error message for \"non-existent student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2138595875,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 2399058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 2359170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_student(String)"
});
formatter.result({
  "duration": 2471749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-existent student",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 112630,
  "status": "passed"
});
formatter.after({
  "duration": 67047,
  "status": "passed"
});
formatter.before({
  "duration": 87934,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Ti2 Remove student too late",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti2-remove-student-too-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 14
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify that student s1 has been created",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "after \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I attempt to remove student \"892453\" s1",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I receive an error message for \"removing student too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2006783451,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1686862,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 7375018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.i_verify_that_student_s_has_been_created(int)"
});
formatter.result({
  "duration": 849438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 8024421538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "892453",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_student(String)"
});
formatter.result({
  "duration": 841660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "removing student too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 67377,
  "status": "passed"
});
formatter.after({
  "duration": 42088,
  "status": "passed"
});
formatter.before({
  "duration": 58102,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Ti3 Creating student too late",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti3-creating-student-too-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "after \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 26
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I receive an error message for \"creating student too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005549687,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 2091888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 7025935549,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 1555146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "creating student too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 136570,
  "status": "passed"
});
formatter.after({
  "duration": 62562,
  "status": "passed"
});
formatter.before({
  "duration": 65077,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Ti4 Remove non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti4-remove-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I attempt to remove course \"101010\" which was not created",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I receive an error message for \"non-existent course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2002322587,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1969602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 70197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 1805746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-existent course",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 139586,
  "status": "passed"
});
formatter.after({
  "duration": 54538,
  "status": "passed"
});
formatter.before({
  "duration": 87458,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Ti5 Remove course too late",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti5-remove-course-too-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 41
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify that course c1 has been created",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "after \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I attempt to remove course \"231453\" c1",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I receive an error message for \"removing course too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2004637201,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1789838,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 7569346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_verify_that_course_c_has_been_created(int)"
});
formatter.result({
  "duration": 159546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 7029635837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "231453",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 3476432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "removing course too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 65801,
  "status": "passed"
});
formatter.after({
  "duration": 31507,
  "status": "passed"
});
formatter.before({
  "duration": 62470,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Ti6 Creating course too late",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti6-creating-course-too-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "after \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 53
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I receive an error message for \"creating course too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2001791255,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 2316324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 7027045619,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 946912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "creating course too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 102326,
  "status": "passed"
});
formatter.after({
  "duration": 69733,
  "status": "passed"
});
formatter.before({
  "duration": 77461,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Ti7 Creating redundant student",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti7-creating-redundant-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 62
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I attempt to create student s2 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 65
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 66
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I receive an error message for \"creating redundant student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005384009,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1419793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 64064,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5804053,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 1996873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "creating redundant student",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 94267,
  "status": "passed"
});
formatter.after({
  "duration": 41013,
  "status": "passed"
});
formatter.before({
  "duration": 54116,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Ti8 Creating redundant course",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti8-creating-redundant-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 74
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 75
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I attempt to create course c2 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 77
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 78
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I receive an error message for \"creating redundant course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005310803,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1663311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 68332,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6178501,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 3505625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "creating redundant course",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 140537,
  "status": "passed"
});
formatter.after({
  "duration": 66799,
  "status": "passed"
});
formatter.before({
  "duration": 81796,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Ti9 Registering in a course too late",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti9-registering-in-a-course-too-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 82,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 86
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 87
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 89
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 90
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 93
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I receive an error message for \"registering too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2003923923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1599440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 77643,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6053491,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5712741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 10043777570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 1665203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "registering too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 100973,
  "status": "passed"
});
formatter.after({
  "duration": 46831,
  "status": "passed"
});
formatter.before({
  "duration": 91223,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Ti10 Registering to a non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti10-registering-to-a-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 98,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 102
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 103
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 105
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I receive an error message for \"registering to non-existent course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2003049381,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1313881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 59591,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5281155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 5051743291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "registering to non-existent course",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 112727,
  "status": "passed"
});
formatter.after({
  "duration": 60587,
  "status": "passed"
});
formatter.before({
  "duration": 95014,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Ti11 Registering non-existent student to a course",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti11-registering-non-existent-student-to-a-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 110,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 114
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 115
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I attempt to register non-existent student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 117
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 118
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I receive an error message for \"registering non-existent student to course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2001877807,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1251084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 142677,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6929485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    },
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_non_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 5043372807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "registering non-existent student to course",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 115780,
  "status": "passed"
});
formatter.after({
  "duration": 112070,
  "status": "passed"
});
formatter.before({
  "duration": 74330,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Ti12 De-Register non-existent student from a course",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti12-de-register-non-existent-student-from-a-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 122,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 126
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 127
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I attempt to de-register non-existent student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 130
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 131
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I receive an error message for \"de-registering non-existent student to course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2002023355,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1241565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 62048,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6000879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 11029821252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_de_register_non_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 1103523772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "de-registering non-existent student to course",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 92376,
  "status": "passed"
});
formatter.after({
  "duration": 62406,
  "status": "passed"
});
formatter.before({
  "duration": 71109,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "Ti13 De-Register student from a non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti13-de-register-student-from-a-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 135,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 139
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I attempt to de-register student s1 from non-existent course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 143
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I receive an error message for \"de-registering from non-existent course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2002987611,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1346760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 47569,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5541429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 11022607509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "StepDefinitions.i_attempt_to_de_register_student_s_to_non_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 1114466960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "de-registering from non-existent course",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 82545,
  "status": "passed"
});
formatter.after({
  "duration": 43293,
  "status": "passed"
});
formatter.before({
  "duration": 79210,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "Ti14 Dropping non-existent student from a course",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti14-dropping-non-existent-student-from-a-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 148,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 149,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 152
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 153
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "after \"end course de-registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I attempt to drop student s1 from course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 156
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 157
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "I receive an error message for \"dropping non-existent student from course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005422973,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1387237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 73987,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5728094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end course de-registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 14046237648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.i_attempt_to_drop_student_s_from_course_c(int,int,DataTable)"
});
formatter.result({
  "duration": 12011475261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dropping non-existent student from course",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 105950,
  "status": "passed"
});
formatter.after({
  "duration": 70085,
  "status": "passed"
});
formatter.before({
  "duration": 107280,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Ti15 Dropping student from non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-university-system;ti15-dropping-student-from-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 161,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 162,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 165
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 166
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "after \"end course de-registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I attempt to drop student s1 from course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 169
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 170
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I receive an error message for \"dropping student from non-existent course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005876361,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1350375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 52937,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5304132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end course de-registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 14042342184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.i_attempt_to_drop_student_s_from_course_c(int,int,DataTable)"
});
formatter.result({
  "duration": 12003115269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dropping student from non-existent course",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 175767,
  "status": "passed"
});
formatter.after({
  "duration": 101445,
  "status": "passed"
});
formatter.uri("com/ogb/anselm/univ/sys/ValidPaths.feature");
formatter.feature({
  "line": 1,
  "name": "Valid Paths of University System",
  "description": "",
  "id": "valid-paths-of-university-system",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1012683,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Tv1 Create a student",
  "description": "",
  "id": "valid-paths-of-university-system;tv1-create-a-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 8
    },
    {
      "cells": [
        "James",
        "892453",
        "12",
        "true"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I receive a success message for \"creating student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2006748964,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1863990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 84349,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5877269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "creating student",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 68597,
  "status": "passed"
});
formatter.after({
  "duration": 348292,
  "status": "passed"
});
formatter.before({
  "duration": 66507,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Tv2 Delete a student",
  "description": "",
  "id": "valid-paths-of-university-system;tv2-delete-a-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 17
    },
    {
      "cells": [
        "James",
        "892453",
        "12",
        "true"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I attempt to remove student \"892453\" s1",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I receive a success message for \"deleting student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005274938,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 2302120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 89118,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6947184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "892453",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_student(String)"
});
formatter.result({
  "duration": 1414431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deleting student",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 93142,
  "status": "passed"
});
formatter.after({
  "duration": 40467,
  "status": "passed"
});
formatter.before({
  "duration": 51939,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Tv3 Create a course",
  "description": "",
  "id": "valid-paths-of-university-system;tv3-create-a-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 27
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I receive a success message for \"creating course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2002445473,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1024301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 71743,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 7492111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "creating course",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 87765,
  "status": "passed"
});
formatter.after({
  "duration": 25625,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Create Courses",
  "description": "",
  "id": "valid-paths-of-university-system;create-courses",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "course \u003ctitle\u003e is not in the list of courses",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I create course \u003ctitle\u003e \u003ccode\u003e \u003ccapacity\u003e \u003cnumMidterms\u003e \u003cnumAssignments\u003e \u003chasFinal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can verify that the course \u003ctitle\u003e is in the list of courses",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "valid-paths-of-university-system;create-courses;",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 39,
      "id": "valid-paths-of-university-system;create-courses;;1"
    },
    {
      "cells": [
        "Ecology",
        "122334",
        "26",
        "0",
        "1",
        "true"
      ],
      "line": 40,
      "id": "valid-paths-of-university-system;create-courses;;2"
    },
    {
      "cells": [
        "Advanced Algo",
        "123213",
        "27",
        "1",
        "2",
        "false"
      ],
      "line": 41,
      "id": "valid-paths-of-university-system;create-courses;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 63840,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Create Courses",
  "description": "",
  "id": "valid-paths-of-university-system;create-courses;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "course Ecology is not in the list of courses",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I create course Ecology 122334 26 0 1 true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can verify that the course Ecology is in the list of courses",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005357410,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1154977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ecology",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.name(String)"
});
formatter.result({
  "duration": 275640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ecology",
      "offset": 16
    },
    {
      "val": "122334",
      "offset": 24
    },
    {
      "val": "26",
      "offset": 31
    },
    {
      "val": "0",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "true",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_create_course(String,int,int,int,int,String)"
});
formatter.result({
  "duration": 12719989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ecology",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_can_verify_course_in_course_list(String)"
});
formatter.result({
  "duration": 1731418,
  "status": "passed"
});
formatter.after({
  "duration": 29437,
  "status": "passed"
});
formatter.before({
  "duration": 56847,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Create Courses",
  "description": "",
  "id": "valid-paths-of-university-system;create-courses;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "course Advanced Algo is not in the list of courses",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I create course Advanced Algo 123213 27 1 2 false",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can verify that the course Advanced Algo is in the list of courses",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005581089,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1724569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Advanced Algo",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.name(String)"
});
formatter.result({
  "duration": 181576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Advanced Algo",
      "offset": 16
    },
    {
      "val": "123213",
      "offset": 30
    },
    {
      "val": "27",
      "offset": 37
    },
    {
      "val": "1",
      "offset": 40
    },
    {
      "val": "2",
      "offset": 42
    },
    {
      "val": "false",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_create_course(String,int,int,int,int,String)"
});
formatter.result({
  "duration": 5982881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Advanced Algo",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_can_verify_course_in_course_list(String)"
});
formatter.result({
  "duration": 898617,
  "status": "passed"
});
formatter.after({
  "duration": 43301,
  "status": "passed"
});
formatter.before({
  "duration": 62048,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Tv4 Delete a course",
  "description": "",
  "id": "valid-paths-of-university-system;tv4-delete-a-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 48
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I attempt to remove course \"231453\" c1",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I receive a success message for \"deleting course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2001427051,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 984683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 60079,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6428584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "231453",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 1781883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deleting course",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 100574,
  "status": "passed"
});
formatter.after({
  "duration": 26553,
  "status": "passed"
});
formatter.before({
  "duration": 43611,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Tv5 Registering student to a course",
  "description": "",
  "id": "valid-paths-of-university-system;tv5-registering-student-to-a-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 58
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 61
    },
    {
      "cells": [
        "James",
        "892453",
        "12",
        "true"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 64
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 65
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I receive a success message for \"registering student to course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2004276319,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1053252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 372655,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5099634,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5176791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 5088760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "registering student to course",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 144647,
  "status": "passed"
});
formatter.after({
  "duration": 27472,
  "status": "passed"
});
formatter.before({
  "duration": 37012,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Tv6 De-Registering student from course",
  "description": "",
  "id": "valid-paths-of-university-system;tv6-de-registering-student-from-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 73
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 74
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 76
    },
    {
      "cells": [
        "James",
        "892453",
        "12",
        "true"
      ],
      "line": 77
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 79
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 80
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I attempt to de-register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 83
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I receive a success message for \"de-registering student from course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2006551903,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1287750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 118618,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6898528,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5799108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 3480753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 10050751924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.i_attempt_to_de_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 3074674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "de-registering student from course",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 96817,
  "status": "passed"
});
formatter.after({
  "duration": 26956,
  "status": "passed"
});
formatter.before({
  "duration": 53006,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Tv7 Dropping a course",
  "description": "",
  "id": "valid-paths-of-university-system;tv7-dropping-a-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 88,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "before \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I attempt to create course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal"
      ],
      "line": 92
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true"
      ],
      "line": 93
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 95
    },
    {
      "cells": [
        "James",
        "892453",
        "12",
        "true"
      ],
      "line": 96
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 98
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 99
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "after \"end course de-registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I attempt to drop student s1 from course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 102
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 103
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I receive a success message for \"dropping student from course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2001017890,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 820383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"start registration\"",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5131173,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6843537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 3501742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end course de-registration",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 13055296488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    },
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.i_attempt_to_drop_student_s_from_course_c(int,int,DataTable)"
});
formatter.result({
  "duration": 2857595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dropping student from course",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 95065,
  "status": "passed"
});
formatter.after({
  "duration": 27804,
  "status": "passed"
});
});