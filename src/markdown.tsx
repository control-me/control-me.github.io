
import Markup from 'preact-markup';

export default function Markdown({html}: {html: string}) {
  return <Markup {...{
    markup: html,
    trim: false,
    type: 'html',
  }}/>;
}