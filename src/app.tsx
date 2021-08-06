import Router, { RouterOnChangeArgs } from 'preact-router';
import * as Accounts from '../docs/accounts.md';
import * as Readme from '../docs/readme.md';
import * as Rewards from '../docs/reward-datatype.md';
import Markdown from './markdown';
import './app.css';

export function App() {
  /**
   * Render the markdown as a preact component
   * @param {string} name
   */
  function Route({html, path}: {html: string, path: string, attributes?: any, toc?: any}) {
    return <Markdown markdown={html} />;
  }


  function onChange(args: RouterOnChangeArgs) {
    console.log(args.current.props);
  }
  return (
    <>
      <Router onChange={onChange}>
        <Route path="/" html={Readme.html} />
        <Route path="/accounts" html={Accounts.html} />
        <Route path="/rewards" attributes={Rewards.attributes} toc={Rewards.toc} html={Rewards.html} />
      </Router>
    </>
  )
}
