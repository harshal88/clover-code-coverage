var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":275,"id":109,"methods":[{"el":39,"sc":2,"sl":34},{"el":45,"sc":2,"sl":41},{"el":51,"sc":2,"sl":47},{"el":57,"sc":2,"sl":53},{"el":74,"sc":2,"sl":59},{"el":78,"sc":2,"sl":76},{"el":82,"sc":2,"sl":80},{"el":138,"sc":2,"sl":85},{"el":144,"sc":2,"sl":140},{"el":151,"sc":2,"sl":146},{"el":245,"sc":2,"sl":210},{"el":253,"sc":2,"sl":247},{"el":261,"sc":2,"sl":255},{"el":265,"sc":2,"sl":263},{"el":274,"sc":2,"sl":267}],"name":"TripData","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_27":{"methods":[{"sl":41},{"sl":53},{"sl":85},{"sl":210},{"sl":247},{"sl":267}],"name":"test_step002_ObjectWork","pass":true,"statements":[]},"test_52":{"methods":[{"sl":34},{"sl":41},{"sl":53},{"sl":59},{"sl":85},{"sl":140},{"sl":210},{"sl":247},{"sl":263},{"sl":267}],"name":"test_step004_Usual","pass":true,"statements":[]},"test_8":{"methods":[{"sl":34},{"sl":53},{"sl":59},{"sl":140},{"sl":146},{"sl":210},{"sl":263},{"sl":267}],"name":"test_step003_Discard","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 8], [], [], [], [], [], [], [52, 27], [], [], [], [], [], [], [], [], [], [], [], [52, 27, 8], [], [], [], [], [], [52, 8], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 27], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 8], [], [], [], [], [], [8], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 27, 8], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 27], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 8], [], [], [], [52, 27, 8], [], [], [], [], [], [], [], []]