import { query,queryHtml } from '@/services/mark';

export default {
  namespace: 'mark',

  state: {
    mark: null,
    html: null
  },

  effects: {
    *fetch({ callback }, { call, put }) {
      const response = yield call(query);
      callback(response.mark);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchHtml({ callback }, { call, put }) {
      const response = yield call(queryHtml);
      callback(response.html);
      yield put({
        type: 'saveHtml',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        mark: action.payload.mark,
      };
    },
    saveHtml(state, action) {
      return {
        ...state,
        html: action.payload.html,
      };
    },
  },
};
