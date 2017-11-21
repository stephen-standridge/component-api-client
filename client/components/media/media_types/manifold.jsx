import { connect } from 'react-redux';
import * as actions from '../../../actions/manifold'
var createManifold = require('@stephen.standridge/manifold');
const M = createManifold();
class ManifoldMedia extends React.Component {
  constructor(props){
    super(props);
    this.Manifold = M;
    this.configuration;
    this.scriptElements = {};
    this.startManifold = this._startManifold.bind(this);
    this.stopManifold = this._stopManifold.bind(this);
    this.startOrStop = this._startOrStop.bind(this);
    this.state = {
      hideProgress: false
    }
  }
  classNamesFor(part){
    const { classNames } = this.props;

    return `manifold-media__${part} ${classNames && classNames[part] || ''}`
  }
  getSlug(props=this.props) {
      const { manifold } = props;
      return manifold.slug;
  }
  getVersion(props=this.props) {
    const { manifold } = props;
    const { program_versions, current_version } = manifold;
    return program_versions && program_versions[current_version] || {};
  }
  getVersionId(props=this.props) {
    const { manifold } = props;
    const { program_versions, current_version } = manifold;
    return program_versions && program_versions[current_version] && program_versions[current_version].version_id;
  }
  componentDidMount(){
    this.componentDidUpdate({ manifold: {} })
  }
  componentWillUnmount(){
    const { manifold } = this.props;
    this.clearManifold(manifold);
  }
  componentDidUpdate(prevProps, prevState) {
      const { manifold, isActive, get_versions, updating } = this.props;
      if (!manifold) return;
      const prevManifold = prevProps.manifold;
      const prevActive = prevProps.isActive;
      const versionId = this.getVersionId();

      const { urlPrefix, version_id, slug } = manifold;
      let configuration = window[`${slug}_${versionId}`];
      if (configuration) {
        this.startOrStop(this.props);
        return
      }

      if(manifold.slug != prevManifold.slug) {
        return get_versions(manifold);
      } else if (!updating) {
        if(versionId !== this.getVersionId(prevProps)){
          if(window[`${slug}_${versionId}`]){
            return this.initializeManifold(prevProps);
          } else  {
            let script = document.createElement('script');
            script.onload = this.initializeManifold.bind(this, prevProps);
            script.src = this.configurationFile(manifold);
            document.body.appendChild(script);
            this.scriptElements[`${slug}_${versionId}`] = script;
            return
          }
        }
      }

  }
  initializeManifold(prevProps){
    const { manifold } = this.props;
    const { options, slug } = manifold;
    const versionId = this.getVersionId();
    let configuration = window[`${slug}_${versionId}`];
    this.Manifold.load(`${slug}_${versionId}`, configuration, {
      locateFile: this.locateFile.bind(this),
      locateSource: this.locateFile.bind(this),
      onInitialize: this.startOrStop
    }, this.refs.container);
  }
  _startOrStop(props=this.props) {
    if (!props.manifold) return;
    if (this.props.isActive) {
      this.Manifold.start(`${this.getSlug(props)}_${this.getVersionId(props)}`)
    } else {
      this.Manifold.stop(`${this.getSlug(props)}_${this.getVersionId(props)}`)
    }
  }
  _startManifold(props=this.props){
    if(!this.props.isActive) return;
    if (!props.manifold) return;
    this.Manifold.start(`${this.getSlug(props)}_${this.getVersionId(props)}`)
  }
  _stopManifold(props=this.props){
    if (!props.manifold) return;
    this.Manifold.stop(`${this.getSlug(props)}_${this.getVersionId(props)}`)
  }
  clearManifold(prevProps, cleanScript=true){
    const { isActive } = this.props;
    const { manifold } = prevProps.manifold ? prevProps : this.props;
    const { slug } = manifold;
    const versionId = this.getVersionId(prevProps.manifold ? prevProps : this.props);
    if (!versionId || !slug) return;
    this.Manifold.unload(`${slug}_${versionId}`);
    if (this.scriptElements[`${slug}_${versionId}`] && cleanScript) {
      document.body.removeChild(this.scriptElements[`${slug}_${versionId}`]);
      this.scriptElements[`${slug}_${versionId}`] = null;
    }
    if(!isActive) {
      this._stopManifold();
    }
  }
  configurationFile(){
    const { configuration_url } = actions;
    return configuration_url(this.getSlug(), this.getVersion());
  }
  locateFile(url){
    const { file_url } = actions;
    return file_url(this.getSlug(), this.getVersion(), url)
  }
  print(...args){
    const text = Array.prototype.slice.call(args).join(' ');
  }
  printError(...args){
    const text = Array.prototype.slice.call(args).join(' ');
    if (0) { // XXX disabled for safety typeof dump == 'function') {
      dump(text + '\n'); // fast, straight to the real console
    } else {
      console.error(text);
    }
  }

  onContextLoss(e){
    alert('WebGL context lost. You will need to reload the page.');
    e.preventDefault();
  }

  renderLoadingMaybe(){
    return this.state.hideProgress ? null
          : <div className="manifold_media__loading"></div>
  }
  renderCanvases(){
    const { manifold } = this.props;
    if (!manifold) return <div className={this.classNamesFor('not_found')} />

    const { slug } = manifold;

    return <div className={`${slug}_piece manifold`} />
  }

  render(){
    const { manifold } = this.props;
    return (<div className={this.classNamesFor('component')} ref={"container"}>
      { this.renderLoadingMaybe() }
      { this.renderCanvases() }
      <div className={this.classNamesFor('status')}>{  }</div>
    </div>);
  }
}


const mapStateToProps = (state, ownProps) => {
  let manifold = state.media.getIn(['programs', ownProps.slug]);
  manifold = manifold.merge(state.manifold.get(ownProps.slug));
  const versions = manifold && manifold.getIn([ownProps.slug, 'program_versions']);

  return { manifold: manifold && manifold.toJS(), versions: versions && versions.toJS() };
}

const Manifold = connect(
  mapStateToProps,
  actions
)(ManifoldMedia)

export { Manifold }
