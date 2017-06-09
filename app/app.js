import Components from 'Components/component';
import Cats from './cats';
import $ from 'jquery';
import 'babel-polyfill';

$('<h1>Cats</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const cat of Cats) {
     $('<li></li>').text(cat).appendTo(ul);
 }

