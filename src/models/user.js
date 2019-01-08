import { demo } from "../service/user";

export default {
  namespace: "user",
  state: {},

  effects: {
    *effectsDemo(_, { call, put }) {
      const { status, data } = yield call(demo, {});
      if (status === "ok") {
        yield put({
          type: "save",
          payload: {
            topData: data
          }
        });
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
