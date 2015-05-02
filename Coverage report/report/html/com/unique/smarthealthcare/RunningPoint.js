var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":180,"methods":[{"el":13,"sc":2,"sl":12},{"el":17,"sc":5,"sl":14},{"el":25,"sc":5,"sl":20},{"el":33,"sc":2,"sl":27}],"name":"RunningPoint","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_27":{"methods":[{"sl":12},{"sl":27}],"name":"test_step002_ObjectWork","pass":true,"statements":[]},"test_52":{"methods":[{"sl":27}],"name":"test_step004_Usual","pass":true,"statements":[]},"test_8":{"methods":[{"sl":27}],"name":"test_step003_Discard","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [27], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 27, 8], [], [], [], [], [], [], []]
