import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import EventEmitter from "events";
import ASSIGN from 'object-assign';

var CHANGE_EVENT = 'change';

const _memos = [
  {id: "1", name: "A", text: "hoge"},
  {id: "2", name: "B", text: "hoge"}
];

const MemoStore = ASSIGN({}, EventEmitter.prototype, {
  getAll: function () {
    return _memos;
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  onChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  dispatcherIndex: AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case AppConstants.MEMO_LOAD_MEMO:
        MemoStore.emitChange();
        break;
      case AppConstants.MEMO_CREATE:
        MemoStore.emitChange();
        break;
      default:
    }
  })
});

export default MemoStore;
