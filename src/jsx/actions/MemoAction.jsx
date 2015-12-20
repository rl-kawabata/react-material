import $ from 'jquery'
import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

const TodoAction = {
  loadMemo: function() {
    $.ajax({
      url: "http://localhost:3001/api/comments",
      dataType: 'json',
      cache: false,
      success: function(data) {
        AppDispatcher.dispatch({
          actionType: AppConstants.MEMO_LOAD_MEMO,
          data: data
        });
        return
      },
      error: function(xhr, status, err) {
        console.error("http://localhost:3001/api/comments", status, err.toString());
        return
      }
    })
  },
  create: function(memo) {
    $.ajax({
      url: "http://localhost:3001/api/comments",
      type: 'POST',
      dataType: 'json',
      cache: false,
      data: memo,
      success: function(data) {
        AppDispatcher.dispatch({
          actionType: AppConstants.MEMO_CREATE,
          data: data
        });
        return
      },
      error: function(xhr, status, err) {
        console.error("http://localhost:3001/api/comments", status, err.toString());
        return
      }
    });
  }
};

export default TodoAction;
