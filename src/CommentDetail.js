import { faker } from '@faker-js/faker'

const CommentDetail = (props) => {
  //   console.log(props)
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.avatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>Today at 1800</span>
        </div>
        <div className='text'>Nice Blog Post</div>
      </div>
    </div>
  )
}

export default CommentDetail