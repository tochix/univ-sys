$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/ogb/anselm/univ/sys/InvalidPaths.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid paths for the University System",
  "description": "",
  "id": "invalid-paths-for-the-university-system",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13267424,
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
  "duration": 2124683325,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 2034098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 3656103,
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
  "duration": 5954388,
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
  "duration": 109798,
  "status": "passed"
});
formatter.after({
  "duration": 68938,
  "status": "passed"
});
formatter.before({
  "duration": 101372,
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
  "duration": 2006413964,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1750372,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 14840096,
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
  "duration": 595346,
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
  "duration": 8035098015,
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
  "duration": 1405731,
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
  "duration": 124366,
  "status": "passed"
});
formatter.after({
  "duration": 68995,
  "status": "passed"
});
formatter.before({
  "duration": 75031,
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
  "duration": 2005407064,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1678317,
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
  "duration": 7032756701,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 1077852,
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
  "duration": 69785,
  "status": "passed"
});
formatter.after({
  "duration": 225292,
  "status": "passed"
});
formatter.before({
  "duration": 50218,
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
  "duration": 2004819009,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1729037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 540955,
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
  "duration": 2819718,
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
  "duration": 103217,
  "status": "passed"
});
formatter.after({
  "duration": 50813,
  "status": "passed"
});
formatter.before({
  "duration": 63494,
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
  "duration": 2005312810,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1911766,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 12721261,
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
  "duration": 161694,
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
  "duration": 8034267691,
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
  "duration": 1035575,
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
  "duration": 63002,
  "status": "passed"
});
formatter.after({
  "duration": 43996,
  "status": "passed"
});
formatter.before({
  "duration": 59241,
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
  "duration": 2004979596,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1933993,
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
  "duration": 7031166534,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 1647179,
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
  "duration": 88788,
  "status": "passed"
});
formatter.after({
  "duration": 48406,
  "status": "passed"
});
formatter.before({
  "duration": 71435,
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
  "duration": 2005597688,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1928946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 527061,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 10521503,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 3010705,
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
  "duration": 104170,
  "status": "passed"
});
formatter.after({
  "duration": 61869,
  "status": "passed"
});
formatter.before({
  "duration": 87065,
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
  "duration": 2005352591,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1802206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 552947,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 9140473,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 3751002,
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
  "duration": 86435,
  "status": "passed"
});
formatter.after({
  "duration": 80456,
  "status": "passed"
});
formatter.before({
  "duration": 64856,
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
  "duration": 2005498774,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1586390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 576530,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 12457905,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 14739350,
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
  "duration": 11048388217,
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
  "duration": 1133754,
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
  "duration": 102286,
  "status": "passed"
});
formatter.after({
  "duration": 104662,
  "status": "passed"
});
formatter.before({
  "duration": 49696,
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
  "duration": 2005581440,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1767975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 597432,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 8604588,
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
  "duration": 5051991051,
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
  "duration": 156210,
  "status": "passed"
});
formatter.after({
  "duration": 65022,
  "status": "passed"
});
formatter.before({
  "duration": 70442,
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
  "duration": 2001258027,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1782268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 537941,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6743273,
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
  "duration": 5058187165,
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
  "duration": 112203,
  "status": "passed"
});
formatter.after({
  "duration": 71052,
  "status": "passed"
});
formatter.before({
  "duration": 93346,
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
  "duration": 2001319160,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1187071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 654134,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 9891229,
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
  "duration": 10037580078,
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
  "duration": 2108474776,
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
  "duration": 61072,
  "status": "passed"
});
formatter.after({
  "duration": 42174,
  "status": "passed"
});
formatter.before({
  "duration": 65251,
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
  "duration": 2005314859,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1394002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 497019,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 7496934,
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
  "duration": 11040769642,
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
  "duration": 1110063356,
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
  "duration": 89686,
  "status": "passed"
});
formatter.after({
  "duration": 50976,
  "status": "passed"
});
formatter.before({
  "duration": 102414,
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
  "duration": 2006035549,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1483818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 465702,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 7141454,
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
  "duration": 14060292847,
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
  "duration": 12033859142,
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
  "duration": 119505,
  "status": "passed"
});
formatter.after({
  "duration": 87432,
  "status": "passed"
});
formatter.before({
  "duration": 65507,
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
  "duration": 2005660047,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1368299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 702673,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 8192647,
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
  "duration": 14058881078,
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
  "duration": 12010146543,
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
  "duration": 107327,
  "status": "passed"
});
formatter.after({
  "duration": 46367,
  "status": "passed"
});
formatter.uri("com/ogb/anselm/univ/sys/InvalidPathsDecomposed.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid paths for the decomposed \"student takes courses\" and",
  "description": "\"system offers information\" for the University System",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and",
  "keyword": "Feature"
});
formatter.before({
  "duration": 968526,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Tdi1 Submit assignment for non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi1-submit-assignment-for-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as a clerk",
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
        "bond",
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
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I attempt to submit \"assignment\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I receive an error message for \"non-existent course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2006328261,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1927796,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6787646,
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
  "duration": 11046406438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignment",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 46
    },
    {
      "val": "231453",
      "offset": 63
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 5697829,
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
  "duration": 526391,
  "status": "passed"
});
formatter.after({
  "duration": 285853,
  "status": "passed"
});
formatter.before({
  "duration": 52771,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Tdi2 Submit midterm for non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi2-submit-midterm-for-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 18
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I attempt to submit \"midterm\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I receive an error message for \"non-existent course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2001372732,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1365622,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6244668,
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
  "duration": 10039809264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "midterm",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2138349,
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
  "duration": 85519,
  "status": "passed"
});
formatter.after({
  "duration": 41698,
  "status": "passed"
});
formatter.before({
  "duration": 41521,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Tdi3 Submit project for non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi3-submit-project-for-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 28
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I attempt to submit \"project\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I receive an error message for \"non-existent course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2004571179,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1465592,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5794180,
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
  "duration": 11043775322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2395600,
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
  "duration": 45905,
  "status": "passed"
});
formatter.after({
  "duration": 30869,
  "status": "passed"
});
formatter.before({
  "duration": 45874,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Tdi4 Submit finals for non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi4-submit-finals-for-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 38
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I attempt to submit \"finals\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I receive an error message for \"non-existent course\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005219791,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1343990,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6217391,
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
  "duration": 11044383435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "finals",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 42
    },
    {
      "val": "231453",
      "offset": 59
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2449244,
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
  "duration": 46572,
  "status": "passed"
});
formatter.after({
  "duration": 19488,
  "status": "passed"
});
formatter.before({
  "duration": 52325,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Tdi5 Submit assignment for non-existent student",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi5-submit-assignment-for-non-existent-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I login as a clerk",
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
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I attempt to submit \"assignment\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I receive an error message for \"submitting non-existent student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005967087,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1420276,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 10422042,
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
  "duration": 10041846121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignment",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 46
    },
    {
      "val": "231453",
      "offset": 63
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2296546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting non-existent student",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 79144,
  "status": "passed"
});
formatter.after({
  "duration": 44160,
  "status": "passed"
});
formatter.before({
  "duration": 65477,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Tdi6 Submit midterm for non-existent student",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi6-submit-midterm-for-non-existent-student",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I login as a clerk",
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
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I attempt to submit \"midterm\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I receive an error message for \"submitting non-existent student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005487310,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1033096,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 8182064,
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
  "duration": 10038931317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "midterm",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 1631797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting non-existent student",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 45759,
  "status": "passed"
});
formatter.after({
  "duration": 21639,
  "status": "passed"
});
formatter.before({
  "duration": 70022,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Tdi7 Submit project for non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi7-submit-project-for-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 67,
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
      "line": 68
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
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I attempt to submit \"project\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I receive an error message for \"submitting non-existent student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005849348,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1246895,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5579812,
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
  "duration": 11037964743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 1817710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting non-existent student",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 48009,
  "status": "passed"
});
formatter.after({
  "duration": 18136,
  "status": "passed"
});
formatter.before({
  "duration": 44984,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Tdi8 Submit finals for non-existent course",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi8-submit-finals-for-non-existent-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 77,
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
      "line": 78
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
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I attempt to submit \"finals\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I receive an error message for \"submitting non-existent student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2004012698,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 786762,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5235406,
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
  "duration": 11036954555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "finals",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 42
    },
    {
      "val": "231453",
      "offset": 59
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 1694107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting non-existent student",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 67958,
  "status": "passed"
});
formatter.after({
  "duration": 16977,
  "status": "passed"
});
formatter.before({
  "duration": 39711,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Tdi9 Submit assignment too late",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi9-submit-assignment-too-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 85,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 87,
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
      "line": 88
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
      "line": 89
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 91
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 92
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "after \"start finals\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I attempt to submit \"assignment\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I receive an error message for \"submitting assignment too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005958600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1206984,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 7319736,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6667682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start finals",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 23092311416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignment",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 46
    },
    {
      "val": "231453",
      "offset": 63
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 620111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting assignment too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 67650,
  "status": "passed"
});
formatter.after({
  "duration": 19752,
  "status": "passed"
});
formatter.before({
  "duration": 43354,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Tdi10 Submit midterm too late",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi10-submit-midterm-too-late",
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
      "line": 101
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
      "line": 102
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 104
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 105
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "after \"start finals\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I attempt to submit \"midterm\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I receive an error message for \"submitting midterm too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005819594,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1447316,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6636503,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 8019743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start finals",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 23095357951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "midterm",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 900370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting midterm too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 76690,
  "status": "passed"
});
formatter.after({
  "duration": 29830,
  "status": "passed"
});
formatter.before({
  "duration": 48675,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Tdi11 Submit project too late",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi11-submit-project-too-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 111,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "I login as a clerk",
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
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 117
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 118
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "after \"end semester\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I attempt to submit \"project\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I receive an error message for \"submitting project too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2006066176,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1200402,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5624914,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6509759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end semester",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 27106184589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 954004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting project too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 102570,
  "status": "passed"
});
formatter.after({
  "duration": 43295,
  "status": "passed"
});
formatter.before({
  "duration": 37812,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "Tdi12 Submit finals too late",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi12-submit-finals-too-late",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 124,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 126,
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
      "line": 127
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
      "line": 128
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 130
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 131
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "after \"end semester\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I attempt to submit \"finals\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I receive an error message for \"submitting finals too late\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2004980409,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1159480,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5778691,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6412932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "end semester",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 27102260625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "finals",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 42
    },
    {
      "val": "231453",
      "offset": 59
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 747995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting finals too late",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 73562,
  "status": "passed"
});
formatter.after({
  "duration": 23570,
  "status": "passed"
});
formatter.before({
  "duration": 71592,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "Tdi13 Submit assignment for course with no assignment",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi13-submit-assignment-for-course-with-no-assignment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 137,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 139,
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
      "line": 140
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "0",
        "true"
      ],
      "line": 141
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 143
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 146
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 147
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I attempt to submit \"assignment\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I receive an error message for \"non-existent assignment\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005793209,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1132374,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4654401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4284297,
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
  "duration": 2645458,
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
  "duration": 11044224423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignment",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 46
    },
    {
      "val": "231453",
      "offset": 63
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2464893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-existent assignment",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 52529,
  "status": "passed"
});
formatter.after({
  "duration": 18274,
  "status": "passed"
});
formatter.before({
  "duration": 58295,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "Tdi14 Submit midterm for course with no midterm",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi14-submit-midterm-for-course-with-no-midterm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 153,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 154,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 155,
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
      "line": 156
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "0",
        "1",
        "true"
      ],
      "line": 157
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 159
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 160
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 162
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 163
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "after \"start midterm\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "I attempt to submit \"midterm\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I receive an error message for \"non-existent midterm\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2006046996,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1109232,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 12022801,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5126564,
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
  "duration": 2421292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start midterm",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 18070499647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "midterm",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2693119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-existent midterm",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 72695,
  "status": "passed"
});
formatter.after({
  "duration": 23089,
  "status": "passed"
});
formatter.before({
  "duration": 40873,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "Tdi15 Submit finals course with no finals",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi15-submit-finals-course-with-no-finals",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 169,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 170,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 171,
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
      "line": 172
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "false"
      ],
      "line": 173
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 175
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 176
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 178
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 179
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "after \"start finals\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I attempt to submit \"finals\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "I receive an error message for \"non-existent finals\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2004764992,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1264250,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5785794,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4966090,
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
  "duration": 2433817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start finals",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 23087060493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "finals",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 42
    },
    {
      "val": "231453",
      "offset": 59
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2511908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-existent finals",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 53293,
  "status": "passed"
});
formatter.after({
  "duration": 18452,
  "status": "passed"
});
formatter.before({
  "duration": 33284,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "Tdi16 Give wrong listing command",
  "description": "",
  "id": "invalid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdi16-give-wrong-listing-command",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 185,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 186,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 188
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 189
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I attempt to run the list \"etudiant\" invalid command",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "I receive an error message for \"wrong command\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2004402786,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 720492,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4502507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "etudiant",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.i_attempt_to_run_the_list_invalid_command(String)"
});
formatter.result({
  "duration": 462333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong command",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_receive_error_msg(String)"
});
formatter.result({
  "duration": 79363,
  "status": "passed"
});
formatter.after({
  "duration": 30174,
  "status": "passed"
});
formatter.uri("com/ogb/anselm/univ/sys/UseCaseDependencies.feature");
formatter.feature({
  "line": 1,
  "name": "Run Totem Steps",
  "description": "As part of acceptance testing, we need to run the \r\nsteps generated in S4 of the Totem paper for the\r\nuniversity system. We then verify that the objects\r\nstate are correct. The S4 steps are below:\r\n\r\nS4: A . B(c1) . D(s8) . D(s2) . B(c7) . C(c7) . D(s7) . \r\nB(c6) . D(s6) . B(c4) . D(s1) . E(s8) . E(s6) . B(c2)  . \r\nC(c1) . B(c3) . E(s1) . D(s3) . D(s4) .  D(s5) . B(c5) . \r\nC(c5) . F . G(s2, c2) . G(s3, c4) . G(s4, c3) . G(s5, c3) . \r\nG(s7, c6) . H . I(s7, c6) . I(s2, c2) . I(s3, c4) . \r\nI(s4, c3) . I(s5, c3) . J(s4, c3) . L(s5, c3) . M",
  "id": "run-totem-steps",
  "keyword": "Feature"
});
formatter.before({
  "duration": 48164,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Run S4 Totem Steps",
  "description": "",
  "id": "run-totem-steps;run-s4-totem-steps",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 18,
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
      "line": 19
    },
    {
      "cells": [
        "Ecology",
        "122334",
        "27",
        "1",
        "2",
        "true"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I attempt to create student s8 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 22
    },
    {
      "cells": [
        "Anthony",
        "132453",
        "12",
        "true"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I attempt to create student s2 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 25
    },
    {
      "cells": [
        "James",
        "1432124",
        "11",
        "false"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I attempt to create course c7 with parameters:",
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
      "line": 28
    },
    {
      "cells": [
        "InfoTech",
        "322336",
        "28",
        "0",
        "2",
        "false"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I attempt to remove course \"322336\" c7",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I attempt to create student s7 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 32
    },
    {
      "cells": [
        "Ethan",
        "581853",
        "22",
        "true"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I attempt to create course c6 with parameters:",
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
      "line": 35
    },
    {
      "cells": [
        "Marketing",
        " 198334",
        "29",
        "2",
        "1",
        "true"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I attempt to create student s6 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 38
    },
    {
      "cells": [
        "Denzel",
        "781363",
        "22",
        "true"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I attempt to create course c4 with parameters:",
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
        "Discrete Maths",
        "148994",
        "27",
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
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 44
    },
    {
      "cells": [
        "Bond",
        "892453",
        "16",
        "true"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I attempt to remove student \"132453\" s8",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I attempt to remove student \"781363\" s6",
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
      "line": 49
    },
    {
      "cells": [
        "Economy",
        "242334",
        "27",
        "0",
        "0",
        "false"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I attempt to remove course \"122334\" c1",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I attempt to create course c3 with parameters:",
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
        "Fauna",
        "241134",
        "28",
        "1",
        " 0",
        "true"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I attempt to remove student \"892453\" s1",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I attempt to create student s3 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 57
    },
    {
      "cells": [
        "Wayne",
        "891253",
        "16",
        "true"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I attempt to create student s4 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 60
    },
    {
      "cells": [
        "Bruce",
        "761253",
        "12",
        "true"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I attempt to create student s5 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 63
    },
    {
      "cells": [
        "Quinn",
        "431853",
        "17",
        "true"
      ],
      "line": 64
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I attempt to create course c5 with parameters:",
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
      "line": 66
    },
    {
      "cells": [
        "Bio Chemistry",
        " 262134",
        "29",
        "1",
        "3",
        "true"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I attempt to remove course \"262134\" c5",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "after \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I attempt to register student s2 to course c2 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 71
    },
    {
      "cells": [
        "1432124",
        "242334"
      ],
      "line": 72
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I attempt to register student s3 to course c4 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 74
    },
    {
      "cells": [
        "891253",
        "198334"
      ],
      "line": 75
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I attempt to register student s4 to course c3 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 77
    },
    {
      "cells": [
        "761253",
        "241134"
      ],
      "line": 78
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I attempt to register student s5 to course c3 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 80
    },
    {
      "cells": [
        "431853",
        "241134"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I attempt to register student s7 to course c6 with parameters:",
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
        "581853",
        "198334"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I attempt to de-register student s4 to course c3 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 87
    },
    {
      "cells": [
        "761253",
        "241134"
      ],
      "line": 88
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "after \"end course de-registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I attempt to drop student s5 from course c3 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 91
    },
    {
      "cells": [
        "431853",
        "241134"
      ],
      "line": 92
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005122969,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 736619,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5836612,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4544930,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4912700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4102065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "322336",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 1655145,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5359741,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5360201,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6700350,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6781387,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 8628476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "132453",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_student(String)"
});
formatter.result({
  "duration": 4594203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "781363",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_student(String)"
});
formatter.result({
  "duration": 14413237,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6575762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "122334",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 2162145,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 7575540,
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
  "duration": 2242246,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 18747904,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 9605838,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 11977828,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 8513135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "262134",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 3083172,
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
  "duration": 7030860887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 4218743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    },
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 2925712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    },
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 2724195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 3245561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 31
    },
    {
      "val": "6",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 11347125,
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
  "duration": 2008945332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.i_attempt_to_de_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 3149291,
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
  "duration": 4010994210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 27
    },
    {
      "val": "3",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.i_attempt_to_drop_student_s_from_course_c(int,int,DataTable)"
});
formatter.result({
  "duration": 3401116,
  "status": "passed"
});
formatter.after({
  "duration": 32633,
  "status": "passed"
});
formatter.before({
  "duration": 49908,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Verify System State is valid",
  "description": "",
  "id": "run-totem-steps;verify-system-state-is-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 95,
  "name": "after \"end semester\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "there should be only \"4\" courses in the university",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "the list of courses should be c6, c4, c2 and c3:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal",
        "numRegisteredStudents"
      ],
      "line": 98
    },
    {
      "cells": [
        "Marketing",
        "198334",
        "29",
        "2",
        "1",
        "true",
        "2"
      ],
      "line": 99
    },
    {
      "cells": [
        "Discrete Maths",
        "148994",
        "27",
        "2",
        "1",
        "true",
        "0"
      ],
      "line": 100
    },
    {
      "cells": [
        "Economy",
        "242334",
        "27",
        "0",
        "0",
        "false",
        "1"
      ],
      "line": 101
    },
    {
      "cells": [
        "Fauna",
        "241134",
        "28",
        "1",
        "0",
        "true",
        "0"
      ],
      "line": 102
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "there should only be \"5\" students enrolled to the university",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "the list of students should be s2, s7, s3, s4, s5:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "numCourses",
        "fulltime"
      ],
      "line": 105
    },
    {
      "cells": [
        "James",
        "1432124",
        "1",
        "false"
      ],
      "line": 106
    },
    {
      "cells": [
        "Ethan",
        "581853",
        "1",
        "true"
      ],
      "line": 107
    },
    {
      "cells": [
        "Wayne",
        "891253",
        "1",
        "true"
      ],
      "line": 108
    },
    {
      "cells": [
        "Bruce",
        "761253",
        "0",
        "true"
      ],
      "line": 109
    },
    {
      "cells": [
        "Quinn",
        "431853",
        "0",
        "true"
      ],
      "line": 110
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "end semester",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 14061788184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.there_should_be_courses(int)"
});
formatter.result({
  "duration": 5379112,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_list_of_courses_should_be(DataTable)"
});
formatter.result({
  "duration": 6564842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.there_should_be_students(int)"
});
formatter.result({
  "duration": 2193459,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_list_of_students_should_be(DataTable)"
});
formatter.result({
  "duration": 2643964,
  "status": "passed"
});
formatter.after({
  "duration": 41115,
  "status": "passed"
});
formatter.uri("com/ogb/anselm/univ/sys/UseCaseDependenciesDecomposed.feature");
formatter.feature({
  "line": 1,
  "name": "Run Totem Steps for the decomposed use case dependency",
  "description": "\r\nS4: A . B(c1) . D(s8) . D(s2) . B(c7) . C(c7) . D(s7) . \r\nB(c6) . D(s6) . B(c4) . D(s1) . E(s8) . E(s6) . B(c2)  . \r\nC(c1) . B(c3) . E(s1) . D(s3) . D(s4) .  D(s5) . B(c5) . \r\nC(c5) . F . G(s2, c2) . G(s3, c4) . G(s4, c3) . G(s5, c3) . \r\nG(s7, c6) . H . I(s7, c6) . I(s2, c2) . I(s3, c4) . \r\nI(s4, c3) . I(s5, c3) . J(s4, c3) . L(s5, c3) . M",
  "id": "run-totem-steps-for-the-decomposed-use-case-dependency",
  "keyword": "Feature"
});
formatter.before({
  "duration": 61474,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Run Decomposed S4 Totem Steps",
  "description": "",
  "id": "run-totem-steps-for-the-decomposed-use-case-dependency;run-decomposed-s4-totem-steps",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
      "line": 15
    },
    {
      "cells": [
        "Ecology",
        "122334",
        "27",
        "1",
        "2",
        "true"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I attempt to create student s8 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 18
    },
    {
      "cells": [
        "Anthony",
        "132453",
        "12",
        "true"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I attempt to create student s2 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 21
    },
    {
      "cells": [
        "James",
        "1432124",
        "11",
        "false"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I attempt to create course c7 with parameters:",
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
      "line": 24
    },
    {
      "cells": [
        "InfoTech",
        "322336",
        "28",
        "0",
        "2",
        "false"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I attempt to remove course \"322336\" c7",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I attempt to create student s7 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 28
    },
    {
      "cells": [
        "Ethan",
        "581853",
        "22",
        "true"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I attempt to create course c6 with parameters:",
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
      "line": 31
    },
    {
      "cells": [
        "Marketing",
        " 198334",
        "29",
        "2",
        "1",
        "true"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I attempt to create student s6 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 34
    },
    {
      "cells": [
        "Denzel",
        "781363",
        "22",
        "true"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I attempt to create course c4 with parameters:",
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
      "line": 37
    },
    {
      "cells": [
        "Discrete Maths",
        "148994",
        "27",
        "2",
        "1",
        "true"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 40
    },
    {
      "cells": [
        "Bond",
        "892453",
        "16",
        "true"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I attempt to remove student \"132453\" s8",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I attempt to remove student \"781363\" s6",
  "keyword": "And "
});
formatter.step({
  "line": 44,
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
      "line": 45
    },
    {
      "cells": [
        "Economy",
        "242334",
        "27",
        "0",
        "0",
        "false"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I attempt to remove course \"122334\" c1",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I attempt to create course c3 with parameters:",
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
      "line": 49
    },
    {
      "cells": [
        "Fauna",
        "241134",
        "28",
        "1",
        " 0",
        "true"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I attempt to remove student \"892453\" s1",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I attempt to create student s3 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 53
    },
    {
      "cells": [
        "Wayne",
        "891253",
        "16",
        "true"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I attempt to create student s4 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 56
    },
    {
      "cells": [
        "Bruce",
        "761253",
        "12",
        "true"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I attempt to create student s5 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 59
    },
    {
      "cells": [
        "Quinn",
        "431853",
        "17",
        "true"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I attempt to create course c5 with parameters:",
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
      "line": 62
    },
    {
      "cells": [
        "Bio Chemistry",
        " 262134",
        "29",
        "1",
        "3",
        "true"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I attempt to remove course \"262134\" c5",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "after \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I attempt to register student s2 to course c2 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 67
    },
    {
      "cells": [
        "1432124",
        "242334"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I attempt to register student s3 to course c4 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 70
    },
    {
      "cells": [
        "891253",
        "148994"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I attempt to register student s4 to course c3 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 73
    },
    {
      "cells": [
        "761253",
        "241134"
      ],
      "line": 74
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I attempt to register student s5 to course c3 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 76
    },
    {
      "cells": [
        "431853",
        "241134"
      ],
      "line": 77
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I attempt to register student s7 to course c6 with parameters:",
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
        "581853",
        "198334"
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
  "name": "I attempt to submit \"assignment\" for student \"581853\", course \"198334\", s7, c6",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I attempt to de-register student s4 to course c3 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 84
    },
    {
      "cells": [
        "761253",
        "241134"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "after \"end course de-registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I attempt to drop student s5 from course c3 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 88
    },
    {
      "cells": [
        "431853",
        "241134"
      ],
      "line": 89
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "after \"start midterm\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I attempt to submit \"midterm\" for student \"891253\", course \"148994\", s3, c4",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "after \"start finals\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I attempt to submit \"project\" for student \"1432124\", course \"242334\", s2, c2",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I attempt to submit \"finals\" for student \"891253\", course \"148994\", s3, c4",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2002281799,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1424347,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 26207545,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 11827529,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 8166132,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5586247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "322336",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 1227603,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4556100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4820946,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4392384,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5691520,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4676858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "132453",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_student(String)"
});
formatter.result({
  "duration": 1055655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "781363",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_student(String)"
});
formatter.result({
  "duration": 1172524,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4855155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "122334",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 1563480,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5362939,
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
  "duration": 1982197,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5729556,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5647025,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5054595,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 5081206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "262134",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_course(String)"
});
formatter.result({
  "duration": 1662574,
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
  "duration": 6024963672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 2418974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    },
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 3792925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    },
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 3451632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 3018671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 31
    },
    {
      "val": "6",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 2671132,
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
  "duration": 4017800146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignment",
      "offset": 21
    },
    {
      "val": "581853",
      "offset": 46
    },
    {
      "val": "198334",
      "offset": 63
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit_student_s_from_course_c(String,String,String)"
});
formatter.result({
  "duration": 2306529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 47
    }
  ],
  "location": "StepDefinitions.i_attempt_to_de_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 1817102,
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
  "duration": 3011867803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 27
    },
    {
      "val": "3",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.i_attempt_to_drop_student_s_from_course_c(int,int,DataTable)"
});
formatter.result({
  "duration": 2679526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start midterm",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 5016606339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "midterm",
      "offset": 21
    },
    {
      "val": "891253",
      "offset": 43
    },
    {
      "val": "148994",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit_student_s_from_course_c(String,String,String)"
});
formatter.result({
  "duration": 2126246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start finals",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 4019771394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 21
    },
    {
      "val": "1432124",
      "offset": 43
    },
    {
      "val": "242334",
      "offset": 61
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit_student_s_from_course_c(String,String,String)"
});
formatter.result({
  "duration": 1786890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "finals",
      "offset": 21
    },
    {
      "val": "891253",
      "offset": 42
    },
    {
      "val": "148994",
      "offset": 59
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit_student_s_from_course_c(String,String,String)"
});
formatter.result({
  "duration": 1733783,
  "status": "passed"
});
formatter.after({
  "duration": 22472,
  "status": "passed"
});
formatter.before({
  "duration": 38161,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Verify System State is valid",
  "description": "",
  "id": "run-totem-steps-for-the-decomposed-use-case-dependency;verify-system-state-is-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 97,
  "name": "after \"end semester\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "there should be only \"4\" courses in the university",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "the list of courses should be c6, c4, c2 and c3:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal",
        "numRegisteredStudents"
      ],
      "line": 100
    },
    {
      "cells": [
        "Marketing",
        "198334",
        "29",
        "2",
        "1",
        "true",
        "1"
      ],
      "line": 101
    },
    {
      "cells": [
        "Discrete Maths",
        "148994",
        "27",
        "2",
        "1",
        "true",
        "1"
      ],
      "line": 102
    },
    {
      "cells": [
        "Economy",
        "242334",
        "27",
        "0",
        "0",
        "false",
        "1"
      ],
      "line": 103
    },
    {
      "cells": [
        "Fauna",
        "241134",
        "28",
        "1",
        "0",
        "true",
        "0"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "there should only be \"5\" students enrolled to the university",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "the list of students should be s2, s7, s3, s4, s5:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "numCourses",
        "fulltime"
      ],
      "line": 107
    },
    {
      "cells": [
        "James",
        "1432124",
        "1",
        "false"
      ],
      "line": 108
    },
    {
      "cells": [
        "Ethan",
        "581853",
        "1",
        "true"
      ],
      "line": 109
    },
    {
      "cells": [
        "Wayne",
        "891253",
        "1",
        "true"
      ],
      "line": 110
    },
    {
      "cells": [
        "Bruce",
        "761253",
        "0",
        "true"
      ],
      "line": 111
    },
    {
      "cells": [
        "Quinn",
        "431853",
        "0",
        "true"
      ],
      "line": 112
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "end semester",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 576396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.there_should_be_courses(int)"
});
formatter.result({
  "duration": 2037238,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_list_of_courses_should_be(DataTable)"
});
formatter.result({
  "duration": 2508084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.there_should_be_students(int)"
});
formatter.result({
  "duration": 2416001,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_list_of_students_should_be(DataTable)"
});
formatter.result({
  "duration": 2405278,
  "status": "passed"
});
formatter.after({
  "duration": 24735,
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
  "duration": 36083,
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
  "duration": 2003372989,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 836131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 353413,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 6423477,
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
  "duration": 89416,
  "status": "passed"
});
formatter.after({
  "duration": 25589,
  "status": "passed"
});
formatter.before({
  "duration": 51386,
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
  "duration": 2002454365,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 993388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 451743,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5851690,
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
  "duration": 1076037,
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
  "duration": 100555,
  "status": "passed"
});
formatter.after({
  "duration": 37315,
  "status": "passed"
});
formatter.before({
  "duration": 57094,
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
  "duration": 2004730518,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1013690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 563928,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4840733,
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
  "duration": 79841,
  "status": "passed"
});
formatter.after({
  "duration": 25623,
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
  "duration": 37344,
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
  "duration": 2005608068,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1016438,
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
  "duration": 158814,
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
  "duration": 4412053,
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
  "duration": 823093,
  "status": "passed"
});
formatter.after({
  "duration": 24018,
  "status": "passed"
});
formatter.before({
  "duration": 48387,
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
  "duration": 2004863602,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1018468,
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
  "duration": 166558,
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
  "duration": 5912829,
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
  "duration": 1052943,
  "status": "passed"
});
formatter.after({
  "duration": 25694,
  "status": "passed"
});
formatter.before({
  "duration": 40050,
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
  "duration": 2004139023,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1103635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 498163,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4519216,
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
  "duration": 1548115,
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
  "duration": 85313,
  "status": "passed"
});
formatter.after({
  "duration": 29428,
  "status": "passed"
});
formatter.before({
  "duration": 42281,
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
  "duration": 2005536140,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1100810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 1012782,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4328300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4825346,
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
  "duration": 3393750,
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
  "duration": 97550,
  "status": "passed"
});
formatter.after({
  "duration": 30734,
  "status": "passed"
});
formatter.before({
  "duration": 45022,
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
  "duration": 2002611752,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1016383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 596842,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4148802,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4139279,
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
  "duration": 1737132,
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
  "duration": 11041586774,
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
  "duration": 2023100,
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
  "duration": 98062,
  "status": "passed"
});
formatter.after({
  "duration": 19787,
  "status": "passed"
});
formatter.before({
  "duration": 51446,
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
  "duration": 2004104171,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 768892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start registration",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.before_event_starts(String)"
});
formatter.result({
  "duration": 307514,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 6206023,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5589111,
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
  "duration": 2369489,
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
  "duration": 14056717660,
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
  "duration": 2069778,
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
  "duration": 116965,
  "status": "passed"
});
formatter.after({
  "duration": 28068,
  "status": "passed"
});
formatter.uri("com/ogb/anselm/univ/sys/ValidPathsDecomposed.feature");
formatter.feature({
  "line": 1,
  "name": "Valid paths for the decomposed \"student takes courses\" and",
  "description": "\"system offers information\" for the University System",
  "id": "valid-paths-for-the-decomposed-\"student-takes-courses\"-and",
  "keyword": "Feature"
});
formatter.before({
  "duration": 44956,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Tdv1 Submit assignment for course",
  "description": "",
  "id": "valid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdv1-submit-assignment-for-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as a clerk",
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
        "bond",
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
      "line": 11
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
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 14
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "after \"end registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I attempt to submit \"assignment\" for student \"892453\", course \"231453\", s7, c6",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I receive a success message for \"submitting assignment\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005574197,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1043843,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4318020,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4211882,
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
  "duration": 2030719,
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
  "duration": 11042901421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignment",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 46
    },
    {
      "val": "231453",
      "offset": 63
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit_student_s_from_course_c(String,String,String)"
});
formatter.result({
  "duration": 1968520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting assignment",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 105946,
  "status": "passed"
});
formatter.after({
  "duration": 25151,
  "status": "passed"
});
formatter.before({
  "duration": 44908,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Tdv2 Submit midterm for course",
  "description": "",
  "id": "valid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdv2-submit-midterm-for-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 24
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 25
    }
  ],
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
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 30
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "after \"start midterm\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I attempt to submit \"midterm\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I receive a success message for \"submitting midterm\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2003723599,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 648342,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4792399,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4134574,
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
  "duration": 2453366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start midterm",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 17067295987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "midterm",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2630550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting midterm",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 83294,
  "status": "passed"
});
formatter.after({
  "duration": 28268,
  "status": "passed"
});
formatter.before({
  "duration": 34948,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Tdv3 Submit project for course",
  "description": "",
  "id": "valid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdv3-submit-project-for-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 40
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
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
      "line": 43
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
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 46
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "after \"start finals\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I attempt to submit \"project\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I receive a success message for \"submitting project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005387896,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 1033807,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5504334,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4110564,
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
  "duration": 1756956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start finals",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 23073095746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 43
    },
    {
      "val": "231453",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 2225932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting project",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 55495,
  "status": "passed"
});
formatter.after({
  "duration": 18239,
  "status": "passed"
});
formatter.before({
  "duration": 68403,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Tdv4 Submit finals for course",
  "description": "",
  "id": "valid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdv4-submit-finals-for-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 56
    },
    {
      "cells": [
        "bond",
        "892453",
        "12",
        "true"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
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
      "line": 59
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
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 62
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "after \"start finals\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I attempt to submit \"finals\" for student \"892453\", course \"231453\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I receive a success message for \"submitting finals\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2005333792,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 599973,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4309433,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4781092,
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
  "duration": 2356916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start finals",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.after_event_starts(String)"
});
formatter.result({
  "duration": 24129522270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "finals",
      "offset": 21
    },
    {
      "val": "892453",
      "offset": 42
    },
    {
      "val": "231453",
      "offset": 59
    }
  ],
  "location": "StepDefinitions.i_attempt_to_submit(String,String,String)"
});
formatter.result({
  "duration": 7020224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitting finals",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_receive_success_msg(String)"
});
formatter.result({
  "duration": 116286,
  "status": "passed"
});
formatter.after({
  "duration": 27677,
  "status": "passed"
});
formatter.before({
  "duration": 67395,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Tdv5 Run list courses command",
  "description": "",
  "id": "valid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdv5-run-list-courses-command",
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
      "line": 72
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
      "line": 73
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
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
      "line": 75
    },
    {
      "cells": [
        "Marketing",
        "198334",
        "29",
        "0",
        "1",
        "true"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 78
    },
    {
      "cells": [
        "Bond",
        "892453",
        "12",
        "true"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 81
    },
    {
      "cells": [
        "Hawke",
        "836252",
        "16",
        "true"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 84
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I attempt to register student s2 to course c2 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 87
    },
    {
      "cells": [
        "836252",
        "198334"
      ],
      "line": 88
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I attempt to register student s1 to course c2 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 90
    },
    {
      "cells": [
        "892453",
        "198334"
      ],
      "line": 91
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "there should be only \"2\" courses in the university",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "the list of courses should be c1 and c2:",
  "rows": [
    {
      "cells": [
        "title",
        "code",
        "capacity",
        "numMidterms",
        "numAssignments",
        "hasFinal",
        "numRegisteredStudents"
      ],
      "line": 94
    },
    {
      "cells": [
        "Economics",
        "231453",
        "26",
        "2",
        "1",
        "true",
        "1"
      ],
      "line": 95
    },
    {
      "cells": [
        "Marketing",
        "198334",
        "29",
        "0",
        "1",
        "true",
        "2"
      ],
      "line": 96
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2008714300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 813075,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4798621,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 12130286,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5093009,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 5123004,
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
  "duration": 2323143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 1833420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 2539680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.there_should_be_courses(int)"
});
formatter.result({
  "duration": 6506387,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_list_of_courses_should_be(DataTable)"
});
formatter.result({
  "duration": 2962024,
  "status": "passed"
});
formatter.after({
  "duration": 35641,
  "status": "passed"
});
formatter.before({
  "duration": 48861,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Tdv6 Run list students command",
  "description": "",
  "id": "valid-paths-for-the-decomposed-\"student-takes-courses\"-and;tdv6-run-list-students-command",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "that the pre semester event has started",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "I login as a clerk",
  "keyword": "And "
});
formatter.step({
  "line": 101,
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
      "line": 102
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
      "line": 103
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
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
      "line": 105
    },
    {
      "cells": [
        "Marketing",
        "198334",
        "29",
        "0",
        "1",
        "true"
      ],
      "line": 106
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 108
    },
    {
      "cells": [
        "Bond",
        "892453",
        "12",
        "true"
      ],
      "line": 109
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I attempt to create student s1 with parameters:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "department",
        "fulltime"
      ],
      "line": 111
    },
    {
      "cells": [
        "Hawke",
        "836252",
        "16",
        "true"
      ],
      "line": 112
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I attempt to register student s1 to course c1 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 114
    },
    {
      "cells": [
        "892453",
        "231453"
      ],
      "line": 115
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I attempt to register student s2 to course c2 with parameters:",
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
        "836252",
        "198334"
      ],
      "line": 118
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I attempt to register student s1 to course c2 with parameters:",
  "rows": [
    {
      "cells": [
        "studentNumber",
        "courseCode"
      ],
      "line": 120
    },
    {
      "cells": [
        "892453",
        "198334"
      ],
      "line": 121
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "after \"start registration\" event occurs",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "there should only be \"2\" students enrolled to the university",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "the list of students should be s1 and s2:",
  "rows": [
    {
      "cells": [
        "name",
        "number",
        "numCourses",
        "fulltime"
      ],
      "line": 125
    },
    {
      "cells": [
        "Bond",
        "892453",
        "2",
        "true"
      ],
      "line": 126
    },
    {
      "cells": [
        "Hawke",
        "836252",
        "1",
        "true"
      ],
      "line": 127
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.that_pre_semester_has_started()"
});
formatter.result({
  "duration": 2008803590,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_login_as_a_clerk()"
});
formatter.result({
  "duration": 850870,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4558567,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_course(DataTable)"
});
formatter.result({
  "duration": 4055821,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 3892771,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_attempt_to_create_student(DataTable)"
});
formatter.result({
  "duration": 4364557,
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
  "duration": 1597306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 1636862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.i_attempt_to_register_student_s_to_course_c_with_parameters(int,int,DataTable)"
});
formatter.result({
  "duration": 2010419,
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
  "duration": 7168115414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.there_should_be_students(int)"
});
formatter.result({
  "duration": 16227337,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_list_of_students_should_be(DataTable)"
});
formatter.result({
  "duration": 2966335,
  "status": "passed"
});
formatter.after({
  "duration": 26078,
  "status": "passed"
});
});