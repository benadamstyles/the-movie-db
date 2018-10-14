import {PureComponent} from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce-fn'

export default class OnScrollEnd extends PureComponent {
  static propTypes = {
    callback: PropTypes.func.isRequired,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.handleScroll.cancel()
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = debounce(
    event => {
      if (
        window.scrollY >
        document.body.offsetHeight - window.innerHeight * 2
      ) {
        this.props.callback()
      }
    },
    {wait: 500}
  )

  render() {
    return null
  }
}
