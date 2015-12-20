import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

const TodoAction = {
  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MEMO_CREATE,
      text: text
    });
  }
};

export default TodoAction;
