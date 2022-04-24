import { safeDate } from "./datetime";

describe("safeDate", () => {
  test("safeDate", () => {
    const msg = new Date();
    const wrapper = safeDate(msg);
    expect(wrapper).toStrictEqual(msg);
  });
});
