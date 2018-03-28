import ReactDOM from 'react-dom';
import $ from 'jquery';

export const ScrollToHorizontal = (type, content, value) => {
    let margin = '-='+value;
    if(type === 'left') {
        margin = '+='+value;
    }
    $(ReactDOM.findDOMNode(content.refs.scrollSession)).animate({
        marginLeft: margin
    }, 500);
};
