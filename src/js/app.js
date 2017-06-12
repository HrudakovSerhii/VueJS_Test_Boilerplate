import Components from 'Components/component';
import baseStyles from 'Styles/base.css';
import style from 'Styles/style.scss';
import Cats from './cats';
import $ from 'jquery';
import 'babel-polyfill';

$('<h1>Cats</h1>').appendTo('body');

const ul = $('<ul></ul>').appendTo('body');

for (const cat of Cats) {
 	$('<li></li>').text(cat).appendTo(ul);
}

