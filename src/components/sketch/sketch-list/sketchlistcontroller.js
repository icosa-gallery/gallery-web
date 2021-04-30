import React from "react"
import SketchList from "./sketchlist"
import AssetsAPI from "../../../api/assets"
import PolyAssetsAPI from "../../../api/poly/assets"

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: [], page: 0, loading: true }
  }

  componentDidMount() {
    this.getContent()
    window.addEventListener("scroll", this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false)
  }

  handleScroll = (e) => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    if (bottom && !this.state.loading) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.getContent()
      })
    }
  }

  async getContent() {
    this.setState({ loading: true })
    let sketches = []
    if (this.props.isPoly) {
      sketches = await PolyAssetsAPI.getAssetList("full", 24, this.state.page)
    } else {
      sketches = await AssetsAPI.getAssetList("full", 24, this.state.page)
    }
    const content = this.state.content
    for (const s of sketches) {
      let isUnique = true
      for (const c of content) {
        if (c.name === s.name) {
          isUnique = false
          break
        }
      }
      if (isUnique) {
        content.push(s)
      }
    }
    this.setState({ content, loading: false })
  }

  render() {
    return <SketchList content={this.state.content} isPoly={this.props.isPoly} loading={this.state.loading} />
  }
}
export default Controller