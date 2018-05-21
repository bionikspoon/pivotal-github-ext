import { STATUS } from '../../../shared/constants'
import stories from './stories'

export default class MockChrome {
  static get runtime() {
    return {
      sendMessage(message, callback) {
        callback({
          status: STATUS.OK,
          payload: { story: stories[0] },
        })
      },
    }
  }
}
