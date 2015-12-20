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
        console.log(data);
        AppDispatcher.dispatch({
          actionType: AppConstants.MEMO_LOAD_MEMO,
          text: data.data
        });
        return
      },
      error: function(xhr, status, err) {
        console.error("http://localhost:3001/api/comments", status, err.toString());
        return
      }
    })
  },
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MEMO_CREATE,
      text: text
    });
  }
};

export default TodoAction;
