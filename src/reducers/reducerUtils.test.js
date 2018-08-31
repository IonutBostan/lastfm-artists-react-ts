import {
  createReducer,
  errorReducer,
  expirationReducer,
  isFetchingReducer
} from "./reducerUtils";

export const c = {
  TEST_REQUEST: "TEST_REQUEST",
  TEST_SUCCESS: "TEST_SUCCESS",
  TEST_FAILURE: "TEST_FAILURE"
};

const requestAction = { type: c.TEST_REQUEST };
const successAction = { type: c.TEST_SUCCESS };
const failureAction = { type: c.TEST_FAILURE, payload: { error: "error" } };

describe("createReducer", () => {
  const handlers = { [c.TEST_REQUEST]: (state, action) => true };
  it("should return a reducer", () => {
    expect(createReducer(false, handlers)).toBeInstanceOf(Function);
  });
});

describe("isFetchingReducer", () => {
  const fetchingReducer = isFetchingReducer(c, "TEST");
  it("should be true when called with a REQUEST action type", () => {
    expect(fetchingReducer(false, requestAction)).toBe(true);
  });
  it("should be false when called with a SUCCESS action type", () => {
    expect(fetchingReducer(true, successAction)).toBe(false);
  });
  it("should be false when called with a FAILURE action type", () => {
    expect(fetchingReducer(true, failureAction)).toBe(false);
  });
});

describe("errorReducer", () => {
  const testErrorReducer = errorReducer(c, "TEST");
  it("should be false when called with a REQUEST action type", () => {
    expect(testErrorReducer(false, requestAction)).toBe(null);
  });
  it("should be false when called with a SUCCESS action type", () => {
    expect(testErrorReducer(false, successAction)).toBe(null);
  });
  it("should be true when called with a FAILURE action type", () => {
    expect(testErrorReducer(false, failureAction)).toBeTruthy();
  });
});

describe("expirationReducer", () => {
  const testExpirationReducer = expirationReducer(c, "TEST");
  it("should be 0 when called with a REQUEST action type", () => {
    expect(testExpirationReducer(0, requestAction)).toBe(0);
  });
  it("should be the current timestamp when called with a SUCCESS action type", () => {
    expect(testExpirationReducer(0, successAction)).toBeGreaterThan(0);
  });
  it("should be 0 when called with a FAILURE action type", () => {
    expect(testExpirationReducer(0, failureAction)).toBe(0);
  });
});
