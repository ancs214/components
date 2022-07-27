import ReactDom from 'react-dom'
import './style/App.css'
import { faker } from '@faker-js/faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>Are you sure you want to do this?
        </div>
      </ApprovalCard>

      {/* this is actually using commentdetail as a prop, so we must pass it into approvalcard as so */}
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 1645'
          text='Who am I? Sam I am!!!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 0200'
          text='I am King Alexander the Great!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 1700'
          text='Jane Goodall here reporting live from Australia...'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))
