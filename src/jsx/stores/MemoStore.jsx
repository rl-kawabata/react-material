import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import EventEmitter from "events";
import ASSIGN from 'object-assign';

let CHANGE_EVENT = 'change';

let _memos = [];

function create(memo) {
  _memos.push({
    id: memo.id,
    name: memo.name,
    text: memo.text
  });
}

function update(memo) {
  for (let _memo of _memos) {
    if (_memo.id == memo.id) {
      memo = {
        id: memo.id,
        name: memo.name,
        text: memo.text
      }
      return
    }
  }
}

function updateAll(memos) {
  _memos = [];
  for (let memo of memos) {
    _memos.push({
      id: memo.id,
      name: memo.name,
      text: memo.text
    });
  }
}

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
        updateAll(payload.data)
        MemoStore.emitChange();
        break;
      case AppConstants.MEMO_CREATE:
        create(payload.data);
        MemoStore.emitChange();
        break;
      default:
    }
  })
});

export default MemoStore;
