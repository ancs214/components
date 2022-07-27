import ReactDom from 'react-dom'
import { faker } from '@faker-js/faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard />
      <CommentDetail
        author='Sam'
        timeAgo='Today at 1645'
        text='Who am I? Sam I am!!!'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 0200'
        text='I am King Alexander the Great!'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 1700'
        text='Jane Goodall here reporting live from Australia...'
        avatar={faker.image.avatar()}
      />
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))
